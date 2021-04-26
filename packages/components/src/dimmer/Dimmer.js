import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import withNextPortal from '../withNextPortal/withNextPortal';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';

import './Dimmer.css';

import FocusBoundary from '../common/focusBoundary';

export const EXIT_ANIMATION = 350;

const Dimmer = ({
  children,
  className,
  fadeContentOnEnter,
  fadeContentOnExit,
  onClick,
  open,
  scrollable,
}) => (
  <CSSTransition
    in={open}
    appear
    // Wait for animation to finish before unmount.
    timeout={{ enter: 0, exit: EXIT_ANIMATION }}
    classNames={{
      enter: classNames({ 'dimmer--enter-fade': fadeContentOnEnter }),
      enterDone: classNames('dimmer--enter-done', { 'dimmer--enter-fade': fadeContentOnEnter }),
      exit: classNames('dimmer--exit', { 'dimmer--exit-fade': fadeContentOnExit }),
    }}
    unmountOnExit
  >
    <DimmerContentWrapper>
      <div
        role="presentation"
        className={classNames('dimmer', { 'dimmer--scrollable': scrollable }, className)}
      >
        <FocusBoundary onClose={(event) => onClick && onClick(event)}>{children}</FocusBoundary>
      </div>
    </DimmerContentWrapper>
  </CSSTransition>
);

export const DimmerContentWrapper = ({ children }) => {
  useEffect(() => {
    addNoScrollBodyClass();

    return () => {
      removeNoScrollBodyClass();
    };
  }, []);

  return children;
};

Dimmer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fadeContentOnEnter: PropTypes.bool,
  fadeContentOnExit: PropTypes.bool,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  scrollable: PropTypes.bool,
};

Dimmer.defaultProps = {
  children: null,
  className: undefined,
  fadeContentOnEnter: false,
  fadeContentOnExit: false,
  onClick: undefined,
  open: false,
  scrollable: false,
};

export { Dimmer };

export default withNextPortal(Dimmer);
