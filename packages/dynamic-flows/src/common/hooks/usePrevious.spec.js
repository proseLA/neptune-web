import { renderHook } from '@testing-library/react-hooks';

import usePrevious from './usePrevious';

describe('when usePrev is used', () => {
  let value;
  let rerender;

  describe('when used with primitive', () => {
    beforeEach(() => {
      const view = renderHook(({ state }) => usePrevious(state), { initialProps: { state: 0 } });
      value = view.result;
      rerender = view.rerender;
    });

    it('should be undefined initially', () => {
      expect(value.current).toBeUndefined();
    });

    describe('when value is updated', () => {
      beforeEach(() => {
        rerender({ state: 1 });
      });

      it('should return previous value', () => {
        expect(value.current).toBe(0);
      });

      describe('when value is updated again', () => {
        beforeEach(() => {
          rerender({ state: 1 });
        });

        it('should still render previous value', () => {
          expect(value.current).toBe(1);
        });
      });
    });
  });

  describe('when used with object', () => {
    beforeEach(() => {
      const view = renderHook(({ state }) => usePrevious(state), {
        initialProps: { state: { foo: 'bar' } },
      });
      value = view.result;
      rerender = view.rerender;
    });

    it('should be undefined initially', () => {
      expect(value.current).toBeUndefined();
    });

    describe('when value is updated', () => {
      beforeEach(() => {
        rerender({ state: { foo: 'foo' } });
      });

      it('should return previous value', () => {
        expect(value.current).toMatchObject({ foo: 'bar' });
      });

      describe('when value is updated again', () => {
        beforeEach(() => {
          rerender({ foo: 'foo' });
        });

        it('should still render previous value', () => {
          expect(value.current).toMatchObject({ foo: 'foo' });
        });
      });
    });
  });
});
