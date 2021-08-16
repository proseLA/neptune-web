import { generateErrorMessage } from './generateErrorMessage';

describe('generateErrorMessage', () => {
  it('returns default error message for 413', () => {
    expect(generateErrorMessage(413)).toBe('Please provide a smaller file');
  });

  it('returns custom error message for 413', () => {
    expect(generateErrorMessage(413, { 413: 'Custom error message' })).toBe('Custom error message');
  });

  it('returns default error message for 415', () => {
    expect(generateErrorMessage(415)).toBe('Please provide a supported format');
  });

  it('returns custom error message for 415', () => {
    expect(generateErrorMessage(415, { 415: 'Custom error message' })).toBe('Custom error message');
  });

  it('returns default error message for unknown error', () => {
    expect(generateErrorMessage(-1)).toBe('Unknown error');
  });

  it('returns custom error message for unknown error', () => {
    expect(generateErrorMessage(-1, { unknownError: 'Custom error message' })).toBe(
      'Custom error message',
    );
  });
});
