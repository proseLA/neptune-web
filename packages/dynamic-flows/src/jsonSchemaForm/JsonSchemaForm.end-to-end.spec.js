import '@testing-library/jest-dom';

import { render, screen, act, fireEvent } from '@testing-library/react';
import { Provider } from '@transferwise/components';
import { useState } from 'react';

import { getI18n } from '../test-utils';

import JsonSchemaForm from './JsonSchemaForm';

describe('E2E: Given a component for rendering a JSON schema form', () => {
  let schema;
  let errors;
  let onChange;
  let onPersistAsync;
  let props;

  const baseUrl = 'some-test-base-url';

  const stringSchema = {
    title: 'String',
    type: 'string',
    minLength: 2,
  };

  const constSchema = {
    enum: ['abcd'],
  };

  const enumSchema = {
    title: 'Enum',
    oneOf: [
      { const: 1, title: 'One' },
      { const: 2, title: 'Two' },
    ],
  };

  const largeEnumSchema = {
    title: 'Large Enum',
    oneOf: [
      { const: 1, title: 'One' },
      { const: 2, title: 'Two' },
      { const: 3, title: 'Three' },
    ],
  };

  const booleanSchema = {
    title: 'Check',
    type: 'boolean',
  };

  const numberSchema = {
    title: 'Number',
    type: 'number',
  };

  beforeEach(() => {
    schema = {
      allOf: [
        {
          oneOf: [
            {
              title: 'Title',
              type: 'object',
              properties: {
                string: stringSchema,
                const: constSchema,
                enum: enumSchema,
                boolean: booleanSchema,
                number: numberSchema,
                largeEnum: largeEnumSchema,
              },
            },
          ],
        },
      ],
    };

    onChange = jest.fn();
    onPersistAsync = jest.fn();
    errors = {
      string: 'Error',
    };

    const model = { string: 'foo' };
    const submitted = false;
    const disabled = false;
    props = {
      schema,
      model,
      errors,
      onChange,
      submitted,
      disabled,
      onPersistAsync,
      baseUrl,
    };
  });

  function renderWithProvider(component) {
    return render(<Provider i18n={getI18n()}>{component}</Provider>);
  }

  describe('when initialised', () => {
    beforeEach(() => {
      renderWithProvider(<JsonSchemaForm {...props} />);
    });

    it('should render text input control', () => {
      const string = screen.getByLabelText('String');
      expect(string.closest('input')).toHaveAttribute('type', 'text');
    });

    it('should render number input control', () => {
      const number = screen.getByLabelText('Number');
      expect(number.closest('input')).toHaveAttribute('type', 'number');
    });

    it('should render a checkbox for the boolean schema', () => {
      const check = screen.getByLabelText('Check');
      expect(check.parentElement).toHaveClass('np-checkbox-button');
    });

    it('should render radio buttons for the enum schema', () => {
      expect(screen.getByText('Enum')).toBeInTheDocument();
      expect(screen.getAllByRole('radio')).toHaveLength(2);
    });

    it('should render a select for the large enum schema', () => {
      const selectDropdownButton = screen.getByLabelText('Large Enum');
      expect(selectDropdownButton.closest('div')).toHaveClass('tw-select');
    });

    it('should render the model value in the relevant control', () => {
      expect(screen.getByLabelText('String').value).toBe('foo');
    });

    it('should render an error', () => {
      expect(screen.getByRole('alert')).toHaveTextContent(/error/i);
    });

    it('should broadcast a change for the const', () => {
      expect(onChange).toHaveBeenCalledWith(
        { string: 'foo', const: 'abcd' },
        constSchema,
        'abcd',
        null,
      );
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the text input value changes', () => {
    beforeEach(() => {
      renderWithProvider(<JsonSchemaForm {...props} />);

      fireEvent.change(screen.getByLabelText('String'), { target: { value: 'new' } });
    });

    it('should trigger the component onChange', () => {
      expect(onChange).toHaveBeenCalledWith(
        { string: 'new', const: 'abcd' },
        stringSchema,
        'new',
        'foo',
      );
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  describe('when the text input value changes to something invalid', () => {
    beforeEach(() => {
      renderWithProvider(<JsonSchemaForm {...props} />);

      fireEvent.change(screen.getByLabelText('String'), { target: { value: 'x' } });
    });

    it('should NOT remove the value from the model', () => {
      expect(onChange).toHaveBeenLastCalledWith(
        { const: 'abcd', string: 'x' },
        stringSchema,
        'x',
        'foo',
      );
    });

    describe('and then to something else invalid', () => {
      beforeEach(() => {
        fireEvent.change(screen.getByLabelText('String'), { target: { value: 'y' } });
      });

      it('should call onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    });

    describe('and then to something valid', () => {
      beforeEach(() => {
        fireEvent.change(screen.getByLabelText('String'), { target: { value: 'bar' } });
      });

      it('should call onChange with the new value', () => {
        expect(onChange).toHaveBeenCalledWith(
          { string: 'bar', const: 'abcd' },
          stringSchema,
          'bar',
          'x',
        );
      });

      it('should have called onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    });
  });

  describe('when disabled', () => {
    it('should disable the controls', () => {
      renderWithProvider(<JsonSchemaForm {...props} disabled />);

      const controls = ['textbox', 'radio', 'button', 'spinbutton'];
      controls.forEach((control) => {
        screen.getAllByRole(control).forEach((node) => {
          expect(node).toBeDisabled();
        });
      });
    });
  });

  describe('when a property becomes required after initialisation, and the form is submitted', () => {
    let node;

    const optionalSchema = {
      type: 'object',
      title: 'Option A',
      properties: {
        a: {
          title: 'A Number',
          type: 'number',
        },
      },
    };

    const requiredSchema = {
      ...optionalSchema,
      required: ['a'],
    };

    beforeEach(() => {
      props = { ...props, schema: optionalSchema };
      node = renderWithProvider(<JsonSchemaForm {...props} />);
    });

    it('should display validation errors', () => {
      node.rerender(
        <Provider i18n={getI18n()}>
          <JsonSchemaForm {...props} schema={requiredSchema} submitted />
        </Provider>,
      );

      expect(screen.getByText('Please fill out this field.')).toBeInTheDocument();
    });
  });

  describe('when initialising it with a schema containing a oneOf with two options', () => {
    const makeSchemaWithOneOfTwoOptions = (control) => ({
      allOf: [
        {
          title: 'Recipient Bank Details',
          oneOf: [
            {
              title: 'Sort Code Tab',
              type: 'object',
              properties: {
                name: {
                  title: 'Full name field',
                  type: 'string',
                },
                sortcode: {
                  title: 'Sort Code field',
                  type: 'string',
                },
                account: {
                  title: 'Account number field',
                  type: 'string',
                },
                type: {
                  type: 'string',
                  const: 'SortCode',
                },
              },
            },
            {
              title: 'IBAN Tab',
              type: 'object',
              properties: {
                name: {
                  title: 'Full name field',
                  type: 'string',
                },
                iban: {
                  title: 'IBAN field',
                  type: 'string',
                },
                type: {
                  type: 'string',
                  const: 'Iban',
                },
              },
            },
          ],
          control,
        },
      ],
    });
    const renderComponent = (schema, onChange, initialModel = {}) => {
      const JsonSchemaFormWithModelState = () => {
        const [model, setModel] = useState(initialModel);
        return (
          <JsonSchemaForm
            schema={schema}
            model={model}
            errors={{}}
            submitted={false}
            baseUrl=""
            onChange={(newModel) => {
              setModel(newModel);
              onChange(newModel);
            }}
            onPersistAsync={jest.fn()}
          />
        );
      };
      const view = renderWithProvider(<JsonSchemaFormWithModelState />);

      return { ...view };
    };

    ['tab', 'radio', 'select'].forEach((control) => {
      describe(`when using a "${control}" control type`, () => {
        it(`dispatches onChange immediately with the model corresponding to the selected oneOf`, () => {
          //
          jest.useFakeTimers();

          const onChange = jest.fn();
          const schema = makeSchemaWithOneOfTwoOptions(control);
          const initialModel = {
            name: 'Bob Loblaw',
            sortcode: '111111',
            account: '22222222',
            iban: 'IT0000000000',
          };

          renderComponent(schema, onChange, initialModel);

          expect(onChange).toHaveBeenLastCalledWith({
            type: 'SortCode',
            name: 'Bob Loblaw',
            sortcode: '111111',
            account: '22222222',
          });
        });
      });
    });

    describe('and switching between the two non-const schemas in the oneOf', () => {
      it('keeps separate models for each schema in the oneOf', () => {
        jest.useFakeTimers();

        const onChange = jest.fn();
        const schema = makeSchemaWithOneOfTwoOptions('tab');
        const initialModel = {};
        renderComponent(schema, onChange, initialModel);

        // enter name, sortcode and account number
        act(() => {
          fireEvent.change(screen.getByLabelText(/full name field/i), {
            target: { value: 'Robert Sortcode' },
          });
          fireEvent.change(screen.getByLabelText(/sort code field/i), {
            target: { value: '111111' },
          });
          fireEvent.change(screen.getByLabelText(/account number field/i), {
            target: { value: '22222222' },
          });
        });

        // expect the values to be visible, of course
        expect(screen.getByDisplayValue('Robert Sortcode')).toBeInTheDocument();
        expect(screen.getByDisplayValue('111111')).toBeInTheDocument();
        expect(screen.getByDisplayValue('22222222')).toBeInTheDocument();

        // also expect the model to have been updated to the expected value
        expect(onChange).toHaveBeenLastCalledWith({
          type: 'SortCode',
          name: 'Robert Sortcode',
          sortcode: '111111',
          account: '22222222',
        });

        // switch to the other schema (IBAN Tab)
        act(() => {
          fireEvent.click(screen.getByText(/IBAN Tab/i));
        });

        // expect the values entered on the other schema to not be visible here
        expect(screen.queryByDisplayValue('Robert Sortcode')).not.toBeInTheDocument();
        expect(screen.queryByDisplayValue('111111')).not.toBeInTheDocument();
        expect(screen.queryByDisplayValue('22222222')).not.toBeInTheDocument();

        // also expect the model to be updated to the selected type: 'Iban'
        expect(onChange).toHaveBeenLastCalledWith({ type: 'Iban' });

        // now enter a different name and an IBAN
        act(() => {
          fireEvent.change(screen.getByLabelText(/full name field/i), {
            target: { value: 'Bob Iban' },
          });
          fireEvent.change(screen.getByLabelText(/IBAN field/i), {
            target: { value: 'IT000000000' },
          });
        });

        // expect the model to be updated accordingly
        expect(onChange).toHaveBeenLastCalledWith({
          type: 'Iban',
          name: 'Bob Iban',
          iban: 'IT000000000',
        });

        // now switch back to the first tab (Sort Code Tab)
        act(() => {
          fireEvent.click(screen.getByText(/Sort Code Tab/i));
        });

        // expect the values initially entered in this tab to be visible again
        expect(screen.getByDisplayValue('111111')).toBeInTheDocument();
        expect(screen.getByDisplayValue('22222222')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Robert Sortcode')).toBeInTheDocument();

        // also expect the model to be updated accordingly
        expect(onChange).toHaveBeenLastCalledWith({
          type: 'SortCode',
          name: 'Robert Sortcode',
          sortcode: '111111',
          account: '22222222',
        });

        jest.useRealTimers();
      });
    });
  });
});
