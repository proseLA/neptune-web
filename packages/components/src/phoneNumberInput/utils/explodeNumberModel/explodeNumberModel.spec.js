import { explodeNumberModel } from '.';

describe('explodeNumberModel', () => {
  describe('when a valid number is provided', () => {
    it('should return an exploded number for two digit prefix', () => {
      expect(explodeNumberModel('+447573135343')).toStrictEqual({
        format: '**** *** ***',
        prefix: '+44',
        suffix: '7573135343',
      });
    });

    it('should return an exploded number for three digit prefix', () => {
      expect(explodeNumberModel('+3727573135343')).toStrictEqual({
        format: '',
        prefix: '+372',
        suffix: '7573135343',
      });
    });
  });
});
