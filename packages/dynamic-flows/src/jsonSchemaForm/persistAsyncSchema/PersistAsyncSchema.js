import { isNull } from '@transferwise/neptune-validation';
import isEqual from 'lodash.isequal';
import Types from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { FormControlType } from '../../common';
import { isStatus2xx, isStatus422, QueryablePromise } from '../../common/api/utils';
import { getAsyncUrl } from '../../common/async/url';
import { useBaseUrl } from '../../common/contexts/baseUrlContext/BaseUrlContext';
import { b64ToBlob } from '../../common/general/base64';
import usePrevious from '../../common/hooks/usePrevious';
import { getControlType } from '../../common/requirements';
import { isValidSchema } from '../../common/validation/schema-validators';
import BasicTypeSchema from '../basicTypeSchema';

import messages from './PersistAsyncSchema.messages';

const getIdFromResponse = (idProperty, response) => {
  return response[idProperty];
};

const getErrorFromResponse = (errorProperty, response) => {
  return response.validation?.[errorProperty];
};

const isPersistAsyncSchemaBlobType = (persistAsyncSchema) => persistAsyncSchema.type === 'blob';

const mapPersistAsyncSchemaToBasicSchema = (persistAsyncSchema) => {
  const isBlobType = isPersistAsyncSchemaBlobType(persistAsyncSchema);

  if (isBlobType) {
    return {
      ...persistAsyncSchema,
      type: 'string',
      format: 'base64url',
    };
  }

  return persistAsyncSchema;
};

const supportedControlTypes = new Set([
  FormControlType.CHECKBOX,
  FormControlType.FILE,
  FormControlType.DATE,
  FormControlType.DATETIME,
  FormControlType.TEL,
  FormControlType.NUMBER,
  FormControlType.PASSWORD,
  FormControlType.TEXT,
  FormControlType.TEXTAREA,
  FormControlType.UPLOAD,
]);

const PersistAsyncSchema = (props) => {
  const intl = useIntl();

  const [persistAsyncModel, setPersistAsyncModel] = useState(null);
  const previousPersistAsyncModel = usePrevious(persistAsyncModel);
  const [persistAsyncError, setPersistAsyncError] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const baseUrl = useBaseUrl();

  const mappedPersistAsyncSchema = mapPersistAsyncSchemaToBasicSchema(
    props.schema.persistAsync.schema,
  );

  if (!supportedControlTypes.has(getControlType(mappedPersistAsyncSchema))) {
    throw new Error('Not implemented');
  }

  useEffect(() => {
    if (
      [FormControlType.FILE, FormControlType.UPLOAD].includes(
        getControlType(mappedPersistAsyncSchema),
      )
    ) {
      doPersistAsyncIfValid(persistAsyncModel, previousPersistAsyncModel);
    }
  }, [persistAsyncModel]);

  const setGenericPersistAsyncError = () =>
    setPersistAsyncError(intl.formatMessage(messages.genericError));

  const getPersistAsyncFetch = (currentPersistAsyncModel, persistAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();
    const isBlobType = isPersistAsyncSchemaBlobType(persistAsyncSpec.schema);

    let fetchOptions;
    if (isBlobType) {
      const formData = new FormData();
      formData.append(persistAsyncSpec.param, b64ToBlob(currentPersistAsyncModel));

      fetchOptions = {
        method: persistAsyncSpec.method,
        body: formData,
        signal,
      };
    } else {
      const requestBody = { [persistAsyncSpec.param]: currentPersistAsyncModel };

      fetchOptions = {
        method: persistAsyncSpec.method,
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': 'Tr4n5f3rw153',
        },
        body: JSON.stringify(requestBody),
        signal,
      };
    }

    return new QueryablePromise(fetch(getAsyncUrl(persistAsyncSpec.url, baseUrl), fetchOptions));
  };

  const getPersistAsyncResponse = async (currentPersistAsyncModel, persistAsyncSpec) => {
    setFieldSubmitted(true); // persist async initiated implied the field has been submitted

    const persistAsyncFetch = getPersistAsyncFetch(currentPersistAsyncModel, persistAsyncSpec);

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

  const doPersistAsyncIfValid = (model, previousModel) => {
    if (!isNull(model) && !isEqual(model, previousModel)) {
      getPersistAsyncResponse(model, props.schema.persistAsync);
    }
  };

  const onBlur = () => {
    doPersistAsyncIfValid(persistAsyncModel, previousPersistAsyncModel);
  };

  const persistAsyncOnChange = (newPersistAsyncModel, schema) => {
    setPersistAsyncError(null);

    if (isValidSchema(newPersistAsyncModel, schema)) {
      setPersistAsyncModel(newPersistAsyncModel);
    }
  };

  return (
    <>
      <BasicTypeSchema
        required={props.required}
        submitted={props.submitted || fieldSubmitted}
        schema={mappedPersistAsyncSchema}
        errors={persistAsyncError || props.errors}
        onChange={persistAsyncOnChange}
        onBlur={onBlur}
      />
    </>
  );
};

PersistAsyncSchema.propTypes = {
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
        type: Types.oneOf(['string', 'number', 'integer', 'boolean', 'blob']),
        format: Types.string,
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
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  onPersistAsync: Types.func.isRequired,
  required: Types.bool,
};

PersistAsyncSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default PersistAsyncSchema;
