import translationFiles from '../../i18n';

import { getLangFromLocale, adjustLocale, getCountryFromLocale, SUPPORTED_LANGUAGES } from '.';

describe('locale utils', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('getLangFromLocale', () => {
    it.each([
      ['en-GB', 'en'],
      ['en_GB', 'en'],
      ['EN-GB', 'en'],
      ['en-gb', 'en'],
      ['en_US', 'en'],
      ['en-US', 'en'],
      ['ES', 'es'],
      ['ZH-HK', 'zh'],
      ['ZH_HK', 'zh'],
      ['zh_HK', 'zh'],
      ['ja-JP', 'ja'],
      ['zhHK', null],
      [null, null],
      [undefined, null],
      ['', null],
      ['  ', null],
      ['ar-dz', null],
      ['ar-iq', null],
      ['zh-tw', 'zh'],
      ['nl-nl', null],
    ])('locale "%s" -> language "%s"', (locale, expectedValue) => {
      expect(getLangFromLocale(locale)).toBe(expectedValue);
    });
  });

  describe('adjustLocale', () => {
    it.each([
      ['en-GB', 'en-GB'],
      ['en_GB', 'en-GB'],
      ['EN-GB', 'en-GB'],
      ['en-gb', 'en-GB'],
      ['en_US', 'en-US'],
      ['en-US', 'en-US'],
      ['ES', 'es'],
      ['ZH-HK', 'zh-HK'],
      ['ZH_HK', 'zh-HK'],
      ['zh_HK', 'zh-HK'],
      ['ja-JP', 'ja-JP'],
      ['zhHK', null],
      [null, null],
      [undefined, null],
      ['', null],
      ['  ', null],
      ['ar-dz', 'ar-DZ'],
      ['ar-iq', 'ar-IQ'],
      ['zh-tw', 'zh-TW'],
      ['nl-nl', 'nl-NL'],
    ])('locale "%s" -> language "%s"', (locale, expectedValue) => {
      expect(adjustLocale(locale)).toBe(expectedValue);
    });
  });

  describe('contract between SUPPORTED_LANGUAGES and names of translations files', () => {
    it('number of lang codes should be equal to number of translations files', () => {
      expect(SUPPORTED_LANGUAGES).toHaveLength(Object.keys(translationFiles).length);
    });

    it('lang codes should match to names of translations object', () => {
      Object.keys(translationFiles).forEach((property) => {
        const result = SUPPORTED_LANGUAGES.includes(property);
        if (!result) {
          // eslint-disable-next-line no-console
          console.log(`'${property}' doesn't exist in ${[SUPPORTED_LANGUAGES]}`);
        }
        expect(result).toBe(true);
      });
    });

    it('lang codes should match with names of translations files', async () => {
      for (const locale of SUPPORTED_LANGUAGES) {
        const file = await import(`../../i18n/${locale}.json`);
        expect(file).not.toBeNull();
        expect(file.default).toBe(translationFiles[locale]);
      }
    });
  });

  describe('getCountryFromLocale', () => {
    it.each([
      ['en', null],
      ['fr', null],
      ['it', null],
      ['en-US', 'US'],
      ['en-GB', 'GB'],
      ['es-ES', 'ES'],
      ['es_ES', 'ES'],
      ['es_E', null],
      ['es-E', null],
    ])('given an "%s" as a locale value it should return "%s"', (locale, expectedValue) => {
      expect(getCountryFromLocale(locale)).toBe(expectedValue);
    });
  });
});
