import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RadioGroup from './RadioGroup';
import Avatar, { AvatarType } from '../avatar';

export default {
  component: RadioGroup,
  title: 'RadioGroup',
};

export const basic = () => {
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
      onChange={(v) => action(v)}
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
    />
  );
};
