import { getSupportedSpotMimeTypes } from '.';

describe(getSupportedSpotMimeTypes, () => {
  it('returns all supported mime types when * is passed', () => {
    expect(getSupportedSpotMimeTypes('*')).toStrictEqual([
      'image/jpeg',
      'video/*',
      'application/pdf',
    ]);
  });

  it('maps image/* and application/* according to the supported', () => {
    expect(getSupportedSpotMimeTypes('image/*,application/*')).toStrictEqual([
      'image/jpeg',
      'application/pdf',
    ]);
  });

  it('filters out unsupported mime types', () => {
    expect(getSupportedSpotMimeTypes('image/jpeg,text/csv')).toStrictEqual(['image/jpeg']);
  });
});
