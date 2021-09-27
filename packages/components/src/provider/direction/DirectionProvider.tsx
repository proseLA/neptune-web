import { createContext, ReactElement, PropsWithChildren } from 'react';

import { isBrowser, LayoutDirection, Direction } from '../../common';

const DEFAULT_DIRECTION = Direction.LTR;

export const DirectionContext = createContext<LayoutDirection>(DEFAULT_DIRECTION);

type Props = PropsWithChildren<{ direction?: LayoutDirection }>;

export const DirectionProvider = ({
  direction = DEFAULT_DIRECTION,
  children = undefined,
}: Props): ReactElement => {
  if (isBrowser()) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    document.documentElement.dir = direction;
  }
  return <DirectionContext.Provider value={direction}>{children}</DirectionContext.Provider>;
};
