import React from 'react';

import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import DynamicFlow from './DynamicFlow';
import { mockHttpClient } from './httpClient';

export default {
  component: DynamicFlow,
  title: 'DynamicFlow',
};

export const basic = () => {
  const steps = {
    decision: '/decision',
    recipient: '/recipient',
    layout: '/layout',
    review: '/review',
    confirm: '/confirm',
    final: '/final',
    error: '/error',
  };

  const flowUrl = select('step', steps, '/decision');

  const onClose = () => {
    console.log('onClose'); // eslint-disable-line
    action('onClose');
  };

  const onStepChange = (broadcastAction) => {
    console.log('onStepChange', broadcastAction); // eslint-disable-line
    action('onStepChange');
  };

  return (
    <DynamicFlow
      flowUrl={flowUrl}
      httpClient={mockHttpClient}
      onClose={onClose}
      onStepChange={onStepChange}
    />
  );
};
