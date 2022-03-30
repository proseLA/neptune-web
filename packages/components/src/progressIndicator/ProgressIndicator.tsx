import classNames from 'classnames';
import { ReactElement } from 'react';

type ProgressIndicatorProps = {
  progress: string;
  className?: string;
  description?: string;
  title: string;
  value: string;
};

const ProgressIndicator = ({
  progress,
  className,
  description,
  title,
  value,
}: ProgressIndicatorProps): ReactElement | null => {
  return (
    <div className={classNames('np-progress-indicator', className)}>
      <div className="np-progress-indicator__title h4">{title}</div>
      {description && <div className="small">{description}</div>}
      <div className={'np-progress-indicator__bar m-t-1'}>
        <div
          style={{ width: progress }}
          className={
            'np-progress-indicator__bar__content np-progress-indicator__bar__content--accent p-y-1'
          }
        />
      </div>
      <div className={'np-progress-indicator__value d-flex justify-content-end h4'}>{value}</div>
    </div>
  );
};

export default ProgressIndicator;
