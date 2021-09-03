import { act } from 'react-dom/test-utils';

import { b64ToBlob, parseFileName } from '../../common/general/base64';
import { getMockFetchPromise, mount, wait } from '../../test-utils';
import BasicTypeSchema from '../basicTypeSchema';
import SchemaFormControl from '../schemaFormControl';

import PersistAsyncSchema from './PersistAsyncSchema';

jest.mock('../../common/general/base64', () => ({
  b64ToBlob: jest.fn(),
  parseFileName: jest.fn(),
}));

b64ToBlob.mockImplementation((string) => new File([], string));
parseFileName.mockImplementation((string) => string);

describe('Given a component for rendering persist async schemas', () => {
  let onChange;
  let onPersistAsync;
  let props;

  const param = 'aParam';
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
    type: 'string',
    title: 'Text input',
    persistAsync: {
      method: 'GET',
      url: '/v1/foobar',
      param,
      idProperty: 'anIdProperty',
      schema: {
        title: 'File upload',
        type: 'blob',
        maxSize: 50000,
      },
    },
  };
  const errors = 'some error';
  const required = true;
  const translations = {};
  const submitted = false;

  jest.spyOn(global, 'fetch').mockImplementation((input, init) => {
    let response;

    // eslint-disable-next-line jest/no-standalone-expect
    expect(input).toBe('https://test-url/v1/foobar');

    const requestType =
      init.body instanceof FormData
        ? init.body.getAll(param)[0].name
        : JSON.parse(init.body)[param];

    switch (requestType) {
      case '200--ok--fast-5ms':
        response = getMockFetchPromise(
          200,
          () => Promise.resolve({ anIdProperty: 'response-from-200-fast' }),
          5,
          init.signal,
        );
        break;
      case '200--ok--slow-100ms':
        response = getMockFetchPromise(
          200,
          () => Promise.resolve({ anIdProperty: 'response-from-200-slow' }),
          100,
          init.signal,
        );
        break;
      case '422--error':
        response = getMockFetchPromise(
          422,
          () => Promise.resolve({ validation: { [param]: 'Invalid param! (422)' } }),
          0,
          init.signal,
        );
        break;
      case '499--json-body':
        response = getMockFetchPromise(
          499,
          () => Promise.resolve({ validation: { [param]: 'Invalid param! (499)' } }),
          0,
          init.signal,
        );
        break;
      case '499--no-body':
        response = getMockFetchPromise(499, () => Promise.reject(''), 0, init.signal);
        break;
      case '500--no-body':
        response = getMockFetchPromise(500, () => Promise.reject(''), 0, init.signal);
        break;
      default:
        response = getMockFetchPromise(500, () => Promise.reject(''), 0, init.signal);
    }
    return response;
  });

  beforeEach(() => {
    onChange = jest.fn();
    onPersistAsync = jest.fn();

    fetch.mockClear();
  });

  async function enterValueAndBlur(value, component) {
    const formControl = component
      .find(PersistAsyncSchema)
      .find(BasicTypeSchema)
      .find(SchemaFormControl);
    formControl.simulate('change', { target: { value } });
    formControl.simulate('blur');
    return formControl;
  }

  async function enterValue(value, component) {
    const formControl = component
      .find(PersistAsyncSchema)
      .find(BasicTypeSchema)
      .find(SchemaFormControl);
    act(() => formControl.prop('onChange')(value));
    return formControl;
  }

  describe.each([
    { schema: stringSchema, action: enterValueAndBlur },
    { schema: blobSchema, action: enterValue },
  ])('when the supplied props are valid for schema type: $schema.type', ({ schema, action }) => {
    let component;

    function getComponentErrorsProperty() {
      const basicTypeSchema = component.update().find(PersistAsyncSchema).find(BasicTypeSchema);
      return basicTypeSchema.prop('errors');
    }

    beforeEach(() => {
      props = {
        schema,
        onChange,
        onPersistAsync,
        translations,
        submitted,
        errors,
        required,
      };

      component = mount(<PersistAsyncSchema {...props} />);
    });

    it('should render the persist async stringSchema', () => {
      expect(component.find(PersistAsyncSchema)).toHaveLength(1);
    });

    it('should render the stringSchema inside of the persist async object', () => {
      const basic = component.find(PersistAsyncSchema).find(BasicTypeSchema);
      expect(basic).toHaveLength(1);
      expect(basic.prop('schema').title).toBe(schema.persistAsync.schema.title);
      expect(basic.prop('errors')).toBe('some error');
      expect(basic.prop('required')).toBe(true);
    });

    describe('when the field value is null', () => {
      it('should not trigger persist async on blur', async () => {
        await action(null, component);

        expect(global.fetch).toHaveBeenCalledTimes(0);
        expect(onPersistAsync).toHaveBeenCalledTimes(0);
      });
    });

    if (schema.persistAsync.type === 'string') {
      describe('when the field value is invalid', () => {
        it('should not trigger persist async', async () => {
          await action('client_validation_failure', component);

          expect(global.fetch).toHaveBeenCalledTimes(0);
          expect(onPersistAsync).toHaveBeenCalledTimes(0);
        });
      });
    }

    describe('when the field value is valid', () => {
      describe('when a persist async is triggered', () => {
        describe('when the request is successful', () => {
          beforeEach(async () => {
            await action('200--ok--fast-5ms', component);
          });

          it('should trigger onPersistAsync correctly', () => {
            expect(onPersistAsync).toHaveBeenCalledTimes(1);
            const firstArgumentOfFirstCall = onPersistAsync.mock.calls[0][0];
            expect(firstArgumentOfFirstCall.isPending()).toBe(true);
          });

          it('should broadcast the persist async response value', async () => {
            await wait(5);
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(
              'response-from-200-fast',
              schema,
              'response-from-200-fast',
            );
          });
        });

        describe('when the request fails with 422 error', () => {
          beforeEach(async () => {
            await action('422--error', component);
          });

          it('should pass down the error', async () => {
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual('Invalid param! (422)');
          });

          it('should broadcast null value', async () => {
            await wait(1);
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(null, schema, null);
          });
        });

        describe('when the request fails with status 500 and no body', () => {
          it('should render fallback error message', async () => {
            await action('500--no-body', component);
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when the request fails with status 499 and some json body', () => {
          it('should render fallback error message', async () => {
            await action('499--json-body', component);
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when the request fails with status 499 and no body', () => {
          it('should render fallback error message', async () => {
            await action('499--no-body', component);
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when a second request is triggered', () => {
          beforeEach(async () => {
            await action('200--ok--slow-100ms', component);
            await wait(1);
            await action('200--ok--fast-5ms', component);
          });

          describe('when the first request returns slower than the second request', () => {
            it('should still broadcast the result from the second request', async () => {
              await wait(120);
              expect(onChange).toHaveBeenCalledTimes(1);

              expect(onChange).toHaveBeenCalledWith(
                'response-from-200-fast',
                schema,
                'response-from-200-fast',
              );
            });
          });
        });

        describe('when the field is blurred again but value did not change', () => {
          it('should not trigger another persist async', async () => {
            await action('200--ok--fast-5ms', component);
            await wait(5);

            await action('200--ok--fast-5ms', component);

            expect(global.fetch).toHaveBeenCalledTimes(1);
          });
        });
      });
    });
  });
});
