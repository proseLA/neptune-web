import { isEmpty, isNumber, isNull } from '@transferwise/neptune-validation';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { injectIntl } from 'react-intl';

import { Key as keyValues } from '../common/key';
import keyCodes from '../common/keyCodes';
import { Size } from '../common/propsValues/size';
import Select from '../select';

import messages from './MoneyInput.messages';
import { formatAmount, parseAmount } from './currencyFormatting';

const Currency = PropTypes.shape({
  header: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  currency: PropTypes.string,
  note: PropTypes.string,
  searchable: PropTypes.string,
});
const CUSTOM_ACTION = 'CUSTOM_ACTION';
const isNumberOrNull = (v) => isNumber(v) || isNull(v);

const formatAmountIfSet = (amount, currency, locale) => {
  return typeof amount === 'number' ? formatAmount(amount, currency, locale) : '';
};

const inputKeyCodeAllowlist = new Set([
  keyCodes.BACKSPACE,
  keyCodes.DELETE,
  keyCodes.COMMA,
  keyCodes.PERIOD,
  keyCodes.DOWN,
  keyCodes.UP,
  keyCodes.LEFT,
  keyCodes.RIGHT,
  keyCodes.ENTER,
  keyCodes.ESCAPE,
  keyCodes.TAB,
]);

const inputKeyAllowlist = new Set([keyValues.PERIOD, keyValues.COMMA]);

class MoneyInput extends Component {
  constructor(props) {
    super(props);
    const { locale } = this.props.intl;
    this.formatMessage = this.props.intl.formatMessage;
    this.state = {
      searchQuery: '',
      formattedAmount: formatAmountIfSet(props.amount, props.selectedCurrency.currency, locale),
      locale,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ locale: nextProps?.intl?.locale });

    if (!this.amountFocused) {
      this.setState({
        formattedAmount: formatAmountIfSet(
          nextProps.amount,
          nextProps.selectedCurrency.currency,
          nextProps?.intl?.locale,
        ),
      });
    }
  }

  isInputAllowedForKeyEvent = (event) => {
    const { keyCode, metaKey, key, ctrlKey } = event;
    const isNumberKey = isNumber(parseInt(key, 10));

    return (
      isNumberKey ||
      metaKey ||
      ctrlKey ||
      inputKeyCodeAllowlist.has(keyCode) ||
      inputKeyAllowlist.has(key)
    );
  };

  handleKeyDown = (event) => {
    if (!this.isInputAllowedForKeyEvent(event)) {
      event.preventDefault();
    }
  };

  handlePaste = (event) => {
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    const { locale } = this.state;
    const parsed = isEmpty(paste)
      ? null
      : parseAmount(paste, this.props.selectedCurrency.currency, locale);

    if (isNumberOrNull(parsed)) {
      this.setState({
        formattedAmount: formatAmountIfSet(parsed, this.props.selectedCurrency.currency, locale),
      });
      this.props.onAmountChange(parsed);
    }

    event.preventDefault();
  };

  onAmountChange = (event) => {
    const { value } = event.target;
    this.setState({
      formattedAmount: value,
    });
    const parsed = isEmpty(value)
      ? null
      : parseAmount(value, this.props.selectedCurrency.currency, this.state.locale);
    if (isNumberOrNull(parsed)) {
      this.props.onAmountChange(parsed);
    }
  };

  onAmountBlur = () => {
    this.amountFocused = false;
    this.setAmount();
  };

  onAmountFocus = () => {
    this.amountFocused = true;
  };

  getSelectOptions() {
    const selectOptions = [...filterOptionsForQuery(this.props.currencies, this.state.searchQuery)];

    if (this.props.onCustomAction) {
      selectOptions.push({ value: CUSTOM_ACTION, label: this.props.customActionLabel });
    }

    return selectOptions;
  }

  setAmount() {
    this.setState((previousState) => {
      const parsed = parseAmount(
        previousState.formattedAmount,
        this.props.selectedCurrency.currency,
        this.state.locale,
      );
      if (!isNumberOrNull(parsed)) {
        return {
          formattedAmount: previousState.formattedAmount,
        };
      }
      return {
        formattedAmount: formatAmountIfSet(
          parsed,
          this.props.selectedCurrency.currency,
          previousState.locale,
        ),
      };
    });
  }

  handleSelectChange = (value) => {
    this.handleSearchChange('');

    if (this.props.onCustomAction && value.value === CUSTOM_ACTION) {
      this.props.onCustomAction();
    } else {
      this.props.onCurrencyChange(value);
    }
  };

  handleSearchChange = (searchQuery) => {
    this.setState({ searchQuery });
    if (this.props.onSearchChange) {
      this.props.onSearchChange({
        searchQuery,
        filteredOptions: filterOptionsForQuery(this.props.currencies, searchQuery),
      });
    }
  };

  style = (className) => this.props.classNames[className] || className;

  render() {
    const { selectedCurrency, onCurrencyChange, size, addon } = this.props;
    const selectOptions = this.getSelectOptions();
    const isFixedCurrency =
      !this.state.searchQuery &&
      ((selectOptions.length === 1 && selectOptions[0].currency === selectedCurrency.currency) ||
        !onCurrencyChange);

    const disabled = !this.props.onAmountChange;
    return (
      <div
        className={classNames(
          this.style('tw-money-input'),
          this.style('input-group'),
          this.style(`input-group-${size}`),
        )}
      >
        <input
          id={this.props.id}
          value={this.state.formattedAmount}
          type="text"
          inputMode="decimal"
          className={classNames(this.style('form-control'))}
          disabled={disabled}
          placeholder={formatAmountIfSet(
            this.props.placeholder,
            this.props.selectedCurrency.currency,
            this.state.locale,
          )}
          autoComplete="off"
          onKeyDown={this.handleKeyDown}
          onChange={this.onAmountChange}
          onFocus={this.onAmountFocus}
          onBlur={this.onAmountBlur}
          onPaste={this.handlePaste}
        />
        {addon && (
          <span
            className={classNames(
              this.style('input-group-addon'),
              this.style(`input-${size}`),
              disabled ? this.style('disabled') : '',
            )}
          >
            {addon}
          </span>
        )}
        {isFixedCurrency ? (
          <div
            className={classNames(
              this.style('input-group-addon'),
              this.style(`input-${size}`),
              this.style('tw-money-input__fixed-currency'),
              disabled ? this.style('disabled') : '',
            )}
          >
            {(size === 'lg' || size === 'md') && (
              <>
                <i className={classNames(this.style('tw-money-input__keyline'))} />
                <i
                  className={classNames(
                    this.style('currency-flag'),
                    this.style(`currency-flag-${selectedCurrency.currency.toLowerCase()}`),
                    this.style('hidden-xs'),
                    this.style('m-r-2'),
                  )}
                />
              </>
            )}
            <span className={size === 'lg' ? this.style('m-r-1') : ''}>
              {selectedCurrency.currency.toUpperCase()}
            </span>
          </div>
        ) : (
          <div
            className={classNames(
              this.style('input-group-btn'),
              this.style('amount-currency-select-btn'),
            )}
          >
            <Select
              classNames={this.props.classNames}
              options={selectOptions}
              selected={{ ...selectedCurrency, note: null }}
              placeholder={this.formatMessage(messages.selectPlaceholder)}
              searchPlaceholder={this.props.searchPlaceholder}
              searchValue={this.state.searchQuery}
              size={size}
              required
              dropdownRight="xs"
              dropdownWidth="lg"
              inverse
              onChange={this.handleSelectChange}
              onSearchChange={this.handleSearchChange}
            />
          </div>
        )}
      </div>
    );
  }
}

function filterOptionsForQuery(options, query) {
  if (!query) {
    return options;
  }

  const filteredOptions = removeDuplicateValueOptions(options).filter((option) =>
    isCurrencyOptionAndFitsQuery(option, query),
  );

  return sortOptionsLabelsToFirst(filteredOptions, query);
}

function removeDuplicateValueOptions(options) {
  const result = [];
  const resultValues = [];

  options.forEach((option) => {
    if (option.value && !resultValues.includes(option.value)) {
      result.push(option);
      resultValues.push(option.value);
    }
  });

  return result;
}

function isCurrencyOptionAndFitsQuery(option, query) {
  if (!option.value) {
    return false;
  }

  return (
    contains(option.label, query) ||
    contains(option.searchable, query) ||
    contains(option.note, query)
  );
}

function contains(property, query) {
  return property && property.toLowerCase().includes(query.toLowerCase());
}

function sortOptionsLabelsToFirst(options, query) {
  return options.sort((first, second) => {
    const firstContains = contains(first.label, query);
    const secondContains = contains(second.label, query);

    if (firstContains && secondContains) {
      return 0;
    }
    if (firstContains) {
      return -1;
    }
    if (secondContains) {
      return 1;
    }
    return 0;
  });
}

MoneyInput.propTypes = {
  id: PropTypes.string,
  currencies: PropTypes.arrayOf(Currency).isRequired,
  selectedCurrency: Currency.isRequired,
  onCurrencyChange: PropTypes.func,
  placeholder: PropTypes.number,
  amount: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onAmountChange: PropTypes.func,
  addon: PropTypes.node,
  searchPlaceholder: PropTypes.string,
  /**
   * Allows the consumer to react to searching, while the search itself is handled internally. Called with `{ searchQuery: string, filteredOptions: Currency[]  }`
   */
  onSearchChange: PropTypes.func,
  customActionLabel: PropTypes.node,
  onCustomAction: PropTypes.func,
  classNames: PropTypes.objectOf(PropTypes.string),
};

MoneyInput.defaultProps = {
  id: null,
  size: Size.LARGE,
  addon: null,
  searchPlaceholder: '',
  onSearchChange: undefined,
  onCurrencyChange: null,
  placeholder: null,
  amount: null,
  onAmountChange: null,
  customActionLabel: '',
  onCustomAction: null,
  classNames: {},
};

// this export is necessary for react-to-typescript-definitions
// to be able to properly generate TS types, this is due to us wrapping this component in `injectIntl` before exporting
export { MoneyInput };

export default injectIntl(MoneyInput);
