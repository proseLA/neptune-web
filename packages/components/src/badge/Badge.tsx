import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import {
  Size,
  Theme,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  ThemeDark,
  ThemeLight,
  CommonProps,
} from '../common';

import './Badge.css';

type Props = {
  badge: ReactNode;
  children: ReactNode;
  size?: SizeSmall | SizeMedium | SizeLarge;
  border?: ThemeDark | ThemeLight;
} & CommonProps;

function Badge({
  badge,
  className = undefined,
  size = Size.SMALL,
  border = Theme.LIGHT,
  children,
}: Props): ReactElement {
  const classes: string = classNames(
    'tw-badge',
    {
      [`tw-badge-border-${border}`]: border,
      [`tw-badge-${size}`]: size,
    },
    className,
  );

  return (
    <div className={classes}>
      <div className="tw-badge__children">{children}</div>
      <div className="tw-badge__content">{badge}</div>
    </div>
  );
}

export default Badge;
