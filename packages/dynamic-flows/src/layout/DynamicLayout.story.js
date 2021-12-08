import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

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
    oldOutput: oldOutput.layout,
    newOutput: newOutput.layout,
  };

  const components = select('layout', layouts, oldOutput.layout);
  const submitted = boolean('submitted', true);

  return (
    <DynamicLayout
      components={components}
      submitted={submitted}
      errors={null}
      baseUrl=""
      onAction={onAction}
      onModelChange={onModelChange}
    />
  );
};

const oldOutput = {
  key: 'PAY_ID',
  type: 'form',
  title: 'Pay Using PayID',
  actions: [
    {
      title: 'I have paid',
      type: 'primary',
      exit: true,
      result: {
        paid: 'POTENTIALLY_PAID',
      },
    },
    {
      title: "I'll transfer my money later",
      type: 'secondary',
      exit: true,
      result: {
        paid: 'NOT_PAID',
      },
    },
  ],
  schemas: [
    {
      title: 'Pay Using PayID',
      type: 'string',
      default: 'PayId',
    },
  ],
  layout: [
    {
      type: 'info',
      markdown:
        'Go to your online banking and transfer **50.25 AUD** to our account using the email below.',
    },
    {
      components: [
        {
          context: 'info',
          markdown: 'ZZ',
          type: 'alert',
        },
        {
          type: 'review',
          title: 'Our Bank Details',
          fields: [
            {
              label: 'Email',
              value: 'rahul@wise.com',
            },
          ],
        },
        {
          left: [
            {
              type: 'review',
              fields: [
                {
                  label: 'Account Name',
                  value: 'Wise Australia Pty Ltd',
                },
              ],
            },
          ],
          right: [
            {
              type: 'review',
              fields: [
                {
                  label: 'Amount',
                  value: '50.25 AUD',
                },
              ],
            },
          ],
          type: 'columns',
        },
      ],
      type: 'box',
    },
    {
      type: 'button',
      action: {
        title: 'I have paid',
        type: 'primary',
        exit: true,
        result: {
          paid: 'POTENTIALLY_PAID',
        },
      },
    },
    {
      type: 'button',
      action: {
        title: "I'll transfer my money later",
        type: 'secondary',
        exit: true,
        result: {
          paid: 'NOT_PAID',
        },
      },
    },
  ],
};

const newOutput = {
  key: 'PAY_ID',
  type: 'form',
  title: 'Pay Using PayID',
  actions: [
    {
      title: 'I have paid',
      type: 'primary',
      exit: true,
      result: {
        paid: 'POTENTIALLY_PAID',
      },
      $id: '#payNow',
    },
    {
      title: "I'll transfer my money later",
      type: 'secondary',
      exit: true,
      result: {
        paid: 'NOT_PAID',
      },
      $id: '#payLater',
    },
  ],
  schemas: [
    {
      title: 'Pay Using PayID',
      type: 'string',
      hidden: true,
      default: 'PayId',
    },
  ],
  layout: [
    {
      type: 'info',
      markdown:
        'Go to your online banking and transfer **50.25 AUD** to our account using the email below.',
    },
    {
      components: [
        {
          context: 'info',
          markdown:
            "We've updated our PayID email and no longer require you to enter any reference numbers. Use this PayID going forward.",
          type: 'alert',
        },
        {
          type: 'review',
          title: 'Our Bank Details',
          fields: [
            {
              label: 'Email',
              value: 'rahul@wise.com',
            },
          ],
        },
        {
          left: [
            {
              type: 'review',
              fields: [
                {
                  label: 'Account Name',
                  value: 'Wise Australia Pty Ltd',
                },
              ],
            },
          ],
          right: [
            {
              type: 'review',
              fields: [
                {
                  label: 'Amount',
                  value: '50.25 AUD',
                },
              ],
            },
          ],
          type: 'columns',
        },
      ],
      type: 'box',
    },
    {
      type: 'button',
      action: {
        $ref: '#payNow',
      },
    },
    {
      type: 'button',
      action: {
        $ref: '#payLater',
      },
    },
  ],
};
