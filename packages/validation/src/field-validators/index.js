import { getValidationFailures } from '../jsonSchemaForm/validation-failures';

const TYPE_ERROR = { message: 'type' };

function getFieldValidationFailures(value, rules) {
  const schema = Object.entries(rules).reduce(
    (acc, [key, entry]) => {
      if (entry?.value) {
        acc[key] = entry.value;
      }
      return acc;
    },
    { type: rules.type },
  );
  const jsonSchemaFailures = getValidationFailures(value, schema, rules?.required?.value);

  const failures = [];

  if (rules[jsonSchemaFailures[0]]) {
    if (rules[jsonSchemaFailures[0]].message) {
      failures.push(rules[jsonSchemaFailures[0]]);
    } else {
      failures.push({ ...rules[jsonSchemaFailures[0]], message: jsonSchemaFailures[0] });
    }
  }
  return failures;
}

export { getFieldValidationFailures, TYPE_ERROR };
