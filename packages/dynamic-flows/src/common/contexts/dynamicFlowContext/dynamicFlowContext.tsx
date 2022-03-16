import { createContext, useContext, useMemo } from 'react';

import { usePendingPromiseCounter } from './usePendingPromiseCounter';

const defaultContextValue = {
  refreshing: false,
  registerPersistAsyncPromise: (promise: Promise<unknown>) => {
    //
  },
};

const DFContext = createContext(defaultContextValue);

type Props = { refreshing: boolean };
export const DynamicFlowProvider: React.FC<Props> = ({ refreshing, children }) => {
  const { pendingPromises, addPendingPromise } = usePendingPromiseCounter();

  const providerValue = useMemo(() => {
    return {
      refreshing: refreshing || pendingPromises > 0,
      registerPersistAsyncPromise: addPendingPromise,
    };
  }, [refreshing, pendingPromises, addPendingPromise]);

  return <DFContext.Provider value={providerValue}>{children}</DFContext.Provider>;
};

export const useDynamicFlow = () => {
  const context = useContext(DFContext);
  return context || defaultContextValue;
};
