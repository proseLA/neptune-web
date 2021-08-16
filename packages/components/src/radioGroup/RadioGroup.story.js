import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import Avatar, { AvatarType } from '../avatar';

import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'RadioGroup',
};

export const Basic = () => {
  const showAvatars = boolean('avatar', false);

  const avatar = showAvatars ? (
    <Avatar type={AvatarType.THUMBNAIL}>
      <img src="https://wise.com/public-resources/assets/flags/square/gbp.svg" alt="" />
    </Avatar>
  ) : undefined;

  return (
    <RadioGroup
      selectedValue="radio-2"
      name="radio-group"
      radios={[
        {
          value: 'radio-1',
          label: 'Radio1',
          secondary: 'Secondary line 1',
          name: 'name',
          disabled: false,
          avatar,
        },
        {
          value: 'radio-2',
          label: 'Radio2',
          secondary: 'Secondary line 2',
          name: 'name',
          disabled: false,
          avatar,
        },
        {
          value: 'radio-3',
          label: 'Radio3',
          secondary: 'Secondary line 3',
          name: 'name',
          disabled: true,
          avatar,
        },
      ]}
      onChange={(v) => action(v)}
    />
  );
};
