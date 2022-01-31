import classNames from 'classnames';
import PropTypes from 'prop-types';

import RadioButton from '../common/RadioButton';

const Radio = ({ label, id, disabled, className, avatar, secondary, ...otherProps }) => {
  return (
    <div
      className={classNames(
        'radio np-radio',
        {
          'radio-lg': secondary,
        },
        className,
      )}
    >
      <label className={classNames({ disabled })} htmlFor={id}>
        <span className="np-radio-button p-r-2">
          <RadioButton id={id} disabled={disabled} {...otherProps} />
        </span>
        <span className="np-radio__text">
          {label}
          {secondary && <small>{secondary}</small>}
        </span>
        {avatar && <span className="np-radio__avatar m-l-auto">{avatar}</span>}
      </label>
    </div>
  );
};

Radio.propTypes = {
  avatar: PropTypes.element,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secondary: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Radio.defaultProps = {
  avatar: undefined,
  checked: false,
  disabled: false,
  id: null,
  secondary: null,
  value: '',
  className: undefined,
};

export default Radio;
