import PropTypes from 'prop-types';
import { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import { Theme } from '../common';
import { DirectionContext } from '../provider/direction';
import withNextPortal from '../withNextPortal/withNextPortal';

export const CSS_TRANSITION_DURATION = 400;

export class Snackbar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: '',
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.transitionTimeout);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.text) {
      return false;
    }
    if (
      nextProps.timestamp === this.props.timestamp &&
      nextState.visible === this.state.visible &&
      nextState.text === this.state.text
    ) {
      return false;
    }

    return true;
  }

  setLeaveTimeout = () => {
    const { timeout } = this.props;

    this.timeout = setTimeout(() => {
      this.setState({ visible: false });
    }, timeout);
  };

  componentDidUpdate(previousProps) {
    const { action, text, theme, timestamp } = this.props;

    if (!previousProps.text) {
      this.setState({ visible: true, action, text, theme }, () => {
        this.setLeaveTimeout();
      });
    } else if (previousProps.timestamp !== timestamp) {
      clearTimeout(this.timeout);

      if (this.state.visible) {
        this.setState({ visible: false }, () => {
          this.transitionTimeout = setTimeout(() => {
            this.setState({ visible: true, action, text, theme });
            this.setLeaveTimeout();
          }, CSS_TRANSITION_DURATION);
        });
      } else {
        this.setState({ visible: true, action, text, theme });
        this.setLeaveTimeout();
      }
    }
  }

  render() {
    const { action, text, theme, visible } = this.state;
    const { timeout } = this.props;

    return (
      <div className="snackbar">
        <CSSTransition
          in={visible}
          classNames="snackbar__text-container"
          timeout={{
            appear: 0,
            enter: timeout,
            exit: CSS_TRANSITION_DURATION,
          }}
          unmountOnExit
        >
          <span className={`snackbar__text snackbar__text--${theme}`}>
            {text}
            {action ? (
              <button type="button" className="snackbar__text__action" onClick={action.onClick}>
                {action.label}
              </button>
            ) : null}
          </span>
        </CSSTransition>
      </div>
    );
  }
}

Snackbar.contextType = DirectionContext;

Snackbar.propTypes = {
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  text: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  timeout: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

Snackbar.defaultProps = {
  action: null,
  theme: Theme.LIGHT,
};

export default withNextPortal(Snackbar);
