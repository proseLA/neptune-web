import PropTypes from 'prop-types';

import CloseButton from '../common/closeButton';
import FlowHeader from '../common/flowHeader';
import Logo from '../logo';

const OverlayHeader = ({ avatar, onClose, logo }) => {
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  return (
    <div className="np-overlay-header d-flex justify-content-center">
      <FlowHeader
        className="np-overlay-header__content p-a-3"
        leftContent={logo}
        rightContent={
          <>
            {avatar}
            {avatar && closeButton && <span className="separator" />}
            {closeButton}
          </>
        }
      />
    </div>
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
