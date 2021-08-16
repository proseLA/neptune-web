import { text, boolean } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { useState } from 'react';

import SwitchOption from './SwitchOption';

export default {
  component: SwitchOption,
  title: 'SwitchOption',
};

export const Basic = () => {
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
      complex={false}
      disabled={disabled}
      showMediaAtAllSizes={showMediaAtAllSizes}
      aria-label={title}
      onChange={setChecked}
    />
  );
};
