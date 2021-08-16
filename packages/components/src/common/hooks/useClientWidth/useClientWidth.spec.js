import { act, renderHook } from '@testing-library/react-hooks';

import { fireEvent } from '../../../test-utils';

import { useClientWidth } from './useClientWidth';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

describe('useClientWidth', () => {
  describe('when invalid ref is provided', () => {
    it('returns 0', () => {
      const reference = { invalid: true };
      const {
        result: { current },
      } = renderHook(() => useClientWidth({ ref: reference }));

      expect(current).toStrictEqual([null]);
    });
  });

  describe('when valid ref is provided', () => {
    it('returns initial ref width', () => {
      const reference = { current: { clientWidth: 500 } };
      const {
        result: { current },
      } = renderHook(() => useClientWidth({ ref: reference }));

      expect(current).toStrictEqual([500]);
    });

    it('updates the ref width on window resize', () => {
      const reference = { current: { clientWidth: 500 } };
      const { result } = renderHook(() => useClientWidth({ ref: reference }));

      expect(result.current).toStrictEqual([500]);

      act(() => {
        reference.current.clientWidth = 700;
        fireEvent(window, new Event('resize'));
      });
      expect(result.current).toStrictEqual([700]);

      act(() => {
        reference.current.clientWidth = 800;
        fireEvent(window, new Event('resize'));
      });
      expect(result.current).toStrictEqual([800]);
    });
  });

  describe('when window ref is provided', () => {
    it('returns window innerWidth', () => {
      window.innerWidth = 600;
      const {
        result: { current },
      } = renderHook(() => useClientWidth({ ref: window }));

      expect(current).toStrictEqual([600]);
    });
  });

  describe('when cleanup runs the event is not longer attached to window', () => {
    it('returns window innerWidth', () => {
      const reference = { current: { clientWidth: 500 } };
      const { result, unmount } = renderHook(() => useClientWidth({ ref: reference }));

      unmount();

      act(() => {
        reference.current.clientWidth = 700;
        fireEvent(window, new Event('resize'));
      });

      expect(result.current).toStrictEqual([500]);
    });
  });
});
