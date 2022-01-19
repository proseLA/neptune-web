import { isNull } from '@transferwise/neptune-validation';
import isEqual from 'lodash.isequal';
import Types from 'prop-types';
import { useRef, useState } from 'react';

import { useHttpClient } from '../../common/contexts/httpClientContext/httpClientContext';
import { isValidSchema } from '../../common/validation/schema-validators';
import BasicTypeSchema from '../basicTypeSchema';

const ValidationAsyncSchema = (props) => {
  const [validationAsyncModel, setValidationAsyncModel] = useState(props.model);
  const previousRequestedModelReference = useRef(null);
  const [validationAsyncSuccessMessage, setValidationAsyncSuccessMessage] = useState(null);
  const [validationAsyncErrors, setValidationAsyncErrors] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const httpClient = useHttpClient();

  const getValidationAsyncResponse = (currentValidationAsyncModel, validationAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [validationAsyncSpec.param]: currentValidationAsyncModel };
    previousRequestedModelReference.current = currentValidationAsyncModel;
    setFieldSubmitted(true);

    httpClient
      .request({
        method: validationAsyncSpec.method,
        url: validationAsyncSpec.url,
        data: requestBody,
        signal,
      })
      .then(setValidationMessages)
      .catch(setValidationMessages);
  };

  const setValidationMessages = async (response) => {
    try {
      const jsonResponse = await response.json();

      if (response?.status === 200) {
        setValidationAsyncSuccessMessage(jsonResponse.message);
      } else if (response?.status === 422) {
        setValidationAsyncErrors(jsonResponse.message);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };

  const abortCurrentRequestAndGetNewAbortSignal = () => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    return newAbortController.signal;
  };

  const onBlur = () => {
    if (
      !isNull(validationAsyncModel) &&
      !isEqual(validationAsyncModel, previousRequestedModelReference.current)
    ) {
      getValidationAsyncResponse(validationAsyncModel, props.schema.validationAsync);
    }
  };

  const validationAsyncOnChange = (newValidationAsyncModel) => {
    props.onChange(newValidationAsyncModel, props.schema, newValidationAsyncModel);
    setValidationAsyncErrors(null);
    setValidationAsyncSuccessMessage(null);

    if (isValidSchema(newValidationAsyncModel, props.schema)) {
      setValidationAsyncModel(newValidationAsyncModel);
    }
  };

  return (
    <BasicTypeSchema
      required={props.required}
      submitted={props.submitted || fieldSubmitted}
      schema={props.schema}
      model={validationAsyncModel}
      errors={validationAsyncErrors || props.errors}
      validationAsyncSuccessMessage={validationAsyncSuccessMessage}
      onChange={validationAsyncOnChange}
      onBlur={onBlur}
    />
  );
};

ValidationAsyncSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    validationAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
    }),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
};

ValidationAsyncSchema.defaultProps = {
  model: null,
  errors: null,
  required: false,
};

export default ValidationAsyncSchema;
