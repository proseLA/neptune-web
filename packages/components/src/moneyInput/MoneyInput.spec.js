import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'enzyme';

import { Select, MoneyInput } from '..';

jest.mock('./currencyFormatting', () => ({
  parseAmount: jest.fn(),
  formatAmount: jest.fn(),
}));

const numberFormatting = require('./currencyFormatting');

const defaultLocale = 'en-GB';
jest.mock('react-intl', () => ({
  injectIntl: (Component) =>
    function (props) {
      return (
        <Component {...props} intl={{ locale: defaultLocale, formatMessage: (id) => `${id}` }} />
      );
    },
  defineMessages: (translations) => translations,
}));

describe('Money Input', () => {
  let component;
  let props;

  let currencies;

  beforeEach(() => {
    currencies = [
      {
        header: 'Popular currencies',
      },
      {
        value: 'EUR',
        label: 'EUR',
        note: 'Euro',
        currency: 'eur',
        searchable: 'Spain, Germany, France, Austria, Estonia',
      },
      {
        value: 'USD',
        label: 'USD',
        note: 'United States dollar',
        currency: 'usd',
        searchable: 'Hong Kong, Saudi Arabia',
      },
      {
        value: 'GBP',
        label: 'GBP',
        note: 'British pound',
        currency: 'gbp',
        searchable: 'England, Scotland, Wales',
      },
      {
        header: 'Some other currencies',
      },
      {
        value: 'CAD',
        label: 'CAD',
        note: 'Canadian dollar',
        currency: 'cad',
      },
      {
        value: 'AUD',
        label: 'AUD',
        note: 'Australian dollar',
        currency: 'aud',
      },
    ];
    props = {
      currencies,
      selectedCurrency: currencies[1],
      amount: 1000,
      onAmountChange: jest.fn(),
      onCurrencyChange: jest.fn(),
    };
    component = shallow(<MoneyInput {...props} />).dive();
    jest.clearAllMocks();
  });

  function currencySelect() {
    return component.find(Select);
  }

  function fixedCurrencyDisplay() {
    return component.find('.tw-money-input__fixed-currency');
  }

  function searchCurrencies(query) {
    currencySelect().prop('onSearchChange')(query);
    component.update();
  }

  function displayedCurrencies() {
    return currencySelect().prop('options');
  }

  function amountInput() {
    return component.find('input');
  }

  function focusAmount() {
    amountInput().simulate('focus');
  }

  function blurAmount() {
    amountInput().simulate('blur');
  }

  function enterAmount(amount) {
    focusAmount();
    amountInput().simulate('change', { target: { value: amount } });
  }

  function addon() {
    return component.find('.input-group-addon').first();
  }

  it('renders a select with all the currencies as options', () => {
    expect(currencySelect()).toHaveLength(1);
    expect(displayedCurrencies()).toStrictEqual(props.currencies);
  });

  it('shows the currently active currency as active and hides its note', () => {
    expect(currencySelect().prop('selected')).toStrictEqual({
      value: 'EUR',
      label: 'EUR',
      note: null,
      currency: 'eur',
      searchable: 'Spain, Germany, France, Austria, Estonia',
    });
  });

  it('calls onCurrencyChange when the user selects a different currency', () => {
    expect(props.onCurrencyChange).not.toHaveBeenCalled();

    currencySelect().prop('onChange')(props.currencies[2]);
    expect(props.onCurrencyChange).toHaveBeenCalledTimes(1);
    expect(props.onCurrencyChange).toHaveBeenLastCalledWith(props.currencies[2]);
  });

  it('can be different sizes and defaults to lg', () => {
    expect(component.find('.input-group').hasClass('input-group-lg')).toBe(true);
    expect(currencySelect().prop('size')).toBe('lg');
    ['sm', 'md', 'lg'].forEach((size) => {
      component.setProps({ size });
      expect(currencySelect().prop('size')).toBe(size);
      expect(component.find('.input-group').hasClass(`input-group-${size}`)).toBe(true);
    });
  });

  it('configures the select visually correctly', () => {
    const options = currencySelect().props();

    expect(options.required).toBe(true);
    expect(options.dropdownRight).toBe('xs');
    expect(options.dropdownWidth).toBe('lg');
    expect(options.inverse).toBe(true);
  });

  describe('when searching', () => {
    it('passes search value to currency select', () => {
      expect(currencySelect().prop('searchValue')).toBe('');

      searchCurrencies('EEK');
      expect(currencySelect().prop('searchValue')).toBe('EEK');
    });

    it('hides headers', () => {
      currencies = [
        { header: 'A currency' },
        { value: 'GBP', label: 'British pound' },
        { header: 'Another currency' },
        { value: 'EUR', label: 'Euro' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toStrictEqual(currencies);

      searchCurrencies('O');
      expect(displayedCurrencies()).toStrictEqual([
        { value: 'GBP', label: 'British pound' },
        { value: 'EUR', label: 'Euro' },
      ]);
    });

    it('searches by label', () => {
      currencies = [
        { value: 'GBP', label: 'British pound' },
        { value: 'EUR', label: 'Euro' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toStrictEqual(currencies);

      searchCurrencies('P');
      expect(displayedCurrencies()).toStrictEqual([{ value: 'GBP', label: 'British pound' }]);
    });

    it('searches by note', () => {
      currencies = [
        { value: 'GBP', note: 'Queen money' },
        { value: 'EUR', note: 'Other money' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toStrictEqual(currencies);

      searchCurrencies('Other');
      expect(displayedCurrencies()).toStrictEqual([{ value: 'EUR', note: 'Other money' }]);
    });

    it('searches by searchable string', () => {
      currencies = [
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
        { value: 'EUR', searchable: 'Europe' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toStrictEqual(currencies);

      searchCurrencies('Britain');
      expect(displayedCurrencies()).toStrictEqual([
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
      ]);
    });

    it('shows custom action option on every search when onCustomAction is passed to MoneyInput', () => {
      currencies = [
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
        { value: 'EUR', searchable: 'Europe' },
      ];
      const CUSTOM_ACTION = 'CUSTOM_ACTION';
      component.setProps({
        currencies,
        onCustomAction: jest.fn(),
        customActionLabel: 'I am a label',
      });
      expect(displayedCurrencies()).toStrictEqual([
        ...currencies,
        { value: CUSTOM_ACTION, label: 'I am a label' },
      ]);

      searchCurrencies('Britain');
      expect(displayedCurrencies()).toStrictEqual([
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
        { value: CUSTOM_ACTION, label: 'I am a label' },
      ]);

      searchCurrencies('Random search string');
      expect(displayedCurrencies()).toStrictEqual([
        { value: CUSTOM_ACTION, label: 'I am a label' },
      ]);
    });

    it('sorts labels to first', () => {
      searchCurrencies('au');
      expect(displayedCurrencies()).toStrictEqual([
        {
          value: 'AUD',
          label: 'AUD',
          note: 'Australian dollar',
          currency: 'aud',
        },
        {
          value: 'EUR',
          label: 'EUR',
          note: 'Euro',
          currency: 'eur',
          searchable: 'Spain, Germany, France, Austria, Estonia',
        },
        {
          value: 'USD',
          label: 'USD',
          note: 'United States dollar',
          currency: 'usd',
          searchable: 'Hong Kong, Saudi Arabia',
        },
      ]);
    });
  });

  describe('amount formatting', () => {
    beforeEach(() => {
      jest
        .spyOn(numberFormatting, 'formatAmount')
        .mockImplementation(
          (number, currency, locale) => `formatted ${number}, ${locale}, ${currency}`,
        );
    });

    it('formats the number you input after you blur it', () => {
      component.setProps({ numberFormatPrecision: 3 });
      jest.spyOn(numberFormatting, 'parseAmount').mockImplementation(parseFloat);
      enterAmount('123.45');
      expect(amountInput().prop('value')).toBe('123.45');

      blurAmount();
      expect(amountInput().prop('value')).toBe('formatted 123.45, en-GB, eur');
    });
  });

  it('parses the number you input and calls onAmountChange with it', () => {
    const onAmountChange = jest.fn();
    let assertions = 0;
    component.setProps({ onAmountChange, numberFormatPrecision: 1 });
    jest.spyOn(numberFormatting, 'parseAmount').mockImplementation((amount, currency, locale) => {
      expect(amount).toBe('500.1234');
      expect(locale).toBe(defaultLocale);
      expect(currency).toBe('eur');
      assertions += 1;
      return 500.1;
    });
    expect(onAmountChange).not.toHaveBeenCalled();

    enterAmount('500.1234');
    expect(onAmountChange).toHaveBeenCalledTimes(1);
    expect(onAmountChange).toHaveBeenLastCalledWith(500.1);
    expect(assertions).toStrictEqual(1);
  });

  it('does call onAmountChange when input value is empty', () => {
    const testValue = '';
    const onAmountChange = jest.fn();
    component.setProps({ onAmountChange });
    jest.spyOn(numberFormatting, 'parseAmount').mockImplementation();
    enterAmount(testValue);
    expect(numberFormatting.parseAmount).not.toHaveBeenCalled();
    expect(onAmountChange).toHaveBeenLastCalledWith(null);
  });

  it.each(['cannot parse this yo', '  '])(
    "does not call onAmountChange with a parsed number if unable to parse value '%s'",
    (testValue) => {
      const onAmountChange = jest.fn();
      component.setProps({ onAmountChange });
      jest.spyOn(numberFormatting, 'parseAmount').mockImplementation(() => NaN);
      enterAmount(testValue);
      expect(onAmountChange).not.toHaveBeenCalled();
      expect(numberFormatting.parseAmount).toHaveBeenLastCalledWith(
        testValue,
        'eur',
        defaultLocale,
      );
    },
  );

  it('passes the id given to the input element', () => {
    expect(amountInput().prop('id')).toBeNull();
    component.setProps({ id: 'some-id' });

    expect(amountInput().prop('id')).toBe('some-id');
  });

  it('renders addon when element is passed through props', () => {
    const addonElement = <span id="test-addon" />;
    component.setProps({ addon: addonElement });
    expect(addon()).toHaveLength(1);

    const passedInAddon = () => addon().children().first();
    expect(passedInAddon().prop('id')).toBe('test-addon');
    expect(passedInAddon().type()).toBe('span');
  });

  it('shows fixed currency view if only one currency available and selected', () => {
    expect(fixedCurrencyDisplay()).toHaveLength(0);

    const EEK = { value: 'EEK', currency: 'EEK' };
    component.setProps({
      currencies: [EEK],
      selectedCurrency: EEK,
    });
    expect(currencySelect()).toHaveLength(0);
    expect(fixedCurrencyDisplay()).toHaveLength(1);
    expect(component.find('.tw-money-input__fixed-currency span').text()).toBe('EEK');
    expect(component.find('.currency-flag').hasClass('currency-flag-eek')).toBe(true);
  });

  it('shows fixed currency view when no function is passed to onCurrencyChange prop', () => {
    component.setProps({ onCurrencyChange: undefined });
    expect(currencySelect()).toHaveLength(0);
    expect(fixedCurrencyDisplay()).toHaveLength(1);
  });

  it('does not shows fixed currency keyline and flag if small input', () => {
    const EEK = { value: 'EEK', currency: 'EEK' };
    component.setProps({
      currencies: [EEK],
      selectedCurrency: EEK,
      size: 'sm',
    });

    ['md', 'lg'].forEach((size) => {
      component.setProps({ size });
      expect(component.find('.tw-money-input__keyline')).toHaveLength(1);
      expect(component.find('.currency-flag')).toHaveLength(1);
    });

    component.setProps({ size: 'sm' });
    expect(component.find('.tw-money-input__keyline')).toHaveLength(0);
    expect(component.find('.currency-flag')).toHaveLength(0);
  });

  it('amount input will be disabled when there is no onAmountChange prop', () => {
    const EEK = { value: 'EEK', currency: 'EEK' };
    component.setProps({
      currencies: [EEK],
      selectedCurrency: EEK,
    });

    expect(amountInput().prop('disabled')).toBe(false);
    expect(component.find('.tw-money-input__fixed-currency').hasClass('disabled')).toBe(false);

    component.setProps({ onAmountChange: undefined });
    expect(amountInput().prop('disabled')).toBe(true);
    expect(component.find('.tw-money-input__fixed-currency').hasClass('disabled')).toBe(true);
  });

  it('uses the passed in search placeholder', () => {
    component.setProps({ searchPlaceholder: 'a placeholder' });
    expect(currencySelect().prop('searchPlaceholder')).toBe('a placeholder');
  });

  it('clears the search value when selecting an option', () => {
    searchCurrencies('eur');
    expect(currencySelect().prop('options')).toHaveLength(1);
    expect(currencySelect().prop('searchValue')).toBe('eur');

    currencySelect().prop('onChange')(props.currencies[1]);
    component.update();
    expect(currencySelect().prop('options')).toHaveLength(7);
    expect(currencySelect().prop('searchValue')).toBe('');
  });

  it('shows custom action last when onCustomAction prop is passed to MoneyInput', () => {
    currencies = [
      { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
      { value: 'EUR', searchable: 'Europe' },
    ];
    component.setProps({
      currencies,
      onCustomAction: jest.fn(),
      customActionLabel: 'Label boy',
    });

    expect(displayedCurrencies()).toStrictEqual([
      ...currencies,
      { value: 'CUSTOM_ACTION', label: 'Label boy' },
    ]);

    expect(displayedCurrencies()[displayedCurrencies().length - 1]).toStrictEqual({
      value: 'CUSTOM_ACTION',
      label: 'Label boy',
    });
  });

  it('calls onCustomAction callback when custom action is selected', () => {
    const onCustomAction = jest.fn();
    component.setProps({ onCustomAction });
    expect(onCustomAction).not.toHaveBeenCalled();
    expect(props.onCurrencyChange).not.toHaveBeenCalled();

    currencySelect().prop('onChange')({ value: 'CUSTOM_ACTION', label: '' });
    expect(onCustomAction).toHaveBeenCalledTimes(1);
    expect(props.onCurrencyChange).toHaveBeenCalledTimes(0);
  });

  it('ensures namespaced classNames can be provided and used', () => {
    const styles = { 'tw-money-input': 'tw-money-input_TWISAWESOME125' };
    expect(component.find('.tw-money-input').exists()).toBe(true);

    component.setProps({ classNames: styles });
    expect(component.find('.tw-money-input').exists()).toBe(false);
    expect(component.find('.tw-money-input_TWISAWESOME125').exists()).toBe(true);
  });

  describe('placeholder', () => {
    beforeEach(() => {
      jest
        .spyOn(numberFormatting, 'formatAmount')
        .mockImplementation(
          (number, currency, locale) => `formatted ${number}, ${locale}, ${currency}`,
        );
    });

    it('shows a formatted placeholder when provided', () => {
      component.setProps({ placeholder: 12345.67, numberFormatPrecision: 3 });
      expect(amountInput().prop('placeholder')).toBe('formatted 12345.67, en-GB, eur');
    });

    it('allows a placeholder of 0', () => {
      component.setProps({ placeholder: 0, numberFormatPrecision: 3 });
      expect(amountInput().prop('placeholder')).toBe('formatted 0, en-GB, eur');
    });
  });

  describe('onSearchChange()', () => {
    it('notifies the consumer when the search field is changed', () => {
      const getCurrencyByValue = (searchValue) =>
        currencies.find(({ value }) => value === searchValue);

      const onSearchChange = jest.fn();
      const onCustomAction = jest.fn();
      component.setProps({
        onSearchChange,
        customActionLabel: 'customActionLabel',
        onCustomAction,
      });

      searchCurrencies('e');
      expect(onSearchChange).toHaveBeenLastCalledWith({
        searchQuery: 'e',
        filteredOptions: [
          getCurrencyByValue('EUR'),
          getCurrencyByValue('USD'),
          getCurrencyByValue('GBP'),
        ],
      });

      searchCurrencies('');
      expect(onSearchChange).toHaveBeenLastCalledWith({
        searchQuery: '',
        filteredOptions: [...currencies],
      });

      searchCurrencies('eur');
      expect(onSearchChange).toHaveBeenLastCalledWith({
        searchQuery: 'eur',
        filteredOptions: [getCurrencyByValue('EUR')],
      });

      currencySelect().prop('onChange')({ value: 'CUSTOM_ACTION' });
      expect(onCustomAction).toHaveBeenCalledTimes(1);
      expect(onSearchChange).toHaveBeenLastCalledWith({
        searchQuery: '',
        filteredOptions: [...currencies],
      });
    });
  });

  describe('when typing', () => {
    let rtlComponent;
    const { formatAmount } = jest.requireActual('./currencyFormatting');
    beforeAll(() => {
      numberFormatting.formatAmount = formatAmount;
    });

    beforeEach(() => {
      rtlComponent = render(<MoneyInput {...props} amount={null} />);
      jest.clearAllMocks();
    });

    it.each([
      ['asd', ''],
      ['1a2s3d', '123'],
      ['±!@#$^*_+?><', ''],
      ['1±!@#$^*,_+?><2', '1,2'],
      ['12,3', '12,3'],
      ['12.3', '12.3'],
    ])("ignores the letters when typed '%s' and shows '%s'", (testValue, expectedValue) => {
      const { container } = rtlComponent;
      const input = container.querySelector('input');
      userEvent.type(input, testValue);
      expect(input).toHaveValue(expectedValue);
    });
  });
});
