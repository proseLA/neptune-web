import classNames from 'classnames';
import { ReactElement } from 'react';
import Progress from '../progress';

type SpendingLimitProps = {
  className?: string;
  description?: string;
  id: string;
  title: string;
  progress: { value: number; max: number };
  textEnd: string;
};

const SpendingLimit = ({
  className,
  description,
  id,
  title,
  progress,
  textEnd,
}: SpendingLimitProps): ReactElement | null => {
  return (
    <div className={classNames('np-spending-limit', className)}>
      <label className="np-spending-limits__title" htmlFor={id}>
        <div className="h4">{title}</div>
        {description && <span className="small">{description}</span>}
      </label>
      <Progress id={id} progress={progress} />
      <p className="d-flex justify-content-end h4">{textEnd}</p>
    </div>
  );
};

export default SpendingLimit;
