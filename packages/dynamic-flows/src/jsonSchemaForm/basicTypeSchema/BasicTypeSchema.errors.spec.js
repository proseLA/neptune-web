import { Provider } from '@transferwise/components';
import { mount } from 'enzyme';

import { getI18n } from '../../test-utils';
import ControlFeedback from '../controlFeedback';
import SchemaFormControl from '../schemaFormControl';

import BasicTypeSchema from '.';

const mountOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { i18n: getI18n() },
};

describe('Given a component for rendering basic type schemas', () => {
  describe('when submitted', () => {
    it('displays validation and server errors', () => {
      const props = {
        schema: {
          type: 'string',
          minLength: 2,
          title: 'Complete all sections',
          default: '',
        },
        model: '',
        errors: undefined,
        required: true,
        onChange: jest.fn(),
        submitted: false,
      };
      const component = mount(<BasicTypeSchema {...props} />, mountOptions);
      const formControl = component.find(SchemaFormControl);
      const getControlFeedback = () => component.find(ControlFeedback);

      // expect no errors displayed
      expect(getControlFeedback().text()).toBe('');

      // submit form
      component.setProps({ submitted: true });

      // expect the validation error to be displayed
      expect(getControlFeedback().text()).toMatch(/Value is required/i);

      // type in some text
      formControl.simulate('change', { target: { value: 'Some text' } });

      // submit form again
      component.setProps({ submitted: true });

      // simulate server response
      component.setProps({ errors: 'The server call retuned an error' });

      // expect the server error to be displayed
      expect(getControlFeedback().text()).toBe('The server call retuned an error');

      // type in some more text
      formControl.simulate('change', 'Some more text');
      component.setProps({ submitted: false });

      // expect the error to be hidden because model changed
      expect(getControlFeedback().text()).toBe('');
    });
  });
});
describe('Given a component for rendering a number schema', () => {
  const schema = {
    type: 'number',
    minimum: 2,
    maximum: 10,
    title: 'Enter a number between 2 and 10',
    default: '',
  };

  const props = {
    errors: undefined,
    required: true,
    onChange: jest.fn(),
    submitted: true,
  };

  describe('when the schema has no default validation messages', () => {
    describe('when submitted with value too low', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model={1} />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        // expect the validation error to be displayed
        expect(getControlFeedback().text()).toMatch(/Value is too low/i);
      });
    });
    describe('when submitted with value too high', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model={999} />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        // expect the validation error to be displayed
        expect(getControlFeedback().text()).toMatch(/Value is too high/i);
      });
    });
  });

  describe('when the schema contains default validation messages', () => {
    const schema = {
      type: 'number',
      minimum: 2,
      maximum: 10,
      title: 'Enter a number between 2 and 10',
      default: '',
      validationMessages: {
        minimum: 'The number is too low',
        maximum: 'The number is too high',
      },
    };
    describe('when submitted with value too low', () => {
      it('displays the validation error specified in the schema', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model={1} />,
          mountOptions,
        );
        expect(component.find(ControlFeedback).text()).toMatch(/The number is too low/i);
      });
    });
    describe('when submitted with value too high', () => {
      it('displays the validation error specified in the schema', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model={999} />,
          mountOptions,
        );
        expect(component.find(ControlFeedback).text()).toMatch(/The number is too high/i);
      });
    });
  });
});
