import { InlineAlert, Provider } from '@transferwise/components';
import { mount } from 'enzyme';

import { getI18n } from '../test-utils';

import DynamicLayout from '.';

describe('E2E: Given a component for rendering a dynamic layout', () => {
  let component;
  let onModelChange;
  let onAction;
  let onPersistAsync;

  const action = {
    url: '/exampe',
    method: 'GET',
    title: 'example',
  };

  const model = { an: 'example' };
  const schema = {
    id: 'example',
    type: 'object',
    properties: {
      an: { type: 'string' },
    },
  };
  const errors = { an: 'example error' };

  const form = { type: 'form', schema, model };
  const button = { type: 'button', action };
  const box = { type: 'box', components: [form, button] };

  const mountOptions = {
    wrappingComponent: Provider,
    wrappingComponentProps: { i18n: getI18n() },
  };

  beforeEach(() => {
    onAction = jest.fn();
    onModelChange = jest.fn();
    onPersistAsync = jest.fn();

    component = mount(
      <DynamicLayout
        components={[box]}
        submitted
        errors={errors}
        onAction={onAction}
        onModelChange={onModelChange}
        onPersistAsync={onPersistAsync}
      />,
      mountOptions,
    );
  });

  it('should render the form', () => {
    expect(component.find('input')).toBeTruthy();
  });

  it('should render the button', () => {
    expect(component.find('button')).toBeTruthy();
  });

  it('should show the supplied error message', () => {
    expect(component.find(InlineAlert).contains(errors.an)).toBe(true);
  });

  describe('when a form element is changed', () => {
    beforeEach(() => {
      component.find('input').simulate('change', { target: { value: 'other example' } });
    });
    it('should broadcast onModelChange', () => {
      expect(onModelChange).toHaveBeenCalledWith(
        { an: 'other example' },
        schema,
        'other example',
        schema.properties.an,
        null,
      );
    });
  });

  describe('when a button element is clicked', () => {
    beforeEach(() => {
      component.find('button').simulate('click');
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(button.action);
    });
  });
});
