import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { CommonProps } from '../common';

type SectionProps = PropsWithChildren<
  CommonProps & {
    withHorizontalPadding?: boolean;
  }
>;

/**
 *
 * Neptune Web: https://transferwise.github.io/neptune-web/components/content/Section
 *
 */
const Section = ({ children, className, withHorizontalPadding = false }: SectionProps) => {
  return (
    <div
      className={classNames('np-section', className, {
        'np-section--with-horizontal-padding': withHorizontalPadding,
      })}
    >
      {children}
    </div>
  );
};

export default Section;
