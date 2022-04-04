import { ReactElement } from 'react';
import classnames from 'classnames';

type ProgressProps = {
  className?: string;
  id: string;
  progress: { value: number; max: number };
};

const Progress = ({ className, id, progress }: ProgressProps): ReactElement | null => {
  return (
    <progress id={id} className={classnames('np-progress-bar', className)} {...progress}>
      {progress.value}%
    </progress>
  );
};

export default Progress;
