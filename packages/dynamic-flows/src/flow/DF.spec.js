import { act } from 'react-dom/test-utils';
import React from 'react';
import { render, waitFor } from '@testing-library/react';

import DynamicFlow from '.';
import { convertStepToLayout, inlineReferences } from './layoutService';

import * as stepService from './stepService';

jest.mock('./stepService', () => ({
  request: jest.fn(),
}));

jest.mock('./layoutService');
jest.mock('../layout', () => 'layout');

// We want to use the original implementation so everything continues to function
const layoutService = jest.requireActual('./layoutService');

convertStepToLayout.mockImplementation(layoutService.convertStepToLayout);
inlineReferences.mockImplementation(layoutService.inlineReferences);

describe('Given a component for rendering a dynamic flow', () => {
  let onClose;
  let onStepChange;
  let request;

  const successAction = {
    label: 'Submit',
    method: 'POST',
    url: '/success',
  };

  const failureAction = {
    label: 'Submit',
    method: 'POST',
    url: '/failure',
  };

  const navigateAction = {
    label: 'Skip',
    method: 'GET',
    url: '/next',
  };

  const actions = [successAction, navigateAction, failureAction];

  const numberSchema = { type: 'number' };
  const stringSchema = { type: 'string', refreshRequirements: true };

  const thingSchema = {
    id: '#thing',
    type: 'object',
    properties: {
      a: numberSchema,
      b: stringSchema,
    },
    required: ['a'],
  };

  const newSchema = {};
  const newLayout = [{ type: 'form', newSchema }];
  const newStep = { type: 'form', layout: newLayout };

  const formStep = {
    type: 'form',
    key: 'create-thing', // For tracking
    // title: 'Step 1',
    // description: 'Please create a thing',
    layout: [
      {
        type: 'form',
        $schema: '#thing',
      },
    ],
    schemas: [thingSchema],
    actions,
    model: { a: 99 },
    refreshFormUrl: '/refresh',
  };

  const formStepNoLayout = { ...formStep };
  delete formStepNoLayout.layout;

  const decisionStep = {
    type: 'decision',
    key: 'decide-thing-type',
    title: 'Thing type',
    description: 'Please choose between types of things',
    options: [
      {
        title: 'Thing one',
        description: 'The first type of thing',
        url: 'https://...',
      },
      {
        title: 'Thing two',
        url: 'https://...',
        enabled: false,
      },
    ],
  };

  const finalStep = {
    type: 'final',
    key: 'thing-final',
    success: true,
    details: {
      image: '/images/1234.png',
      title: 'We create the thing!',
      description: 'You now do stuff with the thing',
      actionTitle: 'Continue',
    },
    result: {
      exitValue: 'value',
    },
  };

  const formUrl = '/form'; // eslint-disable-line
  const formNoLayoutUrl = '/formNoLayout'; // eslint-disable-line
  const decisionUrl = '/decision';
  const finalUrl = '/final'; // eslint-disable-line

  const errorResponse = {
    error: "That's not allowed",
    validation: {
      a: 'something wrong with this',
    },
  };

  const resolve = (response) => {
    return Promise.resolve(response);
  };

  const reject = (response) => {
    return Promise.reject(response);
  };

  const mockApi = (action, model) => {
    // console.log(action, model);
    switch (action.url) {
      case '/form':
        return resolve(formStep);
      case '/formNoLayout':
        return resolve(formStepNoLayout);
      case '/decision':
        return resolve(decisionStep);
      case '/final':
        return resolve(finalStep);
      case '/exit':
        return resolve({});
      case '/navigate':
        return resolve(newStep);
      case '/success':
        return resolve(newStep);
      case '/refresh':
        if (model.failure) {
          return reject(errorResponse);
        }
        return resolve(errorResponse);
      case '/failure':
        return reject(errorResponse);
      default:
        return reject(errorResponse);
    }
  };

  beforeEach(() => {
    request = jest.spyOn(stepService, 'request');
    request.mockImplementation(mockApi);

    onClose = jest.fn();
    onStepChange = jest.fn();
    convertStepToLayout.mockClear();
    inlineReferences.mockClear();
  });

  describe('when there is a decision step with no step layout', () => {
    it.only('should first generate a layout using the layout service', async () => {
      act(() => {
        render(<DynamicFlow flowUrl={decisionUrl} onClose={onClose} onStepChange={onStepChange} />);
      });
      await waitFor(() => expect(convertStepToLayout).toHaveBeenCalledWith(decisionStep));
    });
  });
});
