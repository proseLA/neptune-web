import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Position, Breakpoint } from '..';
import { useConditionalListener } from '../hooks';
import BottomSheet from '../bottomSheet';
import Panel from '../panel';
import SizeSwapper from '../../sizeSwapper';

import keyCodes from '../keyCodes';

const ResponsivePanel = ({ anchorRef, arrow, children, className, onClose, open, position }) => {
  const windowRef = typeof window === 'undefined' ? undefined : window;
  const parent = typeof document === 'undefined' ? undefined : document;

  const ref = useRef(null);

  useConditionalListener({
    eventType: 'click',
    callback: (event) =>
      // onClose gets called when click is outside of popover.
      ![ref, anchorRef].some((el) => el?.current?.contains(event.target)) && onClose(),
    attachListener: open,
    parent,
  });

  useConditionalListener({
    eventType: 'keydown',
    // onClose gets called when key down is ESCAPE.
    callback: (event) => event.keyCode === keyCodes.ESCAPE && onClose(),
    attachListener: open,
    parent,
  });

  const items = [
    {
      items: [
        <BottomSheet open={open} ref={ref} key="bottomSheet" className={className}>
          {children}
        </BottomSheet>,
      ],
    },
    {
      items: [
        <Panel
          arrow={arrow}
          open={open}
          position={position}
          ref={ref}
          anchorRef={anchorRef}
          key="panel"
          className={className}
        >
          {children}
        </Panel>,
      ],
      breakpoint: Breakpoint.SMALL,
    },
  ];
  return <SizeSwapper items={items} ref={windowRef} />;
};

ResponsivePanel.defaultProps = {
  arrow: false,
  className: undefined,
  open: false,
  position: Position.TOP,
};

ResponsivePanel.propTypes = {
  arrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Function attached to document click and keydown. It gets called when a close condition provided is met. */
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  anchorRef: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  position: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
};

export default ResponsivePanel;
