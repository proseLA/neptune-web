import { useEffect, useState } from 'react';
import Types from 'prop-types';
import { useIntl } from 'react-intl';
import { isEmpty, isObject } from '@transferwise/neptune-validation';
import { Loader } from '@transferwise/components';
import { withErrorBoundary } from './errorBoundary';
import DynamicLayout from '../layout';
import { convertStepToLayout, inlineReferences } from './layoutService';
import { httpClient as defaultHttpClient } from './client';
import { isValidSchema } from '../common/validation/schema-validators';
import { Size } from '../common';
import { getValidModelParts } from '../common/validation/valid-model';

/**
 * ## DynamicFlow
 *
 * The dynamic flow component is responsible for the asynchronous actions occuring
 * within a dynamic flow, managing transitions between steps as well as refreshing
 * requirements.  It doesn't control any view logic, but takes the step definition
 * and reformats it to use a DynamicLayout for presentation.
 */
const DynamicFlow = (props) => {
  const { baseUrl, flowUrl, onClose, onStepChange, onError, httpClient: propsHttpClient } = props;

  const { locale } = useIntl();

  const [stepSpecification, setStepSpecification] = useState({});
  const [models, setModels] = useState({});
  const [modelIsValid, setModelIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  const httpClient = propsHttpClient || defaultHttpClient.init({ baseUrl });

  useEffect(() => {
    const action = { url: flowUrl, method: 'GET' };
    fetchStep(action);
  }, [baseUrl, flowUrl, propsHttpClient]);

  useEffect(() => {
    if (stepSpecification?.model) {
      setModels(buildInitialModels(stepSpecification.model, stepSpecification.schemas));
    }
  }, [stepSpecification]);

  useEffect(() => {
    setModelIsValid(areModelsValid(models, stepSpecification.schemas));
  }, [models]);

  const fetchStep = (action, data) => {
    const prevStep = stepSpecification;

    setLoading(true);

    return httpClient
      .request({ action, data })
      .then(checkForExitCondition)
      .then(({ data: nextStep }) => {
        setStepSpecification(nextStep);

        onStepChange(nextStep, prevStep);

        setSubmitted(false);
      })
      .catch(handleFetchValidationError)
      .catch((error) => {
        onError(error);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  const fetchRefresh = (action, data) => {
    return httpClient
      .request({ action, data })
      .then(({ data: json }) => {
        setStepSpecification(json);
      })
      .catch(handleFetchValidationError)
      .catch((error) => {
        onError(error);
        throw error;
      });
  };

  const fetchExitResult = (action, data) => {
    return httpClient
      .request({ action, data })
      .then(validateExitResult)
      .catch(handleFetchValidationError)
      .catch((error) => {
        onError(error);
        throw error;
      });
  };

  const handleFetchValidationError = (error) => {
    const { validation } = error;

    if (validation) {
      setValidations(validation);
    } else {
      throw error;
    }
  };

  const checkForExitCondition = (response) =>
    new Promise((resolve) => {
      const { data, headers } = response;

      const exitHeader = 'X-DF-Exit';

      if (headers && headers.get(exitHeader)) {
        onClose(data);
        return;
      }

      resolve(response);
    });

  const validateExitResult = ({ data: json }) =>
    new Promise((resolve, reject) => {
      if (!isObject(json)) {
        reject('Incorrect response when submitting an exit action. Expected an object');
      }
      resolve(json);
    });

  const onModelChange = (newModel, formSchema, triggerModel, triggerSchema) => {
    const { $id } = formSchema;

    // Multiple children might trigger model updates, we must access the previous model to ensure all changes are reflected in the new model
    setModels((prevModels) => {
      const updatedModels = {
        ...prevModels,
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

  const buildInitialModels = (model, schemas) => {
    const schemaIdToModelMap = {};

    schemas.forEach((schema) => {
      schemaIdToModelMap[schema.$id] = getValidModelParts(stepSpecification.model, schema);
    });

    return schemaIdToModelMap;
  };

  const combineModels = (formModels) =>
    Object.values(formModels).reduce((prev, model) => ({ ...prev, ...model }), {});

  const areModelsValid = (formModels, schemas) =>
    !schemas?.some((schema) => !isValidSchema(formModels[schema.$id] || {}, schema));

  const isSubmissionMethod = (method) => {
    const submissionMethods = ['POST', 'PUT', 'PATCH'];
    return submissionMethods.includes(method.toUpperCase());
  };

  const getComponents = (step) => {
    if (!step || isEmpty(step) || (!step.layout && !step.type)) {
      return [];
    }

    const layout = step.layout ? step.layout : convertStepToLayout(step);

    return inlineReferences(layout, step.schemas, step.actions);
  };

  const components = getComponents(stepSpecification);

  return (
    components && (
      <div className="m-a-3 m-t-5">
        {loading ? (
          <Loader size={Size.EXTRA_LARGE} classNames={{ 'tw-loader': 'tw-loader m-x-auto' }} />
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
      </div>
    )
  );
};

// eslint-disable-next-line
DynamicFlow.propTypes = {
  baseUrl: Types.string.isRequired,
  flowUrl: Types.string,
  onClose: Types.func,
  onStepChange: Types.func,
  onError: Types.func,
  httpClient: Types.shape({
    request: Types.func,
  }),
};

DynamicFlow.defaultProps = {
  flowUrl: '',
  onClose: () => {},
  onStepChange: () => {},
  onError: () => {},
  httpClient: undefined,
};

export default withErrorBoundary(DynamicFlow);
