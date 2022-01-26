import { Loader } from '@transferwise/components';
import { isObject } from '@transferwise/neptune-validation';
import Types from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import { Size } from '../common';
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
    onClose,
    onStepChange,
    onError,
    onTrackableEvent,
    loaderSize,
  } = props;

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  const [stepAndModels, setStepAndModels] = useState({ stepSpecification: {}, models: {} });
  const { stepSpecification, models } = stepAndModels;

  const fetcher = useMemo(() => propsFetcher || makeFetcher(baseUrl), [propsFetcher, baseUrl]);
  const requestStep = useMemo(() => makeRequestStep(fetcher), [fetcher]);

  const updateStepSpecification = (step) => {
    setStepAndModels((previous) => ({
      stepSpecification: step,
      models: step.model ? buildInitialModels(step.model, step.schemas) : previous.models,
    }));

    if (step?.errors?.validation) {
      setValidations(step.errors.validation);
    } else {
      setValidations(null);
    }
  };

  useEffect(() => {
    const action = { url: flowUrl, method: 'GET' };
    fetchStep(action);
  }, [baseUrl, flowUrl, fetcher]);

  const modelIsValid = useMemo(
    () => areModelsValid(models, stepSpecification.schemas),
    [models, stepSpecification.schemas],
  );

  const fetchStep = (action, data) => {
    const previousStep = stepSpecification;

    setLoading(true);

    return requestStep({ action, data })
      .then(async (response) => {
        if (isExitResponse(response)) {
          const result = await response.json().catch(() => undefined);
          updateStepSpecification({});
          onClose(result);
        } else {
          const step = await response.json();
          updateStepSpecification(step);
          onStepChange(step, previousStep);
          setSubmitted(false);
        }
      })
      .catch(handleFetchError)
      .finally(() => setLoading(false));
  };

  const fetchRefresh = (action, data) => {
    return requestStep({ action, data })
      .then(async (response) => {
        const step = await response.json();
        updateStepSpecification(step);
      })
      .catch(handleFetchError);
  };

  const fetchExitResult = (action, data) => {
    return requestStep({ action, data }).then(validateExitResult).catch(handleFetchError);
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

  const onModelChange = (newModel, formSchema, triggerModel, triggerSchema) => {
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
      };

      if (triggerSchema?.refreshFormOnChange) {
        const url = triggerSchema.refreshFormUrl || stepSpecification.refreshFormUrl;
        const action = { url, method: 'POST' };
        fetchRefresh(action, combineModels(updatedModels));
      }

      return updatedState;
    });
  };

  const onAction = async (action) => {
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
      <FetcherProvider fetcher={fetcher}>
        {loading ? (
          <Loader size={loaderSize} classNames={{ 'tw-loader': 'tw-loader m-x-auto' }} />
        ) : (
          getStep()
        )}
      </FetcherProvider>
    </TrackingContextProvider>
  );
};

DynamicFlow.propTypes = {
  baseUrl: Types.string.isRequired,
  fetcher: Types.func,
  flowUrl: Types.string,
  onClose: Types.func,
  onStepChange: Types.func,
  onError: Types.func,
  onTrackableEvent: Types.func,
  loaderSize: Types.string,
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
  return function requestStep({ action, data }) {
    const { url, method } = action;
    const body = method === 'GET' ? undefined : JSON.stringify(data);
    return fetcher(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': 'Tr4n5f3rw153',
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
