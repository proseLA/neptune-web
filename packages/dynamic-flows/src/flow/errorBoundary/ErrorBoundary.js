import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Sentiment } from '@transferwise/components';
import { injectIntl } from 'react-intl';

import messages from './ErrorBoundary.messages';

const withErrorBoundary = (WrappedComponent) => {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, isFatalError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true, isFatalError: true };
    }

    componentDidCatch(error) {
      const { onError } = this.props;

      onError(error);
    }

    handleErrorReset = () => {
      this.setState({ hasError: false, isFatalError: false });
    };

    render() {
      const { intl } = this.props;
      const { hasError, isFatalError } = this.state;

      return (
        <>
          {hasError && (
            <Alert
              action={{
                text: intl.formatMessage(messages.retry),
                href: window.location.href,
              }}
              message={intl.formatMessage(messages.errorAlert)}
              onDismiss={this.handleErrorReset}
              type={Sentiment.NEGATIVE}
              className="m-a-3"
            />
          )}

          {!isFatalError && <WrappedComponent {...this.props} />}
        </>
      );
    }
  }

  ErrorBoundary.propTypes = {
    onError: PropTypes.func,
  };

  ErrorBoundary.defaultProps = {
    onError: () => {},
  };

  return injectIntl(ErrorBoundary);
};

export { withErrorBoundary };
