import { isArray } from '@transferwise/neptune-validation';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import { Size } from '../common';
import Select from '../select';

import countries from './data/countries';
import {
  explodeNumberModel,
  filterOptionsForQuery,
  isValidPhoneNumber,
  cleanNumber,
  setDefaultPrefix,
  isStringNumeric,
  sortArrayByProperty,
  groupCountriesByPrefix,
} from './utils';

const ALLOWED_PHONE_CHARS = /^$|^[\d-\s]+$/;

const PhoneNumberInput = (props) => {
  const {
    onChange,
    searchPlaceholder,
    disabled,
    required,
    size,
    placeholder,
    onFocus,
    onBlur,
    countryCode,
  } = props;
  const { locale } = useIntl();

  const getInitialValue = () => {
    const { initialValue } = props;

    const cleanValue = initialValue ? cleanNumber(initialValue) : null;

    if (!cleanValue || !isValidPhoneNumber(cleanValue)) {
      return {
        prefix: setDefaultPrefix(locale, countryCode),
        suffix: '',
      };
    }

    return explodeNumberModel(cleanValue);
  };

  const [internalValue, setInternalValue] = useState(getInitialValue());
  const [broadcastedValue, setBroadcastedValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const listSortedByISO3 = groupCountriesByPrefix(sortArrayByProperty(countries, 'iso3'));
  const listSortedByPhone = groupCountriesByPrefix(sortArrayByProperty(countries, 'phone'));

  const getSelectOptions = () => {
    const filteredOptions = filterOptionsForQuery(
      isStringNumeric(searchQuery) ? listSortedByPhone : listSortedByISO3,
      searchQuery,
    );

    return filteredOptions.map((option) => {
      const { phone, iso3, iso2 } = option;
      let note = '';

      if (iso3) {
        note = isArray(iso3) ? iso3.join(', ') : iso3;
      } else if (iso2) {
        note = isArray(iso2) ? iso2.join(', ') : iso2;
      }

      return { value: phone, label: phone, note };
    });
  };

  const options = getSelectOptions();

  const onPrefixChange = ({ value }) => {
    setSearchQuery('');
    setInternalValue({ prefix: value, suffix: internalValue.suffix });
  };

  const onSuffixChange = (event) => {
    const { value = '' } = event.target;

    if (ALLOWED_PHONE_CHARS.test(value)) {
      setInternalValue({ prefix: internalValue.prefix, suffix: value });
    }
  };

  const onPaste = (event) => {
    if (!event.nativeEvent.clipboardData) {
      return;
    }
    const pastedValue = (event.nativeEvent.clipboardData.getData('text/plain') || '').replace(
      /(\s|-)+/g,
      '',
    );
    const { prefix: pastedPrefix, suffix: pastedSuffix } = explodeNumberModel(pastedValue);
    const selectedPrefix = options.find(({ value }) => value === pastedPrefix);

    if (selectedPrefix && ALLOWED_PHONE_CHARS.test(pastedSuffix)) {
      setInternalValue({ prefix: pastedPrefix, suffix: pastedSuffix });
    }
  };

  useEffect(() => {
    if (broadcastedValue === null) {
      return setBroadcastedValue(internalValue);
    }

    const internalPhoneNumber = internalValue.prefix + internalValue.suffix;
    const broadcastedPhoneNumber = broadcastedValue.prefix + broadcastedValue.suffix;

    if (internalPhoneNumber === broadcastedPhoneNumber) {
      return;
    }

    const newValue = isValidPhoneNumber(internalPhoneNumber)
      ? cleanNumber(internalPhoneNumber)
      : null;

    onChange(newValue);
    setBroadcastedValue(internalValue);
  }, [onChange, broadcastedValue, internalValue]);

  return (
    <div className="tw-telephone">
      <div className="tw-telephone__country-select">
        <Select
          options={options}
          selected={{ value: internalValue.prefix, label: internalValue.prefix }}
          placeholder="Select an option..."
          searchPlaceholder={searchPlaceholder}
          searchValue={searchQuery}
          required={required}
          disabled={disabled}
          size={size}
          onChange={onPrefixChange}
          onSearchChange={(newSearch) => setSearchQuery(newSearch)}
        />
      </div>

      <div className="tw-telephone__number-input">
        <div className={`input-group input-group-${size}`}>
          <input
            name="phoneNumber"
            inputMode="numeric"
            value={internalValue.suffix}
            type="text"
            className="form-control"
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={onSuffixChange}
            onPaste={onPaste}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>
    </div>
  );
};

PhoneNumberInput.propTypes = {
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  initialValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  countryCode: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.string,
};

PhoneNumberInput.defaultProps = {
  required: false,
  disabled: false,
  initialValue: null,
  onFocus() {},
  onBlur() {},
  countryCode: null,
  searchPlaceholder: 'Prefix',
  size: Size.MEDIUM,
  placeholder: '',
};

export default PhoneNumberInput;
