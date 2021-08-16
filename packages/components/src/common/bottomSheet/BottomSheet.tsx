import classNames from 'classnames';
import { useRef, useState, ReactElement, PropsWithChildren, CSSProperties } from 'react';

import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';
import CloseButton from '../closeButton';
import { CommonProps } from '../commonProps';
import { isServerSideRendering } from '../domHelpers';
import { useConditionalListener } from '../hooks';
import { Position } from '../propsValues/position';

const INITIAL_Y_POSITION = 0;

const CONTENT_SCROLL_THRESHOLD = 1;

const MOVE_OFFSET_THRESHOLD = 50;

type Props = PropsWithChildren<{ onClose: () => void; open: boolean } & CommonProps>;

/**
 * Neptune: https://transferwise.github.io/neptune/components/bottom-sheet/
 *
 * Neptune Web: https://transferwise.github.io/neptune-web/components/overlays/BottomSheet
 *
 * @param props
 */
const BottomSheet = (props: Props): ReactElement => {
  const bottomSheetReference = useRef<HTMLDivElement>(null);
  const topBarReference = useRef<HTMLDivElement>(null);
  const contentReference = useRef<HTMLDivElement>(null);

  const [pressed, setPressed] = useState<boolean>(false);

  /**
   * Used to track `requestAnimationFrame` requests
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#return_value
   */
  const animationId = useRef<number>(0);

  /**
   * Difference between initial coordinate ({@link initialYCoordinate})
   * and new position (when user moves component), it's get calculated on `onTouchMove` and `onMouseMove` events
   *
   * @see {@link calculateOffsetAfterMove}
   */
  const moveOffset = useRef<number>(0);
  const initialYCoordinate = useRef<number>(0);

  // apply shadow to the bottom of top-bar when scroll over content
  useConditionalListener({
    attachListener: props.open && !isServerSideRendering(),
    callback: () => {
      if (topBarReference.current !== null) {
        const { classList } = topBarReference.current;
        if (!isContentScrollPositionAtTop()) {
          classList.add('np-bottom-sheet--top-bar--shadow');
        } else {
          classList.remove('np-bottom-sheet--top-bar--shadow');
        }
      }
    },
    eventType: 'scroll',
    parent: isServerSideRendering() ? undefined : document,
  });

  function move(newHeight: number): void {
    if (bottomSheetReference.current !== null) {
      bottomSheetReference.current.style.transform = `translateY(${newHeight}px)`;
    }
  }

  function close(): void {
    setPressed(false);
    moveOffset.current = INITIAL_Y_POSITION;
    if (bottomSheetReference.current !== null) {
      bottomSheetReference.current.style.removeProperty('transform');
    }
    if (props.onClose) {
      props.onClose();
    }
  }

  const onSwipeStart =
    (isMobile: boolean) =>
    (event: TouchEvent & MouseEvent): void => {
      initialYCoordinate.current = (isMobile ? event.touches[0] : event).clientY;
      setPressed(true);
    };

  const onSwipeMove =
    (isMobile: boolean) =>
    (event: TouchEvent & MouseEvent): void => {
      if (pressed) {
        const { clientY } = isMobile ? event.touches[0] : event;

        const offset = calculateOffsetAfterMove(clientY);
        // check whether move is to the bottom only and content scroll position is at the top
        if (offset > INITIAL_Y_POSITION && isContentScrollPositionAtTop()) {
          moveOffset.current = offset;
          animationId.current = requestAnimationFrame(() => {
            if (animationId.current !== undefined && bottomSheetReference.current !== null) {
              move(offset);
            }
          });
        }
      }
    };

  function onSwipeEnd(): void {
    // stop moving component
    cancelAnimationFrame(animationId.current);
    setPressed(false);
    // check whether move down is strong enough
    // and content scroll position is at the top to close the component
    if (moveOffset.current > MOVE_OFFSET_THRESHOLD && isContentScrollPositionAtTop()) {
      close();
    }
    // otherwise move component back to default (initial) position
    else {
      move(INITIAL_Y_POSITION);
    }
    moveOffset.current = INITIAL_Y_POSITION;
  }

  function isContentScrollPositionAtTop(): boolean {
    return (
      contentReference?.current?.scrollTop !== undefined &&
      contentReference.current.scrollTop <= CONTENT_SCROLL_THRESHOLD
    );
  }

  /**
   * Calculates how hard user moves component,
   * result value used to determine whether to hide component or re-position to default state
   *
   * @param afterMoveYCoordinate
   */
  function calculateOffsetAfterMove(afterMoveYCoordinate: number): number {
    return afterMoveYCoordinate - initialYCoordinate.current;
  }

  /**
   * Set `max-height` for content part (in order to keep it scrollable for content overflow cases) of the component
   * and ensures space for safe zone (32px) at the top.
   */
  function setContentMaxHeight(): CSSProperties {
    const safeZoneHeight = '64px';
    const topbarHeight = '32px';
    const windowHight: number = isServerSideRendering() ? 0 : window.innerHeight;
    /**
     * Calculate _real_ height of the screen (taking into account parts of browser interface).
     *
     * See https://css-tricks.com/the-trick-to-viewport-units-on-mobile for more details.
     */
    const screenHeight = `${windowHight * 0.01 * 100}px`;
    return {
      maxHeight: `calc(${screenHeight} - ${safeZoneHeight} - ${topbarHeight})`,
    };
  }
  return (
    <Dimmer open={props.open} fadeContentOnEnter fadeContentOnExit onClose={close}>
      {/* @ts-expect-error remove when SlidingPanel will be written on TS */}
      <SlidingPanel
        ref={bottomSheetReference}
        open={props.open}
        position={Position.BOTTOM}
        className={classNames('np-bottom-sheet', props.className)}
        role="dialog"
        onTouchStart={onSwipeStart(true)}
        onTouchMove={onSwipeMove(true)}
        onTouchEnd={onSwipeEnd}
        onMouseDown={onSwipeStart(false)}
        onMouseMove={onSwipeMove(false)}
        onMouseUp={onSwipeEnd}
      >
        <div ref={topBarReference} className="np-bottom-sheet--top-bar">
          <div className="np-bottom-sheet--handler" />
          {/* @ts-expect-error remove when CloseButton will be written on TS */}
          <CloseButton size={16} className="sr-only np-bottom-sheet--close-btn" onClick={close} />
        </div>
        <div
          ref={contentReference}
          style={setContentMaxHeight()}
          className="np-bottom-sheet--content"
        >
          {props.children}
        </div>
      </SlidingPanel>
    </Dimmer>
  );
};

export default BottomSheet;
