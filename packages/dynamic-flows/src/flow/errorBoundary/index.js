import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Sentiment } from '@transferwise/components';

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

    handleError = (error, isFatalError = false) => {
      const { onError } = this.props;

      onError(error);
      this.setState({ hasError: true, isFatalError });
    };

    handleErrorReset = () => {
      this.setState({ hasError: false, isFatalError: false });
    };

    render() {
      const { hasError, isFatalError } = this.state;

      return (
        <>
          {hasError && (
            <Alert
              action={{
                text: 'Retry',
                href: window.location.href,
              }}
              message="Oops. Something went wrong..."
              onDismiss={this.handleErrorReset}
              type={Sentiment.NEGATIVE}
              className="m-a-3"
            />
          )}

          {!isFatalError && (
            <WrappedComponent
              {...this.props}
              onError={this.handleError}
              onErrorReset={this.handleErrorReset}
            />
          )}
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

  return ErrorBoundary;
};

export { withErrorBoundary };
