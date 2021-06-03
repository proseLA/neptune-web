import { isNull, isString, isNumber } from '../type-validators';

import {
  isValidMaxLength,
  isValidMinLength,
  isValidRequired,
  isValidMinimum,
  isValidMaximum,
  isValidPattern,
} from '../rule-validators';

import { isDateValid } from '../isDateValid';

const getValidationFailures = ({ value, validations, isRequired, type }) => {
  if (type === 'string') {
    return getStringFailures({ value, validations, isRequired });
  }
  if (type === 'number') {
    return getNumberFailures({ value, validations, isRequired });
  }
  if (type === 'checkbox') {
    return getRequiredFailures({ value, validations, isRequired });
  }
  if (type === 'date') {
    return getDateFailures({ value, validations, isRequired });
  }
  return [];
};

const getStringFailures = ({ value, validations, isRequired }) => {
  if (!isString(value) && !isNull(value)) {
    return ['type'];
  }

  if (value === '' && isRequired) {
    return ['required'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (!isValidMinLength(value, validations?.minLength.value)) {
    failures.push(validations.minLength.message);
  }
  if (!isValidMaxLength(value, validations?.maxLength?.value)) {
    failures.push(validations.maxLength.message);
  }
  if (!isValidPattern(value, validations?.pattern?.value)) {
    failures.push(validations.pattern.message);
  }
  if (!isValidMinimum(value, validations?.minimum?.value)) {
    failures.push(validations.minimum.message);
  }
  if (!isValidMaximum(value, validations?.maximum?.value)) {
    failures.push(validations.maximum.message);
  }
  return failures;
};

const getRequiredFailures = ({ value, isRequired }) => {
  const failures = [];
  if (!value && isRequired) {
    return ['required'];
  }
  return failures;
};

const getNumberFailures = ({ value: eventValue, validations, isRequired }) => {
  const value = Number(eventValue);

  if (!isNumber(value) && !isNull(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (!isValidMinimum(value, validations?.minimum?.value)) {
    failures.push(validations.minimum.message);
  }
  if (!isValidMaximum(value, validations?.maximum?.value)) {
    failures.push(validations.maximum.message);
  }
  return failures;
};

const getDateFailures = ({ value: eventValue, validations, isRequired }) => {
  if (!isDateValid(value) && !isNull(value)) {
    return ['type'];
  }
  const value = +new Date(eventValue);

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (!isValidMinimum(value, +validations?.minimum?.value)) {
    failures.push(validations.minimum.message);
  }
  if (!isValidMaximum(value, +validations?.maximum?.value)) {
    failures.push(validations.maximum.message);
  }
  return failures;
};

export default getValidationFailures;
