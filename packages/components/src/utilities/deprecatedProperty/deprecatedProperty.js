import { logActionRequired } from '../logActionRequired';

const deprecatedMessage = ({ component, propName, message, expiryDate }) => {
  const messages = [`${component} has deprecated the use of ${propName}.`];

  if (message) {
    messages.push(message);
  }

  if (expiryDate) {
    messages.push(
      `${propName} will be removed on or after ${expiryDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })}`,
    );
  }

  return messages.join(' ');
};

const deprecated =
  (validator, { component, message = '', newProp: newProperty = null, expiryDate = null }) =>
  (props, propertyName, ...rest) => {
    const newPropertyMessage = newProperty ? `Please use ${newProperty} instead.` : message;

    if (props[propertyName] != null && typeof props[propertyName] !== 'undefined') {
      logActionRequired(
        deprecatedMessage({
          component,
          propName: propertyName,
          message: newPropertyMessage,
          expiryDate,
        }),
      );
    }
    return validator(props, propertyName, ...rest);
  };

export default deprecated;
