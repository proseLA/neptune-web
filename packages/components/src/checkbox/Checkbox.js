import classNames from 'classnames';
import PropTypes from 'prop-types';

import CheckboxButton from '../checkboxButton';

const Checkbox = ({
  id,
  checked,
  required,
  disabled,
  readOnly,
  label,
  className,
  secondary,
  onChange,
  onFocus,
  onBlur,
}) => {
  const hasError = required && !disabled && !readOnly && !checked;

  const classList = classNames(
    'np-checkbox',
    {
      checkbox: true,
      'checkbox-lg': secondary,
      'has-error': hasError,
    },
    className,
  );

  return (
    <div id={id} className={classList}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label className={classNames({ disabled })}>
        <CheckboxButton
          className={classNames('p-r-2', { 'has-error': hasError })}
          checked={checked}
          disabled={disabled || readOnly}
          onFocus={onFocus}
          onChange={() => onChange(!checked)}
          onBlur={onBlur}
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
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.node.isRequired,
  secondary: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  className: PropTypes.string,
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
  className: undefined,
};

export default Checkbox;
