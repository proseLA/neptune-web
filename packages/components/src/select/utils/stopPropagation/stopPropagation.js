const stopPropagation = (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
    event.nativeEvent.stopImmediatePropagation();
  }
  // document listener does not use SyntheticEvents
};

export default stopPropagation;
