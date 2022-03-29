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
      expect(getControlFeedback().text()).toMatch(/Please fill out this field./i);

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
  const props = {
    errors: undefined,
    required: true,
    onChange: jest.fn(),
    submitted: true,
  };

  describe('when a number schema has no default validation messages', () => {
    const schema = {
      type: 'number',
      minimum: 2,
      maximum: 10,
      title: 'Enter a number between 2 and 10',
      default: '',
    };

    describe('when submitted with value too low', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model={1} />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        expect(getControlFeedback().text()).toMatch(/Please enter a number that's 2 or more./i);
      });
    });
    describe('when submitted with value too high', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model={999} />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        expect(getControlFeedback().text()).toMatch(/Please enter a number that's 10 or less./i);
      });
    });
  });

  describe('when the string schema has no default validation messages', () => {
    const schema = {
      type: 'string',
      minLength: 2,
      maxLength: 10,
      title: 'Enter a string of between 2 and 10 characters',
      default: '',
    };

    describe('when submitted with value too short', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model="a" />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        expect(getControlFeedback().text()).toMatch(/Please enter at least 2 characters./i);
      });
    });
    describe('when submitted with value too long', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model="abcdefghijkl" />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        expect(getControlFeedback().text()).toMatch(/Please enter 10 or fewer characters./i);
      });
    });
  });

  describe('when a string (date) schema has no default validation messages', () => {
    const schema = {
      type: 'string',
      format: 'date',
      minimum: '2000-01-01',
      maximum: '2010-12-31',
      title: 'Enter a date between 2000 and 2010',
      default: '',
    };

    describe('when submitted with value too low', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model="1999-12-31" />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        expect(getControlFeedback().text()).toMatch(
          /Please enter a date that's on or after 1 January 2000./i,
        );
      });
    });
    describe('when submitted with value too high', () => {
      it('displays the default validation error', () => {
        const component = mount(
          <BasicTypeSchema {...props} schema={schema} model="2011-01-01" />,
          mountOptions,
        );
        const getControlFeedback = () => component.find(ControlFeedback);

        expect(getControlFeedback().text()).toMatch(
          /Please enter a date that's on or before 31 December 2010./i,
        );
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
