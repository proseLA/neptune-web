const includesString = (str1, str2) => str1.toLowerCase().indexOf(str2.toLowerCase()) > -1;

const arrayIncludesString = (arrayToSearch, keyword) =>
  arrayToSearch.some((str) => includesString(str, keyword));

const defaultFilterFunction = (option, keyword) => {
  const { label, note, secondary, currency, searchStrings } = option;
  return (
    (label && includesString(label, keyword)) ||
    (note && includesString(note, keyword)) ||
    (secondary && includesString(secondary, keyword)) ||
    (currency && includesString(currency, keyword)) ||
    (searchStrings && arrayIncludesString(searchStrings, keyword))
  );
};

export default defaultFilterFunction;
