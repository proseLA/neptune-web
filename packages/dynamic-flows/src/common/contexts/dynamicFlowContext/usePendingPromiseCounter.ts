import { useCallback, useState } from 'react';

export function usePendingPromiseCounter() {
  const [count, setCount] = useState<number>(0);

  const addPendingPromise = useCallback(
    (promise: Promise<unknown>) => {
      setCount((c) => c + 1);
      promise
        .catch(noop)
        .finally(() => delayUntilNextCycle(() => setCount((c) => Math.max(0, c - 1))));
    },
    [setCount],
  );

  return { addPendingPromise, pendingPromises: count };
}
const delayUntilNextCycle = (fn: () => void) => setTimeout(() => fn(), 0);

const noop = () => {
  // no-op
};
