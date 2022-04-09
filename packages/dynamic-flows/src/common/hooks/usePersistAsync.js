import { isNull } from '@transferwise/neptune-validation';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import messages from '../../jsonSchemaForm/persistAsyncSchema/PersistAsyncSchema.messages';
import {
  getErrorFromResponse,
  getIdFromResponse,
} from '../../jsonSchemaForm/persistAsyncSchema/basic/PersistAsyncBasicSchema';
import { isStatus2xx, isStatus422 } from '../api/utils';
import { useFetcher } from '../contexts/fetcherContext';
import { isValidSchema } from '../validation/schema-validators';

export const usePersistAsync = (persistAsyncSchema, onPersistAsync) => {
  const [abortController, setAbortController] = useState(null);

  const fetcher = useFetcher();

  const intl = useIntl();
  const schemaDescriptor = persistAsyncSchema.schema;

  async function handlePersistAsync(model) {
    const isInvalidSchema = !isValidSchema(model, schemaDescriptor);

    if (isNull(model) || isInvalidSchema) {
      handleError();
    }

    return await performPersistAsync(model);
  }

  const abortCurrentRequestAndGetNewAbortSignal = () => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    return newAbortController.signal;
  };

  function constructFetchInit(model) {
    const isBlobSchema = schemaDescriptor.type === 'blob';

    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestKey = persistAsyncSchema.param;
    const requestBody = isBlobSchema
      ? wrapInFormData(requestKey, model)
      : JSON.stringify({ [requestKey]: model });

    return {
      method: persistAsyncSchema.method,
      headers: {
        ...(!isBlobSchema && { 'Content-Type': 'application/json' }),
        'X-Access-Token': 'Tr4n5f3rw153',
      },
      body: requestBody,
      signal,
    };
  }

  async function performPersistAsync(persistAsyncModel) {
    try {
      const persistAsyncFetch = fetcher(
        persistAsyncSchema.url,
        constructFetchInit(persistAsyncModel),
      );
      onPersistAsync && onPersistAsync(persistAsyncFetch);
      const response = await persistAsyncFetch;

      return broadcast(response);
    } catch {
      handleError();
    }
  }

  const broadcast = async (response) => {
    try {
      if (!response.ok) {
        return handleHTTPErrors(response, response.status);
      }

      const jsonResponse = await response.json();
      const { idProperty } = persistAsyncSchema;

      if (isStatus2xx(response.status)) {
        const id = getIdFromResponse(idProperty, jsonResponse);
        return { data: id };
      }
    } catch (error) {
      handleError(error);
    }
  };

  async function handleHTTPErrors(response, errorStatus) {
    const { param } = persistAsyncSchema;

    if (isStatus422(errorStatus)) {
      const jsonResponse = await response.json();
      const error = getErrorFromResponse(param, jsonResponse);
      throw new Error(error);
    } else {
      throw new Error(intl.formatMessage(messages.genericError));
    }
  }

  const handleError = (error) => {
    const message = error?.message || intl.formatMessage(messages.genericError);
    throw new Error(message);
  };

  return handlePersistAsync;
};

function wrapInFormData(key, value) {
  const formData = new FormData();
  formData.append(key, value);
  return formData;
}
