/**
 * This function allows to extend method by also retaining the original functionalitites.
 */
const WithExtendedMethods = ({ render, methodsToOvverride, ...props }) => {
  const handleChildEvent = (method) => (event) => {
    if (event?.persist) {
      event.persist();
    }
    methodsToOvverride[method](event);
    // Invokes original child onChange when change
    if (props[method]) {
      props[method](event);
    }
  };

  return render(
    Object.keys(methodsToOvverride).reduce((acc, method) => {
      acc[method] = handleChildEvent(method);
      return acc;
    }, {}),
  );
};

export default WithExtendedMethods;
