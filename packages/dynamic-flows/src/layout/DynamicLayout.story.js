import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import DynamicLayout from './DynamicLayout';
import { convertStepToLayout } from '../flow/layoutService';
import allComponentsLayout from './layouts/all.json';
import reviewStepLayout from './layouts/review.json';
import successStepLayout from './layouts/success.json';
import finalStep from './layouts/finalStep.json';
import finalStepLayout from './layouts/final-step-layout.json';

export default {
  component: DynamicLayout,
  title: 'DynamicLayout',
};

export const basic = () => {
  const layouts = {
    'All components layout': allComponentsLayout,
    'Review step layout': reviewStepLayout,
    'Success step layout': successStepLayout,
    'Final step layout': finalStepLayout,
    'Final step (converted)': convertStepToLayout(finalStep),
  };

  const components = select('layout', layouts, allComponentsLayout);
  const submitted = boolean('submitted', true);

  const onModelChange = (model, isValid, schema) => {
    console.log('onModelChange', model, isValid, schema); // eslint-disable-line
    action('onModelChange')(model);
  };

  const onAction = (actionObject) => {
    console.log('onAction', actionObject); // eslint-disable-line
    action('onAction')(actionObject);
  };

  return (
    <DynamicLayout
      components={components}
      onAction={onAction}
      onModelChange={onModelChange}
      submitted={submitted}
      errors={{ lastname: 'Last name is required' }}
      baseUrl=""
    />
  );
};
