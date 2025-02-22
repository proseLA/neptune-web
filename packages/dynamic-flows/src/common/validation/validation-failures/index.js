import {
  isObject,
  isArray,
  isString,
  isNumber,
  isInteger,
  isBoolean,
  isNull,
} from '@transferwise/neptune-validation';

import {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidPattern,
  isValidMaximum,
  isValidMinimum,
  isValidMinItems,
  isValidMaxItems,
  isValidRequiredArray,
} from '../rule-validators';

function getValidationFailures(value, schema, isRequired) {
  if (schema.enum) {
    return getEnumValidationFailures(value, schema, isRequired);
  }

  if (schema.const) {
    return getConstValidationFailures(value, schema, isRequired);
  }

  if (isNull(value)) {
    return isRequired ? ['required'] : [];
  }

  switch (schema.type) {
    case 'string':
      return getStringValidationFailures(value, schema, isRequired);
    case 'number':
      return getNumberValidationFailures(value, schema, isRequired);
    case 'integer':
      return getIntegerValidationFailures(value, schema, isRequired);
    case 'boolean':
      return getBooleanValidationFailures(value, schema, isRequired);
    case 'array':
      return getArrayValidationFailures(value, schema, isRequired);
    case 'object':
      return getObjectValidationFailures(value, schema);
    default:
      return [];
  }
}

function getStringValidationFailures(value, schema, isRequired) {
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
  if (!isValidMinLength(value, schema.minLength)) {
    failures.push('minLength');
  }
  if (!isValidMaxLength(value, schema.maxLength)) {
    failures.push('maxLength');
  }
  if (!isValidPattern(value, schema.pattern)) {
    failures.push('pattern');
  }
  if (!isValidMinimum(value, schema.minimum)) {
    failures.push('minimum');
  }
  if (!isValidMaximum(value, schema.maximum)) {
    failures.push('maximum');
  }
  return failures;
}

function getNumberValidationFailures(value, schema, isRequired) {
  if (!isNumber(value) && !isNull(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (!isValidMinimum(value, schema.minimum)) {
    failures.push('minimum');
  }
  if (!isValidMaximum(value, schema.maximum)) {
    failures.push('maximum');
  }
  return failures;
}

function getIntegerValidationFailures(value, schema, isRequired) {
  if (!isInteger(value)) {
    return ['type'];
  }
  return getNumberValidationFailures(value, schema, isRequired);
}

function getBooleanValidationFailures(value, schema, isRequired) {
  if (!isBoolean(value) && !isNull(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  return failures;
}

function getEnumValidationFailures(value, schema, isRequired) {
  if (!isValidRequired(value, isRequired)) {
    return ['required'];
  }

  if (isNull(value) || !schema.enum.includes(value)) {
    return ['enum'];
  }
  return [];
}

function getConstValidationFailures(value, schema, isRequired) {
  if (!isValidRequired(value, isRequired)) {
    return ['required'];
  }

  if (value !== schema.const) {
    return ['enum'];
  }
  return [];
}

function getArrayValidationFailures(value, schema, isRequired) {
  if (!isArray(value) && !isNull(value)) {
    return ['type'];
  }

  if (!isValidRequiredArray(value, isRequired)) {
    return ['required'];
  }

  const failures = [];
  if (!isValidMinItems(value, schema.minItems)) {
    failures.push('minItems');
  }
  if (!isValidMaxItems(value, schema.maxItems)) {
    failures.push('maxItems');
  }
  return failures;
}

function getBlobValidationFailures(value, schema) {
  if (isNull(value)) {
    return ['type'];
  }
  return [];
}

/**
 * When validating an object we only checking that it is an object and that it
 * has the required properties, we do not check if the properties are valid.
 *
 * @param value
 * @param schema
 */
function getObjectValidationFailures(value, schema) {
  if (!isObject(value) && !isNull(value)) {
    return ['type'];
  }

  if (!isArray(schema.required)) {
    return [];
  }

  const allPresent = schema.required
    .map((property) => typeof value[property] !== 'undefined')
    .reduce((propertyInModel, validSoFar) => propertyInModel && validSoFar, true);

  return allPresent ? [] : ['required'];
}

export {
  getValidationFailures,
  getStringValidationFailures,
  getNumberValidationFailures,
  getIntegerValidationFailures,
  getBooleanValidationFailures,
  getEnumValidationFailures,
  getConstValidationFailures,
  getArrayValidationFailures,
  getObjectValidationFailures,
  getBlobValidationFailures,
};
