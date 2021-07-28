import React from 'react';
import PropTypes from 'prop-types';

import Option from '../common/Option';
import RadioButton from '../common/RadioButton';

const RadioOption = ({
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
  const sharedProps = { media, title, content, name, complex, disabled, showMediaAtAllSizes };
  return (
    <Option
      {...sharedProps}
      button={
        <RadioButton
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      }
    />
  );
};

RadioOption.propTypes = {
  media: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  complex: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  showMediaAtAllSizes: PropTypes.bool,
};

RadioOption.defaultProps = {
  media: null,
  content: null,
  complex: false,
  disabled: false,
  showMediaAtAllSizes: false,
  value: '',
};

export default RadioOption;
