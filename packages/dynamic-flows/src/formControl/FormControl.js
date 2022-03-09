import {
  Checkbox,
  DateInput,
  DateLookup,
  InputWithDisplayFormat,
  PhoneNumberInput,
  RadioGroup,
  Select,
  Tabs,
  TextareaWithDisplayFormat,
  Upload,
} from '@transferwise/components';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { DateMode, FormControlType, MonthFormat, Size } from '../common';
import { dateStringToDate, dateToDateString } from '../common/general';

const ACCEPTED_FORMAT = ['*', 'image/*', 'application/*'];

export default class FormControl extends PureComponent {
  static Type = FormControlType;

  static Size = Size;

  static MonthFormat = MonthFormat;

  static DateMode = DateMode;

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption,
      touched: false,
      prevValue: props.value,
    };
  }

  static getDerivedStateFromProps(nextProps, previousState) {
    if (previousState.prevValue !== nextProps.value) {
      return { prevValue: nextProps.value, value: nextProps.value };
    }
    return null;
  }

  /**
   * autocomplete hides our form help so we need to disable it when help text
   * is present. Chrome ignores autocomplete=off, the only way to disable it is
   * to provide an 'invalid' value, for which 'disabled' serves.
   */
  getAutocompleteStatus = () => (this.props.autoComplete ? 'on' : 'disabled');

  getValue(event) {
    let value;
    const { type } = this.props;

    if (event && typeof event === 'object') {
      if (event.target) {
        // This is a SyntheticEvent coming from React
        // Input type number target value is a string and needs to be a number.
        if (type === FormControlType.NUMBER) {
          value = parseFloat(event.target.value);
        } else {
          ({ value } = event.target);
        }
      } else if (event.value || event.value === 0) {
        // If we don't have a target but the emitted event
        // has a value it's coming from our Select or Radio
        // components
        ({ value } = event);
      } else {
        // In any other case we just emit the event as it is
        value = event;
      }
    } else {
      // This is coming from our Checkbox component which is
      // a boolean basically, so we must emit that value
      value = event;
    }
    return value;
  }

  handleOnChange = (event) => {
    const value = this.getValue(event);

    this.props.onChange(value);
  };

  handleOnFocus = (event) => this.props.onFocus && this.props.onFocus(this.getValue(event));

  handleOnBlur = (event) => this.props.onBlur && this.props.onBlur(this.getValue(event));

  getSelectedOption = (options) => {
    let selectedOption;
    if (this.state.selectedOption !== null && typeof this.state.selectedOption !== 'undefined') {
      selectedOption = options.find((option) => this.state.selectedOption.value === option.value);
    }
    if (this.props.value !== null && typeof this.props.value !== 'undefined') {
      selectedOption = options.find((option) => this.props.value === option.value);
    }
    return selectedOption;
  };

  getSelectedOptionFromIndex = (options, newIndex) => {
    return options.find((option) => option.value === newIndex);
  };

  mapOption = (option) => {
    return {
      ...option,
      disabled: option.disabled || this.props.disabled,
      readOnly: this.props.readOnly,
    };
  };

  render() {
    const {
      name,
      placeholder,
      step,
      countryCode,
      type,
      options,
      disabled,
      readOnly,
      required,
      minLength,
      maxLength,
      min,
      max,
      searchPlaceholder,
      searchValue,
      onSearchChange,
      size,
      uploadProps,
      label,
      monthFormat,
      id,
      minDate,
      maxDate,
      value,
      mode,
    } = this.props;

    switch (type) {
      case FormControlType.RADIO:
        return (
          <RadioGroup
            radios={options.map(this.mapOption)}
            name={name}
            selectedValue={value}
            onChange={this.handleOnChange}
          />
        );

      case FormControlType.CHECKBOX:
        return (
          <Checkbox
            checked={value}
            disabled={disabled}
            label={label}
            required={required}
            readOnly={readOnly}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.SELECT:
        return (
          <Select
            id={id}
            selected={this.getSelectedOption(options)}
            options={options}
            search={options.length >= 20}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
            searchValue={searchValue}
            onChange={(newValue) => {
              this.setState({ selectedOption: newValue });
              this.handleOnChange(newValue);
            }}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onSearchChange={onSearchChange}
          />
        );

      case FormControlType.TAB:
        return (
          <Tabs
            id={id}
            selected={this.getSelectedOption(options)?.value || 0}
            tabs={options.map((option) => ({
              title: option.label,
              content: <></>,
              disabled: option.disabled || false,
            }))}
            name={id}
            onTabSelect={(newIndex) => {
              this.setState({ selectedOption: this.getSelectedOptionFromIndex(options, newIndex) });
              this.handleOnChange(newIndex);
            }}
          />
        );

      case FormControlType.NUMBER:
        return (
          <input
            autoComplete={this.getAutocompleteStatus()}
            className="form-control"
            disabled={disabled}
            id={id}
            max={max}
            min={min}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            step={step}
            type="number"
            value={value}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.HIDDEN:
        return <input type="hidden" name={name} value={value} id={id} />;

      case FormControlType.PASSWORD:
        return (
          <input
            autoComplete={this.getAutocompleteStatus()}
            className="form-control"
            disabled={disabled}
            id={id}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            type="password"
            value={value}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.DATE:
      case FormControlType.DATETIME:
        return (
          <DateInput
            disabled={disabled}
            size={size}
            value={value}
            mode={mode}
            monthFormat={monthFormat}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.DATELOOKUP:
        return (
          <DateLookup
            value={dateStringToDate(value)}
            min={minDate}
            max={maxDate}
            placeholder={placeholder}
            monthFormat={monthFormat}
            disabled={disabled}
            onChange={(date) => this.handleOnChange(dateToDateString(date))}
            onBlur={this.handleOnBlur}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.TEL:
        return (
          <PhoneNumberInput
            disabled={disabled}
            countryCode={countryCode}
            placeholder={placeholder}
            required={required}
            searchPlaceholder={searchPlaceholder}
            size={size}
            initialValue={value}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.TEXTAREA: {
        const textareaProps = {
          className: 'form-control tw-form-control',
          id,
          name,
          placeholder,
          value,
          readOnly,
          required,
          minLength,
          maxLength,
          onChange: this.handleOnChange,
          onFocus: this.handleOnFocus,
          onBlur: this.handleOnBlur,
          disabled,
          autoComplete: this.getAutocompleteStatus(),
        };

        if (this.props.displayPattern) {
          return (
            <TextareaWithDisplayFormat
              displayPattern={this.props.displayPattern}
              {...textareaProps}
            />
          );
        }
        return <textarea {...textareaProps} />;
      }

      case FormControlType.FILE:
      case FormControlType.UPLOAD: {
        return (
          <Upload
            {...uploadProps}
            usAccept={uploadProps.usAccept || '*'}
            usDisabled={uploadProps.usDisabled || disabled}
            onSuccess={this.handleOnChange}
            onFailure={this.handleOnChange}
            onStart={this.handleOnChange}
            onCancel={this.handleOnChange}
          />
        );
      }
      case FormControlType.TEXT:
      default: {
        const inputProps = {
          type: 'text',
          className: 'form-control',
          id,
          name,
          placeholder,
          value,
          readOnly,
          required,
          minLength,
          maxLength,
          onChange: this.handleOnChange,
          onFocus: this.handleOnFocus,
          onBlur: this.handleOnBlur,
          disabled,
          autoComplete: this.getAutocompleteStatus(),
        };

        if (this.props.displayPattern) {
          return (
            <InputWithDisplayFormat displayPattern={this.props.displayPattern} {...inputProps} />
          );
        }
        return <input {...inputProps} />;
      }
    }
  }
}

FormControl.propTypes = {
  type: PropTypes.oneOf([
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
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  countryCode: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.object,
        PropTypes.instanceOf(Date),
      ]).isRequired,
      note: PropTypes.string,
      secondary: PropTypes.string,
    }),
  ),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  autoComplete: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  mode: PropTypes.oneOf(['day-month-year', 'month-year']),
  displayPattern: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  // @TODO To be implemented in a second iteration.
  // validationAsync: PropTypes.func
  searchPlaceholder: PropTypes.string,
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
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
    usAccept: PropTypes.oneOf(ACCEPTED_FORMAT),
    usButtonText: PropTypes.string,
    usDisabled: PropTypes.bool,
    usDropMessage: PropTypes.string,
    usHelpImage: PropTypes.string,
    usLabel: PropTypes.string,
    usPlaceholder: PropTypes.string,
  }),
  monthFormat: PropTypes.oneOf(['long', 'short']),
  selectedOption: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any.isRequired,
    label: PropTypes.node,
    icon: PropTypes.node,
    currency: PropTypes.string,
    note: PropTypes.node,
    secondary: PropTypes.node,
  }),
};

FormControl.defaultProps = {
  type: FormControl.Type.TEXT,
  id: null,
  placeholder: null,
  countryCode: null,
  options: [],
  step: 1,
  disabled: false,
  readOnly: false,
  required: false,
  autoComplete: true,
  onBlur: null,
  onFocus: null,
  min: null,
  max: null,
  minDate: null,
  maxDate: null,
  minLength: null,
  maxLength: null,
  value: null,
  searchPlaceholder: null,
  searchValue: '',
  onSearchChange: null,
  size: FormControl.Size.MEDIUM,
  uploadProps: {},
  displayPattern: null,
  label: '',
  monthFormat: FormControl.MonthFormat.LONG,
  mode: FormControl.DateMode.DAY_MONTH_YEAR,
  selectedOption: null,
};
