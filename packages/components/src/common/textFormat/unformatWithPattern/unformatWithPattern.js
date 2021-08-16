const unformatWithPattern = (value, pattern) => {
  let valueArray = [''];
  if (value && value.length > 0) {
    valueArray = value.toString().split('');
    valueArray = valueArray.filter((element) => !getSymbolsInPattern(pattern).includes(element));
  }

  return valueArray.join('');
};

const getSymbolsInPattern = (pattern) => pattern.split('').filter((symbol) => symbol !== '*');

export default unformatWithPattern;
