import { Alert, Sentiment } from '@transferwise/components';
import classNames from 'classnames';
import { ReactElement } from 'react';

type Props = { className?: string };

const BreakingChangeNotice = ({ className }: Props): ReactElement => {
  return (
    <Alert
      className={classNames('m-y-2', className)}
      message="Breaking change"
      type={Sentiment.NEGATIVE}
    />
  );
};

export default BreakingChangeNotice;
