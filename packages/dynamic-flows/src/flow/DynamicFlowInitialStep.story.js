/* eslint-disable react/forbid-dom-props */
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { useState } from 'react';

import DynamicFlow from './DynamicFlow';
import decisionStep from './examples/decision.json';
import finalStep from './examples/final.json';
import formStep from './examples/form.json';
import layoutStep from './examples/layout.json';
import persistAsyncStep from './examples/persist_async_step.json';
import receiveStep from './examples/recipient_details.json';
import receiveStepRefresh from './examples/recipient_details_refresh.json';
import review from './examples/review.json';

export default {
  component: DynamicFlow,
  title: 'DynamicFlow with InitialStep',
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
    decisionStep,
    finalStep,
    formStep,
    layoutStep,
    persistAsyncStep,
    receiveStep,
    receiveStepRefresh,
    review,
  };

  const selectedInitialStep = select('Initial Step', steps, decisionStep);

  const selectedInitialStepString = JSON.stringify(selectedInitialStep, null, 2);
  return (
    <InteractiveDemo
      key={selectedInitialStepString}
      selectedInitialStep={selectedInitialStepString}
    />
  );
};

function InteractiveDemo({ selectedInitialStep }) {
  const [initialStep, setInitialStep] = useState(selectedInitialStep);

  const onTextAreaChange = (event) => {
    setInitialStep(event.target.value);
  };

  const fetcher = () => Promise.resolve(new Response(initialStep));
  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <div style={{ flexBasis: '50%' }}>
        <h3>Initial Step:</h3>
        <p>
          You can edit the JSON below and see the result on the right.
          <br />
          You can select an initial step from the drop down in the knobs panel.
        </p>
        <textarea
          rows={40}
          style={{ fontFamily: 'monospace', fontSize: '0.9em', width: '100%' }}
          value={initialStep}
          onChange={onTextAreaChange}
        />
      </div>
      <div style={{ flexBasis: '50%' }}>
        <DynamicFlow
          key={initialStep}
          initialStep={safeJSONParse(initialStep)}
          fetcher={fetcher}
          onClose={onClose}
          onStepChange={onStepChange}
          onError={onError}
          onTrackableEvent={onTrackableEvent}
        />
      </div>
    </div>
  );
}

function safeJSONParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    console.warn('JSON parsing error');
    return {
      type: 'final',
      layout: [
        {
          type: 'heading',
          text: 'Error parsing JSON',
        },
        {
          type: 'paragraph',
          text: `The JSON you're typing is temporarily not parseable.`,
        },
        {
          type: 'paragraph',
          text: `Keep typing. Who knows? You might be able to fix it.`,
        },
      ],
    };
  }
}
