import React, { useEffect, useState } from 'react';
import Types from 'prop-types';
import { isEmpty } from '@transferwise/neptune-validation';
import DynamicLayout from '../layout';
import { convertStepToLayout, inlineReferences } from './layoutService';

import { request } from './stepService';
import { isValidSchema } from '../common/validation/schema-validators';

/**
 * ## DynamicFlow
 *
 * The dynamic flow component is responsible for the asynchronous actions occuring
 * within a dynamic flow, managing transitions between steps as well as refreshing
 * requirements.  It doesn't control any view logic, but takes the step definition
 * and reformats it to use a DynamicLayout for presentation.
 */
const DynamicFlow = (props) => {
  const { baseUrl, flowUrl, onClose, onStepChange, locale } = props;

  const [stepSpecification, setStepSpecification] = useState({});
  const [model, setModel] = useState({});
  const [modelIsValid, setModelIsValid] = useState(true); // Is this ok for init???
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState();

  useEffect(() => {
    const action = { url: flowUrl, method: 'GET' };
    fetchStep(action);
  }, [baseUrl, flowUrl]);

  useEffect(() => {
    if ((stepSpecification || {}).model) {
      updateModel(stepSpecification.model);
    }
  }, [stepSpecification]);

  const fetchStep = async (action, data) => {
    setLoading(true);

    return request(action, data, baseUrl)
      .then(validateResponse)
      .then((response) => {
        setStepSpecification(response);

        onStepChange(response);
      })
      .catch(handleFetchError)
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchRefresh = (action, data) => {
    return request(action, data, baseUrl)
      .then(validateResponse)
      .then((response) => {
        setStepSpecification(response);
      })
      .catch(handleFetchError);
  };

  const validateResponse = (response) => new Promise((resolve) => resolve(response));

  const handleFetchError = ({ validation }) => setValidations(validation);

  const onModelChange = (newModel, formSchema, triggerModel, triggerSchema) => {
    const correctedNewModel = correctNewModelIfNeeded(
      newModel,
      formSchema,
      triggerModel,
      triggerSchema,
    );

    const updatedModel = updateModel(correctedNewModel);

    if ((triggerSchema || {}).refreshRequirementsOnChange) {
      const action = { url: stepSpecification.refreshFormUrl, method: 'POST' };

      fetchRefresh(action, updatedModel);
    }
  };

  const onAction = async (action) => {
    const { exit, data, method } = action;

    if (exit) {
      onClose(data);
      return;
    }

    const updatedModel = updateModel(data);

    if (isSubmissionMethod(method)) {
      // a property in the JSON would be better to check if validation is required
      setSubmitted(true);

      if (modelIsValid) {
        fetchStep(action, updatedModel).finally(() => {
          setSubmitted(false);
        });
      }
      return;
    }

    fetchStep(action);
  };

  const onPersistAsync = () => {};

  const updateModel = (newModel) => {
    const mergedModel = mergeModels(model, newModel);

    setModel(mergedModel);
    setModelIsValid(isValidModel(mergedModel, stepSpecification.schemas));

    return mergedModel;
  };

  const mergeModels = (prevModel, newModel) => {
    // TODO handle different data types
    return { ...(prevModel || {}), ...(newModel || {}) };
  };

  const isValidModel = (formModel, schemas) =>
    schemas.reduce((validSoFar, schema) => isValidSchema(formModel, schema) && validSoFar, true);

  const isSubmissionMethod = (method) => {
    const submissionMethods = ['POST', 'PUT', 'PATCH'];
    return submissionMethods.includes(method.toUpperCase());
  };

  const correctNewModelIfNeeded = (newModel, formSchema, triggerModel, triggerSchema) => {
    const propertyName = getPropertyNameByTriggerSchema(formSchema, triggerSchema);

    return {
      ...(propertyName ? { [propertyName]: undefined } : {}),
      ...newModel,
    };
  };

  const getPropertyNameByTriggerSchema = (schema, triggerSchema) => {
    const [key] =
      Object.entries(schema.properties).find(([, value]) => value === triggerSchema) || [];
    return key;
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
    <>
      {!components && <p>No layout</p>}
      {components && (
        <DynamicLayout
          components={components}
          submitted={submitted}
          loading={loading}
          locale={locale}
          model={model}
          errors={validations}
          baseUrl={baseUrl}
          onAction={onAction}
          onModelChange={onModelChange}
          onPersistAsync={onPersistAsync}
        />
      )}
    </>
  );
};

// eslint-disable-next-line
DynamicFlow.propTypes = {
  baseUrl: Types.string,
  flowUrl: Types.string.isRequired,
  onClose: Types.func.isRequired,
  onStepChange: Types.func,
  locale: Types.string,
};

DynamicFlow.defaultProps = {
  baseUrl: '',
  locale: 'en-GB',
  onStepChange: () => {},
};

export default DynamicFlow;
