import React from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';
import { NavigateAway as NavigateAwayIcon } from '@transferwise/icons';
import { AriaLabelProp, CommonProps, LinkProps } from '../common';

import messages from './Link.messages';

type Props = React.PropsWithChildren<CommonProps & AriaLabelProp & LinkProps>;

/**
 * Standard Link component with navigate away icon
 *
 * Docs link: https://transferwise.github.io/neptune-web/components/content/Link
 */
function Link({ className, children, href, target, 'aria-label': ariaLabel }: Props) {
  const { formatMessage } = useIntl();
  const isBlank = target === '_blank';

  const getAriaLabel = (): string => {
    return ariaLabel || formatMessage(isBlank ? messages.ariaLabelNewTab : messages.ariaLabel);
  };

  return (
    <a
      href={href}
      target={target}
      className={classNames(`np-link d-inline-flex`, className)}
      aria-label={getAriaLabel()}
      rel={isBlank ? 'noreferrer' : undefined}
    >
      {children}
      {isBlank && <NavigateAwayIcon className="m-l-05" />}
    </a>
  );
}

export default Link;
