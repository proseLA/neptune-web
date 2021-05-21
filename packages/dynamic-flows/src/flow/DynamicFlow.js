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
  const [models, setModels] = useState({});
  const [modelIsValid, setModelIsValid] = useState(true); // Is this ok for init???
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
    const { $id } = formSchema;

    const updatedModels = updateModels($id, newModel);

    if ((triggerSchema || {}).refreshRequirementsOnChange) {
      const action = { url: stepSpecification.refreshFormUrl, method: 'POST' };

      fetchRefresh(action, combineModels(updatedModels));
    }
  };

  const onAction = async (action) => {
    const { exit, data, method } = action;

    if (exit) {
      onClose(data);
      return;
    }

    const submissionData = {
      ...combineModels(models),
      ...data,
    };

    if (isSubmissionMethod(method)) {
      setSubmitted(true);

      if (modelIsValid) {
        fetchStep(action, submissionData).finally(() => {
          setSubmitted(false);
        });
      }
      return;
    }

    fetchStep(action);
  };

  const onPersistAsync = () => { };

  const updateModels = (schemaRef, model) => {
    delete models[INITIALIZATION_SCHEMA_PROPERTY];

    const newModels = {
      ...models,
      [schemaRef]: model,
    };

    setModels(newModels);
    setModelIsValid(areValidModels(newModels, stepSpecification.schemas));

    return newModels;
  };

  const combineModels = (formModels) =>
    Object.values(formModels).reduce((prev, model) => ({ ...prev, ...model }), {});

  const areValidModels = (formModels, schemas) =>
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
    <>
      {!components && <p>No layout</p>}
      {components && (
        <DynamicLayout
          components={components}
          submitted={submitted}
          loading={loading}
          locale={locale}
          model={combineModels(models)}
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
  onStepChange: () => { },
};

export default DynamicFlow;
