import React, { useEffect, useState } from 'react';
import Types from 'prop-types';
import { isEmpty, isObject } from '@transferwise/neptune-validation';
import { Loader } from '@transferwise/components';
import { withErrorBoundary } from './errorBoundary';
import DynamicLayout from '../layout';
import { convertStepToLayout, inlineReferences } from './layoutService';

import { request } from './stepService';
import { isValidSchema } from '../common/validation/schema-validators';
import { Size } from '../common';
import { getJson } from '../common/api/utils';

/**
 * ## DynamicFlow
 *
 * The dynamic flow component is responsible for the asynchronous actions occuring
 * within a dynamic flow, managing transitions between steps as well as refreshing
 * requirements.  It doesn't control any view logic, but takes the step definition
 * and reformats it to use a DynamicLayout for presentation.
 */
const DynamicFlow = (props) => {
  const { baseUrl, flowUrl, onClose, onStepChange, locale, onError } = props;

  const [stepSpecification, setStepSpecification] = useState({});
  const [models, setModels] = useState({});
  const [modelIsValid, setModelIsValid] = useState(true);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  const INITIALIZATION_SCHEMA_PROPERTY = 'initial';

  useEffect(() => {
    const action = { url: flowUrl, method: 'GET' };
    fetchStep(action);
  }, [baseUrl, flowUrl]);

  useEffect(() => {
    if ((stepSpecification || {}).model) {
      setModels({ [INITIALIZATION_SCHEMA_PROPERTY]: stepSpecification.model });
    }
  }, [stepSpecification]);

  const fetchStep = async (action, data) => {
    setLoading(true);

    return request({ action, data, baseUrl })
      .then(checkForExitCondition)
      .then(getJson)
      .then((json) => {
        setStepSpecification(json);

        onStepChange(json);
      })
      .then(() => setSubmitted(false))
      .catch(handleFetchError)
      .finally(() => setLoading(false));
  };

  const fetchRefresh = (action, data) => {
    return request({ action, data, baseUrl })
      .then(getJson)
      .then((json) => {
        setStepSpecification(json);
      })
      .catch(handleFetchError);
  };

  const fetchExitResult = (action, data) => {
    return request({ action, data, baseUrl })
      .then(getJson)
      .then(validateExitResult)
      .catch(handleFetchError);
  };

  const handleFetchError = (error) => {
    const { validation } = error;

    if (validation) {
      setValidations(validation);
    } else {
      onError(error);
      throw error;
    }
  };

  const checkForExitCondition = (response) =>
    new Promise((resolve) => {
      const exitHeader = 'X-DF-Exit';

      if (response.headers.get(exitHeader)) {
        onClose(getJson(response));
        return;
      }

      resolve(response);
    });

  const validateExitResult = (json) =>
    new Promise((resolve, reject) => {
      if (!isObject(json)) {
        reject('Incorrect response when submitting an exit action. Expected an object');
      }
      resolve(json);
    });

  const onModelChange = (newModel, formSchema, triggerModel, triggerSchema) => {
    const { $id } = formSchema;

    const updatedModels = updateModels($id, newModel);

    if ((triggerSchema || {}).refreshRequirementsOnChange) {
      const action = { url: stepSpecification.refreshFormUrl, method: 'POST' };

      fetchRefresh(action, combineModels(updatedModels));
    }
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

  const updateModels = (schemaRef, model) => {
    delete models[INITIALIZATION_SCHEMA_PROPERTY];

    const newModels = {
      ...models,
      [schemaRef]: model,
    };

    setModels(newModels);
    setModelIsValid(areModelsValid(newModels, stepSpecification.schemas));

    return newModels;
  };

  const combineModels = (formModels) =>
    Object.values(formModels).reduce((prev, model) => ({ ...prev, ...model }), {});

  const areModelsValid = (formModels, schemas) =>
    schemas.reduce(
      (validSoFar, schema) => isValidSchema(formModels[schema.$id] || {}, schema) && validSoFar,
      true,
    );

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
    <div className="m-a-3 m-t-5">
      {!components && <p>No layout</p>}
      {components &&
        (loading ? (
          <Loader size={Size.SMALL} classNames={{ 'tw-loader': 'tw-loader m-x-auto' }} />
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
        ))}
    </div>
  );
};

// eslint-disable-next-line
DynamicFlow.propTypes = {
  baseUrl: Types.string,
  flowUrl: Types.string.isRequired,
  onClose: Types.func.isRequired,
  onStepChange: Types.func,
  locale: Types.string,
  onError: Types.func,
};

DynamicFlow.defaultProps = {
  baseUrl: '',
  locale: 'en-GB',
  onStepChange: () => {},
  onError: () => {},
};

export default withErrorBoundary(DynamicFlow);
