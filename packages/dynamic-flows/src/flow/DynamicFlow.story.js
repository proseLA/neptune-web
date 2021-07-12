import React from 'react';

import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import DynamicFlow from './DynamicFlow';
import { mockClient } from './client';

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
    recipient_details: '/recipient_details',
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

  const baseUrl = '';

  return (
    <DynamicFlow
      flowUrl={flowUrl}
      baseUrl={baseUrl}
      httpClient={mockClient}
      onClose={onClose}
      onStepChange={onStepChange}
    />
  );
};
