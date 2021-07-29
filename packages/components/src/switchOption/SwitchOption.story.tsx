import { useState } from 'react';

import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import { text, boolean } from '@storybook/addon-knobs';
import SwitchOption from './SwitchOption';

export default {
  component: SwitchOption,
  title: 'SwitchOption',
};

export const basic = () => {
  const [checked, setChecked] = useState(false);
  const title = text('title', 'Switch option');
  const content = text('content', 'Normally, the button and icon are vertically centered.');
  const disabled = boolean('disabled', false);
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', false);

  return (
    <SwitchOption
      media={<FastFlagIcon />}
      title={title}
      content={content}
      id="id"
      checked={checked}
      onChange={setChecked}
      complex={false}
      disabled={disabled}
      showMediaAtAllSizes={showMediaAtAllSizes}
      aria-label={title}
    />
  );
};
