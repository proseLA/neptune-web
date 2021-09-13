import { NavigateAway as NavigateAwayIcon } from '@transferwise/icons';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { AriaLabelProperty, CommonProps, LinkProps } from '../common';

type Props = PropsWithChildren<CommonProps & AriaLabelProperty & LinkProps>;

/**
 * Standard Link component with navigate away icon
 *
 * Documentation: https://transferwise.github.io/neptune-web/components/content/Link
 *
 */
const Link = ({ className, children, href, target, 'aria-label': ariaLabel }: Props) => {
  const isBlank = target === '_blank';

  return (
    <a
      href={href}
      target={target}
      className={classNames(`np-link d-inline-flex`, className)}
      aria-label={ariaLabel}
      rel={isBlank ? 'noreferrer' : undefined}
    >
      {children}
      {isBlank && <NavigateAwayIcon className="m-l-05" />}
    </a>
  );
};

export default Link;
