import { Alert, Sentiment } from '@transferwise/components';
import { useIntl } from 'react-intl';

import messages from './ErrorBoundary.messages';

type Props = { onDismiss: () => void };

export function ErrorBoundaryAlert({ onDismiss }: Props) {
  const { formatMessage } = useIntl();
  return (
    <Alert
      action={{
        text: formatMessage(messages.retry),
        href: window.location.href,
      }}
      message={formatMessage(messages.errorAlert)}
      type={Sentiment.NEGATIVE}
      className="m-b-3"
      onDismiss={onDismiss}
    />
  );
}
