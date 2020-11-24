import React from 'react';

import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SwitchOption from './SwitchOption';

export default {
  component: SwitchOption,
  title: 'SwitchOption',
};

export const basic = () => {
  const checked = boolean('checked', true);
  const title = text('title', 'Title');
  const content = text('content', 'Content');

  return (
    <SwitchOption
      media={<FastFlagIcon />}
      title={title}
      content={content}
      id="id"
      checked={checked}
      onChange={action('onClick')}
      complex={false}
    />
  );
};
