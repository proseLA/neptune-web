import { Alert, Sentiment } from '@transferwise/components';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { injectIntl } from 'react-intl';

import messages from './ErrorBoundary.messages';

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
    const { intl, children } = this.props;
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
            type={Sentiment.NEGATIVE}
            className="m-b-3"
            onDismiss={this.handleErrorReset}
          />
        )}

        {!isFatalError && children}
      </>
    );
  }
}

ErrorBoundary.propTypes = {
  onError: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

ErrorBoundary.defaultProps = {
  onError: () => {},
};

export default injectIntl(ErrorBoundary);
