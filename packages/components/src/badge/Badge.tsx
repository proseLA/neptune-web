import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

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

type Props = {
  badge: ReactNode;
  children: ReactNode;
  size?: SizeSmall | SizeMedium | SizeLarge;
  border?: ThemeDark | ThemeLight;
} & CommonProps;

const Badge = ({
  badge,
  className = undefined,
  size = Size.SMALL,
  border = Theme.LIGHT,
  children,
}: Props): ReactElement => {
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
};

export default Badge;
