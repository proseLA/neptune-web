/* eslint-disable no-console */
import deprecated from '.';

const props = { prop1: 'prop1', prop2: 'prop2' };
const validator = jest.fn();

describe('deprecated', () => {
  const origWarn = console.warn;
  let mockedWarn;

  beforeAll(() => {
    mockedWarn = jest.fn();
    console.warn = mockedWarn;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.warn = origWarn;
  });

  describe('if prop has been listed as deprecated', () => {
    it('calls console.warn with the correct message', () => {
      const component = 'Test';
      const newProperty = 'newProp';
      const propertyName = 'prop1';

      const expiryDate = new Date('01-01-2000');
      const expiryDateString = expiryDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

      deprecated(validator, { component, newProp: newProperty, expiryDate })(props, propertyName);

      expect(console.warn).toHaveBeenCalledWith(
        `${component} has deprecated the use of ${propertyName}. Please use ${newProperty} instead. ${propertyName} will be removed on or after ${expiryDateString}`,
      );
    });

    it('calls console.warn with correct message if newProp is not provided', () => {
      const component = 'Test';

      const propertyName = 'prop1';

      const expiryDate = new Date('01-01-2000');
      const expiryDateString = expiryDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

      deprecated(validator, { component, expiryDate })(props, propertyName);

      expect(console.warn).toHaveBeenCalledWith(
        `${component} has deprecated the use of ${propertyName}. ${propertyName} will be removed on or after ${expiryDateString}`,
      );
    });

    it('calls console.warn with correct message if message is provided', () => {
      const component = 'Test';
      const propertyName = 'prop1';
      const message = 'Some custom message.';

      deprecated(validator, { component, message })(props, propertyName);

      expect(console.warn).toHaveBeenCalledWith(
        `${component} has deprecated the use of ${propertyName}. ${message}`,
      );
    });
  });

  describe('if prop has not been listed as deprecated', () => {
    it('calls validator with props', () => {
      const propertyName = 'prop3';
      deprecated(validator, {})(props, propertyName);
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('calls validator with expected args', () => {
      const propertyName = 'prop3';
      deprecated(validator, {})(props, propertyName);
      expect(validator).toHaveBeenCalledWith({ prop1: 'prop1', prop2: 'prop2' }, 'prop3');
    });
  });
});
