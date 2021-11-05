import { renderHook } from '../../../test-utils';

import { useDirection } from './useDirection';

describe('useDirection', () => {
  it('returns ltr as default', () => {
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toStrictEqual({ direction: 'ltr', isRTL: false });
  });

  it('returns rtl for ar locale', () => {
    const {
      result: { current },
    } = renderHook(() => useDirection(), { locale: 'ar' });

    expect(current).toStrictEqual({ direction: 'rtl', isRTL: true });
  });
});
