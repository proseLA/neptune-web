import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import RadioOption from './RadioOption';

export default {
  component: RadioOption,
  title: 'RadioOption',
};

export const Basic = () => {
  const checked = boolean('checked', true);
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', false);
  const title = text('title', 'title');
  const content = text('content', 'content');
  return (
    <RadioOption
      media={<FastFlagIcon />}
      title={title}
      content={content}
      id="id"
      name="radio-option"
      checked={checked}
      complex={false}
      disabled={false}
      value="value"
      showMediaAtAllSizes={showMediaAtAllSizes}
      onChange={action('checked')}
    />
  );
};
