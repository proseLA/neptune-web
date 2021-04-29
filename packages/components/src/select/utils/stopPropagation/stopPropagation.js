const stopPropagation = (event) => {
  // document listener does not use SyntheticEvents
  event.stopPropagation();
  event.preventDefault();
  if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
    event.nativeEvent.stopImmediatePropagation();
  }
};

export default stopPropagation;
