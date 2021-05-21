import { isTypeValid } from '.';

const pdfFile = {
  type: 'application/pdf',
};

const pngFile = {
  type: 'image/png',
};

const data64Img = 'data:image/png;something';

describe('isTypeValid', () => {
  describe('when file or rule are not provided', () => {
    it('returns false for matching format', () => {
      expect(isTypeValid('', '*', null)).toBe(false);
      expect(isTypeValid(data64Img, '', null)).toBe(false);
    });
  });
  describe('when type is provided', () => {
    it.each([pdfFile, pngFile])('returns true for wildcard rule %s', (file) => {
      expect(isTypeValid(file, '*', null)).toBe(true);
    });

    it('returns true for matching type', () => {
      expect(isTypeValid(pdfFile, 'application/*', null)).toBe(true);
    });

    it('returns true for matching type when multiple rules provided', () => {
      expect(isTypeValid(pdfFile, 'application/*, image/*', null)).toBe(true);
    });

    it('returns true for matching subtype', () => {
      expect(isTypeValid(pdfFile, 'application/pdf', null)).toBe(true);
    });

    it('returns true for matching subtype when multiple rules provided', () => {
      expect(isTypeValid(pngFile, 'application/xls, image/png', null)).toBe(true);
    });

    it('can parse multiple types with extra whitespace', () => {
      expect(isTypeValid(pngFile, ' application/xls,  image/png ', null)).toBe(true);
    });

    it('returns false for unsupported type', () => {
      expect(isTypeValid(pngFile, 'application/*', null)).toBe(false);
    });

    it('returns false for unsupported subtype', () => {
      expect(isTypeValid(pdfFile, 'application/xls', null)).toBe(false);
    });

    it('returns false for unsupported subtype when multiple rules provided', () => {
      expect(isTypeValid(pngFile, 'application/xls, image/jpeg', null)).toBe(false);
    });
  });
  describe('when type is not provided', () => {
    it('returns true for supported file', () => {
      expect(isTypeValid({ type: '' }, 'image/png', data64Img)).toBe(true);
      expect(isTypeValid({ type: '' }, 'image/*', data64Img)).toBe(true);
    });

    it('returns false for unsupported file', () => {
      expect(isTypeValid({ type: '' }, 'image/jpeg', data64Img)).toBe(false);
      expect(isTypeValid({ type: '' }, 'application/*', data64Img)).toBe(false);
    });
  });
});
