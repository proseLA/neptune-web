import PropTypes from 'prop-types';

import { Position, Breakpoint } from '..';
import { useClientWidth } from '../../common/hooks';
import BottomSheet from '../bottomSheet';
import Panel from '../panel';

const ResponsivePanel = ({ anchorRef, arrow, children, className, onClose, open, position }) => {
  const windowReference = typeof window === 'undefined' ? undefined : window;

  const [clientWidth] = useClientWidth({ ref: windowReference });

  if (clientWidth >= Breakpoint.SMALL) {
    return (
      <Panel
        key="panel"
        arrow={arrow}
        open={open}
        position={position}
        anchorRef={anchorRef}
        className={className}
        onClose={onClose}
      >
        {children}
      </Panel>
    );
  }
  return (
    <BottomSheet key="bottomSheet" open={open} className={className} onClose={onClose}>
      {children}
    </BottomSheet>
  );
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
