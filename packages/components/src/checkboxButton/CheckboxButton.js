import classNames from 'classnames';
import PropTypes from 'prop-types';

const CheckboxButton = ({ checked, className, disabled, onChange, ...rest }) => (
  <span className={classNames('np-checkbox-button', className)}>
    <input {...rest} type="checkbox" disabled={disabled} checked={checked} onChange={onChange} />
    <span className="tw-checkbox-button">
      <span className="tw-checkbox-check" />
    </span>
  </span>
);

CheckboxButton.propTypes = {
  /* Provide this if the CheckboxButton is being used without a label */
  'aria-label': PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

CheckboxButton.defaultProps = {
  'aria-label': undefined,
  checked: false,
  className: undefined,
  disabled: false,
};

export default CheckboxButton;
