import { shallow } from 'enzyme';

import ArraySchema from '../arrayTypeSchema';

import ArrayListSchema from './arrayListSchema/ArrayListSchema';

describe('Given a component for rendering array schema', () => {
  let props;
  let schema;
  let model;

  describe('when a list schema is supplied', () => {
    let listSchemaComponent;

    beforeEach(() => {
      model = ['foo'];
      schema = { type: 'array', items: { type: 'string', format: 'base64url' } };
      props = { model, schema };
      const component = shallow(<ArraySchema {...props} />);
      listSchemaComponent = component.find(ArrayListSchema);
    });

    it('should render a MultipleFileUploadSchema', () => {
      expect(listSchemaComponent).toHaveLength(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(listSchemaComponent.prop('schema')).toStrictEqual(schema);
      expect(listSchemaComponent.prop('model')).toStrictEqual(model);
    });
  });

  describe('when a tuple schema is supplied', () => {
    it('should throw an error with message as "Not implemented"', () => {
      model = ['foo'];
      schema = { type: 'array', items: [] };
      props = { model, schema };

      try {
        shallow(<ArraySchema {...props} />);
      } catch (error) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error.message).toStrictEqual('Not implemented');
      }
    });
  });
});
