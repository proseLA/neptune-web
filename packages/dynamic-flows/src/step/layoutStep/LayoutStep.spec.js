import { mount, wait } from '../../test-utils';

import LayoutStep from './LayoutStep';
import { convertStepToLayout, inlineReferences } from './layoutService';

jest.mock('./layoutService');

// We want to use the original implementation so everything continues to function
const layoutService = jest.requireActual('./layoutService');

convertStepToLayout.mockImplementation(layoutService.convertStepToLayout);
inlineReferences.mockImplementation(layoutService.inlineReferences);

describe('Given a component for rendering a dynamic flow', () => {
  let component;
  let onAction;
  let onModelChange;

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

  const formStep = {
    type: 'form',
    key: 'create-thing', // For tracking
    // title: 'Step 1',
    // description: 'Please create a thing',
    schemas: [thingSchema, anotherThingSchema],
    actions,
    model: { a: 99 },
    refreshFormUrl: '/refresh',
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
      image: 'http://foo.bar/images/1234.png',
      title: 'We create the thing!',
      description: 'You now do stuff with the thing',
      actionTitle: 'Continue',
    },
    result: {
      exitValue: 'value',
    },
  };

  beforeEach(async () => {
    onAction = jest.fn();
    onModelChange = jest.fn();
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

  describe('when there is a decision step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <LayoutStep
          stepSpecification={decisionStep}
          submitted={false}
          model={{}}
          errors={undefined}
          onAction={onAction}
          onModelChange={onModelChange}
        />,
      );
    });

    it('should first generate a layout using the layout service', async () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(decisionStep);
    });
  });

  describe('when there is a form step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <LayoutStep
          stepSpecification={formStep}
          submitted={false}
          model={{}}
          errors={undefined}
          onAction={onAction}
          onModelChange={onModelChange}
        />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(formStep);
    });

    it('should inline any schemas referenced by id using the layout service', () => {
      expect(inlineReferences).toHaveBeenCalledTimes(1);
    });
  });

  describe('when there is a final step with no step layout', () => {
    beforeEach(() => {
      component = mount(
        <LayoutStep
          stepSpecification={finalStep}
          submitted={false}
          model={{}}
          errors={undefined}
          onAction={onAction}
          onModelChange={onModelChange}
        />,
      );
    });

    waitBeforeEach();

    it('should first generate a layout using the layout service', () => {
      expect(convertStepToLayout).toHaveBeenCalledWith(finalStep);
    });
  });
});
