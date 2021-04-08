import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../common/RadioButton';

const Radio = ({ label, id, disabled, secondary, ...otherProps }) => (
  <div className={`radio ${secondary ? 'radio-lg' : ''}`} disabled={disabled}>
    <label htmlFor={id}>
      {/* eslint-enable jsx-a11y/label-has-for */}
      <RadioButton id={id} disabled={disabled} {...otherProps} />
      {label}
      {secondary && <small>{secondary}</small>}
    </label>
  </div>
);

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secondary: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  id: null,
  secondary: null,
  value: '',
};

export default Radio;
