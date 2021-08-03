import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { IntlContext } from 'react-intl';
import { Opts, WrappedComponentProps, WithIntlProps } from 'react-intl/src/components/injectIntl';
import { SafeIntlShape } from './types';
import { defaultIntl } from './intl';

function getDisplayName(Component: React.ComponentType<any>): string {
  return Component.displayName || Component.name || 'Component';
}

export function injectSafeIntl<
  IntlPropName extends string = 'intl',
  P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>,
  ForwardRef extends boolean = false,
  T extends React.ComponentType<P> = any
>(
  WrappedComponent: React.ComponentType<P>,
  options?: Opts<IntlPropName, ForwardRef>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<WithIntlProps<P>> & React.RefAttributes<T>
> & {
  WrappedComponent: React.ComponentType<P>;
} {
  const { intlPropName = 'intl', forwardRef = false, enforceContext = true } = options || {};

  const WithIntl: React.FC<P & { forwardedRef?: React.Ref<any> }> & {
    WrappedComponent: React.ComponentType<P>;
  } = (props) => (
    <IntlContext.Consumer>
      {(intl: SafeIntlShape): React.ReactNode => {
        let safeIntl = intl;
        if (enforceContext && !safeIntl) {
          // eslint-disable-next-line no-console
          console.warn(
            '<IntlProvider> needs to exist in the component ancestry.',
            `Falling back to "${defaultIntl.locale}".`,
          );
          safeIntl = defaultIntl;
        }
        const intlProp = { [intlPropName]: safeIntl };

        return (
          <WrappedComponent {...props} {...intlProp} ref={forwardRef ? props.forwardedRef : null} />
        );
      }}
    </IntlContext.Consumer>
  );
  WithIntl.displayName = `injectIntl(${getDisplayName(WrappedComponent)})`;
  WithIntl.WrappedComponent = WrappedComponent;

  if (forwardRef) {
    return hoistNonReactStatics(
      React.forwardRef<T, P>((props: P, ref) => <WithIntl {...props} forwardedRef={ref} />),
      WrappedComponent,
    ) as any;
  }

  return hoistNonReactStatics(WithIntl, WrappedComponent) as any;
}
