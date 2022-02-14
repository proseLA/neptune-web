import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';

import ActionButton from './ActionButton';

export const Basic = () => {
  const disabled = boolean('disabled', false);
  const label = text('text', 'Button label');

  return (
    <div className="text-xs-center">
      <ActionButton text={label} disabled={disabled} onClick={() => action('Clicked!')} />
    </div>
  );
};

export default {
  title: 'ActionButton',
  component: ActionButton,
} as Meta;
