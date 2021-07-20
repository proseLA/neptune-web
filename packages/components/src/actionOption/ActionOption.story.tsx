import React from 'react';

import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import ActionOption from './ActionOption';

export default {
  component: ActionOption,
  title: 'ActionOption',
};

export const basic = () => {
  const title = text('title', 'Action option');
  const content = text('content', 'Normally, the button and icon are vertically centered.');
  const actionText = text('action', 'Action');
  const disabled = boolean('disabled', false);

  return (
    <ActionOption
      action={actionText}
      media={<FastFlagIcon />}
      title={title}
      content={content}
      onClick={action('Button Clicked')}
      complex={false}
      disabled={disabled}
    />
  );
};
