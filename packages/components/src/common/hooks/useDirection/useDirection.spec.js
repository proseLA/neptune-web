import { renderHook } from '../../../test-utils';
import { useDirection } from './useDirection';

describe('useDirection', () => {
  it(`default case`, () => {
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toEqual({ direction: 'ltr', isRTL: false });
  });
  it(`rtl locale case`, () => {
    const {
      result: { current },
    } = renderHook(() => useDirection(), { locale: 'he-IL' });

    expect(current).toEqual({ direction: 'rtl', isRTL: true });
  });
});
