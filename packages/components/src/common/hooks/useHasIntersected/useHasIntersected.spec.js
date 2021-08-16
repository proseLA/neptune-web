import { renderHook } from '@testing-library/react-hooks';

import useHasIntersected from '.';

describe('useHasIntersected', () => {
  const originalIntersectionObserver = window.IntersectionObserver;
  let observe;
  let unobserve;
  let loading;
  let elementReference;

  beforeEach(() => {
    observe = jest.fn();
    unobserve = jest.fn();
    loading = 'lazy';
  });
  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });
  describe('when loading is set to eager', () => {
    it('returns false', () => {
      const { result } = renderHook(() =>
        useHasIntersected({ elRef: elementReference, loading: 'eager' }),
      );
      expect(result.current).toStrictEqual([false]);
    });
  });

  describe('when loading is set to lazy', () => {
    beforeEach(() => {
      elementReference = { current: 'a valid ref' };
    });
    describe('when element is not visible', () => {
      it('returns true if ref is an invalid ref', () => {
        const { result } = renderHook(() => useHasIntersected({ elRef: null, loading }));
        expect(result.current).toStrictEqual([true]);
      });
      it('returns true if ref is valid and IntersectionObserver is not supported', () => {
        window.IntersectionObserver = null;

        const { result } = renderHook(() =>
          useHasIntersected({ elRef: elementReference, loading }),
        );
        expect(result.current).toStrictEqual([true]);
      });
      it('returns false if ref is valid', () => {
        setupIntersectionObserver(false);

        const { result } = renderHook(() =>
          useHasIntersected({ elRef: elementReference, loading }),
        );
        expect(result.current).toStrictEqual([false]);
      });
    });

    describe('when element is visible', () => {
      it('returns true if ref is valid and IntersectionObserver is supported', () => {
        setupIntersectionObserver(true);

        const { result } = renderHook(() =>
          useHasIntersected({ elRef: elementReference, loading }),
        );
        expect(observe).toHaveBeenCalledTimes(1);
        expect(result.current).toStrictEqual([true]);
      });

      it('calls observer', () => {
        // eslint-disable-next-line jest/prefer-spy-on
        window.IntersectionObserver = jest.fn(() => ({
          observe,
          unobserve,
        }));

        renderHook(() => useHasIntersected({ elRef: elementReference, loading }));
        expect(observe).toHaveBeenCalledTimes(1);
        expect(observe).toHaveBeenCalledWith(elementReference.current);
        expect(unobserve).not.toHaveBeenCalled();
      });
    });

    describe('calls unobserve', () => {
      it('when element is intersecting', () => {
        setupIntersectionObserver(true);

        renderHook(() => useHasIntersected({ elRef: elementReference, loading }));
        expect(unobserve).toHaveBeenCalledTimes(1);
        expect(unobserve).toHaveBeenCalledWith(elementReference.current);
      });
    });
  });

  const setupIntersectionObserver = (isIntersecting) => {
    // eslint-disable-next-line jest/prefer-spy-on
    window.IntersectionObserver = jest.fn((callback) => {
      callback([{ isIntersecting }], { unobserve });
      return {
        observe,
        unobserve,
      };
    });
  };
});
