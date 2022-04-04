import { ReactElement, useEffect, useState } from 'react';
import classnames from 'classnames';

type ProgressProps = {
  className?: string;
  id: string;
  progress: { value: number; max: number };
};

const Progress = ({ className, id, progress }: ProgressProps): ReactElement | null => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(progress.value);
  });

  return (
    <progress
      id={id}
      className={classnames('np-progress-bar', className)}
      {...progress}
      value={value}
    >
      {value}%
    </progress>
  );
};

export default Progress;
