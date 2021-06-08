import { isNull, isString, isNumber, isDate } from '../type-validators';

import {
  isValidMaxLength,
  isValidMinLength,
  isValidRequired,
  isValidMinimum,
  isValidMaximum,
  isValidPattern,
} from '../rule-validators';

const getFieldValidationFailures = ({ value, rules, isRequired, type }) => {
  if (type === 'string') {
    return stringValidators({ value, rules, isRequired });
  }
  if (type === 'number') {
    return numberValidators({ value, rules, isRequired });
  }
  if (type === 'checkbox') {
    return requiredValidators({ value, rules, isRequired });
  }
  if (type === 'date') {
    return dateValidators({ value, rules, isRequired });
  }
  return [];
};

const stringValidators = ({ value, rules, isRequired }) => {
  if (!isString(value) && !isNull(value)) {
    return ['type'];
  }

  if (value === '' && isRequired) {
    return ['required'];
  }

  const failures = [];
  if (!isValidRequired({ value, isRequired })) {
    failures.push('required');
  }

  if (rules?.minLength?.value && !isValidMinLength(value, rules.minLength.value)) {
    failures.push({
      message: 'minLength',
      ...rules?.minLength,
    });
  }
  if (rules?.maxLength?.value && !isValidMaxLength(value, rules.maxLength.value)) {
    failures.push({
      message: 'maxLength',
      ...rules?.maxLength,
    });
  }
  if (rules?.pattern?.value && !isValidPattern(value, rules.pattern.value)) {
    failures.push({
      message: 'pattern',
      ...rules?.pattern,
    });
  }
  if (rules?.minimum?.value && !isValidMinimum(value, rules.minimum.value)) {
    failures.push({
      message: 'minimum',
      ...rules?.minimum,
    });
  }
  if (rules?.maximum?.value && !isValidMaximum(value, rules.maximum.value)) {
    failures.push({
      message: 'maximum',
      ...rules?.maximum,
    });
  }
  return failures;
};

const requiredValidators = ({ value, isRequired }) => {
  const failures = [];
  if (!value && isRequired) {
    return ['required'];
  }
  return failures;
};

const numberValidators = ({ value: eventValue, rules, isRequired }) => {
  const value = Number(eventValue);

  if (!isNumber(value) && !isNull(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push({
      message: 'required',
      ...rules?.required,
    });
  }
  if (rules?.minimum?.value && !isValidMinimum(value, rules.minimum.value)) {
    failures.push({
      message: 'minimum',
      ...rules?.minimum,
    });
  }
  if (rules?.maximum?.value && !isValidMaximum(value, rules.maximum.value)) {
    failures.push({
      message: 'maximum',
      ...rules?.maximum,
    });
  }
  return failures;
};

const dateValidators = ({ value: eventValue, rules, isRequired }) => {
  if (!isDate(value) && !isNull(value)) {
    return ['type'];
  }
  const value = +new Date(eventValue);

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (rules?.minimum?.value && !isValidMinimum(value, +rules.minimum.value)) {
    failures.push({
      message: 'date.minimum',
      ...rules?.minimum,
    });
  }
  if (rules?.maximum?.value && !isValidMaximum(value, +rules.maximum.value)) {
    failures.push({
      message: 'date.maximum',
      ...rules?.maximum,
    });
  }
  return failures;
};

export default getFieldValidationFailures;
