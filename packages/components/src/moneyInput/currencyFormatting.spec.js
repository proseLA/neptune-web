import { formatAmount, parseAmount } from './currencyFormatting';

jest.mock('@transferwise/formatting', () => ({
  formatAmount: (number) => `formatted ${number}`,
}));

describe('Number formatting', () => {
  it('uses @transferwise/formatting for formatting numbers', () => {
    expect(formatAmount(100)).toBe('formatted 100');
  });

  it('parses localized numbers', () => {
    [
      ['1234.56', 'en-GB'],
      ['1,23,4.56', 'en-US'],
    ].forEach(([number, locale]) => {
      expect(parseAmount(number, 'gbp', locale)).toBe(1234.56);
    });
  });

  it('parses numbers with invalid locale', () => {
    expect(parseAmount('123.45', 'gbp', '12345de_DE')).toBe(123.45);
  });

  it('parses negative numbers into positive ones', () => {
    expect(parseAmount('-123.45', 'gbp')).toBe(123.45);
  });

  test.each([
    ['0---9(s.t.r!@#$%^&*()_+^[]{};’,<>?', 9],
    ['$12.341', 12.34],
    ['$12.347', 12.35],
    ['.asd121', 0.12],
    ['.asd129', 0.13],
    [',asd129', 129],
    ['123.123.123', 123.12],
    ['asda', NaN],
  ])(
    "parses strings by removing the non-numerical characters; case: '%s', expected: '%s'",
    (testValue, expectedValue) => {
      expect(parseAmount(testValue, 'gbp')).toBe(expectedValue);
    },
  );
});
