import { Component } from 'react';

import { ErrorBoundaryAlert } from './ErrorBoundaryAlert';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

type Props = { onError?: (error: Error) => void };
type State = { hasError: boolean; isFatalError: boolean };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, isFatalError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true, isFatalError: true };
  }

  componentDidCatch(error: Error) {
    const { onError = noop } = this.props;
    onError(error);
  }

  handleErrorReset = () => {
    this.setState({ hasError: false, isFatalError: false });
  };

  render() {
    const { children } = this.props;
    const { hasError, isFatalError } = this.state;

    return (
      <>
        {hasError && <ErrorBoundaryAlert onDismiss={this.handleErrorReset} />}
        {!isFatalError && children}
      </>
    );
  }
}

export default ErrorBoundary;
