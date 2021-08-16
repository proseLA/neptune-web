import classNames from 'classnames';
import { ReactNode, ReactElement } from 'react';

import { isExpired } from '../utils/pageUtils';

type BadgeProps = {
  children: ReactNode;
  expiryDate?: Date;
  className?: string;
};

const Badge = ({
  children,
  expiryDate = undefined,
  className = undefined,
}: BadgeProps): ReactElement => {
  if (expiryDate !== undefined && isExpired(expiryDate)) {
    // eslint-disable-next-line no-console
    console.warn(`Please delete expired ('${expiryDate.toString()}') and redundant badge!`);
    return <></>;
  }
  return <span className={classNames('badge', 'badge-success', className)}>{children}</span>;
};

export default Badge;
