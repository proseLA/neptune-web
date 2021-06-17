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

  return jsonSchemaFailures.reduce((failures, failureKey) => {
    if (rules[failureKey]) {
      failures.push({ ...rules[failureKey], message: rules[failureKey]?.message || failureKey });
    }
    return failures;
  }, []);
}

export { getFieldValidationFailures, TYPE_ERROR };
