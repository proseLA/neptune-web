import { useContext } from 'react';
import { ThemeContext } from '../../../provider/theme/ThemeProvider';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return {
    theme,
  };
};
