import { LayoutStep } from '../step';
import { mount, wait } from '../test-utils';

import DynamicFlow from '.';

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
  const stringSchema = { type: 'string' };
  const stringSchemaWithRefresh = { type: 'string', refreshFormOnChange: true };

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
  const newLayout = [{ type: 'form', schema: newSchema }];
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
  const formWithErrorsUrl = '/formWithErrors';
  const decisionUrl = '/decision';

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

  function getStep() {
    return component.find(LayoutStep);
  }

  beforeEach(async () => {
    mockClient = {
      init: jest.fn(),
      request: jest.fn().mockImplementation(mockRequest),
    };
    onClose = jest.fn();
    onStepChange = jest.fn();
    onError = jest.fn();
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

  describe('when there is a form step with errors', () => {
    beforeEach(() => {
      component = mount(
        <DynamicFlow
          baseUrl={baseUrl}
          flowUrl={formWithErrorsUrl}
          httpClient={mockClient}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });

    waitBeforeEach();

    it('should pass the validation errors to the LayoutStep component', async () => {
      expect(getStep().props().errors).toMatchObject({
        a: 'Step validation error',
      });
    });

    it('should clear the validation errors when refreshing to a step without errors', async () => {
      getStep().invoke('onModelChange')(
        { a: 'changed value' },
        formStepWithErrors.schemas[0],
        'changed value',
        formStepWithErrors.schemas[0].properties.a,
      );

      await wait(0);
      component.update();

      expect(getStep().props().errors).toBeNull();
    });
  });

  describe('when there is a step layout', () => {
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

    it('should use the LayoutStep to render it', () => {
      expect(getStep()).toBeTruthy();
    });

    it('should inline the form schema(s) and pass as the specification as a layout', () => {
      expect(getStep().prop('stepSpecification')).toStrictEqual(formStep);
    });

    it('should pass the layout the step model', () => {
      expect(getStep().prop('model')).toStrictEqual(formStep.model);
    });

    describe('when a model update is triggered by multiple schemas', () => {
      const newModel1 = { b: 'c' };
      const newModel2 = { c: true };
      const expetectModel = { b: 'c', c: true };

      beforeEach(() => {
        getStep().invoke('onModelChange')(newModel1, thingSchema, newModel1.b, stringSchema);
        getStep().invoke('onModelChange')(newModel2, anotherThingSchema, newModel2.c, stringSchema);
      });

      waitBeforeEach();

      it('should pass the expected model to the layout', () => {
        expect(getStep().prop('model')).toStrictEqual(expetectModel);
      });
    });

    describe('when a model update is triggered by a schema with refreshRequirements', () => {
      const newModel = { a: 1, b: 'c' };

      beforeEach(() => {
        getStep().invoke('onModelChange')(
          newModel,
          thingSchema,
          newModel.b,
          stringSchemaWithRefresh,
        );
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
        expect(getStep().prop('stepSpecification')).toStrictEqual(newStep);
      });

      it('should pass the new model to the layout', () => {
        expect(getStep().prop('model')).toStrictEqual(newModel);
      });
    });

    describe('when a model update is triggered by a schema with refreshRequirements and refreshFormUrl', () => {
      const newModel = { a: 1, b: 'c' };
      const triggerSchema = {
        ...stringSchemaWithRefresh,
        refreshFormUrl: '/refreshFromTrigger',
      };

      beforeEach(() => {
        getStep().invoke('onModelChange')(newModel, thingSchema, newModel.b, triggerSchema);
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
        expect(getStep().prop('stepSpecification')).toStrictEqual(newStep);
      });

      it('should pass the new model to the layout', () => {
        expect(getStep().prop('model')).toStrictEqual(newModel);
      });
    });

    describe('when a refresh requirements call fails', () => {
      beforeEach(() => {
        getStep().invoke('onModelChange')({ a: 1, b: 'c' }, thingSchema, 'c', thingSchema);
      });

      it('should continue to render the original step', () => {
        expect(getStep().prop('stepSpecification')).toStrictEqual(formStep);
      });
    });

    describe('when the layout broadcasts a POST action and the model is valid', () => {
      beforeEach(() => {
        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(successAction);
      });

      waitBeforeEach();

      it('should tell the layout the form is submitted then reset to false on step reload', () => {
        expect(getStep().prop('submitted')).toBe(false);
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

        getStep().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getStep().invoke('onAction')(successAction);
      });

      it('should tell the layout the form is submitted', () => {
        expect(getStep().prop('submitted')).toBe(true);
      });

      it('should not make the corresponding request', () => {
        expect(mockClient.request).not.toHaveBeenCalled();
      });
    });

    describe('when the layout broadcasts a GET action and the model is invalid', () => {
      beforeEach(() => {
        getStep().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getStep().invoke('onAction')(navigateAction);
      });

      it('should ignore the invalid model and make the corresponding request', () => {
        expect(mockClient.request).toHaveBeenCalledWith({ action: navigateAction });
      });
    });

    describe('when we submit an action but we receive a server error', () => {
      beforeEach(() => {
        onStepChange.mockClear();

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(validationFailureAction);
      });

      waitBeforeEach();

      it('should pass those errors to the layout', () => {
        expect(getStep().prop('errors')).toMatchObject(validationErrorResponse.validation);
        // TODO deal with global errors
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action and we receive a new step', () => {
      beforeEach(() => {
        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(successAction);
      });

      waitBeforeEach();

      it('should update the flow to use that step', () => {
        expect(getStep().prop('stepSpecification')).toStrictEqual(newStep);
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

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(exitAction);
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

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(dataAction);
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
        getStep().invoke('onAction')(exitAction);
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

        getStep().invoke('onAction')(exitAction);
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

        getStep().invoke('onAction')(exitAction);
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

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(exitAction);
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
        getStep().simulateError(errors);
      });

      it('should call onError with error', () => {
        expect(onClose).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalledWith(errors);
      });
    });
  });
});
