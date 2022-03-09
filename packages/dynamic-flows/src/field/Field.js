import { InlineAlert, InstructionsList } from '@transferwise/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { FormControlType } from '../common';
import { getControlType_Legacy } from '../common/requirements';
import { getValidationFailures } from '../common/validation/validation-failures';
import FormControl from '../formControl';

export const FieldTypes = {
  STRING: 'string',
  NUMBER: 'number',
  INTEGER: 'integer',
  BOOLEAN: 'boolean',
  BLOB: 'blob',
};

export const FieldFormats = {
  DATE: 'date',
  PHONE: 'phone',
  BASE_64_URL: 'base64url',
  PASSWORD: 'password',
  EMAIL: 'email',
  URI: 'uri',
};

const DefaultValidationMessages = {
  REQUIRED: 'Required',
  PATTERN: 'Incorrect format',
  MINLENGTH: 'The value is too short',
  MAXLENGTH: 'The value is too long',
  MIN: 'The value is too low',
  MAX: 'The value is too high',
};

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      changed: false,
      error: props.errorMessage,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage !== this.props.errorMessage) {
      this.setState({ error: nextProps.errorMessage });
    }
  }

  onFocus(value) {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(value);
    }
    this.setState({ focused: true });
  }

  onBlur(value) {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(value);
    }
    this.setState({ focused: false });
  }

  onChange(value) {
    this.props.onChange(value);
    this.setState({ changed: true, focused: true });
  }

  validateValue(newValue) {
    const validationFailures = {};
    const { field } = this.props;
    const validationFailuresKeys = getValidationFailures(newValue, field);
    validationFailuresKeys.forEach((failure) => {
      const messageKey = failure.toLowerCase();

      const message =
        (field.validationMessages && field.validationMessages[messageKey]) ||
        DefaultValidationMessages[messageKey.toUpperCase()];

      if (message) {
        validationFailures[messageKey] = message;
      }
    });
    return validationFailures;
  }

  objectSizeOf = (object) => (object ? Object.keys(object).length : 0);

  updateAlert(control) {
    const { value, field, errorMessage, warningMessage } = this.props;
    const { focused, changed, error } = this.state;

    const validationFailures = changed && !focused ? this.validateValue(value) : {};

    if (this.objectSizeOf(validationFailures) > 0) {
      return {
        type: 'error',
        content: Object.keys(validationFailures).map((key) => (
          <div key={key}>{validationFailures[key]}</div>
        )),
      };
    }
    if (error && errorMessage) {
      return {
        type: 'error',
        content: <>{errorMessage}</>,
      };
    }
    if (warningMessage) {
      return {
        type: 'warning',
        content: <>{warningMessage}</>,
      };
    }
    if (focused && field.help && field.help.message) {
      return {
        type: 'info',
        content: <>{field.help.message}</>,
      };
    }
    if (focused && field.help && field.help.list && field.help.list.length > 0) {
      return {
        type: 'info',
        // eslint-disable-next-line react/no-array-index-key
        content: field.help.list.map((item, index) => <div key={index}>{item}</div>),
      };
    }
    if (
      focused &&
      field.help &&
      field.help.do &&
      field.help.do.length > 0 &&
      field.help.dont &&
      field.help.dont.length > 0
    ) {
      return {
        type: 'info',
        content: (
          <div className="m-b-1">
            <InstructionsList dos={field.help.do} donts={field.help.dont} />
          </div>
        ),
      };
    }
    if (focused && control !== FormControlType.FILE && field.help && field.help.image) {
      return {
        type: 'info',
        content: <img className="thumbnail m-y-2" src={`${field.help.image}`} alt={field.label} />,
      };
    }
    return {
      type: null,
      content: null,
    };
  }

  render() {
    const { name, field, value, locale, label } = this.props;

    const control = field.control || getControlType_Legacy(field);
    const alert = this.updateAlert(control);

    const showAlert = !!alert.content;
    const showLabel =
      control !== FormControlType.FILE &&
      control !== FormControlType.UPLOAD &&
      control !== FormControlType.CHECKBOX;

    return (
      <div
        className={classNames('form-group', `tw-field-${name}`, {
          'has-info': alert.type === 'info' && showAlert,
          'has-error': alert.type === 'error' && showAlert,
          'has-warning': alert.type === 'warning' && showAlert,
          hidden: field.hidden,
        })}
      >
        {showLabel && (
          // eslint-disable-next-line jsx-a11y/label-has-for
          <label className="control-label">{label}</label>
        )}
        <FormControl
          {...field}
          type={control}
          name={name}
          locale={locale}
          value={value}
          onChange={(event) => this.onChange(event)}
          onFocus={(event) => this.onFocus(event)}
          onBlur={(event) => this.onBlur(event)}
        />
        {showAlert && <InlineAlert type={alert.type}>{alert.content}</InlineAlert>}
      </div>
    );
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any.isRequired,
      label: PropTypes.node,
      icon: PropTypes.string,
      currency: PropTypes.string,
      note: PropTypes.node,
      secondary: PropTypes.node,
    }),
  ]),
  field: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean', 'blob']).isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoComplete: PropTypes.bool,
    placeholder: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    control: PropTypes.oneOf([
      'radio',
      'checkbox',
      'select',
      'file',
      'date',
      'date-time',
      'date-lookup',
      'tel',
      'number',
      'hidden',
      'password',
      'text',
      'textarea',
      'upload',
      'tab',
    ]),
    format: PropTypes.oneOf(['date', 'phone', 'base64url', 'password', 'email', 'uri']),
    displayPattern: PropTypes.string,
    help: PropTypes.shape({
      message: PropTypes.string,
      image: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
      do: PropTypes.arrayOf(PropTypes.string),
      dont: PropTypes.arrayOf(PropTypes.string),
    }),
    pattern: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    minimum: PropTypes.number,
    maximum: PropTypes.number,
    uploadProps: PropTypes.shape({
      animationDelay: PropTypes.number,
      csButtonText: PropTypes.string,
      csFailureText: PropTypes.string,
      csSuccessText: PropTypes.string,
      csTooLargeMessage: PropTypes.string,
      csWrongTypeMessage: PropTypes.string,
      httpOptions: PropTypes.shape({}),
      maxSize: PropTypes.number,
      onCancel: PropTypes.func,
      onFailure: PropTypes.func,
      onStart: PropTypes.func,
      onSuccess: PropTypes.func,
      psButtonText: PropTypes.string,
      psProcessingText: PropTypes.string,
      size: PropTypes.string,
      usAccept: PropTypes.oneOf(['*', 'image/*', 'application/*']),
      usButtonText: PropTypes.string,
      usDisabled: PropTypes.bool,
      usDropMessage: PropTypes.string,
      usHelpImage: PropTypes.string,
      usLabel: PropTypes.string,
      usPlaceholder: PropTypes.string,
    }),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
        value: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
          PropTypes.bool,
          PropTypes.object,
          PropTypes.instanceOf(Date),
        ]).isRequired,
        header: PropTypes.node,
        icon: PropTypes.string,
        currency: PropTypes.string,
        note: PropTypes.node,
        secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        separator: PropTypes.bool,
        disabled: PropTypes.bool,
      }),
    ),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    validationMessages: PropTypes.shape({
      required: PropTypes.string,
      pattern: PropTypes.string,
      minlength: PropTypes.string,
      maxlength: PropTypes.string,
      min: PropTypes.string,
      max: PropTypes.string,
    }),
  }).isRequired,
  locale: PropTypes.string,
  countryCode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errorMessage: PropTypes.string,
  warningMessage: PropTypes.string,
  label: PropTypes.string,
};

Field.defaultProps = {
  locale: 'en-GB',
  countryCode: null,
  value: null,
  errorMessage: null,
  warningMessage: null,
  onFocus: null,
  onBlur: null,
  label: null,
};
