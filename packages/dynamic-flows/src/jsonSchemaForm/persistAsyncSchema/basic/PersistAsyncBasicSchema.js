import { isNull } from '@transferwise/neptune-validation';
import isEqual from 'lodash.isequal';
import Types from 'prop-types';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { FormControlType } from '../../../common';
import { isStatus2xx, isStatus422, QueryablePromise } from '../../../common/api/utils';
import { getAsyncUrl } from '../../../common/async/url';
import { useBaseUrl } from '../../../common/contexts/baseUrlContext/BaseUrlContext';
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
  const baseUrl = useBaseUrl();

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

    const persistAsyncFetch = new QueryablePromise(
      fetch(getAsyncUrl(persistAsyncSpec.url, baseUrl), {
        method: persistAsyncSpec.method,
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': 'Tr4n5f3rw153',
        },
        body: JSON.stringify(requestBody),
        signal,
      }),
    );
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
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    persistAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
      idProperty: Types.string,
      schema: Types.shape({
        format: Types.string,
        type: Types.string,
      }),
    }),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number, Types.bool])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    format: Types.string,
    title: Types.string,
    values: Types.arrayOf(Types.shape({})),
    default: Types.oneOfType([Types.string, Types.number, Types.bool]),
    disabled: Types.bool,
    hidden: Types.bool,
    help: Types.shape({}),
  }).isRequired,
  translations: Types.shape({}),
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  onPersistAsync: Types.func.isRequired,
  required: Types.bool,
};

PersistAsyncBasicSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default PersistAsyncBasicSchema;
