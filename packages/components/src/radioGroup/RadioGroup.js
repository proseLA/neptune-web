import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '../radio';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue,
    };
  }

  handleOnChange = (selectedValue) => {
    const { onChange } = this.props;
    this.setState({ selectedValue }, onChange && onChange(selectedValue));
  };

  render() {
    const { radios, name } = this.props;
    const { selectedValue } = this.state;
    return radios && radios.length > 1 ? (
      <>
        {radios.map(({ id, avatar, value, label, disabled, secondary, readOnly }, index) => (
          <Radio
            id={id}
            value={value}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={label}
            name={name}
            disabled={disabled}
            checked={selectedValue === value}
            secondary={secondary}
            onChange={(val) => this.handleOnChange(val)}
            readOnly={readOnly}
            avatar={avatar}
          />
        ))}
      </>
    ) : null;
  }
}

RadioGroup.propTypes = {
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.element,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      secondary: PropTypes.string,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      readOnly: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
};

RadioGroup.defaultProps = {
  selectedValue: null,
};

export default RadioGroup;
