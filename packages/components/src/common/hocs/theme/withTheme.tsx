import { ThemeType } from '../..';
import { useTheme } from '../../hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDisplayName(Component: React.ComponentType<any>): string {
  return Component.displayName || Component.name || 'Component';
}

type WithThemeProps = {
  theme: ThemeType;
};

export type WrappedComponentProps<P> = Omit<P, keyof WithThemeProps>;

export function withTheme<P extends WrappedComponentProps<P>>(
  WrappedComponent: React.ComponentType<P & WithThemeProps>,
) {
  const WithTheme: React.FC<P> & {
    WrappedComponent: React.ComponentType<P & WithThemeProps>;
  } = (props) => {
    const theme = useTheme();

    return <WrappedComponent theme={theme} {...props} />;
  };

  WithTheme.displayName = `withTheme(${getDisplayName(WrappedComponent)})`;
  WithTheme.WrappedComponent = WrappedComponent;

  return WithTheme;
}
