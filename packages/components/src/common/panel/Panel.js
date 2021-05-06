import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { usePopper } from 'react-popper';
import CSSTransition from 'react-transition-group/CSSTransition';

import { Position } from '..';
import './Panel.css';
import FocusBoundary from '../focusBoundary';

const POPOVER_OFFSET = [0, 16];

// By default the flip positioning explores only the opposite alternative. So if left is passed and there's no enough space
// the right one gets chosen. If there's no space on both sides popover goes back to the initially chosen one left.
// This mapping forces popover to try the four available positions before going back to the initial chosen one.
const fallbackPlacements = {
  [Position.TOP]: [Position.BOTTOM, Position.RIGHT, Position.LEFT],
  [Position.BOTTOM]: [Position.TOP, Position.RIGHT, Position.LEFT],
  [Position.LEFT]: [Position.RIGHT, Position.TOP, Position.BOTTOM],
  [Position.RIGHT]: [Position.LEFT, Position.TOP, Position.BOTTOM],
};

const Panel = forwardRef(
  ({ arrow, children, className, open, onClose, position: placement, anchorRef }, ref) => {
    const [arrowElement, setArrowElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    // Do not trigger external onCLose if click is from Panel trigger
    const handleOnClose = (event) => !anchorRef?.current?.contains(event.target) && onClose(event);

    const modifiers = [];

    if (arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrowElement,
          options: {
            padding: 8, // 8px from the edges of the popper
          },
        },
      });
      // This lets you displace a popper element from its reference element.
      modifiers.push({ name: 'offset', options: { offset: POPOVER_OFFSET } });
    }
    if (fallbackPlacements[placement]) {
      modifiers.push({
        name: 'flip',
        options: {
          fallbackPlacements: fallbackPlacements[placement],
        },
      });
    }

    const { styles, attributes, forceUpdate } = usePopper(anchorRef.current, popperElement, {
      placement,
      modifiers,
    });

    // If the trigger is not visible when the position is calculated, it will be incorrect. Because this can happen repeatedly (on resize for example),
    // it is most simple just to always position before opening
    useEffect(() => {
      if (open && forceUpdate) {
        forceUpdate();
      }
    }, [open]);
    // Popper recommends to use the popper element as a wrapper around an inner element that can have any CSS property transitioned for animations.

    return (
      <CSSTransition
        in={open}
        appear
        // Wait for animation to finish before unmount.
        timeout={{ enter: 0, exit: 350 }}
        classNames={{
          enterDone: 'np-panel--open',
        }}
        unmountOnExit
      >
        <FocusBoundary onClose={handleOnClose}>
          <div
            ref={setPopperElement}
            style={{ ...styles.popper }}
            {...attributes.popper}
            className={classnames('np-panel', className)}
          >
            <div ref={ref} className={classnames('np-panel__content')}>
              {children}
              {/* Arrow has to stay inside content to get the same animations as the "dialog" and to get hidden when panel is closed. */}
              {arrow && (
                <div
                  className={classnames('np-panel__arrow')}
                  ref={setArrowElement}
                  style={styles.arrow}
                />
              )}
            </div>
          </div>
        </FocusBoundary>
      </CSSTransition>
    );
  },
);

Panel.Position = {
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
  RIGHT: Position.RIGHT,
  TOP: Position.TOP,
};

Panel.defaultProps = {
  arrow: false,
  className: undefined,
  open: false,
  position: Panel.Position.TOP,
};

Panel.propTypes = {
  arrow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf([
    Panel.Position.BOTTOM,
    Panel.Position.LEFT,
    Panel.Position.RIGHT,
    Panel.Position.TOP,
  ]),
  // Ref currently doesn't have a clear defined propType
  // https://github.com/facebook/prop-types/issues/240
  // eslint-disable-next-line
  anchorRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default Panel;
