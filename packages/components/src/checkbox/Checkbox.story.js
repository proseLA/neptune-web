import { boolean, text } from '@storybook/addon-knobs';
import { useState } from 'react';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const Basic = () => {
  const [checked, setChecked] = useState(true);
  const required = boolean('required', false);
  const disabled = boolean('disabled', false);
  const readOnly = boolean('readOnly', false);
  const label = text('label', 'This is the label');
  const secondary = text('secondary', '');

  return (
    <Checkbox
      label={label}
      checked={checked}
      required={required}
      disabled={disabled}
      secondary={secondary}
      readOnly={readOnly}
      onChange={() => setChecked(!checked)}
    />
  );
};
