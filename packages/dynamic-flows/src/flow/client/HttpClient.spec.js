import { HttpClient } from './HttpClient';

describe('HttpClient tests', () => {
  describe('when instantiating with baseUrl', () => {
    describe('and called with a relative path', () => {
      it('uses the baseURL as a prefix for the request endpoint', () => {
        const client = new HttpClient({ baseUrl: 'https://foo.net' });
        client.request({ url: '/some-path' });
        expect(requestUrlInLastCallToFetch()).toBe('https://foo.net/some-path');
      });
    });
    describe('and called with an absolute URL', () => {
      it('ignores the baseURL and makes the request using the given url', () => {
        const client = new HttpClient({ baseUrl: 'https://foo.net' });
        client.request({ url: 'https://test.net/some-path' });
        expect(requestUrlInLastCallToFetch()).toBe('https://test.net/some-path');
      });
    });
  });
  describe('when instantiating two HttpClients with different baseUrls', () => {
    it('each instances makes requests using their own baseUrl', () => {
      const clientA = new HttpClient({ baseUrl: 'https://foo.net' });
      const clientB = new HttpClient({ baseUrl: 'https://test.net' });

      clientA.request({ url: '/some-path-in-foo' });
      expect(requestUrlInLastCallToFetch()).toBe('https://foo.net/some-path-in-foo');

      clientB.request({ url: '/some-path-in-test' });
      expect(requestUrlInLastCallToFetch()).toBe('https://test.net/some-path-in-test');
    });
  });

  describe('when instantiating HttpClient with additional headers', () => {
    it('adds the specified headers to the request', () => {
      const client = new HttpClient({ headers: { 'X-custom-header': 'custom-value' } });

      client.request({ url: '/some-path', method: 'POST', data: { some: 'data' } });
      expect(headersInLastCallToFetch()).toMatchObject({ 'X-custom-header': 'custom-value' });
    });
  });
});

function requestUrlInLastCallToFetch() {
  return lastCallTo(fetch)[0];
}

function headersInLastCallToFetch() {
  return lastCallTo(fetch)[1].headers;
}

function lastCallTo(mockFn) {
  return mockFn.mock.calls[mockFn.mock.calls.length - 1];
}
