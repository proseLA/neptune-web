import React from 'react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ProcessIndicator from './ProcessIndicator';
import { Size, Status } from '../common';

export default {
  component: ProcessIndicator,
  title: 'ProcessIndicator',
};

export const basic = () => {
  const size = select('size', Object.values(Size), Size.EXTRA_SMALL);
  const status = select('status', Object.values(Status), Status.PROCESSING);

  return <ProcessIndicator status={status} size={size} onAnimationCompleted={(s) => action(s)} />;
};
