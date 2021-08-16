/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';

const DEFAULT_INPUT_MIN_WIDTH = 10;

export default class TypeaheadInput extends Component {
  constructor() {
    super();
    this.state = {
      inputWidth: DEFAULT_INPUT_MIN_WIDTH,
    };
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus) {
      this.inputRef.focus();
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.value !== this.props.value && this.props.multiple) {
      this.recalculateWidth();
    }
  }

  recalculateWidth = () => {
    requestAnimationFrame(() => {
      this.setState({
        inputWidth: Math.max(DEFAULT_INPUT_MIN_WIDTH, this.sizerRef.scrollWidth + 10),
      });
    });
  };

  renderInput = () => {
    const {
      typeaheadId,
      autoFocus,
      multiple,
      name,
      optionsShown,
      placeholder,
      selected,
      value,
      onChange,
      onKeyDown,
      onFocus,
      onPaste,
      autoComplete,
    } = this.props;
    const { inputWidth } = this.state;

    const hasPlaceholder = !multiple || selected.length === 0;
    return (
      <input
        ref={(reference) => {
          this.inputRef = reference;
        }}
        className={classnames({
          'typeahead__input form-control': multiple,
          'form-control': !multiple,
        })}
        type="text"
        name={name}
        id={`input-${typeaheadId}`}
        autoFocus={autoFocus}
        placeholder={hasPlaceholder ? placeholder : ''}
        aria-autocomplete="list"
        aria-expanded={optionsShown}
        aria-haspopup="listbox"
        aria-controls={`menu-${typeaheadId}`}
        autoComplete={autoComplete}
        role="combobox"
        value={value}
        style={multiple && selected.length > 0 ? { width: inputWidth } : {}}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onFocus}
        onFocus={onFocus}
        onPaste={onPaste}
      />
    );
  };

  render() {
    const { multiple, selected, value, maxHeight, renderChip } = this.props;

    return multiple ? (
      <div
        className="form-control typeahead__input-container"
        style={maxHeight && { maxHeight }}
        onClick={() => {
          this.inputRef.focus();
        }}
      >
        <div className="typeahead__input-wrapper">
          {selected && selected.map((chip, idx) => renderChip(chip, idx))}

          {this.renderInput()}
          <div className="typeahead__input-aligner" />
        </div>
        <div
          ref={(reference) => {
            this.sizerRef = reference;
          }}
          className="sizer form-control typeahead__input"
        >
          {value}
        </div>
      </div>
    ) : (
      this.renderInput()
    );
  }
}

TypeaheadInput.propTypes = {
  typeaheadId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  multiple: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  optionsShown: PropTypes.bool,
  maxHeight: PropTypes.number,
  autoComplete: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired,
  renderChip: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
};

TypeaheadInput.defaultProps = {
  autoFocus: false,
  maxHeight: null,
  placeholder: '',
  optionsShown: false,
  selected: [],
};
