import {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidPattern,
  isValidMaximum,
  isValidMinimum,
  isValidMinItems,
  isValidMaxItems,
} from '../rule-validators';

import {
  isObject,
  isArray,
  isString,
  isNumber,
  isInteger,
  isBoolean,
  isNull,
} from '../type-validators';

const TYPE_ERROR = { message: 'type' };

function getFieldValidationFailures(value, rules) {
  const isRequired = rules?.required?.value;

  if (rules.enum) {
    return getEnumValidationFailures(value, rules, isRequired);
  }

  if (rules.const) {
    return getConstValidationFailures(value, rules, isRequired);
  }

  if (isNull(value)) {
    return isRequired ? ['required'] : [];
  }

  switch (rules.type) {
    case 'string':
      return getStringValidationFailures(value, rules, isRequired);
    case 'number':
      return getNumberValidationFailures(value, rules, isRequired);
    case 'integer':
      return getIntegerValidationFailures(value, rules, isRequired);
    case 'boolean':
      return getBooleanValidationFailures(value, rules, isRequired);
    case 'array':
      return getArrayValidationFailures(value, rules);
    case 'object':
      return getObjectValidationFailures(value, rules);
    default:
      return [];
  }
}

function getStringValidationFailures(value, rules, isRequired) {
  if (!isString(value) && !isNull(value)) {
    return [TYPE_ERROR];
  }

  if (value === '' && isRequired) {
    return [
      {
        message: 'required',
        ...rules?.required,
      },
    ];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push({
      message: 'required',
      ...rules?.required,
    });
  }
  if (rules?.minLength && !isValidMinLength(value, rules.minLength.value)) {
    failures.push({
      message: 'minLength',
      ...rules?.minLength,
    });
  }
  if (rules?.maxLength && !isValidMaxLength(value, rules.maxLength.value)) {
    failures.push({
      message: 'maxLength',
      ...rules?.maxLength,
    });
  }
  if (rules?.pattern && !isValidPattern(value, rules.pattern.value)) {
    failures.push({
      message: 'pattern',
      ...rules?.pattern,
    });
  }
  if (rules?.minimum && !isValidMinimum(value, rules.minimum.value)) {
    failures.push({
      message: 'minimum',
      ...rules?.minimum,
    });
  }
  if (rules?.maximum && !isValidMaximum(value, rules.maximum.value)) {
    failures.push({
      message: 'maximum',
      ...rules?.maximum,
    });
  }
  return failures;
}

function getNumberValidationFailures(value, rules, isRequired) {
  if (!isNumber(value) && !isNull(value)) {
    return [TYPE_ERROR];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push({
      message: 'required',
      ...rules?.required,
    });
  }
  if (rules?.minimum && !isValidMinimum(value, rules.minimum.value)) {
    failures.push({
      message: 'minimum',
      ...rules?.minimum,
    });
  }
  if (rules?.maximum && !isValidMaximum(value, rules.maximum.value)) {
    failures.push({
      message: 'maximum',
      ...rules?.maximum,
    });
  }
  return failures;
}

function getIntegerValidationFailures(value, rules, isRequired) {
  if (!isInteger(value)) {
    return [TYPE_ERROR];
  }
  return getNumberValidationFailures(value, rules, isRequired);
}

function getBooleanValidationFailures(value, rules, isRequired) {
  if (!isBoolean(value) && !isNull(value)) {
    return [TYPE_ERROR];
  }

  if (!value && isRequired) {
    return [
      {
        message: 'required',
        ...rules?.required,
      },
    ];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push({
      message: 'required',
      ...rules?.required,
    });
  }
  return failures;
}

function getEnumValidationFailures(value, rules, isRequired) {
  if (!isValidRequired(value, isRequired)) {
    return [
      {
        message: 'required',
        ...rules?.required,
      },
    ];
  }

  if (isNull(value) || rules.enum.indexOf(value) === -1) {
    return ['enum'];
  }
  return [];
}

function getConstValidationFailures(value, rules, isRequired) {
  if (!isValidRequired(value, isRequired)) {
    return [
      {
        message: 'required',
        ...rules?.required,
      },
    ];
  }

  if (value !== rules.const) {
    return ['enum'];
  }
  return [];
}

function getArrayValidationFailures(value, rules) {
  if (!isArray(value) && !isNull(value)) {
    return [TYPE_ERROR];
  }

  const failures = [];
  if (rules?.minItems && !isValidMinItems(value, rules.minItems.value)) {
    failures.push({
      message: 'minItems',
      ...rules?.minItems,
    });
  }
  if (rules?.maxItems && !isValidMaxItems(value, rules.maxItems.value)) {
    failures.push({
      message: 'maxItems',
      ...rules?.maxItems,
    });
  }
  return failures;
}

/**
 * When validating an object we only checking that it is an object and that it
 * has the required properties, we do not check if the properties are valid.
 */
function getObjectValidationFailures(value, rules) {
  if (!isObject(value) && !isNull(value)) {
    return [TYPE_ERROR];
  }

  if (!isArray(rules.required)) {
    return [];
  }

  const allPresent = rules.required
    .map((prop) => typeof value[prop] !== 'undefined')
    .reduce((propInModel, validSoFar) => propInModel && validSoFar, true);

  return allPresent ? [] : ['required'];
}

export { getFieldValidationFailures, TYPE_ERROR };
