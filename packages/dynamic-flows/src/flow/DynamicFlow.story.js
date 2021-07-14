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

  const onSuccessClose = (...args) => {
    console.log('onSuccessClose', ...args); // eslint-disable-line
    action('onSuccessClose');
  };

  const onFailureClose = (...args) => {
    console.log('onFailureClose', ...args); // eslint-disable-line
    action('onFailureClose');
  };

  const onStepChange = (...args) => {
    console.log('onStepChange', ...args); // eslint-disable-line
    action('onStepChange');
  };

  const onError = (...args) => {
    console.log('onError', ...args); // eslint-disable-line
    action('onError');
  };

  const baseUrl = '';

  return (
    <DynamicFlow
      flowUrl={flowUrl}
      baseUrl={baseUrl}
      httpClient={mockClient}
      onSuccessClose={onSuccessClose}
      onFailureClose={onFailureClose}
      onStepChange={onStepChange}
      onError={onError}
    />
  );
};
