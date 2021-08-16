import { shallow } from 'enzyme';

import AllOfSchema from '../allOfSchema';
import BasicTypeSchema from '../basicTypeSchema';
import ObjectSchema from '../objectSchema';
import OneOfSchema from '../oneOfSchema';
import PersistAsyncSchema from '../persistAsyncSchema';

import GenericSchema from '.';

describe('Given a component for rendering any generic schema', () => {
  let component;
  let props;
  let sharedProps;
  let onChange;
  let schema;
  let model;
  let errors;
  let onPersistAsync;

  const locale = 'en-GB';
  const required = true;
  const submitted = false;
  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
    onPersistAsync = jest.fn();
    sharedProps = {
      locale,
      required,
      onChange,
      submitted,
      translations,
      onPersistAsync,
    };
  });

  describe('when a string schema is supplied', () => {
    let stringSchemaComponent;

    beforeEach(() => {
      model = 'foo';
      schema = {
        type: 'string',
      };
      errors = 'bar';
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      stringSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a StringSchema', () => {
      expect(stringSchemaComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(stringSchemaComponent.prop('schema')).toStrictEqual(schema);
      expect(stringSchemaComponent.prop('model')).toStrictEqual(model);
      expect(stringSchemaComponent.prop('errors')).toStrictEqual(errors);
      expect(stringSchemaComponent.prop('locale')).toStrictEqual(locale);
      expect(stringSchemaComponent.prop('translations')).toStrictEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        stringSchemaComponent.simulate('change', 'bar', schema);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith('bar', schema);
      });
    });
  });

  describe('when a number schema is supplied', () => {
    let numberSchemaComponent;

    beforeEach(() => {
      model = 1;
      schema = {
        type: 'number',
      };
      errors = 'bar';
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      numberSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a StringSchema', () => {
      expect(numberSchemaComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(numberSchemaComponent.prop('schema')).toStrictEqual(schema);
      expect(numberSchemaComponent.prop('model')).toStrictEqual(model);
      expect(numberSchemaComponent.prop('errors')).toStrictEqual(errors);
      expect(numberSchemaComponent.prop('locale')).toStrictEqual(locale);
      expect(numberSchemaComponent.prop('translations')).toStrictEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        numberSchemaComponent.simulate('change', 2, schema);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith(2, schema);
      });
    });
  });

  describe('when a boolean schema is supplied', () => {
    let booleanSchemaComponent;

    beforeEach(() => {
      model = true;
      schema = {
        type: 'boolean',
      };
      errors = 'bar';
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      booleanSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a StringSchema', () => {
      expect(booleanSchemaComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(booleanSchemaComponent.prop('schema')).toStrictEqual(schema);
      expect(booleanSchemaComponent.prop('model')).toStrictEqual(model);
      expect(booleanSchemaComponent.prop('errors')).toStrictEqual(errors);
      expect(booleanSchemaComponent.prop('locale')).toStrictEqual(locale);
      expect(booleanSchemaComponent.prop('translations')).toStrictEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        booleanSchemaComponent.simulate('change', false, schema);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith(false, schema);
      });
    });
  });

  describe('when an object schema is supplied', () => {
    let objectSchemaComponent;

    beforeEach(() => {
      model = { foo: 'bar' };
      schema = {
        type: 'object',
        properties: {
          foo: {
            type: 'string',
          },
        },
      };
      errors = { foo: 'barbar' };

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      objectSchemaComponent = component.find(ObjectSchema);
    });

    it('should render a ObjectSchema', () => {
      expect(objectSchemaComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the ObjectSchema', () => {
      expect(objectSchemaComponent.prop('schema')).toStrictEqual(schema);
      expect(objectSchemaComponent.prop('model')).toStrictEqual(model);
      expect(objectSchemaComponent.prop('errors')).toStrictEqual(errors);
      expect(objectSchemaComponent.prop('locale')).toStrictEqual(locale);
      expect(objectSchemaComponent.prop('translations')).toStrictEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        objectSchemaComponent.simulate('change', { foo: 'barbar' }, schema.properties.foo);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith({ foo: 'barbar' }, schema.properties.foo);
      });
    });
  });

  describe('when a oneOf schema is supplied', () => {
    let oneOfComponent;

    beforeEach(() => {
      model = 'a';
      schema = {
        oneOf: [
          {
            type: 'string',
          },
        ],
      };
      errors = 'foo';

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      oneOfComponent = component.find(OneOfSchema);
    });

    it('should render a oneOfSchema', () => {
      expect(oneOfComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the oneOfSchema', () => {
      expect(oneOfComponent.prop('schema')).toStrictEqual(schema);
      expect(oneOfComponent.prop('model')).toStrictEqual(model);
      expect(oneOfComponent.prop('errors')).toStrictEqual(errors);
      expect(oneOfComponent.prop('locale')).toStrictEqual(locale);
      expect(oneOfComponent.prop('translations')).toStrictEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        oneOfComponent.simulate('change', 'b', schema.oneOf[0]);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith('b', schema.oneOf[0]);
      });
    });
  });

  describe('when a oneOf schema also has a type', () => {
    let oneOfComponent;
    let basicTypeSchemaComponent;

    beforeEach(() => {
      model = 'a';
      schema = {
        type: 'string',
        oneOf: [
          {
            const: 'a',
          },
        ],
      };
      errors = 'foo';

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      oneOfComponent = component.find(OneOfSchema);
      basicTypeSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a oneOfSchema', () => {
      expect(oneOfComponent).toHaveLength(1);
    });
    it('should not render a basicTypeSchema', () => {
      expect(basicTypeSchemaComponent).toHaveLength(0);
    });
  });

  describe('when an allOf schema is supplied', () => {
    let allOfComponent;

    beforeEach(() => {
      model = 'a';
      schema = {
        allOf: [
          {
            type: 'string',
          },
        ],
      };
      errors = 'foo';

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      allOfComponent = component.find(AllOfSchema);
    });

    it('should render a AllOfSchema', () => {
      expect(allOfComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the AllOfSchema', () => {
      expect(allOfComponent.prop('schema')).toStrictEqual(schema);
      expect(allOfComponent.prop('model')).toStrictEqual(model);
      expect(allOfComponent.prop('errors')).toStrictEqual(errors);
      expect(allOfComponent.prop('locale')).toStrictEqual(locale);
      expect(allOfComponent.prop('translations')).toStrictEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        allOfComponent.simulate('change', 'b', schema.allOf[0]);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith('b', schema.allOf[0]);
      });
    });
  });

  describe('when a persist async schema is supplied', () => {
    beforeEach(() => {
      model = null;
      schema = {
        type: 'string',
        title: 'Text input',
        persistAsync: {
          method: 'POST',
          url: '/v1/cards',
          param: 'cardNumber',
          idProperty: 'cardToken',
          schema: {
            title: 'Persist Async Title',
            type: 'string',
            placeholder: 'aPlaceholder',
          },
        },
      };
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
    });

    it('should render persist async schema', () => {
      expect(component.find(PersistAsyncSchema)).toHaveLength(1);
    });

    it('should pass through the supplied data to the PersistAsyncSchema', () => {
      const persistAsyncComponent = component.find(PersistAsyncSchema);

      expect(persistAsyncComponent.prop('schema')).toStrictEqual(schema);
      expect(persistAsyncComponent.prop('model')).toStrictEqual(model);
      expect(persistAsyncComponent.prop('errors')).toStrictEqual(errors);
      expect(persistAsyncComponent.prop('locale')).toStrictEqual(locale);
      expect(persistAsyncComponent.prop('translations')).toStrictEqual(translations);
    });

    it('should not render basic type schema', () => {
      expect(component.find(BasicTypeSchema)).toHaveLength(0);
    });
  });
});
