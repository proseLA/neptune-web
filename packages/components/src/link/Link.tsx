import { NavigateAway as NavigateAwayIcon } from '@transferwise/icons';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';

import { AriaLabelProperty, CommonProps, LinkProps } from '../common';

import messages from './Link.messages';

type Props = PropsWithChildren<CommonProps & AriaLabelProperty & LinkProps>;

/**
 * Standard Link component with navigate away icon
 *
 * Docs link: https://transferwise.github.io/neptune-web/components/content/Link
 *
 * @param root0
 * @param root0.className
 * @param root0.children
 * @param root0.href
 * @param root0.target
 * @param root0.'aria-label'
 */
const Link = ({ className, children, href, target, 'aria-label': ariaLabel }: Props) => {
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
};

export default Link;
