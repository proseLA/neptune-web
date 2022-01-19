import Types from 'prop-types';
import { createContext, useContext } from 'react';

const HttpClientContext = createContext();

export const HttpClientProvider = ({ httpClient, children }) => {
  return <HttpClientContext.Provider value={httpClient}>{children}</HttpClientContext.Provider>;
};

HttpClientProvider.propTypes = {
  httpClient: Types.shape({
    request: Types.func.isRequired,
  }).isRequired,
  children: Types.node,
};

export function useHttpClient() {
  const httpClient = useContext(HttpClientContext);
  if (!httpClient) {
    throw new Error('Missing HttpClientProvider');
  }
  return httpClient;
}

export function useHasHttpClientProvider() {
  const httpClient = useContext(HttpClientContext);
  return !!httpClient;
}
