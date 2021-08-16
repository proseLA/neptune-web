import { boolean } from '@storybook/addon-knobs';
import { useState } from 'react';

import CheckboxButton from './CheckboxButton';

export default {
  component: CheckboxButton,
  title: 'CheckboxButton',
};

const onBlur = () => console.log('blur');
const onClick = () => console.log('click');
const onFocus = () => console.log('focus');

export const Basic = () => {
  const [checked, setChecked] = useState(true);
  const disabled = boolean('disabled', false);

  return (
    <CheckboxButton
      aria-label="Toggle email updates"
      checked={checked}
      disabled={disabled}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onChange={() => setChecked(!checked)}
    />
  );
};
