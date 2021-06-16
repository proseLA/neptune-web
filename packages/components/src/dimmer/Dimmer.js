import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import withNextPortal from '../withNextPortal/withNextPortal';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';

import './Dimmer.css';

import FocusBoundary from '../common/focusBoundary';
import DimmerManager from './dimmerManager';

export const EXIT_ANIMATION = 350;

const dimmerManager = new DimmerManager();

const Dimmer = ({
  children,
  className,
  disableClickToClose,
  fadeContentOnEnter,
  fadeContentOnExit,
  transparent,
  onClose,
  open,
  scrollable,
}) => {
  const dimmerRef = useRef();
  const closeOnClick = (e) => {
    if (e.target === dimmerRef.current) {
      onClose(e);
    }
  };
  const handleClick = !disableClickToClose && onClose ? closeOnClick : undefined;

  const handleKeyDown = (event) => {
    if (event.key !== 'Escape') {
      return;
    }
    event.stopPropagation();

    if (onClose && dimmerManager.isTop(dimmerRef)) {
      onClose(event);
    }
  };

  const onEnter = () => dimmerManager.add(dimmerRef);
  const onExited = () => dimmerManager.remove(dimmerRef);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
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
      onEnter={onEnter}
      onExited={onExited}
      unmountOnExit
    >
      <DimmerContentWrapper>
        <div
          className={classNames(
            'dimmer',
            { 'dimmer--scrollable': scrollable, 'dimmer--transparent': transparent },
            className,
          )}
          onClick={handleClick}
          ref={dimmerRef}
          role="presentation"
        >
          <FocusBoundary>{children}</FocusBoundary>
        </div>
      </DimmerContentWrapper>
    </CSSTransition>
  );
};

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
  disableClickToClose: PropTypes.bool,
  fadeContentOnEnter: PropTypes.bool,
  fadeContentOnExit: PropTypes.bool,
  transparent: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  scrollable: PropTypes.bool,
};

Dimmer.defaultProps = {
  children: null,
  className: undefined,
  disableClickToClose: false,
  fadeContentOnEnter: false,
  fadeContentOnExit: false,
  transparent: false,
  onClose: undefined,
  open: false,
  scrollable: false,
};

export { Dimmer };

export default withNextPortal(Dimmer);
