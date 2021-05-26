import {
  isNull,
  isString,
  isNumber,
  isValidMaxLength,
  isValidMinLength,
  isValidRequired,
  isValidMinimum,
  isValidMaximum,
  isValidPattern,
} from '@transferwise/neptune-validation';

export const getStringValidationFailures = ({ value, validations, isRequired }) => {
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

export const getNumberValidationFailures = ({ value: eventValue, validations, isRequired }) => {
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
