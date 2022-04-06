import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Size } from '../common';

import { AvatarType } from './avatarTypes';

const Avatar = ({ backgroundColor, children, className, outlined, size, type }) => (
  <div
    className={classnames('tw-avatar', className, `tw-avatar--${size}`, `tw-avatar--${type}`, {
      'tw-avatar--outlined': outlined,
    })}
  >
    <div className="tw-avatar__content" style={{ backgroundColor: backgroundColor || undefined }}>
      {children}
    </div>
  </div>
);

Avatar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  outlined: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['thumbnail', 'icon', 'emoji', 'initials']),
};

Avatar.defaultProps = {
  backgroundColor: null,
  children: null,
  className: null,
  outlined: false,
  size: Size.MEDIUM,
  type: AvatarType.THUMBNAIL,
};

export default Avatar;
