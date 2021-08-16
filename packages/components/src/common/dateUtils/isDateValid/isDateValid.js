export const isDateValid = (date) => validDateObject(date) || validDateString(date);

export const validDateString = (dateString) =>
  typeof dateString === 'string' && validDateObject(new Date(dateString));

const validDateObject = (dateObject) => dateObject instanceof Date && !isNaN(dateObject); // eslint-disable-line no-restricted-globals
