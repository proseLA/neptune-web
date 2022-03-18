import debounce from 'lodash.debounce';
import { useRef } from 'react';

import { shouldDebounceSchema } from '../../common/schemaTypes/shouldDebounceSchema';

const DEBOUNCE_DELAY = 1000; // milliseconds

export function useDebouncedRefresh(fetchRefresh) {
  const map = useRef(new Map());

  const retrieveOrCreate = (key) => {
    return (
      map.current.get(key) ||
      map.current
        .set(
          key,
          debounce((action, data, etag) => fetchRefresh(action, data, etag), DEBOUNCE_DELAY),
        )
        .get(key)
    );
  };

  return function (action, data, etag, schema) {
    const key = action.url;
    const debouncedFetchRefresh = retrieveOrCreate(key);

    debouncedFetchRefresh(action, data, etag);
    if (!schema || !shouldDebounceSchema(schema)) {
      debouncedFetchRefresh.flush();
    }
  };
}
