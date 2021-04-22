import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import CloseButton from '../common/closeButton';

import './OverlayHeader.css';
import Logo from '../logo';

const OverlayHeader = ({ avatar, onClose, logo }) => {
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  return (
    <Header
      className="np-overlay-header p-a-3"
      leftContent={logo}
      rightContent={
        <>
          {avatar}
          {avatar && closeButton && <span className="separator" />}
          {closeButton}
        </>
      }
    />
  );
};

OverlayHeader.defaultProps = {
  avatar: null,
  logo: <Logo />,
  onClose: null,
};

OverlayHeader.propTypes = {
  /** An Avatar */
  avatar: PropTypes.element,
  logo: PropTypes.node,
  /** Function called when the close is clicked */
  onClose: PropTypes.func,
};

export default OverlayHeader;
