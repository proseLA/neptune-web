import { renderHook } from '../../../test-utils';

import { useDirection } from './useDirection';

describe('useDirection', () => {
  it(`default case`, () => {
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toStrictEqual({ direction: 'ltr', isRTL: false });
  });
  it(`rtl locale case`, () => {
    const {
      result: { current },
    } = renderHook(() => useDirection(), { locale: 'ar' });

    expect(current).toStrictEqual({ direction: 'rtl', isRTL: true });
  });
});
