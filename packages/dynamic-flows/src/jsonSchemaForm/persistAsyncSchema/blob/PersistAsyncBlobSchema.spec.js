import { Upload } from '@transferwise/components';

import { mount, wait } from '../../../test-utils';

import PersistAsyncBlobSchema from './PersistAsyncBlobSchema';

describe('Given a component for rendering persist async blob schemas', () => {
  let onChange = jest.fn();
  let props;

  const param = 'aParam';
  const idProperty = 'anIdProperty';
  const maxSize = 150000;
  const schema = {
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
  const errors = undefined;
  const required = true;
  const translations = {};
  const submitted = false;
  const model = null;

  const successResponseBody = {
    [idProperty]: 1234,
  };
  const getSuccessResponse = () => new Response(JSON.stringify(successResponseBody));

  const getFailureResponse = () => ({
    response: new Response('', { status: 500 }),
  });

  const validationFailureResponseBody = {
    validation: {
      [param]: 'Validation failed',
    },
  };
  const getValidationFailureResponse = () => ({
    response: new Response(JSON.stringify(validationFailureResponseBody), { status: 422 }),
  });

  beforeEach(() => {
    onChange = jest.fn();

    fetch.mockClear();

    props = {
      schema,
      onChange,
      translations,
      submitted,
      errors,
      required,
      model,
    };
  });

  describe('when the supplied props are valid', () => {
    let component;

    beforeEach(() => {
      component = mount(<PersistAsyncBlobSchema {...props} />);
    });

    it('should render the persist async schema', () => {
      expect(component.find(PersistAsyncBlobSchema)).toHaveLength(1);
    });

    it('should render the Upload inside of the persist async object', () => {
      const upload = component.find(PersistAsyncBlobSchema).find(Upload);
      expect(upload).toHaveLength(1);
      expect(upload.prop('maxSize')).toBe(maxSize);
      expect(component.text()).toContain('Text input');
    });

    describe('when a file is successfully uploaded', () => {
      beforeEach(async () => {
        component.find(Upload).invoke('onSuccess')(getSuccessResponse());
        await wait(0);
      });

      it('should broadcast the persist async response value', async () => {
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(
          successResponseBody[idProperty],
          schema,
          successResponseBody[idProperty],
        );
      });
    });

    describe('when a file upload is unsuccessful', () => {
      describe('when there is general failure', () => {
        beforeEach(async () => {
          component.find(Upload).invoke('onFailure')(getFailureResponse());
          await wait(0);
        });

        it('should broadcast the null value', async () => {
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith(null, schema, null);
        });
      });

      describe('when there is a validation failure', () => {
        beforeEach(async () => {
          component.find(Upload).invoke('onFailure')(getValidationFailureResponse());
          await wait(0);
        });

        it('should broadcast the null value', async () => {
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith(null, schema, null);
        });

        it('should display the validation error', async () => {
          expect(component.text()).toContain('Validation failed');
        });
      });
    });
  });
});
