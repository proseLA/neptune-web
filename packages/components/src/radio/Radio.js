import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RadioButton from '../common/RadioButton';

import { useDirection } from '../common/hooks';

const Radio = ({ label, id, disabled, avatar, secondary, ...otherProps }) => {
  const { isRTL } = useDirection();
  return (
    <div
      className={classNames('radio np-radio', {
        'radio-lg': secondary,
        disabled,
      })}
      disabled={disabled}
    >
      <label htmlFor={id}>
        <span className={classNames('np-radio-button', { 'p-r-2': !isRTL, 'p-l-2': isRTL })}>
          <RadioButton id={id} disabled={disabled} {...otherProps} />
        </span>
        <span className="np-radio__text">
          {label}
          {secondary && <small>{secondary}</small>}
        </span>
        {avatar && (
          <span
            className={classNames('np-radio__avatar', { 'm-l-auto': !isRTL, 'm-r-auto': isRTL })}
          >
            {avatar}
          </span>
        )}
      </label>
    </div>
  );
};

Radio.propTypes = {
  avatar: PropTypes.element,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secondary: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Radio.defaultProps = {
  avatar: undefined,
  disabled: false,
  id: null,
  secondary: null,
  value: '',
};

export default Radio;
