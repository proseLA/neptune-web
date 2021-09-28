import classNames from 'classnames';
import PropTypes from 'prop-types';

import CloseButton from '../common/closeButton';
import { Position } from '../common/propsValues/position';
import Dimmer from '../dimmer';
import SlidingPanel from '../slidingPanel';
import { logActionRequiredIf } from '../utilities';

const Drawer = ({ children, className, footerContent, headerTitle, onClose, open, position }) => {
  logActionRequiredIf(
    'Drawer now expects `onClose`, and will soon make this prop required. Please update your usage to provide it.',
    !onClose,
  );

  return (
    <Dimmer open={open} onClose={onClose}>
      <SlidingPanel open={open} position={position}>
        <div className={classNames('np-drawer', className)}>
          <div
            className={classNames('np-drawer-header', {
              'np-drawer-header--withborder': headerTitle,
            })}
          >
            <CloseButton onClick={onClose} />
            {headerTitle && <div className="np-drawer-header--title title-3">{headerTitle}</div>}
          </div>
          {children && <div className={classNames('np-drawer-content')}>{children}</div>}
          {footerContent && <div className={classNames('np-drawer-footer')}>{footerContent}</div>}
        </div>
      </SlidingPanel>
    </Dimmer>
  );
};

Drawer.propTypes = {
  /** The content to appear in the drawer body. */
  children: PropTypes.node,
  className: PropTypes.string,
  /** The content to appear in the drawer footer. */
  footerContent: PropTypes.node,
  /** The content to appear in the drawer header. */
  headerTitle: PropTypes.string,
  /** The action to perform on close click. */
  onClose: PropTypes.func,
  /** The status of Drawer either open or not. */
  open: PropTypes.bool,
  /** The placement of Drawer on the screen either left or right. */
  position: PropTypes.oneOf(['left', 'right']),
};

Drawer.defaultProps = {
  children: null,
  className: undefined,
  footerContent: null,
  headerTitle: null,
  onClose: null,
  open: false,
  position: Position.RIGHT,
};

export default Drawer;
