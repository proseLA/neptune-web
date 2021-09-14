import { mount } from '../../test-utils';

import PersistAsyncSchema from './PersistAsyncSchema';
import PersistAsyncBasicSchema from './basic';
import PersistAsyncBlobSchema from './blob';

describe('Given a component for rendering persist async schemas', () => {
  let onChange = jest.fn();
  let onPersistAsync = jest.fn();
  const errors = 'some error';
  const required = true;
  const translations = {};
  const submitted = false;

  const param = 'aParam';
  const idProperty = 'anIdProperty';
  const maxSize = 150000;
  const stringSchema = {
    type: 'string',
    title: 'Text input',
    persistAsync: {
      method: 'GET',
      url: '/v1/foobar',
      param,
      idProperty: 'anIdProperty',
      schema: {
        title: 'A title',
        type: 'string',
        pattern: '\\b(?!client_validation_failure\\b)\\w+',
      },
    },
  };
  const blobSchema = {
    type: 'integer',
    title: 'Text input',
    persistAsync: {
      method: 'POST',
      url: '/v1/foobar',
      param,
      idProperty,
      schema: {
        type: 'blob',
        maxSize,
        accepts: ['image/png', 'image/jpg'],
      },
    },
  };

  beforeEach(() => {
    fetch.mockClear();
  });

  const testConfig = [
    [stringSchema, PersistAsyncBasicSchema],
    [blobSchema, PersistAsyncBlobSchema],
  ];

  describe.each(testConfig)('when the supplied props are valid', (schema, componentType) => {
    let component;
    let props = {
      schema,
      onChange,
      onPersistAsync,
      translations,
      submitted,
      errors,
      required,
    };

    beforeEach(() => {
      component = mount(<PersistAsyncSchema {...props} />);
    });

    it('should render the correct persist async schema', () => {
      expect(component.find(componentType)).toHaveLength(1);
    });

    Object.entries(props).forEach(([key, value]) => {
      it(`should pass the ${key} prop to the child component`, () => {
        expect(component.find(componentType).prop(key)).toStrictEqual(value);
      });
    });
  });
});
