import { ReactElement } from 'react';
import classnames from 'classnames';
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
 */
function Loader({
  small = false,
  size = Size.EXTRA_LARGE,
  classNames = {},
  ...restProps
}: Props): ReactElement {
  const style = (className: string): string => classNames[className] || className;

  const legacySize: SizeType = small ? Size.EXTRA_SMALL : size;

  return (
    <div
      className={classnames(style('tw-loader'), style(`tw-loader--${legacySize}`))}
      data-testid={restProps['data-testid']}
    >
      {Array(5)
        // @ts-expect-error
        .fill()
        .map((item, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={style('tw-loader__stripe')} key={index} />
        ))}
    </div>
  );
}

export default Loader;
