import { Loader } from '@transferwise/components';
import { isObject } from '@transferwise/neptune-validation';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import { Size } from '../common';
import { DynamicFlowProvider } from '../common/contexts/dynamicFlowContext/dynamicFlowContext';
import { FetcherProvider, makeFetcher } from '../common/contexts/fetcherContext';
import { getStepType, stepType } from '../common/stepTypes/stepTypes';
import { TrackingContextProvider } from '../common/tracking';
import { isValidSchema } from '../common/validation/schema-validators';
import { getValidModelParts } from '../common/validation/valid-model';
import { CameraStep, LayoutStep } from '../step';

import { withErrorBoundary } from './errorBoundary';

const EXIT_HEADER = 'X-Df-Exit';

const validateExitResult = async (response) => {
  const body = await response.json();
  return new Promise((resolve, reject) => {
    if (!isObject(body)) {
      reject('Incorrect response body when submitting an exit action. Expected an object');
    }
    resolve(body);
  });
};

const combineModels = (formModels) => {
  return Object.values(formModels).reduce((previous, model) => ({ ...previous, ...model }), {});
};

const areModelsValid = (formModels, schemas) => {
  return !schemas?.some((schema) => !isValidSchema(formModels[schema.$id] || {}, schema));
};

const isSubmissionMethod = (method) => {
  const submissionMethods = ['POST', 'PUT', 'PATCH'];
  return submissionMethods.includes(method.toUpperCase());
};

const isExitResponse = (response) => response.headers?.has(EXIT_HEADER);

const buildInitialModels = (model, schemas) => {
  const schemaIdToModelMap = {};

  schemas.forEach((schema) => {
    schemaIdToModelMap[schema.$id] = getValidModelParts(model, schema);
  });

  return schemaIdToModelMap;
};

/**
 * ## DynamicFlow
 *
 * The dynamic flow component is responsible for the asynchronous actions occuring
 * within a dynamic flow, managing transitions between steps as well as refreshing
 * requirements.  It doesn't control any view logic, but takes the step definition
 * and reformats it to use a LayoutStep for presentation.
 *
 * @param props
 */
const DynamicFlow = (props) => {
  const {
    baseUrl,
    fetcher: propsFetcher,
    flowUrl,
    initialStep,
    onClose,
    onStepChange,
    onError,
    onTrackableEvent,
    loaderSize,
  } = props;

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(!initialStep);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  const [stepAndModels, setStepAndModels] = useState({
    stepSpecification: initialStep || {},
    models: {},
    etag: undefined,
  });
  const { stepSpecification, models, etag } = stepAndModels;

  const fetcher = useMemo(() => propsFetcher || makeFetcher(baseUrl), [propsFetcher, baseUrl]);
  const requestStep = useMemo(() => makeRequestStep(fetcher), [fetcher]);

  const updateStepSpecification = (step, etag) => {
    setStepAndModels((previous) => ({
      stepSpecification: step,
      models: step.model ? buildInitialModels(step.model, step.schemas) : previous.models,
      etag,
    }));

    if (step?.errors?.validation) {
      setValidations(step.errors.validation);
    } else {
      setValidations(null);
    }
  };

  useEffect(
    function initialise() {
      if (!initialStep) {
        fetchStep({ url: flowUrl, method: 'GET' });
      }
    },
    [baseUrl, flowUrl, fetcher, initialStep],
  );

  const modelIsValid = useMemo(
    () => areModelsValid(models, stepSpecification.schemas),
    [models, stepSpecification.schemas],
  );

  const fetchStep = (action, data) => {
    setLoading(true);
    return requestStep({ action, data })
      .then(handleFetchStepResponse)
      .catch(handleFetchError)
      .finally(() => setLoading(false));
  };

  const handleFetchStepResponse = async (response) => {
    const previousStep = stepSpecification;
    if (isExitResponse(response)) {
      const result = await response.json().catch(() => undefined);
      updateStepSpecification({}, etag);
      onClose(result);
    } else {
      const step = await response.json();
      updateStepSpecification(step, getETag(response.headers));
      onStepChange(step, previousStep);
      setSubmitted(false);
    }
  };

  const fetchRefresh = (action, data) => {
    setRefreshing(true);
    return requestStep({ action, data, etag })
      .then(async (response) => {
        const step = await response.json();
        updateStepSpecification(step, getETag(response.headers));
      })
      .catch(handleRefreshError)
      .catch(handleFetchError)
      .finally(() => setRefreshing(false));
  };

  const fetchExitResult = (action, data) => {
    return requestStep({ action, data }).then(validateExitResult).catch(handleFetchError);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleRefreshError = (error) => {
    if (error.status !== 304) {
      throw error;
    }
  };

  const handleFetchError = async (response) => {
    try {
      const errorBody = await response.json();
      if (errorBody.validation) {
        setValidations(errorBody.validation);
      } else {
        onError(errorBody, response.status);
      }
    } catch (jsonParsingError) {
      onError(jsonParsingError, response.status);
    }
  };

  const onModelChange = (newModel, formSchema, triggerModel, triggerSchema, lastTriggerModel) => {
    const { $id } = formSchema;

    // Multiple children might trigger model updates, we must access the previous model to ensure all changes are reflected in the new model
    setStepAndModels((previous) => {
      const updatedModels = {
        ...previous.models,
        [$id]: newModel,
      };
      const updatedState = {
        stepSpecification: previous.stepSpecification,
        models: updatedModels,
        etag: previous.etag,
      };

      if (shouldTriggerRefresh(triggerSchema, triggerModel, lastTriggerModel)) {
        const url = triggerSchema.refreshFormUrl || stepSpecification.refreshFormUrl;
        const action = { url, method: 'POST' };
        fetchRefresh(action, combineModels(updatedModels));
      }

      return updatedState;
    });
  };

  const onAction = async (action) => {
    if (refreshing) {
      return;
    }

    const { data, method, exit, url, result } = action;

    const submissionData = {
      ...combineModels(models),
      ...data,
    };

    if (exit) {
      if (url) {
        const exitResult = await fetchExitResult(action, submissionData);

        const mergedResult = {
          ...exitResult,
          ...(result || {}),
        };

        onClose(mergedResult);
        return;
      }
      onClose(result);
      return;
    }

    if (isSubmissionMethod(method)) {
      setSubmitted(true);

      if (modelIsValid) {
        fetchStep(action, submissionData);
      }
      return;
    }

    fetchStep(action);
  };

  const getStep = () => {
    const type = getStepType(stepSpecification);

    const stepProps = {
      stepSpecification,
      submitted,
      model: combineModels(models),
      errors: validations,
      onAction,
      onModelChange,
    };

    if (type === stepType.CAMERA) {
      return <CameraStep {...stepProps} />;
    } else {
      return <LayoutStep {...stepProps} />;
    }
  };

  return (
    <TrackingContextProvider onTrackableEvent={onTrackableEvent}>
      <DynamicFlowProvider refreshing={refreshing}>
        <FetcherProvider fetcher={fetcher}>
          {loading ? (
            <Loader size={loaderSize} classNames={{ 'tw-loader': 'tw-loader m-x-auto' }} />
          ) : (
            getStep()
          )}
        </FetcherProvider>
      </DynamicFlowProvider>
    </TrackingContextProvider>
  );
};

DynamicFlow.propTypes = {
  baseUrl: PropTypes.string,
  fetcher: PropTypes.func,
  flowUrl: PropTypes.string,
  initialStep: PropTypes.object,
  onClose: PropTypes.func,
  onStepChange: PropTypes.func,
  onError: PropTypes.func,
  onTrackableEvent: PropTypes.func,
  loaderSize: PropTypes.string,
};

DynamicFlow.defaultProps = {
  flowUrl: '',
  onClose: () => {},
  onStepChange: () => {},
  onError: () => {},
  httpClient: undefined,
  onTrackableEvent: () => {},
  loaderSize: Size.EXTRA_LARGE,
};

export default withErrorBoundary(DynamicFlow);

function makeRequestStep(fetcher) {
  return function requestStep({ action, data, etag }) {
    const { url, method } = action;
    const body = method === 'GET' ? undefined : JSON.stringify(data);
    return fetcher(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': 'Tr4n5f3rw153',
        ...(etag ? { 'If-None-Match': etag } : {}),
      },
      credentials: 'include',
      body,
    }).then((response) => {
      if (response.ok) {
        return response;
      }
      throw response;
    });
  };
}

function getETag(headers) {
  return headers.get('etag') || undefined;
}

function shouldTriggerRefresh(triggerSchema, triggerModel, lastTriggerModel) {
  const isValid = () => isValidSchema(triggerModel, triggerSchema);
  const wasValid = () => isValidSchema(lastTriggerModel, triggerSchema);
  return triggerSchema?.refreshFormOnChange && (isValid() || wasValid());
}
