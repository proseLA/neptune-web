export function logActionRequired(message) {
  if (['development', 'test'].includes(process?.env?.NODE_ENV)) {
    // eslint-disable-next-line no-console
    console.warn(message);
  }
}

export function logActionRequiredIf(message, conditional) {
  if (conditional) {
    logActionRequired(message);
  }
}
