import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';
import './BottomSheet.css';
import { Position } from '../propsValues/position';

const BottomSheet = forwardRef(
  ({ children, open, className, onClose }, ref) =>
    open && (
      <Dimmer open={open} onClose={onClose}>
        <SlidingPanel
          open={open}
          position={Position.BOTTOM}
          className={classNames('np-bottom-sheet', className)}
          ref={ref}
        >
          {children}
        </SlidingPanel>
      </Dimmer>
    ),
);

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

BottomSheet.defaultProps = {
  className: undefined,
  open: false,
};

export default BottomSheet;
