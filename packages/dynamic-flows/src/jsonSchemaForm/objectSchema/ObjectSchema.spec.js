import { Provider } from '@transferwise/components';
import { mount, shallow } from 'enzyme';

import DynamicAlert from '../../layout/alert';
import { getI18n } from '../../test-utils';
import GenericSchema from '../genericSchema';

import ObjectSchema from './ObjectSchema';

const mountOptions = {
  wrappingComponent: Provider,
  wrappingComponentProps: { i18n: getI18n() },
};

describe('Given a component for rendering object schemas', () => {
  let component;
  let genericSchemaComponents;
  let props;
  let onChange;

  const schema = {
    type: 'object',
    title: 'Object schema',
    description: 'A schema representing a JSON object',
    properties: {
      string: { type: 'string' },
      number: { type: 'number' },
    },
  };

  const model = {
    string: 'a',
    number: 1,
  };

  const errors = {
    string: 'too short',
    number: 'too low',
  };

  const submitted = false;

  let stringSchemaComponent;
  let numberSchemaComponent;

  beforeEach(() => {
    onChange = jest.fn();
    const onPersistAsync = jest.fn();

    props = {
      schema,
      model,
      errors,
      onChange,
      submitted,
      onPersistAsync,
    };
    component = shallow(<ObjectSchema {...props} />);

    genericSchemaComponents = component.find(GenericSchema);

    stringSchemaComponent = genericSchemaComponents.at(0);
    numberSchemaComponent = genericSchemaComponents.at(1);
  });

  it('should show the schema title as a fieldset legend', () => {
    expect(component.find('legend').text()).toContain(schema.title);
  });

  it('should show the schema description as a paragraph', () => {
    expect(component.find('p').text()).toContain(schema.description);
  });

  it('should display one generic-schema component for each property', () => {
    expect(genericSchemaComponents).toHaveLength(2);
  });

  it('should pass the relevant property schemas to generic schema components', () => {
    expect(stringSchemaComponent.prop('schema')).toBe(schema.properties.string);
    expect(numberSchemaComponent.prop('schema')).toBe(schema.properties.number);
  });

  it('should pass the relevant part of the model to the generic schema components', () => {
    expect(stringSchemaComponent.prop('model')).toBe(model.string);
    expect(numberSchemaComponent.prop('model')).toBe(model.number);
  });

  it('should pass the relevant part of the errors to the generic schema components', () => {
    expect(stringSchemaComponent.prop('errors')).toBe(errors.string);
    expect(numberSchemaComponent.prop('errors')).toBe(errors.number);
  });

  describe('when a generic schema component triggers onChange', () => {
    beforeEach(() => {
      numberSchemaComponent.simulate('change', 2, schema.properties.number, 2, 1);
    });

    it('should trigger the components onChange with the new value under the correct key', () => {
      expect(props.onChange).toHaveBeenCalledWith(
        { string: 'a', number: 2 },
        schema.properties.number,
        2,
        1,
      );
    });

    it('should not change the original model by reference', () => {
      expect(props.model).not.toBe({ string: 'a', number: 2 });
    });
  });

  describe('when a generic schema component triggers a null onChange', () => {
    beforeEach(() => {
      numberSchemaComponent.simulate('change', null, schema.properties.number, null, 222);
    });

    it('should trigger the components onChange with the key remove', () => {
      expect(props.onChange).toHaveBeenCalledWith(
        { string: 'a' },
        schema.properties.number,
        null,
        222,
      );
    });
  });

  describe('when alert exists', () => {
    it('should render the alert', () => {
      const alert = {
        context: 'info',
        markdown: 'some text',
      };
      const schemaWithAlert = { ...schema, alert };
      component = shallow(<ObjectSchema {...props} schema={schemaWithAlert} />);

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

  describe('when display order exists', () => {
    const properties = {
      string: { type: 'string' },
      number: { type: 'number' },
      something: { type: 'string' },
    };

    describe('when displayOrder contains all properties', () => {
      it('should adhere to the specified order', () => {
        const schemaWithDisplayOrder = {
          ...schema,
          properties,
          displayOrder: ['number', 'something', 'string'],
        };
        component = shallow(<ObjectSchema {...props} schema={schemaWithDisplayOrder} />);

        genericSchemaComponents = component.find(GenericSchema);

        expect(genericSchemaComponents.at(0).prop('schema')).toBe(properties.number);
        expect(genericSchemaComponents.at(1).prop('schema')).toBe(properties.something);
        expect(genericSchemaComponents.at(2).prop('schema')).toBe(properties.string);
      });
    });

    describe('when displayOrder contains only a subset of properties', () => {
      it('should display any properties not specified in the display order in their natural order', () => {
        const schemaWithDisplayOrder = { ...schema, properties, displayOrder: ['number'] };
        component = shallow(<ObjectSchema {...props} schema={schemaWithDisplayOrder} />);

        genericSchemaComponents = component.find(GenericSchema);

        expect(genericSchemaComponents.at(0).prop('schema')).toBe(properties.number);
        expect(genericSchemaComponents.at(1).prop('schema')).toBe(properties.string);
        expect(genericSchemaComponents.at(2).prop('schema')).toBe(properties.something);
      });
    });

    describe('when displayOrder contains some invalid properties', () => {
      it('should ignore any invalid properties and render the rest', () => {
        const schemaWithDisplayOrder = {
          ...schema,
          properties,
          displayOrder: ['number', 'string', 'some-invalid-property', 'something'],
        };

        component = shallow(<ObjectSchema {...props} schema={schemaWithDisplayOrder} />);

        genericSchemaComponents = component.find(GenericSchema);

        expect(genericSchemaComponents.at(0).prop('schema')).toBe(properties.number);
        expect(genericSchemaComponents.at(1).prop('schema')).toBe(properties.string);
        expect(genericSchemaComponents.at(2).prop('schema')).toBe(properties.something);
      });
    });
  });

  describe('when no display order exists', () => {
    const properties = {
      string: { type: 'string' },
      number: { type: 'number' },
      something: { type: 'string' },
    };

    it('should display properties in their natural order', () => {
      const schemaWithoutDisplayOrder = { ...schema, properties };
      component = shallow(<ObjectSchema {...props} schema={schemaWithoutDisplayOrder} />);

      genericSchemaComponents = component.find(GenericSchema);

      expect(genericSchemaComponents.at(0).prop('schema')).toBe(properties.string);
      expect(genericSchemaComponents.at(1).prop('schema')).toBe(properties.number);
      expect(genericSchemaComponents.at(2).prop('schema')).toBe(properties.something);
    });
  });

  describe('when the schema changes', () => {
    const schemaWithOnlyNumberProperty = {
      ...schema,
      properties: {
        number: { type: 'number' },
      },
    };

    beforeEach(() => {
      component = mount(<ObjectSchema {...props} />, mountOptions);

      onChange.mockClear();
    });

    it('should broadcast the valid part of the schema', () => {
      component.setProps({ schema: schemaWithOnlyNumberProperty });
      component.update();

      expect(onChange).toHaveBeenCalledWith(
        { number: 1 }, //
        schemaWithOnlyNumberProperty,
        { number: 1 },
      );
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
