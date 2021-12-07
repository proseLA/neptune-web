import { useContext } from 'react';

import { DirectionContext } from '../../../provider/direction/DirectionProvider';
import { LayoutDirection } from '../../direction';

export const useDirection = (): { direction: LayoutDirection; isRTL: boolean } => {
  const direction = useContext(DirectionContext);
  return {
    direction,
    isRTL: direction === 'rtl',
  };
};
