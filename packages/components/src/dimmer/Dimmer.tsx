import classNames from 'classnames';
import { MouseEvent, ReactElement, ReactNode, useCallback, useEffect, useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import { addNoScrollBodyClass, CommonProps, removeNoScrollBodyClass } from '../common';
import { isIosDevice } from '../common/deviceDetection';
import FocusBoundary from '../common/focusBoundary';
import withNextPortal from '../withNextPortal/withNextPortal';

import DimmerManager from './dimmerManager';

export const EXIT_ANIMATION = 350;

const dimmerManager = new DimmerManager();

type DimmerProps = CommonProps & {
  children?: ReactNode;
  disableClickToClose?: boolean;
  fadeContentOnEnter?: boolean;
  fadeContentOnExit?: boolean;
  open?: boolean;
  scrollable?: boolean;
  transparent?: boolean;
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
};

export const handleTouchMove = (event: Event) => {
  const isTouchedElementDimmer = (event.target as HTMLDivElement).classList.contains('dimmer');

  // disable scroll on iOS devices for Dimmer area
  // this is because of bug in WebKit https://bugs.webkit.org/show_bug.cgi?id=220908
  // note: scrolling still works for children(s) as expected
  if (isIosDevice() && isTouchedElementDimmer) {
    event.stopPropagation();
    event.preventDefault();
  }
};

const Dimmer = ({
  children,
  className,
  disableClickToClose = false,
  fadeContentOnEnter = false,
  fadeContentOnExit = false,
  open = false,
  scrollable = false,
  transparent = false,
  onClose,
}: DimmerProps) => {
  const dimmerReference = useRef<HTMLDivElement>(null);

  const closeOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === dimmerReference.current) {
      onClose?.(event);
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (disableClickToClose || !onClose) {
      return;
    }

    closeOnClick(event);
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }
      event.stopPropagation();

      if (onClose && dimmerReference.current && dimmerManager.isTop(dimmerReference.current)) {
        onClose(event);
      }
    },
    [onClose],
  );

  const onEnter = () => {
    dimmerReference.current && dimmerManager.add(dimmerReference.current);
  };
  const onExited = () => {
    dimmerReference.current && dimmerManager.remove(dimmerReference.current);
  };

  useEffect(() => {
    const localReferenceCopy = dimmerReference.current;

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      localReferenceCopy?.addEventListener('touchmove', handleTouchMove);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      localReferenceCopy?.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleKeyDown, open]);

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
      unmountOnExit
      onEnter={onEnter}
      onExited={onExited}
    >
      <DimmerContentWrapper scrollBody={!transparent}>
        <div
          ref={dimmerReference}
          className={classNames(
            'dimmer',
            { 'dimmer--scrollable': scrollable, 'dimmer--transparent': transparent },
            className,
          )}
          role="presentation"
          onClick={handleClick}
        >
          <FocusBoundary>{children}</FocusBoundary>
        </div>
      </DimmerContentWrapper>
    </CSSTransition>
  );
};

export const DimmerContentWrapper = ({
  children,
  scrollBody,
}: {
  children: ReactElement;
  scrollBody: boolean;
}) => {
  useEffect(() => {
    if (scrollBody) {
      addNoScrollBodyClass();
    }

    return () => {
      if (scrollBody) {
        removeNoScrollBodyClass();
      }
    };
  }, [scrollBody]);

  return children;
};

// Export without the Portal for tests only
export { Dimmer };

export default withNextPortal(Dimmer);
