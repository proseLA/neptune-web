import Types from 'prop-types';
import { createContext, useContext, useMemo } from 'react';

import { makeFetcher } from '.';

const FetcherContext = createContext();

export const FetcherProvider = ({ fetcher, children }) => {
  return <FetcherContext.Provider value={fetcher}>{children}</FetcherContext.Provider>;
};

FetcherProvider.propTypes = {
  fetcher: Types.func.isRequired,
  children: Types.node,
};

export const FetcherProviderFromBaseUrl = ({ baseUrl, children }) => {
  const fetcher = useMemo(() => makeFetcher(baseUrl), [baseUrl]);
  return <FetcherContext.Provider value={fetcher}>{children}</FetcherContext.Provider>;
};

FetcherProviderFromBaseUrl.propTypes = {
  baseUrl: Types.string.isRequired,
  children: Types.node,
};

/**
 * Provides the fetch(er) function for dynamic flows asynchronous operations.
 */
export const useFetcher = () => {
  const contextFetch = useContext(FetcherContext);
  return contextFetch || fetch;
};

export const useHasFetcherProvider = () => {
  const context = useContext(FetcherContext);
  return !!context;
};
