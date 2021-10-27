import { useContext } from 'react';

import { DirectionContext } from '../providers/DirectionProvider';

export function useDirection() {
  return useContext(DirectionContext);
}
