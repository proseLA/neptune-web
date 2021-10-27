import { createContext, ReactElement, PropsWithChildren } from 'react';

import { LayoutDirection, Direction } from '../../common/direction';

export const DirectionContext = createContext<LayoutDirection>(Direction.LTR);

type Props = PropsWithChildren<{ direction: LayoutDirection }>;

export const DirectionProvider = ({ direction, children }: Props): ReactElement => {
  return <DirectionContext.Provider value={direction}>{children}</DirectionContext.Provider>;
};
