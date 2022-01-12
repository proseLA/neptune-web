import { HttpClient } from './HttpClient';

describe('HttpClient tests', () => {
  describe('when instantiating two HttpClient s with different baseUrls', () => {
    it('each instances makes requests using their own baseUrl', () => {
      const clientA = new HttpClient({ baseUrl: 'https://foo' });
      const clientB = new HttpClient({ baseUrl: 'https://test' });

      clientA.request({ action: { url: '/some-path-in-foo' } });
      expect(requestUrlInLastCallToFetch()).toBe('https://foo/some-path-in-foo');

      clientB.request({ action: { url: '/some-path-in-test' } });
      expect(requestUrlInLastCallToFetch()).toBe('https://test/some-path-in-test');
    });
  });

  function requestUrlInLastCallToFetch() {
    return firstAgumentIn(lastCallTo(fetch));
  }

  function lastCallTo(mockFn) {
    return mockFn.mock.calls[mockFn.mock.calls.length - 1];
  }

  function firstAgumentIn(callArgs) {
    return callArgs[0];
  }
});
