import React from 'react';
import PropTypes from 'prop-types';

import Option from '../common/Option';
import CheckboxButton from '../checkboxButton';

const CheckboxOption = ({ media, title, content, name, checked, onChange, complex, disabled }) => {
  const sharedProps = { media, title, content, name, complex, disabled };

  return (
    <Option
      {...sharedProps}
      button={
        <CheckboxButton checked={checked} disabled={disabled} onChange={() => onChange(!checked)} />
      }
    />
  );
};

CheckboxOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  complex: PropTypes.bool,
  content: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  media: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
};

CheckboxOption.defaultProps = {
  complex: false,
  content: null,
  disabled: false,
  id: undefined,
  media: null,
};

export default CheckboxOption;
