import { normalizeEvent } from './validation/event-utilities';

/**
 * This function is a temporary function used to normalize the returned values from our input. Please DO NOT USE THIS COMPONENT.
 */
const WithNormaliser = ({ render, methodsToOvverride, ...props }) => {
  const handleChildEvent = (method) => (event) => {
    const value = normalizeEvent(event);
    // Invokes handleOnChange when change
    methodsToOvverride[method](value);
    // Invokes original child onChange when change
    if (props[method]) {
      props[method](value);
    }
  };

  return render(
    Object.keys(methodsToOvverride).reduce((acc, method) => {
      acc[method] = handleChildEvent(method);
      return acc;
    }, {}),
  );
};

export default WithNormaliser;
