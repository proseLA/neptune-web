import { Children, cloneElement, createContext, isValidElement, PropsWithChildren } from 'react';

import { Theme, ThemeType } from '../../common/theme';

export const ThemeContext = createContext<ThemeType>(Theme.LIGHT);

type ThemeProviderProps = PropsWithChildren<{
  theme: ThemeType;
}>;

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  console.log('children', children);
  const themedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          '[ThemeProvider] Trying to inject `className` to an invalid React element, this will be skipped!',
        );
      }
      return child;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const classNames = [`np-theme-${theme}`, child?.props?.className].filter(Boolean).join(' ');

    return cloneElement(child, {
      className: classNames,
    });
  });

  return <ThemeContext.Provider value={theme}>{themedChildren}</ThemeContext.Provider>;
};
