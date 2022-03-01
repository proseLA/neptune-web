import { isNull } from '@transferwise/neptune-validation';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import { useFetcher } from '../../common/contexts/fetcherContext';
import { isValidSchema } from '../../common/validation/schema-validators';
import BasicTypeSchema from '../basicTypeSchema';

const ValidationAsyncSchema = (props) => {
  const [validationAsyncModel, setValidationAsyncModel] = useState(props.model);
  const previousRequestedModelReference = useRef(null);
  const [validationAsyncSuccessMessage, setValidationAsyncSuccessMessage] = useState(null);
  const [validationAsyncErrors, setValidationAsyncErrors] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const fetcher = useFetcher();

  const getValidationAsyncResponse = async (currentValidationAsyncModel, validationAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [validationAsyncSpec.param]: currentValidationAsyncModel };
    previousRequestedModelReference.current = currentValidationAsyncModel;
    setFieldSubmitted(true);

    const validationAsyncFetch = fetcher(validationAsyncSpec.url, {
      method: validationAsyncSpec.method,
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': 'Tr4n5f3rw153',
      },
      body: JSON.stringify(requestBody),
      signal,
    });

    const response = await validationAsyncFetch;
    setValidationMessages(response);
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
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: PropTypes.shape({
      context: PropTypes.string,
      markdown: PropTypes.string,
    }),
    validationAsync: PropTypes.shape({
      method: PropTypes.string,
      url: PropTypes.string,
      param: PropTypes.string,
    }),
  }).isRequired,
  model: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.shape({})]),
};

ValidationAsyncSchema.defaultProps = {
  model: null,
  errors: null,
  required: false,
};

export default ValidationAsyncSchema;
