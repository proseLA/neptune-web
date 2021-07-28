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
  const { isRTL } = useDirection();
  const hasError = required && !disabled && !readOnly && !checked;

  const classList = classNames('np-checkbox', {
    checkbox: true,
    'checkbox-lg': secondary,
    'has-error': hasError,
    disabled,
  });

  return (
    <div id={id} className={classList}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>
        <CheckboxButton
          className={classNames({ 'has-error': hasError, 'p-r-2': !isRTL, 'p-l-2': isRTL })}
          checked={checked}
          onFocus={onFocus}
          onChange={() => onChange(!checked)}
          onBlur={onBlur}
          disabled={disabled || readOnly}
        />
        <span className="np-checkbox__text">
          {label}
          {required && '*'}
          {secondary && <small>{secondary}</small>}
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool.isRequired,
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
  required: false,
  disabled: false,
  readOnly: false,
  secondary: null,
  onFocus: null,
  onBlur: null,
};

export default Checkbox;
