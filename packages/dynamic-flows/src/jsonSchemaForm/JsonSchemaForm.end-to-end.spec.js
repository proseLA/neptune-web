import '@testing-library/jest-dom';

import { render, screen, act, fireEvent } from '@testing-library/react';
import { useState } from 'react';

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
    const locale = 'en-GB';
    const submitted = false;
    const disabled = false;
    props = {
      schema,
      model,
      errors,
      onChange,
      submitted,
      locale,
      disabled,
      onPersistAsync,
      baseUrl,
    };
  });

  describe('when initialised', () => {
    beforeEach(() => {
      render(<JsonSchemaForm {...props} />);
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
      render(<JsonSchemaForm {...props} />);

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
      render(<JsonSchemaForm {...props} />);

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
      render(<JsonSchemaForm {...props} disabled />);

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
      node = render(<JsonSchemaForm {...props} />);
    });

    it('should display validation errors', () => {
      node.rerender(<JsonSchemaForm {...props} schema={requiredSchema} submitted />);

      expect(screen.getByText('Value is required...')).toBeInTheDocument();
    });
  });

  describe('when wrapping JsonSchemaForm in a component with a useState managing the model', () => {
    describe('and switching between the two non-const schemas in a oneOf', () => {
      const schema = {
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
            control: 'tab',
          },
        ],
      };
      const renderComponent = () => {
        const modelReference = { model: {} };
        const JsonSchemaFormWithModelState = () => {
          const [model, setModel] = useState({});
          return (
            <JsonSchemaForm
              schema={schema}
              model={model}
              errors={{}}
              submitted={false}
              baseUrl=""
              locale="en-GB"
              onChange={(newModel) => {
                setModel(newModel);
                modelReference.model = newModel;
              }}
              onPersistAsync={jest.fn()}
            />
          );
        };
        const view = render(<JsonSchemaFormWithModelState />);

        return { ...view, getModel: () => modelReference.model };
      };
      it('should always render the current model', () => {
        jest.useFakeTimers();
        // Render TestComponent with OneOf, returning a `getModel` function
        const { getModel } = renderComponent();

        // When name, sortcode and account number are filled in
        act(() => {
          fireEvent.change(screen.getByLabelText(/full name field/i), {
            target: { value: 'Bob Loblaw' },
          });
          fireEvent.change(screen.getByLabelText(/sort code field/i), {
            target: { value: '111111' },
          });
          fireEvent.change(screen.getByLabelText(/account number field/i), {
            target: { value: '22222222' },
          });
        });

        // the values are visible on the screen, of course
        expect(screen.getByDisplayValue('111111')).toBeInTheDocument();
        expect(screen.getByDisplayValue('22222222')).toBeInTheDocument();

        // most importantly, the model is updated to the correct values
        expect(getModel()).toStrictEqual({
          type: 'SortCode',
          name: 'Bob Loblaw',
          sortcode: '111111',
          account: '22222222',
        });

        // when switching to the IBAN Tab
        act(() => {
          fireEvent.click(screen.getByText(/IBAN Tab/i));
        });

        // The sortcode and account number fields are not visible in this schema
        expect(screen.queryByDisplayValue('111111')).not.toBeInTheDocument();
        expect(screen.queryByDisplayValue('22222222')).not.toBeInTheDocument();

        // and the model is "cleaned", the `type` is now `Iban`, not SortCode, but the `name` is kept.
        expect(getModel()).toStrictEqual({
          type: 'Iban',
          name: 'Bob Loblaw',
        });

        // when switching back to the Sort Code Tab
        act(() => {
          fireEvent.click(screen.getByText(/Sort Code Tab/i));
        });

        // the model is updated to contain `type: "SortCode"`, the name is kept,
        // but notably, the sortcode and account number are not coming back to the model.
        expect(getModel()).toStrictEqual({
          type: 'SortCode',
          name: 'Bob Loblaw',
        });

        // As a result, we now expect the sort code and account number fields to be empty,
        // in order to be consistent with the model above, which is what would eventually be submitted.
        expect(screen.queryByDisplayValue('111111')).not.toBeInTheDocument();
        expect(screen.queryByDisplayValue('22222222')).not.toBeInTheDocument();

        jest.useRealTimers();
      });
    });
  });
});
