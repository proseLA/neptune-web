import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import withNextPortal from '../withNextPortal/withNextPortal';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';

import FocusBoundary from '../common/focusBoundary';
import DimmerManager from './dimmerManager';
import { isIosDevice } from '../common/deviceDetection';

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

  const handleTouchMove = (event) => {
    const isTouchedElementDimmer = event.target.className.startsWith('dimmer');
    // disable scroll on iOS devices for Dimmer area
    // this is because of bug in WebKit https://bugs.webkit.org/show_bug.cgi?id=220908
    // note: scrolling still works for children(s) as expected
    if (isIosDevice() && isTouchedElementDimmer) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  const onEnter = () => dimmerManager.add(dimmerRef);
  const onExited = () => dimmerManager.remove(dimmerRef);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      if (dimmerRef.current) {
        dimmerRef.current.addEventListener('touchmove', handleTouchMove);
      }
      if (!transparent) {
        addNoScrollBodyClass();
      }
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (dimmerRef.current) {
        dimmerRef.current.removeEventListener('touchmove', handleTouchMove);
      }
      removeNoScrollBodyClass();
    };
  }, [open]);

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
    </CSSTransition>
  );
};

Dimmer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disableClickToClose: PropTypes.bool,
  fadeContentOnEnter: PropTypes.bool,
  fadeContentOnExit: PropTypes.bool,
  /** Sets the background to transparent and prevents body scroll locking */
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
