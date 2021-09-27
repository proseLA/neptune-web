const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');

global.fetch = require('jest-fetch-mock');
Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = (callback) => callback();

// https://github.com/esphen/jest-prop-type-error/blob/master/index.js
// This mock will make tests fail when props error occurs.
const { error } = console;
// eslint-disable-next-line no-console
console.error = (message, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message);
  }

  error.apply(console, [message, ...args]);
};
