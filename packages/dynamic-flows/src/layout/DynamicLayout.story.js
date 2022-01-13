/* eslint-disable react/forbid-dom-props */
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Image } from '@transferwise/components';

import { BaseUrlContext } from '../common/contexts/baseUrlContext/BaseUrlContext';
import { convertStepToLayout, inlineReferences } from '../step/layoutStep/layoutService';

import DynamicLayout from './DynamicLayout';
import allComponentsLayout from './layouts/all.json';
import finalStepLayout from './layouts/final-step-layout.json';
import finalStep from './layouts/finalStep.json';
import payInStep from './layouts/pay-in.json';
import reviewStepLayout from './layouts/review.json';
import successStepLayout from './layouts/success.json';

export default {
  component: DynamicLayout,
  title: 'DynamicLayout',
};

const onModelChange = (model, isValid, schema) => {
  // eslint-disable-next-line no-console
  console.log('onModelChange', model, isValid, schema);
  action('onModelChange')(model);
};

const onAction = (actionObject) => {
  // eslint-disable-next-line no-console
  console.log('onAction', actionObject);
  action('onAction')(actionObject);
};

const payInLayout = convertStepToLayout(payInStep);
const payInLayoutInline = inlineReferences(payInLayout, payInStep.schemas, payInStep.actions, '');

export const basic = () => {
  const layouts = {
    'All components layout': allComponentsLayout,
    'Review step layout': reviewStepLayout,
    'Success step layout': successStepLayout,
    'Final step layout': finalStepLayout,
    'Final step (converted)': convertStepToLayout(finalStep),
    'Pay in': payInLayoutInline,
  };

  const components = select('layout', layouts, finalStepLayout);
  const submitted = boolean('submitted', true);

  return (
    <div style={{ padding: '5em', backgroundColor: '#eee' }}>
      <div style={{ backgroundColor: '#fff' }}>
        <BaseUrlContext.Provider value={{ baseUrl: '' }}>
          <DynamicLayout
            components={components}
            submitted={submitted}
            errors={null}
            baseUrl=""
            onAction={onAction}
            onModelChange={onModelChange}
          />
        </BaseUrlContext.Provider>
      </div>
    </div>
  );
};
