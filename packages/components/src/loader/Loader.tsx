import classnames from 'classnames';
import { ReactElement } from 'react';

import { Size, SizeExtraSmall, SizeSmall, SizeMedium, SizeLarge, SizeExtraLarge } from '../common';

type SizeType = SizeExtraSmall | SizeSmall | SizeMedium | SizeLarge | SizeExtraLarge;

type Props = {
  /**
   * @deprecated use `size` instead
   */
  small?: boolean;
  size?: SizeType;
  // TODO: refactor in favor of prop from `CommonProps` type
  classNames?: Record<string, string>;
  'data-testid'?: string;
};

/**
 * Loader component
 *
 * Docs link: https://transferwise.github.io/neptune-web/components/progress/Loader
 *
 * @param root0
 * @param root0.small
 * @param root0.size
 * @param root0.classNames
 */
const Loader = ({
  small = false,
  size = Size.EXTRA_LARGE,
  classNames = {},
  ...restProps
}: Props): ReactElement => {
  const style = (className: string): string => classNames[className] || className;

  const legacySize: SizeType = small ? Size.EXTRA_SMALL : size;

  return (
    <div
      className={classnames(style('tw-loader'), style(`tw-loader--${legacySize}`))}
      data-testid={restProps['data-testid']}
    >
      {new Array(5).fill(undefined).map((item, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={style('tw-loader__stripe')} />
      ))}
    </div>
  );
};

export default Loader;
