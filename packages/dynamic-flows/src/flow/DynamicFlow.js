import { Loader } from '@transferwise/components';
import { isObject } from '@transferwise/neptune-validation';
import Types from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import { Size } from '../common';
import { getStepType, stepType } from '../common/stepTypes/stepTypes';
import { isValidSchema } from '../common/validation/schema-validators';
import { getValidModelParts } from '../common/validation/valid-model';
import { CameraStep, LayoutStep } from '../step';

import { httpClient as defaultHttpClient } from './client';
import { withErrorBoundary } from './errorBoundary';

const EXIT_HEADER = 'X-Df-Exit';

const validateExitResult = async (response) => {
  const json = await response.json();
  return new Promise((resolve, reject) => {
    if (!isObject(json)) {
      reject('Incorrect response when submitting an exit action. Expected an object');
    }
    resolve(json);
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
    flowUrl,
    onClose,
    onStepChange,
    onError,
    httpClient: propsHttpClient,
    loaderSize,
  } = props;

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  const [stepAndModels, setStepAndModels] = useState({ stepSpecification: {}, models: {} });
  const { stepSpecification, models } = stepAndModels;

  const httpClient = propsHttpClient || defaultHttpClient.init({ baseUrl });

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
  }, [baseUrl, flowUrl, propsHttpClient]);

  const modelIsValid = useMemo(
    () => areModelsValid(models, stepSpecification.schemas),
    [models, stepSpecification.schemas],
  );

  const fetchStep = (action, data) => {
    const previousStep = stepSpecification;

    setLoading(true);

    return httpClient
      .request({ action, data })
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
    return httpClient
      .request({ action, data })
      .then(async (response) => {
        const step = await response.json();
        updateStepSpecification(step);
      })
      .catch(handleFetchError);
  };

  const fetchExitResult = (action, data) => {
    return httpClient.request({ action, data }).then(validateExitResult).catch(handleFetchError);
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
      baseUrl,
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
    <>
      {loading ? (
        <Loader size={loaderSize} classNames={{ 'tw-loader': 'tw-loader m-x-auto' }} />
      ) : (
        getStep()
      )}
    </>
  );
};

DynamicFlow.propTypes = {
  baseUrl: Types.string.isRequired,
  flowUrl: Types.string,
  onClose: Types.func,
  onStepChange: Types.func,
  onError: Types.func,
  httpClient: Types.shape({
    request: Types.func,
  }),
  loaderSize: Types.string,
};

DynamicFlow.defaultProps = {
  flowUrl: '',
  onClose: () => {},
  onStepChange: () => {},
  onError: () => {},
  httpClient: undefined,
  loaderSize: Size.EXTRA_LARGE,
};

export default withErrorBoundary(DynamicFlow);
