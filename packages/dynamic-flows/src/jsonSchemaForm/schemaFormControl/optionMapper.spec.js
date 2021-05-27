import { mapAvatar, mapIcon } from './optionMapper';

describe('For icon conversion', () => {
  describe('given a bank icon', () => {
    it('should render the expected icon', () => {
      const icon = {
        name: 'bank',
      };

      const result = mapIcon(icon);

      expect(result).toBeDefined();
      expect(result.avatar).toBeDefined();
    });
  });

  describe('given a null object', () => {
    it('should return null', () => {
      const result = mapIcon(null);

      expect(result).toBeNull();
    });
  });

  describe('given an unrecognised icon', () => {
    it('should return null', () => {
      const icon = {
        name: 'unknown',
      };

      const result = mapIcon(icon);

      expect(result).toBeNull();
    });
  });
});

describe('For image conversion', () => {
  describe('given an image url', () => {
    it('should render an image', () => {
      const image = {
        url: 'someURL',
      };

      const result = mapAvatar(image);

      expect(result).toBeDefined();
      expect(result.avatar).toBeDefined();
    });
  });

  describe('given a malformed image', () => {
    it('should return null', () => {
      const image = {
        something: 'unknown',
      };

      const result = mapAvatar(image);

      expect(result).toBeNull();
    });
  });

  describe('given a null object', () => {
    it('should return null', () => {
      const result = mapAvatar(null);

      expect(result).toBeNull();
    });
  });
});
