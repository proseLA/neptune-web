import PropTypes from 'prop-types';
import { createContext, useContext, useMemo } from 'react';

const defaultContextValue = { refreshing: false };

const DFContext = createContext(defaultContextValue);

export const DynamicFlowProvider = ({ refreshing, children }) => {
  const value = useMemo(() => ({ refreshing }), [refreshing]);
  return <DFContext.Provider value={value}>{children}</DFContext.Provider>;
};

DynamicFlowProvider.propTypes = {
  refreshing: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export const useDynamicFlow = () => {
  const context = useContext(DFContext);
  return context || defaultContextValue;
};
