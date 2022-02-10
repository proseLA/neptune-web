import { useEffect, useState } from 'react';

import { Breakpoint } from '../../propsValues/breakpoint';
import useClientWidth from '../useClientWidth';

export const useLayout = (): {
  isMobile: boolean;
  isExtraSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isExtraLarge: boolean;
} => {
  const windowReference = typeof window === 'undefined' ? undefined : window;

  const [breakpoint, setBreakpoint] = useState<Breakpoint>();
  const [clientWidth] = useClientWidth({ ref: windowReference }) as [number | null];

  useEffect(() => {
    if (!clientWidth) {
      return;
    }

    if (clientWidth <= Breakpoint.EXTRA_SMALL) {
      setBreakpoint(Breakpoint.EXTRA_SMALL);
      return;
    }

    if (Breakpoint.EXTRA_SMALL < clientWidth && clientWidth <= Breakpoint.SMALL) {
      setBreakpoint(Breakpoint.SMALL);
      return;
    }

    if (Breakpoint.SMALL < clientWidth && clientWidth <= Breakpoint.MEDIUM) {
      setBreakpoint(Breakpoint.MEDIUM);
      return;
    }

    if (Breakpoint.MEDIUM < clientWidth && clientWidth <= Breakpoint.LARGE) {
      setBreakpoint(Breakpoint.LARGE);
      return;
    }

    if (Breakpoint.LARGE < clientWidth) {
      setBreakpoint(Breakpoint.EXTRA_LARGE);
    }
  }, [clientWidth]);

  return {
    isMobile: !!breakpoint && [Breakpoint.EXTRA_SMALL, Breakpoint.SMALL].includes(breakpoint),
    isExtraSmall: breakpoint === Breakpoint.EXTRA_SMALL,
    isSmall: breakpoint === Breakpoint.SMALL,
    isMedium: breakpoint === Breakpoint.MEDIUM,
    isLarge: breakpoint === Breakpoint.LARGE,
    isExtraLarge: breakpoint === Breakpoint.EXTRA_LARGE,
  };
};
