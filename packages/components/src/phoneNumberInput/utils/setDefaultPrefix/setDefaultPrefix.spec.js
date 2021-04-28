import { setDefaultPrefix } from '..';

describe('setDefaultPrefix', () => {
  test.each([
    ['en-GB', '+44'],
    ['en-US', '+1'],
    ['en', '+44'],
    ['fr', '+33'],
    ['ua', '+380'],
    ['ar-ae', '+971'],
    ['ar', '+54'],
    ['ar', '+54'],
    ['it-IT', '+39'],
    ['it', '+39'],
  ])('should return right prefix when locale is passed ("%s" -> "%s")', (locale, expectedValue) => {
    expect(setDefaultPrefix(locale)).toBe(expectedValue);
  });

  it('should return right prefix when valid locale is passed', () => {
    expect(setDefaultPrefix('it-IT')).toBe('+39');
  });

  it('should return default prefix when invalid locale is passed', () => {
    expect(setDefaultPrefix('en-Wrong')).toBe('+44');
  });

  it('should override prefix from locale if correct country ISO2 code provided', () => {
    expect(setDefaultPrefix('it-IT', 'US')).toBe('+1');
  });

  it('should return prefix based on locale if country code is invalid', () => {
    expect(setDefaultPrefix('it-IT', 'WRONG')).toBe('+39');
  });
});
