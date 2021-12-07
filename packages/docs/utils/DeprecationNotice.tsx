import { Alert, Sentiment } from '@transferwise/components';
import { ReactElement } from 'react';

type Props = React.PropsWithChildren<{ className?: string }>;

const DeprecationNotice = ({ children, className }: Props): ReactElement => {
  return (
    <Alert type={Sentiment.WARNING} className={className}>
      {children}
    </Alert>
  );
};

export default DeprecationNotice;
