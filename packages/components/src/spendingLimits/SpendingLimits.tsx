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

const SpendingLimits = ({
  className,
  description,
  id,
  title,
  progress,
  textEnd,
}: SpendingLimitProps): ReactElement | null => {
  return (
    <div className={classNames('np-progress-bar', className)}>
      <label className="np-progress-bar__title" htmlFor={id}>
        <span className="h4 d-block">{title}</span>
        {description && <span className="small">{description}</span>}
      </label>
      <Progress id={id} progress={progress} />

      <p className="d-flex justify-content-end h4">{textEnd}</p>
    </div>
  );
};

export default SpendingLimits;
