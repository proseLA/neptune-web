import { useContext } from 'react';

import { DirectionContext } from '../../../provider/direction/DirectionProvider';

export const useDirection = () => {
  const direction = useContext(DirectionContext);
  return {
    direction,
    isRTL: direction === 'rtl',
  };
};
