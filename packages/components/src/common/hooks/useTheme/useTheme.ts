import { useContext } from 'react';

import { ThemeContext } from '../../../provider/theme/ThemeProvider';

export const useTheme = () => {
  return useContext(ThemeContext);
};
