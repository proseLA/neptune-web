import { renderHook } from '@testing-library/react-hooks';

import { Theme } from '../../../common/theme';
import { ThemeProvider } from '../../../provider';

import { useTheme } from './useTheme';

describe('useTheme', () => {
  it('returns default light theme', () => {
    const {
      result: { current },
    } = renderHook(() => useTheme());

    expect(current).toStrictEqual(Theme.LIGHT);
  });

  it('returns provided theme', () => {
    const {
      result: { current },
    } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider theme={Theme.NAVY}>{children}</ThemeProvider>,
    });

    expect(current).toStrictEqual(Theme.NAVY);
  });

  it('returns closest theme provider value', () => {
    const {
      result: { current },
    } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider theme={Theme.NAVY}>
          <ThemeProvider theme={Theme.DARK}>{children}</ThemeProvider>
        </ThemeProvider>
      ),
    });

    expect(current).toStrictEqual(Theme.DARK);
  });
});
