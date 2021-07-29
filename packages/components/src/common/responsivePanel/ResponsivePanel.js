import { useRef } from 'react';
import PropTypes from 'prop-types';

import { Position, Breakpoint } from '..';
import BottomSheet from '../bottomSheet';
import Panel from '../panel';
import SizeSwapper from '../../sizeSwapper';

const ResponsivePanel = ({ anchorRef, arrow, children, className, onClose, open, position }) => {
  const windowRef = typeof window === 'undefined' ? undefined : window;
  const ref = useRef(null);

  const items = [
    {
      items: [
        <BottomSheet
          open={open}
          ref={ref}
          key="bottomSheet"
          className={className}
          onClose={onClose}
        >
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
          onClose={onClose}
        >
          {children}
        </Panel>,
      ],
      breakpoint: Breakpoint.SMALL,
    },
  ];
  return <SizeSwapper items={items} ref={windowRef} inline />;
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
