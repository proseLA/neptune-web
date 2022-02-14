import { useContext } from 'react';

import { ThemeContext } from '../../../provider/theme/ThemeProvider';
import { ThemeType } from '../../theme';

export const useTheme = (): ThemeType => {
  return useContext(ThemeContext);
};
