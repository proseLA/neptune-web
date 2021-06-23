import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../test-utils';
import Field from '.';
import Checkbox from '../checkbox';
import DateInput from '../dateInput';

const props = {
  messages: {
    error: null,
    help: null,
    validations: [],
  },
  label: 'label',
};
describe('Field', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders label', () => {
    render(
      <Field {...props}>
        <input type="text" />
      </Field>,
    );
    expect(screen.getByText(props.label)).toBeTruthy();
  });

  it('renders info', () => {
    const ariaLabel = 'Click here for more details';
    render(
      <Field
        {...props}
        messages={{
          ...props.messages,
          info: {
            content: 'content',
            'aria-label': ariaLabel,
          },
        }}
      >
        <input type="text" />
      </Field>,
    );

    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Field {...props}>
        <input type="text" />
      </Field>,
    );

    expect(screen.getByLabelText(props.label)).toBeInTheDocument();
  });

  it('renders info', () => {
    render(
      <Field {...props}>
        <input type="text" />
      </Field>,
    );

    expect(screen.getByLabelText(props.label)).toBeInTheDocument();
  });

  describe('when error is provided and value has not changed', () => {
    it('shows the error', () => {
      const error = 'an error message';

      render(
        <Field {...props} messages={{ ...props.messages, error }}>
          <input type="text" />
        </Field>,
      );
      const alert = screen.getByText(error);

      expect(alert).toBeInTheDocument();
      expect(alert).toHaveClass('alert-negative');

      expect(formGroup()).toHaveClass('has-error');
    });
  });

  describe('when error is provided and value has changed', () => {
    it(`doesn't show the error`, () => {
      const error = 'an error message';

      render(
        <Field {...props} messages={{ ...props.messages, error }}>
          <input type="text" />
        </Field>,
      );
      triggerChange();

      const alert = screen.queryByText(error);

      expect(alert).not.toBeInTheDocument();
      expect(formGroup()).not.toHaveClass('has-error');
    });
    // Validations Logic
    describe('when validations are provided', () => {
      it('shows validations when submitted', () => {
        const error = 'an error message';
        const validations = ['minLenght'];
        render(
          <Field {...props} submitted messages={{ ...props.messages, error, validations }}>
            <input type="text" />
          </Field>,
        );

        triggerChange();

        const alert = screen.getByRole('alert');

        expect(alert).toBeInTheDocument();
        expect(alert).toHaveClass('alert-negative');
        expect(formGroup()).toHaveClass('has-error');
      });
      describe('when not submitted', () => {
        it('shows validations when changed and blurred', () => {
          const error = 'an error message';
          const validations = ['minLenght'];
          render(
            <Field {...props} messages={{ ...props.messages, error, validations }}>
              <input type="text" />
            </Field>,
          );
          triggerChange();
          triggerBlur();

          const alert = screen.getByRole('alert');

          expect(alert).toBeInTheDocument();
          expect(alert).toHaveClass('alert-negative');
          expect(formGroup()).toHaveClass('has-error');
        });
        it(`doesn't show validations when not changed and blurred`, () => {
          const error = 'an error message';
          const validations = ['minLenght'];
          render(
            <Field {...props} messages={{ ...props.messages, error, validations }}>
              <input type="text" />
            </Field>,
          );
          triggerFocus();
          triggerBlur();

          const alert = screen.queryByText('minLenght');

          expect(alert).not.toBeInTheDocument();
          expect(formGroup()).toHaveClass('has-error');
        });
        it(`doesn't show validations when changed and not blurred`, () => {
          const error = 'an error message';
          const validations = ['minLenght'];
          render(
            <Field {...props} messages={{ ...props.messages, error, validations }}>
              <input type="text" />
            </Field>,
          );
          triggerChange();

          const alert = screen.queryByText('minLenght');

          expect(alert).not.toBeInTheDocument();
          expect(formGroup()).not.toHaveClass('has-error');
        });
      });
    });

    describe('when validations are not provided', () => {
      // Help Logic
      it('shows help when focused and help is provided', () => {
        const error = 'an error message';
        const help = 'an help message';
        render(
          <Field {...props} messages={{ ...props.messages, help, error }}>
            <input type="text" />
          </Field>,
        );
        triggerFocus();
        triggerChange();

        const alert = screen.queryByText(help);

        expect(alert).toBeInTheDocument();
        expect(formGroup()).toHaveClass('has-info');
      });
      it(`doesn't show help when focused and help is not provided`, () => {
        const error = 'an error message';
        const help = 'an help message';
        render(
          <Field {...props} messages={{ ...props.messages, error }}>
            <input type="text" />
          </Field>,
        );
        triggerFocus();
        triggerChange();

        const alert = screen.queryByText(help);

        expect(alert).not.toBeInTheDocument();
        expect(formGroup()).not.toHaveClass('has-info');
      });
      it(`doesn't show help when not focused and help is provided`, () => {
        const error = 'an error message';
        const help = 'an help message';
        render(
          <Field {...props} messages={{ ...props.messages, help, error }}>
            <input type="text" />
          </Field>,
        );

        const alert = screen.queryByText(help);

        expect(alert).not.toBeInTheDocument();
        expect(formGroup()).not.toHaveClass('has-info');
      });
    });
  });
  describe('calls onChange value', () => {
    it('when input text is rendered', () => {
      const onChange = jest.fn();
      const error = 'an error message';
      const help = 'an help message';
      const changedValue = 'a value';
      render(
        <Field {...props} messages={{ ...props.messages, help, error }}>
          <input type="text" onChange={onChange} />
        </Field>,
      );
      triggerChange(changedValue);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({
            value: changedValue,
          }),
        }),
      );
    });

    it('when number text is rendered', () => {
      const onChange = jest.fn();
      const error = 'an error message';
      const help = 'an help message';
      const changedValue = '123';
      render(
        <Field {...props} messages={{ ...props.messages, help, error }}>
          <input type="number" onChange={onChange} />
        </Field>,
      );
      triggerChange(changedValue);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({
            value: changedValue,
          }),
        }),
      );
    });

    it('when checkbox is rendered', () => {
      const onChange = jest.fn();
      const error = 'an error message';
      const help = 'an help message';

      const { rerender } = render(
        <Field {...props} messages={{ ...props.messages, help, error }}>
          <Checkbox label="label" onChange={onChange} />
        </Field>,
      );

      screen.getByRole('checkbox').click();
      expect(onChange).toHaveBeenCalledWith(true);

      rerender(
        <Field {...props} messages={{ ...props.messages, help, error }}>
          <Checkbox label="label" onChange={onChange} checked />
        </Field>,
      );

      screen.getByRole('checkbox').click();
      expect(onChange).toHaveBeenCalledWith(false);
    });

    it('when dateInput is rendered', () => {
      const onChange = jest.fn();
      const error = 'an error message';
      const help = 'an help message';

      const { getByPlaceholderText } = render(
        <Field {...props} messages={{ ...props.messages, help, error }}>
          <DateInput
            onChange={onChange}
            dayLabel="Day input"
            monthLabel="Month Select"
            yearLabel="Year input"
            value="2000-01-1"
            id="date-input-1"
          />
        </Field>,
      );

      userEvent.clear(getByPlaceholderText('DD'));
      userEvent.type(getByPlaceholderText('DD'), '02');
      expect(onChange).toHaveBeenCalledWith('2000-01-02');
    });
  });
});

const formGroup = () => document.querySelector('.form-group');

const triggerFocus = () => {
  const input = screen.getByLabelText(props.label);
  input.focus();
};

const triggerChange = (value = 'a') => {
  const input = screen.getByLabelText(props.label);
  userEvent.type(input, value);
};

const triggerBlur = () => {
  const input = screen.getByLabelText(props.label);
  input.blur();
};
