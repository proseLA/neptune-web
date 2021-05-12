import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import CheckboxButton from '../checkboxButton';

import { useDirection } from '../common/hooks';

const Checkbox = ({
  id,
  checked,
  required,
  disabled,
  readOnly,
  label,
  secondary,
  onChange,
  onFocus,
  onBlur,
}) => {
  const hasError = required && !disabled && !readOnly && !checked;
  const { isRTL } = useDirection();

  const classList = classNames({
    checkbox: true,
    'checkbox-lg': secondary,
    'has-error': hasError,
    disabled,
    'checkbox--rtl': isRTL,
  });

  return (
    <div id={id} className={classList}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>
        {label}
        {required && '*'}
        {secondary && <small>{secondary}</small>}
        <CheckboxButton
          className={classNames({ 'has-error': hasError })}
          checked={checked}
          onFocus={onFocus}
          onChange={() => onChange(!checked)}
          onBlur={onBlur}
          disabled={disabled || readOnly}
        />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.node.isRequired,
  secondary: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

Checkbox.defaultProps = {
  id: null,
  checked: false,
  required: false,
  disabled: false,
  readOnly: false,
  secondary: null,
  onFocus: null,
  onBlur: null,
};

export default Checkbox;
