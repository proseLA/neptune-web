import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '../../test-utils';
import Field from '.';

const props = {
  messages: {
    error: null,
    help: null,
    validation: [],
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

  it('renders children', () => {
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
    });
  });

  describe('when error is provided and value has changed', () => {
    it(`doesn't shows the error`, () => {
      const error = 'an error message';

      render(
        <Field {...props} messages={{ ...props.messages, error }}>
          <input type="text" />
        </Field>,
      );

      triggerChange();
      const alert = screen.queryByText(error);

      expect(alert).not.toBeInTheDocument();
    });
    // Validations Logic
    describe('when validations are provided', () => {
      it('shows validations when submitted', () => {
        const error = 'an error message';
        const validation = ['a validation message'];
        render(
          <Field {...props} submitted messages={{ ...props.messages, error, validation }}>
            <input type="text" />
          </Field>,
        );
        triggerChange();

        const alert = screen.queryByText(validation[0]);

        expect(alert).toBeInTheDocument();
        expect(alert).toHaveClass('alert-negative');
      });
      describe('when not submitted', () => {
        it('shows validations when changed and blurred', () => {
          const error = 'an error message';
          const validation = ['a validation message'];
          render(
            <Field {...props} messages={{ ...props.messages, error, validation }}>
              <input type="text" />
            </Field>,
          );
          triggerChange();
          triggerBlur();

          const alert = screen.queryByText(validation[0]);

          expect(alert).toBeInTheDocument();
          expect(alert).toHaveClass('alert-negative');
        });
        it(`doesn't shows validations when not changed and blurred`, () => {
          const error = 'an error message';
          const validation = ['a validation message'];
          render(
            <Field {...props} messages={{ ...props.messages, error, validation }}>
              <input type="text" />
            </Field>,
          );
          triggerBlur();
          const alert = screen.queryByText(validation[0]);

          expect(alert).not.toBeInTheDocument();
        });
        it(`doesn't shows validations when changed and not blurred`, () => {
          const error = 'an error message';
          const validation = ['a validation message'];
          render(
            <Field {...props} messages={{ ...props.messages, error, validation }}>
              <input type="text" />
            </Field>,
          );
          triggerChange();
          const alert = screen.queryByText(validation[0]);

          expect(alert).not.toBeInTheDocument();
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
      });
      it(`doesn't shows help when focused and help is not provided`, () => {
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
      });
      it(`doesn't shows help when not focused and help is provided`, () => {
        const error = 'an error message';
        const help = 'an help message';
        render(
          <Field {...props} messages={{ ...props.messages, help, error }}>
            <input type="text" />
          </Field>,
        );

        const alert = screen.queryByText(help);

        expect(alert).not.toBeInTheDocument();
      });
    });
  });
});

const triggerFocus = () => {
  const input = screen.getByLabelText(props.label);
  input.focus();
};

const triggerChange = () => {
  const input = screen.getByLabelText(props.label);
  userEvent.type(input, 'a');
};

const triggerBlur = () => {
  const input = screen.getByLabelText(props.label);
  input.blur();
};
