import { useContext } from 'react';

import { ThemeContext } from '../../../provider/theme/ThemeProvider';
import { Theme, ThemeType } from '../../theme';

type ThemeMetaDate = {
  theme: ThemeType;
  isLightMode: boolean;
  isDarkMode: boolean;
};

export const useTheme = (): ThemeMetaDate => {
  const theme: ThemeType = useContext(ThemeContext);
  return {
    theme,
    isLightMode: theme === Theme.LIGHT,
    isDarkMode: theme === Theme.DARK,
  };
};
