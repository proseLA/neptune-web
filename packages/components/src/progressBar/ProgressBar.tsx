import classNames from 'classnames';
import { ReactElement } from 'react';

type ProgressBarProps = {
  className?: string;
  description?: string;
  id: string;
  label: string;
  progress: number;
  value: string;
};

const ProgressBar = ({
  className,
  description,
  id,
  label,
  progress,
  value,
}: ProgressBarProps): ReactElement | null => {
  return (
    <div className={classNames('np-progress-bar', className)}>
      <label className="np-progress-bar__label" htmlFor={id}>
        <span className="h4 d-block">{label}</span>
        {description && <span className="small">{description}</span>}
      </label>
      <progress id={id} max={'100'} value={progress}>
        {progress}%
      </progress>

      <p className="d-flex justify-content-end h4">{value}</p>
    </div>
  );
};

export default ProgressBar;
