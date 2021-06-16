import { defineMessages } from 'react-intl';

export default defineMessages({
  errorAlert: {
    id: 'dynamicFlows.ErrorBoundary.errorAlert',
    defaultMessage: 'Oops. Something went wrong...',
    description: 'Generic error message for when something has gone wrong',
  },
  retry: {
    id: 'dynamicFlows.ErrorBoundary.retry',
    defaultMessage: 'Retry',
    description: 'Retry',
  },
});
