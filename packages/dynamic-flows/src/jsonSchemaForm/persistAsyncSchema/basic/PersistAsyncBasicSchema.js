import { isNull } from '@transferwise/neptune-validation';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { FormControlType } from '../../../common';
import { isStatus2xx, isStatus422 } from '../../../common/api/utils';
import { useFetcher } from '../../../common/contexts/fetcherContext';
import usePrevious from '../../../common/hooks/usePrevious';
import { isValidSchema } from '../../../common/validation/schema-validators';
import BasicTypeSchema from '../../basicTypeSchema';
import { getControlType } from '../../schemaFormControl/SchemaFormControl';
import messages from '../PersistAsyncSchema.messages';

export const getIdFromResponse = (idProperty, response) => {
  return response[idProperty];
};

export const getErrorFromResponse = (errorProperty, response) => {
  return response.validation?.[errorProperty];
};

const controlTypesWithPersistOnChange = new Set([
  FormControlType.RADIO,
  FormControlType.SELECT,
  FormControlType.DATELOOKUP,
  FormControlType.FILE,
  FormControlType.UPLOAD,
]);

const PersistAsyncBasicSchema = (props) => {
  const intl = useIntl();
  const fetcher = useFetcher();

  const [persistAsyncModel, setPersistAsyncModel] = useState(null);
  const previousPersistAsyncModel = usePrevious(persistAsyncModel);
  const [persistAsyncError, setPersistAsyncError] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    if (controlTypesWithPersistOnChange.has(getControlType(props.schema.persistAsync.schema))) {
      persistAsyncIfValid();
    }
  }, [persistAsyncModel]);

  const setGenericPersistAsyncError = () =>
    setPersistAsyncError(intl.formatMessage(messages.genericError));

  const getPersistAsyncResponse = async (currentPersistAsyncModel, persistAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [persistAsyncSpec.param]: currentPersistAsyncModel };
    setFieldSubmitted(true); // persist async initiated implied the field has been submitted

    const persistAsyncFetch = fetcher(persistAsyncSpec.url, {
      method: persistAsyncSpec.method,
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': 'Tr4n5f3rw153',
      },
      body: JSON.stringify(requestBody),
      signal,
    });
    props.onPersistAsync(persistAsyncFetch);
    const response = await persistAsyncFetch;

    broadcast(response);
  };

  const abortCurrentRequestAndGetNewAbortSignal = () => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    return newAbortController.signal;
  };

  const broadcast = async (response) => {
    try {
      const jsonResponse = await response.json();
      const { idProperty, param } = props.schema.persistAsync;
      if (isStatus2xx(response.status)) {
        const id = getIdFromResponse(idProperty, jsonResponse);
        props.onChange(id, props.schema, id);
      } else if (isStatus422(response.status)) {
        const error = getErrorFromResponse(param, jsonResponse);
        props.onChange(null, props.schema, null);
        setPersistAsyncError(error);
      } else {
        setGenericPersistAsyncError();
      }
    } catch {
      setGenericPersistAsyncError();
    }
  };

  const persistAsyncIfValid = () => {
    if (!isNull(persistAsyncModel) && !isEqual(persistAsyncModel, previousPersistAsyncModel)) {
      getPersistAsyncResponse(persistAsyncModel, props.schema.persistAsync);
    }
  };

  const onBlur = () => {
    persistAsyncIfValid();
  };

  const persistAsyncOnChange = (newPersistAsyncModel) => {
    setPersistAsyncError(null);

    if (isValidSchema(newPersistAsyncModel, props.schema.persistAsync.schema)) {
      setPersistAsyncModel(newPersistAsyncModel);
    }
  };

  return (
    <BasicTypeSchema
      required={props.required}
      submitted={props.submitted || fieldSubmitted}
      schema={props.schema.persistAsync.schema}
      errors={persistAsyncError || props.errors}
      onChange={persistAsyncOnChange}
      onBlur={onBlur}
    />
  );
};

PersistAsyncBasicSchema.propTypes = {
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: PropTypes.shape({
      context: PropTypes.string,
      markdown: PropTypes.string,
    }),
    persistAsync: PropTypes.shape({
      method: PropTypes.string,
      url: PropTypes.string,
      param: PropTypes.string,
      idProperty: PropTypes.string,
      schema: PropTypes.shape({
        format: PropTypes.string,
        type: PropTypes.string,
      }),
    }),
    enum: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    ),
    const: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    format: PropTypes.string,
    title: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({})),
    default: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    help: PropTypes.shape({}),
  }).isRequired,
  model: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.shape({})]),
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  onPersistAsync: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

PersistAsyncBasicSchema.defaultProps = {
  errors: null,
  required: false,
};

export default PersistAsyncBasicSchema;
