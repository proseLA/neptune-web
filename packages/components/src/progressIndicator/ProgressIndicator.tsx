import classNames from 'classnames';
import { ReactElement } from 'react';
import { Sentiment } from '../common';
import './ProgressIndicator.css';

type ProgressIndicatorProps = {
  status?: Sentiment;
  width: number;
  className?: string;
  limits: number[];
  outro?: string;
};

const ProgressIndicator = ({
  status,
  width,
  className,
  limits,
  outro,
}: ProgressIndicatorProps): ReactElement | null => {
  return (
    <div className={classNames('np-progress-indicator', className)}>
      <div className={classNames('np-progress-indicator__background', className)}>
        <div
          style={{ width: width }}
          className={classNames('np-progress-indicator__status p-y-1', {
            'np-progress-indicator__status--positive': status === Sentiment.POSITIVE,
            'np-progress-indicator__status--warning': status === Sentiment.WARNING,
            'np-progress-indicator__status--negative': status === Sentiment.NEGATIVE,
          })}
        ></div>
      </div>
      <div className={'np-progress-indicator__limits d-flex justify-content-between small'}>
        {limits.map((limit) => (
          <span key={limit}>{limit}</span>
        ))}
      </div>
      {outro && <p className="m-t-1 small">{outro}</p>}
    </div>
  );
};

export default ProgressIndicator;
