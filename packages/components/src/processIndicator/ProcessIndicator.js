import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { Status, Size, Theme } from '../common';

import './ProcessIndicator.css';

const radius = { xs: 11, sm: 22, xl: 61 };
export const ANIMATION_DURATION_IN_MS = 1500;

class ProcessIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      size: props.size,
    };
    this.interval = null;
    this.timeout = null;
  }

  /**
   * Create interval for animation duration (1500ms)
   * Update state only at the end of every interval
   * (end of animation loop) if props changed before end of animation
   */
  componentDidMount() {
    this.interval = setInterval(() => {
      const statusFromState = this.state.status;
      const sizeFromState = this.state.size;

      const statusFromProps = this.props.status;
      const sizeFromProps = this.props.size;

      if (statusFromState !== statusFromProps) {
        this.setState({ status: statusFromProps }, this.runCallBack(statusFromProps));
      }

      if (sizeFromState !== sizeFromProps) {
        this.setState({ size: sizeFromProps });
      }
    }, ANIMATION_DURATION_IN_MS);
  }

  /**
   * Only trigger render if comopnent's state got
   * updated from interval callback
   *
   * @param nextProps
   * @param nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    const isSameStatus = nextProps.status === nextState.status;
    const isSameSize = nextProps.size === nextState.size;

    return isSameStatus && isSameSize;
  }

  // Clear interval before destroying component
  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  runCallBack = (statusFromProps) => {
    const { onAnimationCompleted } = this.props;
    if (onAnimationCompleted) {
      this.timeouts = setTimeout(() => {
        onAnimationCompleted(statusFromProps);
      }, ANIMATION_DURATION_IN_MS);
    }
  };

  render() {
    const { className, 'data-testid': dataTestId, theme } = this.props;
    const { size, status } = this.state;
    const classes = classNames(`process process-${size} process--${theme}`, className, {
      [`process-danger`]: status === Status.FAILED,
      [`process-stopped`]: status === Status.HIDDEN,
      [`process-success`]: status === Status.SUCCEEDED,
    });

    return (
      <span className={classes} data-testid={dataTestId}>
        <span className="process-icon-container">
          <span className="process-icon-horizontal" />
          <span className="process-icon-vertical" />
        </span>
        <svg xmlns="http://www.w3.org/2000/svg">
          <circle
            className="process-circle"
            cx="50%"
            cy="50%"
            r={radius[this.state.size]}
            fillOpacity="0.0"
          />
        </svg>
      </span>
    );
  }
}
ProcessIndicator.propTypes = {
  status: PropTypes.oneOf(['processing', 'failed', 'succeeded', 'hidden']),
  size: PropTypes.oneOf(['xs', 'sm', 'xl']),
  onAnimationCompleted: PropTypes.func,
  className: PropTypes.string,
  'data-testid': PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
};

ProcessIndicator.defaultProps = {
  status: Status.PROCESSING,
  size: Size.SMALL,
  onAnimationCompleted: null,
  className: undefined,
  'data-testid': null,
  theme: Theme.LIGHT,
};

export default ProcessIndicator;
