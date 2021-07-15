import React, { ComponentType, MouseEvent, ReactChild } from 'react';

import Option from '../common/Option';
import Switch from '../switch';

type Props = {
  checked?: boolean;
  complex?: boolean;
  content?: ReactChild;
  disabled?: boolean;
  id?: string;
  media?: ReactChild;
  onChange: (newValue: boolean)=>void;
  title: ReactChild;
}

const SwitchOption: ComponentType<Props> = ({ checked, complex, content, disabled, id, media, onChange, title }) => {
  const sharedProps = { media, title, content, complex, disabled };

  const stopPropagation = (event?: MouseEvent<HTMLSpanElement>) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
      if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
        event.nativeEvent.stopImmediatePropagation();
      }
    }
  };

  const toggle = (event?: MouseEvent<HTMLSpanElement>) => {
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

export default SwitchOption;
