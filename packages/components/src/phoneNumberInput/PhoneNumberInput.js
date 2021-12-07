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
    return cleanValue && isValidPhoneNumber(cleanValue) ? cleanValue : null;
  };

  const [internalValue, setInternalValue] = useState(getInitialValue());
  const [broadcastValue, setBroadcastValue] = useState(getInitialValue());
  const [searchQuery, setSearchQuery] = useState('');

  const listSortedByISO3 = groupCountriesByPrefix(sortArrayByProperty(countries, 'iso3'));
  const listSortedByPhone = groupCountriesByPrefix(sortArrayByProperty(countries, 'phone'));

  const getSuffixPrefix = (value) => {
    let prefix = setDefaultPrefix(locale, countryCode);
    let suffix = '';
    if (value) {
      ({ prefix, suffix } = explodeNumberModel(value));
    }
    return { prefix, suffix };
  };

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

  const handleChangeSelect = (event) => {
    const { suffix } = getSuffixPrefix(internalValue);
    const prefix = event.value;

    setSearchQuery('');
    setInternalValue(prefix + suffix);
  };

  const handleInputChange = (event) => {
    const suffix = event.target.value;

    if (ALLOWED_PHONE_CHARS.test(suffix)) {
      const { prefix } = getSuffixPrefix(internalValue);
      setInternalValue(prefix + suffix);
    }
  };

  const handlePaste = (event) => {
    if (!event.nativeEvent.clipboardData) {
      return;
    }
    const pasteValue = (event.nativeEvent.clipboardData.getData('text/plain') || '').replace(
      /(\s|-)+/g,
      '',
    );
    const selected = options.find(({ value }) => new RegExp(`^\\${value}`).test(pasteValue));
    if (selected && ALLOWED_PHONE_CHARS.test(pasteValue.replace(selected.value, ''))) {
      setInternalValue(pasteValue);
    }
  };

  useEffect(() => {
    const newbroadcastValue = isValidPhoneNumber(internalValue) ? cleanNumber(internalValue) : null;
    if (newbroadcastValue !== broadcastValue) {
      onChange(newbroadcastValue);
      setBroadcastValue({ newbroadcastValue });
    }
  }, [internalValue]);

  const { prefix, suffix } = getSuffixPrefix(internalValue);

  return (
    <div className="tw-telephone">
      <div className="tw-telephone__country-select">
        <Select
          options={options}
          selected={{ value: prefix, label: prefix }}
          placeholder="Select an option..."
          searchPlaceholder={searchPlaceholder}
          searchValue={searchQuery}
          required={required}
          disabled={disabled}
          size={size}
          onChange={handleChangeSelect}
          onSearchChange={(newSearch) => setSearchQuery(newSearch)}
        />
      </div>

      <div className="tw-telephone__number-input">
        <div className={`input-group input-group-${size}`}>
          <input
            name="phoneNumber"
            inputMode="numeric"
            value={suffix}
            type="text"
            className="form-control"
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={handleInputChange}
            onPaste={handlePaste}
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
