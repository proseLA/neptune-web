import React from 'react';
import PropTypes from 'prop-types';

import SlidingPanel from '../slidingPanel';

const Sticky = ({ open, position, children }) => (
  <SlidingPanel open={open} position={position} slidingPanelPositionFixed showSlidingPanelBorder>
    {children}
  </SlidingPanel>
);

Sticky.propTypes = {
  open: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node,
};

Sticky.defaultProps = {
  position: 'bottom',
  children: null,
};

export default Sticky;
