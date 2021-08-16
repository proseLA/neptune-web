import countries from '../../data/countries';
import { longestMatchingPrefix } from '../longestMatchingPrefix';

export const findCountryByCode = (code) => {
  let matchingCodes;
  if (code && code.length === 2) {
    matchingCodes = countries.filter((country) => code.toUpperCase() === country.iso2);
  }
  return matchingCodes && matchingCodes.length > 0 ? longestMatchingPrefix(matchingCodes) : null;
};
