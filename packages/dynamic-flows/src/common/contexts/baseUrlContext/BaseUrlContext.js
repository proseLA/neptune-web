import Types from 'prop-types';
import { createContext, useContext, useMemo } from 'react';

const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ baseUrl, children }) => {
  const value = useMemo(() => ({ baseUrl }), [baseUrl]);
  return <BaseUrlContext.Provider value={value}>{children}</BaseUrlContext.Provider>;
};

BaseUrlProvider.propTypes = {
  baseUrl: Types.string.isRequired,
  children: Types.node,
};

/**
 * Provides the baseUrl for dynamic flows asynchronous operations.
 */
export const useBaseUrl = () => {
  const context = useContext(BaseUrlContext);
  if (context && context.baseUrl !== null && context.baseUrl !== undefined) {
    return context.baseUrl;
  }
  throw new Error('BaseUrl must not be null or undefined');
};

export const useHasBaseUrlProvider = () => {
  const context = useContext(BaseUrlContext);
  return !!context;
};
