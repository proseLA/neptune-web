const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);
const isInteger = (value) => {
  return isNumber(value) && Math.floor(value) === value;
};

const isDate = (date) => validDateObject(date) || validDateString(date);
const isBoolean = (value) => typeof value === 'boolean';

const isObject = (value) => !isNull(value) && !isUndefined(value) && value.constructor === Object;
const isArray = (value) => Array.isArray(value);
const isNull = (value) => value === null;
const isUndefined = (value) => typeof value === 'undefined';

const validDateString = (dateString) =>
  typeof dateString === 'string' && validDateObject(new Date(dateString));

const validDateObject = (dateObj) => dateObj instanceof Date && !isNaN(dateObj); // eslint-disable-line no-restricted-globals

export { isString, isNumber, isInteger, isDate, isBoolean, isObject, isArray, isNull, isUndefined };
