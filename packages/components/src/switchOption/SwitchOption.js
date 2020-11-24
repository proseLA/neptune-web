import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import Switch from '../switch';

const SwitchOption = ({ media, title, content, id, checked, onChange, complex }) => {
  const sharedProps = { media, title, content, complex };

  const stopPropagation = (event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
      if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
        event.nativeEvent.stopImmediatePropagation();
      }
    }
  };

  const toggle = (event) => {
    stopPropagation(event);

    onChange(!checked);
  };

  return (
    <Option
      {...sharedProps}
      onClick={toggle}
      button={<Switch id={id} checked={checked} onClick={toggle} />}
    />
  );
};

SwitchOption.propTypes = {
  media: Types.node,
  id: Types.string.isRequired,
  title: Types.node.isRequired,
  content: Types.node,
  checked: Types.bool,
  onChange: Types.func.isRequired,
  complex: Types.bool,
};

SwitchOption.defaultProps = {
  media: null,
  content: null,
  checked: false,
  complex: false,
};

export default SwitchOption;
