import { boolean, text } from '@storybook/addon-knobs';
import { useState } from 'react';

import Avatar, { AvatarType } from '../avatar';

import Radio from './Radio';

export default {
  component: Radio,
  title: 'Radio',
};

export const Basic = () => {
  const [checked, setChecked] = useState(true);

  const disabled = boolean('disabled', false);
  const label = text('label', 'This is the label');
  const secondary = text('secondary', '');
  const showAvatar = boolean('avatar', false);

  return (
    <Radio
      label={label}
      name="name"
      id="id"
      checked={checked}
      disabled={disabled}
      secondary={secondary}
      avatar={
        showAvatar ? (
          <Avatar type={AvatarType.THUMBNAIL}>
            <img src="https://wise.com/public-resources/assets/flags/square/gbp.svg" alt="" />
          </Avatar>
        ) : null
      }
      onChange={() => setChecked(!checked)}
    />
  );
};
