import { getMockFetchPromise, mount, wait } from '../../../test-utils';
import BasicTypeSchema from '../../basicTypeSchema';
import SchemaFormControl from '../../schemaFormControl';
import PersistAsyncSchema from '../PersistAsyncSchema';

describe('Given a component for rendering persist async schemas', () => {
  let onChange;
  let onPersistAsync;
  let props;

  const param = 'aParam';
  const idProperty = 'anIdProperty';
  const schema = {
    type: 'string',
    title: 'Text input',
    persistAsync: {
      method: 'GET',
      url: '/v1/foobar',
      param,
      idProperty,
      schema: {
        title: 'A title',
        type: 'string',
        pattern: '\\b(?!client_validation_failure\\b)\\w+',
      },
    },
  };
  const errors = 'some error';
  const required = true;
  const submitted = false;

  jest.spyOn(global, 'fetch').mockImplementation((input, init) => {
    let response;

    // eslint-disable-next-line jest/no-standalone-expect
    expect(input).toBe('https://test-url/v1/foobar');

    switch (JSON.parse(init.body)[param]) {
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

    props = {
      schema,
      onChange,
      onPersistAsync,
      submitted,
      errors,
      required,
    };
  });

  describe('when the supplied props are valid', () => {
    let component;

    function getComponentErrorsProperty() {
      const basicTypeSchema = component.update().find(PersistAsyncSchema).find(BasicTypeSchema);
      return basicTypeSchema.prop('errors');
    }

    function enterValueAndBlur(value) {
      const formControl = component
        .find(PersistAsyncSchema)
        .find(BasicTypeSchema)
        .find(SchemaFormControl);
      formControl.simulate('change', { target: { value } });
      formControl.simulate('blur');
      return formControl;
    }

    beforeEach(() => {
      component = mount(<PersistAsyncSchema {...props} />);
    });

    it('should render the persist async schema', () => {
      expect(component.find(PersistAsyncSchema)).toHaveLength(1);
    });

    it('should render the schema inside of the persist async object', () => {
      const basic = component.find(PersistAsyncSchema).find(BasicTypeSchema);
      expect(basic).toHaveLength(1);
      expect(basic.prop('schema').title).toBe('A title');
      expect(basic.prop('errors')).toBe('some error');
      expect(basic.prop('required')).toBe(true);
    });

    describe('when the field value is null', () => {
      it('should not trigger persist async on blur', () => {
        enterValueAndBlur(null);

        expect(global.fetch).toHaveBeenCalledTimes(0);
        expect(onPersistAsync).toHaveBeenCalledTimes(0);
      });
    });

    describe('when the field value is invalid', () => {
      it('should not trigger persist async', () => {
        enterValueAndBlur('client_validation_failure');

        expect(global.fetch).toHaveBeenCalledTimes(0);
        expect(onPersistAsync).toHaveBeenCalledTimes(0);
      });
    });

    describe('when the field value is valid', () => {
      describe('when a persist async is triggered', () => {
        describe('when the request is successful', () => {
          beforeEach(() => {
            enterValueAndBlur('200--ok--fast-5ms');
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
          beforeEach(() => {
            enterValueAndBlur('422--error');
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
            enterValueAndBlur('500--no-body');
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when the request fails with status 499 and some json body', () => {
          it('should render fallback error message', async () => {
            enterValueAndBlur('499--json-body');
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when the request fails with status 499 and no body', () => {
          it('should render fallback error message', async () => {
            enterValueAndBlur('499--no-body');
            await wait(1);
            expect(getComponentErrorsProperty()).toStrictEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when a second request is triggered', () => {
          beforeEach(async () => {
            enterValueAndBlur('200--ok--slow-100ms');
            await wait(1);
            enterValueAndBlur('200--ok--fast-5ms');
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
            enterValueAndBlur('200--ok--fast-5ms');
            await wait(5);

            enterValueAndBlur('200--ok--fast-5ms');

            expect(global.fetch).toHaveBeenCalledTimes(1);
          });
        });
      });
    });
  });
});
