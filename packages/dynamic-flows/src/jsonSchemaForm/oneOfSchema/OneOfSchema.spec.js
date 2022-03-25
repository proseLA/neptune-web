import { Provider } from '@transferwise/components';
import { shallow, mount } from 'enzyme';

import DynamicAlert from '../../layout/alert';
import { getI18n } from '../../test-utils';
import ControlFeedback from '../controlFeedback';
import GenericSchema from '../genericSchema';
import Help from '../help';
import SchemaFormControl from '../schemaFormControl';

import OneOfSchema from '.';

const mountOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { i18n: getI18n() },
};

describe('Given a oneOfSchema component', () => {
  let component;
  let genericSchema;
  let schemaFormControl;
  let controlFeedback;
  let props;
  let onChange;
  let onPersistAsync;
  let schema;

  let model = { b: 2, c: 3 };
  const errors = { a: 'error' };
  const locale = 'en-GB';
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
    onPersistAsync = jest.fn();
  });

  describe('when initialised with multiple schemas', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option A',
            properties: {
              a: {
                type: 'number',
              },
            },
            required: ['a'],
          },
          {
            type: 'object',
            title: 'Option B',
            properties: {
              b: {
                type: 'number',
              },
            },
            required: ['b'],
          },
          {
            type: 'object',
            title: 'Option C',
            properties: {
              c: {
                type: 'number',
              },
            },
            required: ['c'],
          },
        ],
      };

      props = {
        schema,
        model,
        errors,
        locale,
        onChange,
        submitted,
        translations,
        onPersistAsync,
      };
      component = shallow(<OneOfSchema {...props} />);

      genericSchema = component.find(GenericSchema);
      schemaFormControl = component.find(SchemaFormControl);
    });

    it('should render the schema title in a h4', () => {
      expect(component.find('h4').text()).toContain(schema.title);
    });

    it('should use a SchemaFormControl to choose between schemas', () => {
      expect(schemaFormControl).toHaveLength(1);
    });

    it('should render one generic schema component', () => {
      expect(genericSchema).toHaveLength(1);
    });

    it('should pass the first schema with a valid model to the genericSchema', () => {
      expect(genericSchema.prop('schema')).toStrictEqual(schema.oneOf[1]);
    });

    it('should pass the valid part of the model to the genericSchema', () => {
      expect(genericSchema.prop('model')).toStrictEqual({ b: 2 });
    });

    it('should pass errors to the nested generic schema component', () => {
      expect(genericSchema.prop('errors')).toStrictEqual(errors);
    });

    it('should pass locale to the nested generic schema component', () => {
      expect(genericSchema.prop('locale')).toStrictEqual(locale);
    });

    it('should pass translations to the nested generic schema component', () => {
      expect(genericSchema.prop('translations')).toStrictEqual(translations);
    });

    describe('when some of the child schemas contain const properties', () => {
      const localSchema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option Zero (0)',
            properties: {
              a: { type: 'string', const: 'AAAA' },
              b: { type: 'string' },
            },
            required: ['a', 'b'],
          },
          {
            type: 'object',
            title: 'Option One (1)',
            properties: {
              b: { type: 'string' },
              c: { type: 'string' },
              z: { type: 'string' },
            },
            required: ['b', 'c', 'z'],
          },
          {
            type: 'object',
            title: 'Option Two (2)',
            properties: {
              a: { type: 'string', const: 'BBBB' },
              c: { type: 'string' },
            },
            required: ['a', 'c'],
          },
          {
            type: 'object',
            title: 'Option Two (3)',
            properties: {
              d: { type: 'string', const: 'DDDD' },
              e: { type: 'string' },
            },
            required: ['d', 'e'],
          },
        ],
      };
      describe('when the model partially matches one of the child schemas with a const property', () => {
        it('should select the schema that is best matched by the model', () => {
          const localModel = { a: 'BBBB' };
          component = shallow(<OneOfSchema {...props} schema={localSchema} model={localModel} />);
          const control = component.find(SchemaFormControl);
          expect(control.prop('value')).toBe(2);
        });
      });

      describe('when the model partially matches a child schema without a const property', () => {
        it('should select the schema that is best matched by the model', () => {
          const localModel = { b: 'whatever', c: 'whatever' };
          component = shallow(<OneOfSchema {...props} schema={localSchema} model={localModel} />);
          const control = component.find(SchemaFormControl);
          expect(control.prop('value')).toBe(1);
        });
      });

      describe('when the model does not partially match any of the child schemas', () => {
        it('should not select a schema', () => {
          const localModel = { d: 'XXXX' };
          component = shallow(<OneOfSchema {...props} schema={localSchema} model={localModel} />);
          const control = component.find(SchemaFormControl);
          expect(control.prop('value')).toBeNull();
        });
      });
    });

    describe('when no model is present', () => {
      describe('and children schemas are non-const', () => {
        it('should not render a generic schema', () => {
          component = shallow(<OneOfSchema {...props} model={{}} />);
          genericSchema = component.find(GenericSchema);

          expect(genericSchema).toHaveLength(0);
        });
      });

      describe('and children schemas are const', () => {
        const currencySchema = {
          title: 'Currency',
          type: 'string',
          oneOf: [
            { title: 'EUR', description: 'Euro', const: 'EUR' },
            {
              title: 'GBP',
              description: 'British pound',
              const: 'GBP',
            },
            {
              title: 'USD',
              description: 'United States dollar',
              const: 'USD',
            },
            {
              title: 'ARS',
              description: 'Argentine peso',
              const: 'ARS',
            },
            {
              title: 'AUD',
              description: 'Australian dollar',
              const: 'AUD',
            },
          ],
          validationMessages: { required: 'Please enter currency.' },
          default: 'USD',
        };

        const defaultIndex = currencySchema.oneOf.findIndex(
          (childSchema) => childSchema.const === currencySchema.default,
        );

        describe('and there is a valid default value', () => {
          it('renders a SchemaFormControl with a value as expected', () => {
            component = shallow(<OneOfSchema {...props} schema={currencySchema} model={{}} />);
            const control = component.find(SchemaFormControl);
            expect(control.prop('value')).toBe(defaultIndex);
          });

          it('broadcasts onChange with the default value', () => {
            component = mount(
              <OneOfSchema {...props} schema={currencySchema} model={{}} onChange={onChange} />,
              mountOptions,
            );
            expect(onChange).toHaveBeenLastCalledWith(
              currencySchema.default,
              currencySchema,
              currencySchema.default,
            );
          });
        });

        describe('and there is no valid default value', () => {
          it('renders a SchemaFormControl with a value of null', () => {
            component = shallow(
              <OneOfSchema
                {...props}
                schema={{ ...currencySchema, default: 'BANANA' }}
                model={{}}
              />,
              mountOptions,
            );
            const control = component.find(SchemaFormControl);
            expect(control.prop('value')).toBeNull();
          });

          it('does not broadcast onChange callback', () => {
            component = mount(
              <OneOfSchema
                {...props}
                schema={{ ...currencySchema, default: 'BANANA' }}
                model={{}}
                onChange={onChange}
              />,
              mountOptions,
            );
            expect(onChange).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe('when another schema is selected', () => {
      beforeEach(() => {
        schemaFormControl.simulate('change', 2);
        // As changing the state causes a rerender, need to refetch child component
        genericSchema = component.find(GenericSchema);
      });

      it('should pass that schema to the nested generic schema', () => {
        expect(genericSchema.prop('schema')).toBe(schema.oneOf[2]);
      });

      it('should pass the valid parts of the original model to the nested generic schema', () => {
        expect(genericSchema.prop('model')).toStrictEqual({ c: 3 });
      });

      it('should trigger onChange with only the properties in the new schema', () => {
        expect(onChange).toHaveBeenCalledWith({ c: 3 }, schema.oneOf[2], { c: 3 });
      });
    });

    describe('when the generic schema triggers an onChange event', () => {
      beforeEach(() => {
        genericSchema.simulate('change', { b: 4 }, schema.oneOf[1], 4, 1);
      });

      it('should trigger the components onChange once', () => {
        expect(onChange).toHaveBeenCalledTimes(1);
      });

      it('should broadcast the changed model from the child', () => {
        expect(onChange).toHaveBeenCalledWith({ b: 4 }, schema.oneOf[1], 4, 1);
      });

      it('should not change the input model', () => {
        expect(model).toStrictEqual({ b: 2, c: 3 });
      });

      describe('when the user toggles to another schema, and back again', () => {
        beforeEach(() => {
          schemaFormControl.simulate('change', 2);
          schemaFormControl.simulate('change', 1);
          genericSchema = component.find(GenericSchema);
        });

        it('should remember and pass down the changed value', () => {
          expect(genericSchema.prop('model')).toStrictEqual({ b: 4 });
        });
      });
    });
  });

  describe('when only one schema is supplied', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option A',
            properties: {
              a: {
                type: 'number',
              },
            },
            required: ['a'],
          },
        ],
      };

      props = {
        schema,
        model,
        errors,
        locale,
        onChange,
        submitted,
        translations,
        onPersistAsync,
      };
      component = shallow(<OneOfSchema {...props} />);
    });

    it('should not render a SchemaFormControl to choose between schemas', () => {
      expect(component.find(SchemaFormControl)).toHaveLength(0);
    });

    it('should render the schema using a GenericSchema', () => {
      expect(component.find(GenericSchema)).toHaveLength(1);
    });
  });

  describe('when the choice is from a set of constant values', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      schema = {
        title: 'Choose schema',
        placeholder: 'Please choose',
        oneOf: [
          {
            title: 'One',
            const: 1,
          },
          {
            title: 'Two',
            const: 2,
          },
          {
            title: 'Three',
            const: 3,
          },
        ],
      };

      model = null;

      props = {
        schema,
        model,
        locale,
        onChange,
        submitted,
        onPersistAsync,
      };
      component = shallow(<OneOfSchema {...props} />);

      genericSchema = component.find(GenericSchema);
      schemaFormControl = component.find(SchemaFormControl);
      controlFeedback = component.find(ControlFeedback);
    });

    it('should render the schema title in a label', () => {
      expect(component.find('.control-label').text()).toContain(schema.title);
    });

    it('should not render a generic schema', () => {
      expect(genericSchema).toHaveLength(0);
    });

    it('should not set a default for the SchemaFormControl value', () => {
      expect(schemaFormControl.prop('value')).toBeNull();
    });

    it('should not broadcast a model update', () => {
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should pass errors down if present', () => {
      component = shallow(<OneOfSchema {...props} errors="Something is wrong" />);

      controlFeedback = component.find(ControlFeedback);
      expect(controlFeedback.prop('errors')).toBe('Something is wrong');
    });

    it('should not pass down errors if present but wrong type (should never happen)', () => {
      component = shallow(
        <OneOfSchema {...props} errors={{ choice: 'I should not be an object' }} />,
      );

      controlFeedback = component.find(ControlFeedback);
      expect(controlFeedback.prop('errors')).toBeNull();
    });

    describe('when one option is supplied', () => {
      beforeEach(() => {
        schema = {
          title: 'Choose schema',
          oneOf: [
            {
              title: 'One',
              const: 1,
            },
          ],
        };

        props = { ...props, schema };
        component = shallow(<OneOfSchema {...props} />);
      });

      it('should render a SchemaFormControl', () => {
        expect(component.find(SchemaFormControl)).toHaveLength(1);
      });
    });

    describe('when the user changes schema', () => {
      beforeEach(() => {
        // SchemaFormControl broadcasts the INDEX(1) of the schema
        schemaFormControl.simulate('change', 1);
      });

      it('should broadcast the PARENT schema as the trigger, not the const', () => {
        expect(onChange).toHaveBeenCalledWith(2, schema, 2);
      });

      it('should only broadcast one change', () => {
        component = shallow(<OneOfSchema {...props} required model={1} />);

        schemaFormControl = component.find(SchemaFormControl);
        onChange.mockReset();
        schemaFormControl.simulate('change', 2);

        expect(onChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('when the schema is not required', () => {
      describe('when value exists', () => {
        it('should not display validation errors', () => {
          schemaFormControl.simulate('change', 1);

          expect(controlFeedback.prop('validations')).toHaveLength(0);
        });
      });

      describe('when no value exists', () => {
        it('should not display validation errors', () => {
          expect(controlFeedback.prop('validations')).toHaveLength(0);
        });
      });
    });

    describe('when the schema is required', () => {
      describe('when no value exists', () => {
        it('should display validation errors', () => {
          component = shallow(<OneOfSchema {...props} required />);
          schemaFormControl = component.find(SchemaFormControl);

          controlFeedback = component.find(ControlFeedback);
          expect(controlFeedback.prop('validations')).toHaveLength(1);
        });
      });
    });

    describe('when alert exists', () => {
      it('should render the alert', () => {
        const alert = {
          context: 'info',
          markdown: 'some text',
        };
        const schemaWithAlert = { ...schema, alert };
        component = shallow(<OneOfSchema {...props} schema={schemaWithAlert} />);

        const alertComponent = component.find(DynamicAlert);

        expect(alertComponent).toHaveLength(1);
        expect(alertComponent.prop('component').context).toBe('info');
        expect(alertComponent.prop('component').markdown).toBe('some text');
      });
    });

    describe('when alert does not exist', () => {
      it('should not render alert', () => {
        const alertComponent = component.find(DynamicAlert);

        expect(alertComponent).toHaveLength(0);
      });
    });

    describe('when help exists', () => {
      it('should render help popover', () => {
        const help = {
          markdown: 'some help',
        };
        const schemaWithHelp = { ...schema, help };

        component = shallow(<OneOfSchema {...props} schema={schemaWithHelp} />);

        const helpPopover = component.find(Help);

        expect(helpPopover).toHaveLength(1);
      });
    });
  });
});
