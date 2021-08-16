import { boolean, text } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { useState } from 'react';

import CheckboxOption from './CheckboxOption';

export default {
  component: CheckboxOption,
  title: 'CheckboxOption',
};

export const Basic = () => {
  const [checked, setChecked] = useState(true);
  const content = text('content', 'Normally, the button and icon are vertically centered.');
  const title = text('title', 'Checkbox option');
  const disabled = boolean('disabled', false);
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', false);

  return (
    <CheckboxOption
      id="checkbox-option"
      name="checkbox-option"
      checked={checked}
      disabled={disabled}
      title={title}
      content={content}
      media={<FastFlagIcon />}
      showMediaAtAllSizes={showMediaAtAllSizes}
      onChange={(newValue) => setChecked(newValue)}
    />
  );
};
