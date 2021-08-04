import React, { PureComponent } from 'react';
import Types from 'prop-types';
import { Checkbox } from '@transferwise/components';

import { FormControlType } from '../common';

const reviewFieldStyle = { fontWeight: 'semi-bold', fontSize: '16px' };

export default class ReviewFormControl extends PureComponent {
  getSelectedOption = (options) => {
    let selectedOption;
    if (this.props.selectedOption !== null && typeof this.props.selectedOption !== 'undefined') {
      selectedOption = options.find((option) => this.props.selectedOption.value === option.value);
    }
    if (this.props.value !== null && typeof this.props.value !== 'undefined') {
      selectedOption = options.find((option) => this.props.value === option.value);
    }
    return selectedOption;
  };

  getSelectedOptionFromIndex = (options, newIndex) => {
    return options.find((option) => option.value === newIndex);
  };

  render() {
    const { name, type, options, label, id, value } = this.props;

    switch (type) {
      case FormControlType.CHECKBOX:
        return (
          <Checkbox checked={value} label={label} required={false} disabled={false} readOnly />
        );

      case FormControlType.RADIO:
      case FormControlType.SELECT: {
        const option = this.getSelectedOption(options);
        return (
          <div>
            <span style={reviewFieldStyle}>{option.label}</span> <span>{option.note}</span>
          </div>
        );
      }

      case FormControlType.HIDDEN:
        return <input type="hidden" name={name} value={value} id={id} />;

      default:
        return <div style={reviewFieldStyle}>{value && value.toString()}</div>;
    }
  }
}

ReviewFormControl.propTypes = {
  type: Types.oneOf(Object.values(FormControlType)),
  name: Types.string.isRequired,
  id: Types.string,
  options: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      value: Types.oneOfType([
        Types.number,
        Types.string,
        Types.bool,
        Types.object,
        Types.instanceOf(Date),
      ]).isRequired,
      note: Types.string,
      secondary: Types.string,
    }),
  ),
  label: Types.string,
  value: Types.oneOfType([Types.string, Types.number, Types.bool, Types.object]),
  selectedOption: Types.shape({
    // eslint-disable-next-line react/forbid-prop-types
    value: Types.any.isRequired,
    label: Types.node,
    icon: Types.node,
    currency: Types.string,
    note: Types.node,
    secondary: Types.node,
  }),
};

ReviewFormControl.defaultProps = {
  type: FormControlType.TEXT,
  id: null,
  options: [],
  value: null,
  label: '',
  selectedOption: null,
};
