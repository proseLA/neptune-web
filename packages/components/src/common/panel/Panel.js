import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useState, forwardRef, useEffect } from 'react';
import { usePopper } from 'react-popper';

import { Position } from '..';
import Dimmer from '../../dimmer';

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
  ({ arrow, children, className, open, onClose, position: placement, anchorRef }, reference) => {
    const [arrowElement, setArrowElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);

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

    return (
      <Dimmer open={open} transparent fadeContentOnEnter fadeContentOnExit onClose={onClose}>
        <div
          ref={setPopperElement}
          style={{ ...styles.popper }}
          {...attributes.popper}
          className={classnames('np-panel', { 'np-panel--open': open }, className)}
        >
          <div ref={reference} className={classnames('np-panel__content')}>
            {children}
            {/* Arrow has to stay inside content to get the same animations as the "dialog" and to get hidden when panel is closed. */}
            {arrow && (
              <div
                ref={setArrowElement}
                className={classnames('np-panel__arrow')}
                style={styles.arrow}
              />
            )}
          </div>
        </div>
      </Dimmer>
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
  anchorRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
};

export default Panel;
