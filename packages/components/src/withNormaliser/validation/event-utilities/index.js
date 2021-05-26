import { isNull, isNumber, isUndefined } from '@transferwise/neptune-validation';

function isSyntheticEvent(value) {
  return (
    !isNull(value) &&
    !isUndefined(value) &&
    !!value.nativeEvent &&
    value.nativeEvent instanceof Event
  );
}

const normalizeEvent = (event) => {
  if (event) {
    if (isSyntheticEvent(event)) {
      return event.target.value;
    }
    if (isNumber(event.value) || !isUndefined(event.value)) {
      // Checkbox,Select
      return event.value;
    }
  }

  return event;
};

export { isSyntheticEvent, normalizeEvent };
