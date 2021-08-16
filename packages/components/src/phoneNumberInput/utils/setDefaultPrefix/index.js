import { getCountryFromLocale } from '../../../common/locale';
import { findCountryByCode } from '../findCountryByCode';

/**
 * Default phone code, the UK one `+44`
 */
const DEFAULT_PHONE_CODE = '+44';

/**
 * Given a valid locale it returns the correspondent prefix if found or +44 otherwise.
 *
 * @param {string} locale - a string that represent the locale ex:'es-ES'
 * @param countryCode
 * @returns {string}
 */
export const setDefaultPrefix = (locale, countryCode) => {
  const country =
    findCountryByCode(countryCode) ||
    // when `locale` code has explicit region: `en-GB`, `en-US`, `ar-AE`
    findCountryByCode(getCountryFromLocale(locale)) ||
    // when `locale` code is only two chars value: `fr`, `es`
    findCountryByCode(locale);

  return country?.phone || DEFAULT_PHONE_CODE;
};
