import { makeFetcher } from '.';

jest.spyOn(global, 'fetch').mockImplementation();

describe('when initialised with a with a baseUrl', () => {
  const fetcher = makeFetcher('http://foo.bar');
  beforeEach(() => global.fetch.mockClear());

  describe('and called with a relative url', () => {
    it('prefixes the baseUrl to the url given', () => {
      fetcher('/banana');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('http://foo.bar/banana');
    });
  });

  describe('and called with an absolute url', () => {
    it('does not prefix the baseUrl', () => {
      fetcher('http://banana.com/banana');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('http://banana.com/banana');
    });
  });

  describe('and called with an "data:" url', () => {
    it('does not prefix the baseUrl', () => {
      fetcher('data:image/jpeg;base64,/9j');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('data:image/jpeg;base64,/9j');
    });
  });
});

[null, undefined].forEach((baseUrl) => {
  describe(`when initialised with a ${baseUrl} baseUrl`, () => {
    const fetcher = makeFetcher(baseUrl);
    beforeEach(() => global.fetch.mockClear());

    describe('and called with a relative url', () => {
      it('uses the url as given', () => {
        fetcher('/banana');

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/banana');
      });
    });
  });
});
