import { select, boolean } from '@storybook/addon-knobs';

import PhoneNumberInput from './PhoneNumberInput';

export default {
  component: PhoneNumberInput,
  title: 'PhoneNumberInput',
};

export const Basic = () => {
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const size = select('size', ['sm', 'md', 'lg'], 'md');

  return (
    <PhoneNumberInput
      disabled={disabled}
      required={required}
      size={size}
      searchPlaceholder="searchPlaceholder"
      placeholder="placeholder"
      onChange={console.log}
    />
  );
};
