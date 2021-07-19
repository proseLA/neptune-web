import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Size, Key } from '../common';

export const Tile = ({
  className,
  description,
  disabled,
  href,
  target,
  media,
  onClick,
  size,
  title,
}) => {
  const isSmall = size === Size.SMALL;

  return (
    <a
      className={classNames(
        'decision',
        'flex-column',
        'np-tile',
        'text-no-decoration',
        'text-xs-center',
        className,
        {
          'p-y-5 p-x-4': !isSmall,
          'np-tile--small p-a-2': isSmall,
          disabled,
        },
      )}
      href={href}
      target={target}
      onClick={disabled ? null : onClick}
      onKeyDown={
        disabled
          ? null
          : ({ key }) => {
              if (key === Key.ENTER || Key.SPACE.indexOf(key) > -1) {
                onClick();
              }
            }
      }
      aria-label={title}
    >
      <div className="np-tile__media d-flex justify-content-center">{media}</div>
      <div className="np-tile__title">{title}</div>
      {description && <div className="np-tile__description">{description}</div>}
    </a>
  );
};

Tile.propTypes = {
  /** Classes to apply to the Tile container */
  className: PropTypes.string,
  description: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /** Accepts only Avatar and images */
  media: PropTypes.node.isRequired,
  /** Function called onClick or onKeyDown */
  onClick: PropTypes.func.isRequired,
  /** The size applied to Tile */
  size: PropTypes.oneOf(['sm', 'md']),
  title: PropTypes.node.isRequired,
};

Tile.defaultProps = {
  className: '',
  description: null,
  disabled: false,
  size: Size.MEDIUM,
  target: undefined,
};

export default Tile;
