import { HttpClient } from './HttpClient';

describe('HttpClient tests', () => {
  describe('when instantiating two HttpClients with different baseUrls', () => {
    it('each instances makes requests using their own baseUrl', () => {
      const clientA = new HttpClient({ baseUrl: 'https://foo' });
      const clientB = new HttpClient({ baseUrl: 'https://test' });

      clientA.request({ action: { url: '/some-path-in-foo' } });
      expect(requestUrlInLastCallToFetch()).toBe('https://foo/some-path-in-foo');

      clientB.request({ action: { url: '/some-path-in-test' } });
      expect(requestUrlInLastCallToFetch()).toBe('https://test/some-path-in-test');
    });
  });

  describe('when instantiating HttpClient with additional headers', () => {
    it('adds the specified headers to the request', () => {
      const client = new HttpClient({ headers: { 'X-custom-header': 'custom-value' } });

      client.request({ action: { url: '/some-path', method: 'POST' }, data: { some: 'data' } });
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
