import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { usePendingPromiseCounter } from './usePendingPromiseCounter';

const makePromiseController = () => {
  let resolvePromise;
  let rejectPromise;
  const promise = new Promise((resolve, reject) => {
    resolvePromise = resolve;
    rejectPromise = reject;
  });
  return {
    promise,
    resolve: resolvePromise,
    reject: rejectPromise,
  };
};

describe('usePendingPromiseCounter', () => {
  it('should increment the count when promises are added', async () => {
    const { result } = renderHook(() => usePendingPromiseCounter());

    result.current.addPendingPromise(makePromiseController().promise);
    expect(result.current.pendingPromises).toBe(1);

    result.current.addPendingPromise(makePromiseController().promise);
    expect(result.current.pendingPromises).toBe(2);

    result.current.addPendingPromise(makePromiseController().promise);
    expect(result.current.pendingPromises).toBe(3);
  });

  it('should decrement the count when promises are resolved', async () => {
    const { result } = renderHook(() => usePendingPromiseCounter());

    const pc1 = makePromiseController();
    const pc2 = makePromiseController();
    act(() => result.current.addPendingPromise(pc1.promise));
    act(() => result.current.addPendingPromise(pc2.promise));

    expect(result.current.pendingPromises).toBe(2);

    pc1.resolve();
    await waitFor(() => expect(result.current.pendingPromises).toBe(1));

    pc2.resolve();
    await waitFor(() => expect(result.current.pendingPromises).toBe(0));
  });

  it('should decrement the count when promises are rejected', async () => {
    const { result } = renderHook(() => usePendingPromiseCounter());

    const pc1 = makePromiseController();
    const pc2 = makePromiseController();
    act(() => result.current.addPendingPromise(pc1.promise));
    act(() => result.current.addPendingPromise(pc2.promise));

    expect(result.current.pendingPromises).toBe(2);

    pc1.reject();
    await waitFor(() => expect(result.current.pendingPromises).toBe(1));

    pc2.reject();
    await waitFor(() => expect(result.current.pendingPromises).toBe(0));
  });
});
