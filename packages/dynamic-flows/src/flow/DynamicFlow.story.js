import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import DynamicFlow from './DynamicFlow';
import { mockFetcher } from './_storybook/mockFetcher';

export default {
  component: DynamicFlow,
  title: 'DynamicFlow',
};

const onClose = (...args) => {
  // eslint-disable-next-line no-console
  console.log('onClose', ...args);
  action('onClose');
};

const onStepChange = (...args) => {
  // eslint-disable-next-line no-console
  console.log('onStepChange', ...args);
  action('onStepChange');
};

const onError = (...args) => {
  // eslint-disable-next-line no-console
  console.log('onError', ...args);
  action('onError');
};

const onTrackableEvent = (...args) => {
  // eslint-disable-next-line no-console
  console.log('onTrackableEvent', ...args);
  action('onTrackableEvent');
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
    recipient_details: '/recipient-details',
  };

  const flowUrl = select('step', steps, '/decision');

  return (
    <DynamicFlow
      flowUrl={flowUrl}
      fetcher={mockFetcher}
      onClose={onClose}
      onStepChange={onStepChange}
      onError={onError}
      onTrackableEvent={onTrackableEvent}
    />
  );
};
