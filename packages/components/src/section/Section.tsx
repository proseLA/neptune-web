import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { CommonProps } from '../common';

type SectionProps = PropsWithChildren<CommonProps>;

/**
 *
 * Neptune Web: https://transferwise.github.io/neptune-web/components/content/Section
 *
 */
const Section = ({ children, className }: SectionProps) => {
  return <div className={classNames('np-section', className)}>{children}</div>;
};

export default Section;
