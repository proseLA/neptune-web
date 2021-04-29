export const DEFAULT_LANG = 'en';
export const DEFAULT_LOCALE = 'en-GB';

export const SUPPORTED_RTL = ['he-IL'];

export const SUPPORTED_LANGUAGES = [
  DEFAULT_LANG,
  'ja',
  'de',
  'es',
  'fr',
  'hu',
  'id',
  'it',
  'pl',
  'pt',
  'ro',
  'ru',
  'tr',
  'zh',
];

/**
 * Verifies and adjusts locale (replace `_` with `-`)
 * Returns null if locale is unrecognized by {Intl.Locale}
 *
 * @param locale (`es`, `es_ES`, `en-GB`, `en`, `ja`, `ja-JP` etc)
 * @returns {Intl.Locale.baseName|null}
 */
export function adjustLocale(locale) {
  if (!locale || locale.trim().length === 0) {
    return null;
  }
  try {
    const { baseName } = new Intl.Locale(locale.trim().replace('_', '-'));
    return baseName;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
}

/**
 * Provides corresponding lang (iso2) for provided locale
 * if locale is invalid or language is unsupported returns null
 *
 * @param locale (`es`, `es-ES`, `en-GB`, `en`, `ja`, `ja-JP` etc)
 * @returns {Intl.Locale.language|null}
 */
export function getLangFromLocale(locale) {
  const adjustedLocale = adjustLocale(locale);
  if (adjustedLocale === null) {
    return null;
  }
  try {
    const { language } = new Intl.Locale(adjustedLocale);
    if (SUPPORTED_LANGUAGES.includes(language)) {
      return language;
    }
    return null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
}

/**
 * Provides corresponding country code (iso2) for locales code with explicit region value (`es-ES`, `en-GB`, `ja-JP` etc.)
 * if the value is invalid or missing region it returns null
 *
 * @param locale
 * @returns {string|null}
 */
export const getCountryFromLocale = (locale) => {
  const adjustedLocale = adjustLocale(locale);
  if (adjustedLocale === null) {
    return null;
  }
  try {
    const { region } = new Intl.Locale(adjustedLocale);
    return region ?? null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};
