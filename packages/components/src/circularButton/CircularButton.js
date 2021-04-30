import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ControlType, Priority } from '../common';
import { typeClassMap, priorityClassMap } from '../button/classMap';

import './CircularButton.css';

const CircularButton = ({ className, children, disabled, icon, priority, type, ...rest }) => {
  const classes = classNames('btn np-btn', typeClassMap[type], priorityClassMap[priority]);

  const iconEl = icon.props.size !== 24 ? cloneElement(icon, { size: 24 }) : icon;

  return (
    <label
      className={classNames(
        'np-circular-btn',
        priority,
        type,
        disabled ? 'disabled' : '',
        className,
      )}
    >
      <input
        type="button"
        aria-label={children}
        className={classes}
        disabled={disabled}
        {...rest}
      />
      {iconEl}
      <span className="np-circular-btn__label">{children}</span>
    </label>
  );
};

CircularButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  priority: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['accent', 'positive', 'negative']),
};

CircularButton.defaultProps = {
  className: undefined,
  disabled: false,
  priority: Priority.PRIMARY,
  type: ControlType.ACCENT,
};

export default CircularButton;
