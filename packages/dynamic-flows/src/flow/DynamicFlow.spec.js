import { waitFor } from '@testing-library/react';

import { LayoutStep } from '../step';
import { mount, wait } from '../test-utils';

import DynamicFlow from '.';

async function mountAndWait(...args) {
  const wrapper = mount(...args);
  await waitAndUpdate(wrapper);
  return wrapper;
}

async function waitAndUpdate(wrapper) {
  await wait(0);
  wrapper.update();
}

describe('Given a component for rendering a dynamic flow', () => {
  let mockFetcher;
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
  const numberSchemaWithRefresh = {
    refreshFormOnChange: true,
    oneOf: [{ const: 99 }, { const: 100 }, { const: 999 }],
  };

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
    oneOf: [{ const: 1 }, { const: 99 }, { const: 100 }, { const: 999 }],
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

  const generateETag = (response) => JSON.stringify(response).slice(0, 100);

  const resolve = (response, init = {}) => {
    return new Promise((promiseResolve) => {
      setTimeout(async () => {
        promiseResolve(
          new Response(JSON.stringify(response), {
            ...init,
            headers: { ...init.headers, etag: generateETag(response) },
          }),
        );
      }, 0);
    });
  };

  const rejectWithJsonResponse = (response, init = {}) => {
    return new Promise((_, promiseReject) => {
      setTimeout(() => {
        const body = response != null ? JSON.stringify(response) : null;
        promiseReject(new Response(body, init));
      }, 0);
    });
  };

  const rejectWith = (response) => {
    return new Promise((_, promiseReject) => {
      setTimeout(() => promiseReject(response), 0);
    });
  };

  const resolveWithExitHeader = (response) => {
    return resolve(response, { headers: { 'X-DF-Exit': true } });
  };

  const mockRequest = (url) => {
    switch (url) {
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
      case '/refreshWithSameFormStep':
        return rejectWithJsonResponse(null, { status: 304, etag: generateETag(formStep) });
      case '/refresh':
      case '/refreshFromTrigger':
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

  beforeEach(async () => {
    mockFetcher = jest.fn().mockImplementation(mockRequest);
    onClose = jest.fn();
    onStepChange = jest.fn();
    onError = jest.fn();
  });

  describe('when instantiated', () => {
    beforeEach(() => {
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      // Use mount an manually mock, information above
      mount(
        <DynamicFlow
          fetcher={mockFetcher}
          flowUrl={decisionUrl}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });
    it('should load the step specification using the supplied URL', () => {
      expect(mockFetcher).toHaveBeenCalledWith(
        decisionUrl,
        expect.objectContaining({ method: 'GET' }),
      );
    });
  });

  describe('when there is JS step', () => {
    it.todo('should use the DynamicJS component');
  });

  describe('when there is an error fetching a step', () => {
    describe('and the response is valid JSON', () => {
      beforeEach(async () => {
        await mountAndWait(
          <DynamicFlow flowUrl="/failedStep" fetcher={mockFetcher} onError={onError} />,
        );
      });
      it('should trigger onError callback with the status code', () => {
        expect(onError).toHaveBeenCalledWith(
          expect.objectContaining({ arbitraryKey: 'Not Authorized' }),
          401,
        );
      });
    });

    describe('but the response is not JSON', () => {
      beforeEach(async () => {
        await mountAndWait(
          <DynamicFlow flowUrl="/failedStepNoJson" fetcher={mockFetcher} onError={onError} />,
        );
      });
      it('should still trigger onError callback with the status code', () => {
        expect(onError).toHaveBeenCalledWith(expect.anything(), 500);
      });
    });
  });

  describe('when there is a form step with errors', () => {
    let component;
    const getStep = () => component.find(LayoutStep);

    beforeEach(async () => {
      component = await mountAndWait(
        <DynamicFlow
          flowUrl={formWithErrorsUrl}
          fetcher={mockFetcher}
          onClose={onClose}
          onStepChange={onStepChange}
        />,
      );
    });

    it('should pass the validation errors to the LayoutStep component', async () => {
      expect(getStep().props().errors).toMatchObject({
        a: 'Step validation error',
      });
    });

    it('should clear the validation errors when refreshing to a step without errors', async () => {
      getStep().invoke('onModelChange')(
        { a: 100 },
        formStepWithErrors.schemas[0],
        100,
        formStepWithErrors.schemas[0].properties.a,
        99,
      );

      await waitAndUpdate(component);

      expect(getStep().props().errors).toBeNull();
    });
  });

  describe('when there is a step layout', () => {
    describe('initialisation', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
      });

      it('should use the LayoutStep to render it', () => {
        expect(getStep()).toBeTruthy();
      });

      it('should inline the form schema(s) and pass as the specification as a layout', () => {
        expect(getStep().prop('stepSpecification')).toStrictEqual(formStep);
      });

      it('should pass the layout the step model', () => {
        expect(getStep().prop('model')).toStrictEqual(formStep.model);
      });
    });

    describe('when a model update is triggered by multiple schemas', () => {
      const newModel1 = { b: 'c' };
      const newModel2 = { c: true };
      const expetectModel = { b: 'c', c: true };

      it('should pass the expected model to the layout', async () => {
        const component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        const getStep = () => component.find(LayoutStep);

        getStep().invoke('onModelChange')(newModel1, thingSchema, newModel1.b, stringSchema);
        getStep().invoke('onModelChange')(newModel2, anotherThingSchema, newModel2.c, stringSchema);
        await waitAndUpdate(component);

        expect(getStep().prop('model')).toStrictEqual(expetectModel);
      });
    });

    describe('when a model update is triggered by a schema with refreshFormOnChange, it should only refresh if the changed model is valid or was valid before', () => {
      const triggerSchema = {
        type: 'number',
        refreshFormOnChange: true,
        oneOf: [{ const: 99 }, { const: 100 }, { const: 199 }],
      };
      const cases = [
        {
          title: 'should refresh when new value is valid and prev value was valid',
          newValue: 100,
          preValue: 99,
          expected: 1,
        },
        {
          title: 'should refresh when new value is NOT valid and prev value was valid',
          newValue: 'invalid',
          preValue: 99,
          expected: 1,
        },
        {
          title: 'should refresh when new value is valid and prev value was NOT valid',
          newValue: 199,
          preValue: 'invalid',
          expected: 1,
        },
        {
          title: 'should NOT refresh when new value is NOT valid and prev value was NOT valid',
          newValue: 'more invalid',
          preValue: 'invalid',
          expected: 0,
        },
      ];

      cases.forEach(({ title, newValue, preValue, expected }) => {
        it(`${title}`, async () => {
          const component = await mountAndWait(
            <DynamicFlow
              flowUrl={formUrl}
              fetcher={mockFetcher}
              onClose={onClose}
              onStepChange={onStepChange}
            />,
          );

          mockFetcher.mockClear();
          component.find(LayoutStep).invoke('onModelChange')(
            { a: newValue },
            thingSchema,
            newValue,
            triggerSchema,
            preValue,
          );

          await waitFor(() => {
            expect(mockFetcher).toHaveBeenCalledTimes(expected);
          });
        });
      });
    });

    describe('when a model update is triggered by a schema with refreshFormOnChange', () => {
      const newModel = { a: 1, b: 999 };

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );

        getStep().invoke('onModelChange')(
          newModel,
          thingSchema,
          newModel.b,
          numberSchemaWithRefresh,
        );
        await waitAndUpdate(component);
      });

      it('should use the model to request a new schema', () => {
        expect(mockFetcher).toHaveBeenCalledWith(
          '/refresh',
          expect.objectContaining({
            method: 'POST',
            body: JSON.stringify(newModel),
          }),
        );
      });

      it('should pass the new schema to the layout', () => {
        expect(getStep().prop('stepSpecification')).toStrictEqual(newStep);
      });

      it('should pass the new model to the layout', () => {
        expect(getStep().prop('model')).toStrictEqual(newModel);
      });
    });

    describe('when a model update is triggered by a schema with refreshFormOnChange and refreshFormUrl', () => {
      const newModel = { a: 1, b: 999 };
      const triggerSchema = {
        ...numberSchemaWithRefresh,
        refreshFormUrl: '/refreshFromTrigger',
      };

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        getStep().invoke('onModelChange')(newModel, thingSchema, newModel.b, triggerSchema);
        await waitAndUpdate(component);
      });

      it('should use the model to request a new schema', () => {
        expect(mockFetcher).toHaveBeenCalledWith(
          '/refreshFromTrigger',
          expect.objectContaining({
            method: 'POST',
            body: JSON.stringify(newModel),
          }),
        );
      });

      it('should pass the new schema to the layout', () => {
        expect(getStep().prop('stepSpecification')).toStrictEqual(newStep);
      });

      it('should pass the new model to the layout', () => {
        expect(getStep().prop('model')).toStrictEqual(newModel);
      });
    });

    describe('when a refresh requirements call fails', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        getStep().invoke('onModelChange')({ a: 1, b: 'c' }, thingSchema, 'c', thingSchema);
      });

      it('should continue to render the original step', async () => {
        expect(getStep().prop('stepSpecification')).toStrictEqual(formStep);
      });
    });

    describe('when the layout broadcasts a POST action and the model is valid', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(successAction);
        await waitAndUpdate(component);
      });

      it('should tell the layout the form is submitted then reset to false on step reload', () => {
        expect(getStep().prop('submitted')).toBe(false);
      });

      it('should make the corresponding request', () => {
        expect(mockFetcher).toHaveBeenCalledWith(
          successAction.url,
          expect.objectContaining({
            method: successAction.method,
            body: JSON.stringify({ a: 1 }),
          }),
        );
      });
    });

    describe('when the layout broadcasts a POST action and the model is invalid', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        mockFetcher.mockClear();
        getStep().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getStep().invoke('onAction')(successAction);
      });

      it('should tell the layout the form is submitted', () => {
        expect(getStep().prop('submitted')).toBe(true);
      });

      it('should not make the corresponding request', () => {
        expect(mockFetcher).not.toHaveBeenCalled();
      });
    });

    describe('when the layout broadcasts a GET action and the model is invalid', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        getStep().invoke('onModelChange')({}, thingSchema, undefined, numberSchema);
        getStep().invoke('onAction')(navigateAction);
      });

      it('should ignore the invalid model and make the corresponding request', () => {
        expect(mockFetcher).toHaveBeenCalledWith(
          navigateAction.url,
          expect.objectContaining({ method: navigateAction.method }),
        );
      });
    });

    describe('when we submit an action but we receive a server error', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        onStepChange.mockClear();

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(validationFailureAction);
        await waitAndUpdate(component);
      });

      it('should pass those errors to the layout', () => {
        expect(getStep().prop('errors')).toMatchObject(validationErrorResponse.validation);
        // TODO deal with global errors
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action and we receive a new step', () => {
      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(successAction);
        await waitAndUpdate(component);
      });

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

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        onStepChange.mockClear();

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(exitAction);
        await waitAndUpdate(component);
      });

      it('should exit the flow', () => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('when we submit an action with additional data', () => {
      const dataAction = { ...successAction, data: { a: 2, c: true } };

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        mockFetcher.mockClear();

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(dataAction);
      });

      it('should submit the latest model combined with the action data', () => {
        expect(mockFetcher).toHaveBeenCalledWith(
          dataAction.url,
          expect.objectContaining({
            method: dataAction.method,
            body: JSON.stringify({ a: 2, c: true }),
          }),
        );
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

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
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

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );

        onStepChange.mockClear();
        getStep().invoke('onAction')(exitAction);
        await waitAndUpdate(component);
      });

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

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        onStepChange.mockClear();

        getStep().invoke('onAction')(exitAction);
        await waitAndUpdate(component);
      });

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

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        onStepChange.mockClear();

        getStep().invoke('onModelChange')({ a: 1 }, thingSchema, 1, numberSchema);
        getStep().invoke('onAction')(exitAction);
        await waitAndUpdate(component);
      });

      it('should exit the flow', () => {
        expect(onClose).toHaveBeenCalledTimes(1);
      });

      it('should not trigger onStepChange', () => {
        expect(onStepChange).not.toHaveBeenCalled();
      });
    });

    describe('ETags', () => {
      const newModel = { a: 1, b: 999 };
      const triggerSchema = {
        ...numberSchemaWithRefresh,
        refreshFormUrl: '/refreshWithSameFormStep',
      };

      let component;
      const getStep = () => component.find(LayoutStep);

      beforeEach(async () => {
        component = await mountAndWait(
          <DynamicFlow
            flowUrl={formUrl}
            fetcher={mockFetcher}
            onClose={onClose}
            onStepChange={onStepChange}
          />,
        );
        mockFetcher.mockClear();
        getStep().invoke('onModelChange')(newModel, thingSchema, newModel.b, triggerSchema);
        await waitAndUpdate(component);
      });

      describe('when requesting a refresh', () => {
        it('should pass the current ETag in the "If-None-Match" header', async () => {
          await waitFor(() => {
            expect(mockFetcher).toHaveBeenCalledWith(
              '/refreshWithSameFormStep',
              expect.objectContaining({
                method: 'POST',
                body: JSON.stringify(newModel),
                headers: expect.objectContaining({ 'If-None-Match': expect.any(String) }),
              }),
            );
          });
        });
      });
      describe('when the refreshed step has empty body and status 304', () => {
        it('should request the refresh using the current ETag', () => {
          expect(mockFetcher).toHaveBeenCalledWith(
            '/refreshWithSameFormStep',
            expect.objectContaining({
              method: 'POST',
              body: JSON.stringify(newModel),
              headers: expect.objectContaining({ 'If-None-Match': expect.any(String) }),
            }),
          );
        });

        it('should keep the current schema in the the layout', () => {
          expect(getStep().prop('stepSpecification')).toStrictEqual(formStep);
        });

        it('should pass the new model to the layout', () => {
          expect(getStep().prop('model')).toStrictEqual(newModel);
        });
      });
    });
  });

  describe('when there is a step with exceptions', () => {
    let component;
    const getStep = () => component.find(LayoutStep);

    beforeEach(async () => {
      component = await mountAndWait(
        <DynamicFlow
          flowUrl={decisionUrl}
          fetcher={mockFetcher}
          onClose={onClose}
          onStepChange={onStepChange}
          onError={onError}
        />,
        'en-GB',
        translations,
      );
    });

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
