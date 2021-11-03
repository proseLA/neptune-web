import { Loader } from '@transferwise/components';
import { isEmpty, isObject } from '@transferwise/neptune-validation';
import Types from 'prop-types';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { Size } from '../common';
import { isValidSchema } from '../common/validation/schema-validators';
import { getValidModelParts } from '../common/validation/valid-model';
import DynamicLayout from '../layout';

import { httpClient as defaultHttpClient } from './client';
import { withErrorBoundary } from './errorBoundary';
import { convertStepToLayout, inlineReferences } from './layoutService';

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

const getComponents = (step) => {
  if (!step || isEmpty(step) || (!step.layout && !step.type)) {
    return [];
  }

  const layout = convertStepToLayout(step);

  return inlineReferences(layout, step.schemas, step.actions);
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
 * and reformats it to use a DynamicLayout for presentation.
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

  const { locale } = useIntl();

  const [stepSpecification, setStepSpecification] = useState({});
  const [models, setModels] = useState({});
  const [modelIsValid, setModelIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  const httpClient = propsHttpClient || defaultHttpClient.init({ baseUrl });

  const onNewStep = () => {
    if (stepSpecification?.model) {
      setModels(buildInitialModels(stepSpecification.model, stepSpecification.schemas));
    }
    if (stepSpecification?.errors?.validation) {
      setValidations(stepSpecification.errors.validation);
    } else {
      setValidations(null);
    }
  };

  useEffect(() => {
    const action = { url: flowUrl, method: 'GET' };
    fetchStep(action);
  }, [baseUrl, flowUrl, propsHttpClient]);

  useEffect(onNewStep, [stepSpecification]);

  useEffect(() => {
    setModelIsValid(areModelsValid(models, stepSpecification.schemas));
  }, [models]);

  const fetchStep = (action, data) => {
    const previousStep = stepSpecification;

    setLoading(true);

    return httpClient
      .request({ action, data })
      .then(async (response) => {
        if (isExitResponse(response)) {
          const result = await response.json().catch(() => undefined);
          setStepSpecification({});
          onClose(result);
        } else {
          const json = await response.json();
          setStepSpecification(json);
          onStepChange(json, previousStep);
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
        const json = await response.json();
        setStepSpecification(json);
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
    setModels((previousModels) => {
      const updatedModels = {
        ...previousModels,
        [$id]: newModel,
      };

      if (triggerSchema?.refreshFormOnChange) {
        const url = triggerSchema.refreshFormUrl || stepSpecification.refreshFormUrl;
        const action = { url, method: 'POST' };
        fetchRefresh(action, combineModels(updatedModels));
      }

      return updatedModels;
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

  const components = getComponents(stepSpecification);

  return (
    components && (
      <>
        {loading ? (
          <Loader size={loaderSize} classNames={{ 'tw-loader': 'tw-loader m-x-auto' }} />
        ) : (
          <DynamicLayout
            components={components}
            submitted={submitted}
            locale={locale}
            model={combineModels(models)}
            errors={validations}
            baseUrl={baseUrl}
            onAction={onAction}
            onModelChange={onModelChange}
          />
        )}
      </>
    )
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
