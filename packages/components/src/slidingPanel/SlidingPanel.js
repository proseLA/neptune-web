import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export const EXIT_ANIMATION = 350;

const SlidingPanel = forwardRef(
  (
    {
      children,
      className,
      open,
      position,
      showSlidingPanelBorder,
      slidingPanelPositionFixed,
      ...rest
    },
    reference,
  ) => {
    return (
      <CSSTransition
        {...rest}
        in={open}
        // Wait for animation to finish before unmount.
        timeout={{ enter: 0, exit: EXIT_ANIMATION }}
        classNames={classNames(
          `sliding-panel--open-${position}`,
          showSlidingPanelBorder && `sliding-panel--border-${position}`,
          {
            'sliding-panel--fixed': slidingPanelPositionFixed,
          },
          'sliding-panel',
        )}
        appear
        unmountOnExit
      >
        <div ref={reference} className={classNames('sliding-panel', className)}>
          {children}
        </div>
      </CSSTransition>
    );
  },
);

SlidingPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  showSlidingPanelBorder: PropTypes.bool,
  slidingPanelPositionFixed: PropTypes.bool,
};

SlidingPanel.defaultProps = {
  children: null,
  className: undefined,
  open: false,
  position: 'left',
  showSlidingPanelBorder: false,
  slidingPanelPositionFixed: false,
};

export default SlidingPanel;
