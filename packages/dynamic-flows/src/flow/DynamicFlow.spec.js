import DynamicLayout from '../layout';
import { mount, wait } from '../test-utils';

import { convertStepToLayout, inlineReferences } from './layoutService';

import DynamicFlow from '.';

jest.mock('./layoutService');
jest.mock(
  '../layout',
  () =>
    function () {
      return <div />;
    },
);

// We want to use the original implementation so everything continues to function
const layoutService = jest.requireActual('./layoutService');

convertStepToLayout.mockImplementation(layoutService.convertStepToLayout);
inlineReferences.mockImplementation(layoutService.inlineReferences);

describe('Given a component for rendering a dynamic flow', () => {
  let component;
  let mockClient;
  let onClose;
  let onStepChange;
  let onError;

  const translations = { 'neptune.CloseButton.ariaLabel': 'label' };

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

  const validationFailureAction = {
    label: 'Submit',
    method: 'POST',
    url: '/validationFailure',
  };

  const navigateAction = {
    label: 'Skip',
    method: 'GET',
    url: '/next',
  };

  const actions = [successAction, navigateAction, failureAction, validationFailureAction];

  const numberSchema = { type: 'number' };
  const stringSchema = { type: 'string', refreshFormOnChange: true };

  const thingSchema = {
    $id: '#thing',
    type: 'object',
    properties: {
      a: numberSchema,
      b: stringSchema,
    },
    required: ['a'],
  };

  const anotherThingSchema = {
    $id: '#anotherThing',
    type: 'object',
    properties: {
      c: numberSchema,
      d: stringSchema,
    },
    required: [],
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
        schema: { $ref: '#thing' },
      },
      {
        type: 'form',
        schema: { $ref: '#anotherThing' },
      },
    ],
    schemas: [thingSchema, anotherThingSchema],
    actions,
    model: { a: 99 },
    refreshFormUrl: '/refresh',
  };

  const formStepNoLayout = { ...formStep };
  delete formStepNoLayout.layout;

  const formStepWithErrors = {
    ...formStep,
    errors: { validation: { a: 'Step validation error' } },
  };
  formStepWithErrors.schemas[0].properties.a = {
    ...formStepWithErrors.schemas[0].properties.a,
    refreshFormOnChange: true,
    refreshFormUrl: '/formNoLayout',
  };

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

  const baseUrl = '';
  const formUrl = '/form';
  const formNoLayoutUrl = '/formNoLayout';
  const formWithErrorsUrl = '/formWithErrors';
  const decisionUrl = '/decision';
  const finalUrl = '/final';

  const errorResponse = {
    error: new Error(),
  };

  const validationErrorResponse = {
    error: "That's not allowed",
    validation: {
      a: 'something wrong with this',
    },
  };

  const exitResult = {
    testKey: 'value',
    anotherTestKey: 'anotherValue',
  };

  const resolve = (response, init = {}) => {
    return new Promise((promiseResolve) => {
      setTimeout(async () => {
        promiseResolve(new Response(JSON.stringify(response), init));
      }, 0);
    });
  };

  const rejectWithJsonResponse = (response, init = {}) => {
    return new Promise((_, promiseReject) => {
      setTimeout(() => {
        promiseReject(new Response(JSON.stringify(response), init));
      }, 0);
    });
  };

  const rejectWith = (response) => {
    return new Promise((_, promiseReject) => {
      setTimeout(() => promiseReject(response), 0);
    });
  };

  const resolveWithExitHeader = (response) => {
    return resolve(response, { headers: new Headers({ 'X-DF-Exit': true }) });
  };

  const mockRequest = ({ action, data }) => {
    switch (action.url) {
      case '/form':
        return resolve(formStep);
      case '/formNoLayout':
        return resolve(formStepNoLayout);
      case '/formWithErrors':
        return resolve(formStepWithErrors);
      case '/decision':
        return resolve(decisionStep);
      case '/final':
        return resolve(finalStep);
      case '/exit':
        return resolve({});
      case '/exitWithResult':
        return resolve(exitResult);
      case '/exitWithHeader':
        return resolveWithExitHeader(exitResult);
      case '/navigate':
        return resolve(newStep);
      case '/success':
        return resolve(newStep);
      case '/refresh':
      case '/refreshFromTrigger':
        if (data.failure) {
          return rejectWithJsonResponse(validationErrorResponse);
        }
        return resolve(newStep);
      case '/failure':
        return rejectWithJsonResponse(errorResponse);
      case '/failedStep':
        return rejectWithJsonResponse({ arbitraryKey: 'Not Authorized' }, { status: 401 });
      case '/failedStepNoJson':
        return rejectWith(new Response('some error string', { status: 500 }));
      case '/validationFailure':
        return rejectWithJsonResponse(validationErrorResponse);
      default:
        return rejectWithJsonResponse(validationErrorResponse);
    }
  };

  function getLayout() {
    return component.find(DynamicLayout);
  }

  beforeEach(async () => {
    mockClient = {
      init: jest.fn(),
      request: jest.fn().mockImplementation(mockRequest),
    };
    onClose = jest.fn();
    onStepChange = jest.fn();
    onError = jest.fn();
    convertStepToLayout.mockClear();
    inlineReferences.mockClear();
  });

  function waitBeforeEach() {
    // eslint-disable-next-line jest/no-duplicate-hooks
    beforeEach(async () => {
      await wait(0);
      component.update();
    });
  }

  describe('when instantiated', () => {
    beforeEach(() => {
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      // Use mount an manually mock, information above
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={decisionUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });
    it('should load the step specification using the supplied URL', () => {
      expect(mockClient.request).toHaveBeenCalledWith({
        action: { url: decisionUrl, method: 'GET' },
      });
    });
  });

  describe('when there is JS step', () => {
    it.todo('should use the DynamicJS component');
  });

  describe('when there is an error fetching a step', () => {
    describe('and the response is valid JSON', () => {
      beforeEach(() => {
        component = mount(
          <DynamicFlow
            baseUrl={baseUrl}
            flowUrl="/failedStep"
            httpClient={mockClient}
            onError={onError}
          />,
        );
      });

      waitBeforeEach();

      it('should trigger onError callback with the status code', () => {
        expect(onError).toHaveBeenCalledWith(
          expect.objectContaining({ arbitraryKey: 'Not Authorized' }),
          401,
        );
      });
    });

    describe('but the response is not JSON', () => {
      beforeEach(() => {
        component = mount(
          <DynamicFlow
            baseUrl={baseUrl}
            flowUrl="/failedStepNoJson"
            httpClient={mockClient}
            onError={onError}
          />,
        );
      });

      waitBeforeEach();

      it('should still trigger onError callback with the status code', () => {
        expect(onError).toHaveBeenCalledWith(expect.anything(), 500);
      });
    });
  });

  describe('when there is a decision step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={decisionUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', async () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(decisionStep);
    });
  });

  describe('when there is a form step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={formNoLayoutUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(formStepNoLayout);
    });

    it('should inline any schemas referenced by id using the layout service', () => {
      expect(inlineReferences).toHaveBeenCalledTimes(4);
    });
  });

  describe('when there is a form step with errors', () => {
    async function mountDynamicFlow() {
      const component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={formWithErrorsUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
      await wait(0);
      component.update();
      return component;
    }

    it('should pass the validation errors to the DynamicLayout component', async () => {
      const component = await mountDynamicFlow();

      expect(component.find(DynamicLayout).props().errors).toMatchObject({
        a: 'Step validation error',
      });
    });

    it('should clear the validation errors when refreshing to a step without errors', async () => {
      const component = await mountDynamicFlow();

      component.find(DynamicLayout).invoke('onModelChange')(
        { a: 'changed value' },
        formStepWithErrors.schemas[0],
        'changed value',
        formStepWithErrors.schemas[0].properties.a,
      );

      await wait(0);
      component.update();

      expect(component.find(DynamicLayout).props().errors).toBeNull();
    });
  });

  describe('when there is a final step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={finalUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(finalStep);
    });
  });

  describe('when there is a step layout', () => {
    const inlineFormLayout = [
      { model: undefined, type: 'form', schema: thingSchema },
      { model: undefined, type: 'form', schema: anotherThingSchema },
    ];

    beforeEach(() => {
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={formUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });

    waitBeforeEach();

    it('should use the DynamicLayout to render it', () => {
      expect(getLayout()).toBeTruthy();
    });

    it('should inline the form schema(s) and pass as the specification as a layout', () => {
      expect(getLayout().prop('components')).toStrictEqual(inlineFormLayout);
    });

    it('should pass the layout the step model', () => {
      expect(getLayout().prop('model')).toStrictEqual(formStep.model);
    });

    describe('when a model update is triggered by mulitple schemas', () => {
      const newModel1 = { b: 'c' };
      const newModel2 = { c: true };
      const expetectModel = { b: 'c', c: true };

      beforeEach(() => {
        getLayout().invoke('onModelChange')(
          newModel1,
          thingSchema,
          newModel1.b,
          stringSchema,
          'not-c',
        );
        getLayout().invoke('onModelChange')(
          newModel2,
          anotherThingSchema,
          newModel2.c,
          stringSchema,
          !newModel2.c,
        );
      });

      waitBeforeEach();

      it('should pass the expected model to the layout', () => {
        expect(getLayout().prop('model')).toStrictEqual(expetectModel);
      });
    });

    describe('when a model update is triggered by a schema with refreshRequirements', () => {
      const newModel = { a: 1, b: 'c' };

      beforeEach(() => {
        getLayout().invoke('onModelChange')(newModel, thingSchema, newModel.b, stringSchema);
      });

      waitBeforeEach();

      it('should use the model to request a new schema', () => {
        const fakeAction = {
          method: 'POST',
          url: '/refresh',
        };
        expect(mockClient.request).toHaveBeenCalledWith({ action: fakeAction, data: newModel });
      });

      it('should pass the new schema to the layout', () => {
        expect(getLayout().prop('components')).toStrictEqual(newLayout);
      });

      it('should pass the new model to the layout', () => {
        expect(getLayout().prop('model')).toStrictEqual(newModel);
      });
    });

    describe('when a model update is triggered by a schema with refreshRequirements and refreshFormUrl', () => {
      const newModel = { a: 1, b: 'c' };
      const triggerSchema = {
        ...stringSchema,
        refreshFormUrl: '/refreshFromTrigger',
      };

      beforeEach(() => {
        getLayout().invoke('onModelChange')(newModel, thingSchema, newModel.b, triggerSchema);
      });

      waitBeforeEach();

      it('should use the model to request a new schema', () => {
        const fakeAction = {
          method: 'POST',
          url: '/refreshFromTrigger',
        };
        expect(mockClient.request).toHaveBeenCalledWith({ action: fakeAction, data: newModel });
      });

      it('should pass the new schema to the layout', () => {
        expect(getLayout().prop('components')).toStrictEqual(newLayout);
      });

      it('should pass the new model to the layout', () => {
        expect(getLayout().prop('model')).toStrictEqual(newModel);
      });
    });

    describe('when a refresh requirements call fails', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({ a: 1, b: 'c' }, thingSchema, 'c', thingSchema);
      });

      it('should continue to render the original step', () => {
        expect(getLayout().prop('components')).toStrictEqual(inlineFormLayout);
      });
    });

    describe('when the layout broadcasts a POST action and the model is valid', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(successAction);
      });

      waitBeforeEach();

      it('should tell the layout the form is submitted then reset to false on step reload', () => {
        expect(getLayout().prop('submitted')).toBe(false);
      });

      it('should make the corresponding request', () => {
        expect(mockClient.request).toHaveBeenCalledWith({
          action: successAction,
          data: { a: 1 },
        });
      });
    });

    describe('when the layout broadcasts a POST action and the model is invalid', () => {
      beforeEach(() => {
        mockClient.request.mockClear();

        getLayout().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getLayout().invoke('onAction')(successAction);
      });

      it('should tell the layout the form is submitted', () => {
        expect(getLayout().prop('submitted')).toBe(true);
      });

      it('should not make the corresponding request', () => {
        expect(mockClient.request).not.toHaveBeenCalled();
      });
    });

    describe('when the layout broadcasts a GET action and the model is invalid', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getLayout().invoke('onAction')(navigateAction);
      });

      it('should ignore the invalid model and make the corresponding request', () => {
        expect(mockClient.request).toHaveBeenCalledWith({ action: navigateAction });
      });
    });

    describe('when we submit an action but we receive a server error', () => {
      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(validationFailureAction);
      });

      waitBeforeEach();

      it('should pass those errors to the layout', () => {
        expect(getLayout().prop('errors')).toMatchObject(validationErrorResponse.validation);
        // TODO deal with global errors
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action and we receive a new step', () => {
      beforeEach(() => {
        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(successAction);
      });

      waitBeforeEach();

      it('should update the flow to use that step', () => {
        expect(getLayout().prop('components')).toStrictEqual(newStep.layout);
      });

      it('should trigger the onStepChange callback with the new step', () => {
        expect(onStepChange).toHaveBeenCalledWith(newStep, formStep);
      });
    });

    describe('when we submit an action and do not receive an error or valid step', () => {
      const exitAction = {
        url: '/exit',
        method: 'POST',
        exit: true,
      };

      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(exitAction);
      });

      waitBeforeEach();

      it('should exit the flow', () => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action with additional data', () => {
      const dataAction = { ...successAction, data: { a: 2, c: true } };

      beforeEach(() => {
        mockClient.request.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(dataAction);
      });

      it('should submit the latest model combined with the action data', () => {
        expect(mockClient.request).toHaveBeenCalledWith({
          action: dataAction,
          data: { a: 2, c: true },
        });
      });
    });

    describe('when the layout triggers a client side exit action', () => {
      const exitAction = {
        title: 'Exit',
        type: 'delete',
        exit: true,
        result: {
          exitValue: 'value',
        },
      };

      beforeEach(() => {
        getLayout().invoke('onAction')(exitAction);
      });

      it('should trigger the onClose callback with exit data', () => {
        expect(onClose).toHaveBeenCalledWith(exitAction.result);
      });
    });

    describe("when we submit an exit action which doesn't return a result", () => {
      const exitAction = {
        url: '/exit',
        method: 'POST',
        exit: true,
        result: {
          test: 123,
        },
      };

      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onAction')(exitAction);
      });

      waitBeforeEach();

      it("should exit the flow with the action's result", () => {
        expect(onClose).toHaveBeenCalledWith(exitAction.result);
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an exit action which does return a result', () => {
      const exitAction = {
        url: '/exitWithResult',
        method: 'POST',
        exit: true,
        result: {
          test: 123,
          testKey: 'overridenValue',
        },
      };

      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onAction')(exitAction);
      });

      waitBeforeEach();

      it('should exit the flow with the merged result', () => {
        const mergedResult = {
          ...exitResult,
          ...exitAction.result,
        };
        expect(onClose).toHaveBeenCalledWith(mergedResult);
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action return with exit headers', () => {
      const exitAction = {
        url: '/exitWithHeader',
        method: 'POST',
      };

      beforeEach(() => {
        onStepChange.mockClear();

        getLayout().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getLayout().invoke('onAction')(exitAction);
      });

      waitBeforeEach();

      it('should exit the flow', () => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });
  });

  describe('when there is a step with exceptions', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={decisionUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
          onError={onError}
        />,
        'en-GB',
        translations,
      );
    });

    waitBeforeEach();

    describe('when a JS error is thrown', () => {
      const errors = new Error();

      beforeEach(() => {
        getLayout().simulateError(errors);
      });

      it('should call onError with error', () => {
        expect(onClose).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalledWith(errors);
      });
    });
  });
});
