import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioButton = ({ id, value, name, checked, onChange, disabled, readOnly }) => (
  <>
    <input
      type="radio"
      className="sr-only"
      id={id}
      value={value}
      name={name}
      checked={checked}
      onChange={() => (!checked ? onChange(value) : null)}
      disabled={disabled || readOnly}
    />
    <span className={classNames('tw-radio-button', { checked, disabled: disabled || readOnly })}>
      <span className="tw-radio-check" />
    </span>
  </>
);

RadioButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  readOnly: PropTypes.bool,
};

RadioButton.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  id: null,
  value: '',
  readOnly: false,
};

export default RadioButton;
