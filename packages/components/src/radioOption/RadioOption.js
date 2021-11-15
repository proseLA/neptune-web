import PropTypes from 'prop-types';

import Option from '../common/Option';
import RadioButton from '../common/RadioButton';

const RadioOption = ({
  'aria-label': ariaLabel,
  media,
  title,
  content,
  id,
  name,
  checked,
  onChange,
  complex,
  disabled,
  value,
  showMediaAtAllSizes,
}) => {
  const sharedProps = {
    ariaLabel,
    media,
    title,
    content,
    name,
    complex,
    disabled,
    showMediaAtAllSizes,
  };
  return (
    <Option
      {...sharedProps}
      button={
        <RadioButton
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      }
    />
  );
};

RadioOption.propTypes = {
  'aria-label': PropTypes.string,
  media: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  complex: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  showMediaAtAllSizes: PropTypes.bool,
};

RadioOption.defaultProps = {
  'aria-label': undefined,
  media: null,
  content: null,
  checked: false,
  complex: false,
  disabled: false,
  showMediaAtAllSizes: false,
  value: '',
};

export default RadioOption;
