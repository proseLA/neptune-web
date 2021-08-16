import { postData } from '.';

const HTTPOPTIONS = { url: 'a-url' };
const DATA = 'some-data';

describe('postData', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it('should work with resolve', async () => {
    const RESOLVE_RESPONSE = { ok: true, someOtherStuff: 'someOtherStuff' };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(RESOLVE_RESPONSE));

    expect.assertions(1);

    await expect(postData(HTTPOPTIONS, DATA)).resolves.toStrictEqual(RESOLVE_RESPONSE);
  });

  it('should throw when call fails', async () => {
    const REJECT_RESPONSE = { status: '500', statusText: 'Rejected' };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(REJECT_RESPONSE));

    expect.assertions(1);
    await expect(postData(HTTPOPTIONS, DATA)).rejects.toStrictEqual(REJECT_RESPONSE);
  });

  it('should throw an Error when API returns an error code', async () => {
    expect.assertions(1);

    const ERROR_RESPONSE = { status: '500', statusText: 'Internal server error', ok: false };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(ERROR_RESPONSE));

    await expect(postData(HTTPOPTIONS, DATA)).rejects.toStrictEqual(expect.any(Error));
  });

  it('should include the full response in the Error thrown', async () => {
    expect.assertions(1);

    const ERROR_RESPONSE = { status: '500', statusText: 'Internal server error', ok: false };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(ERROR_RESPONSE));

    try {
      await postData(HTTPOPTIONS, DATA);
    } catch (error) {
      expect(error.response).toStrictEqual(ERROR_RESPONSE);
    }
  });

  it('should pass additional form data to request body', () => {
    const data = { file: 'file', profileId: '1' };
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(HTTPOPTIONS, data);

    expect(mockFetch.mock.calls[0][1].body).toStrictEqual(data);
  });

  it('should override `Content-type` and add any custom headers to the request', () => {
    const CUSTOM_CONTENT_TYPE = 'foo';
    const CUSTOM_LANGUAGE = 'hu';

    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(
      {
        ...HTTPOPTIONS,
        headers: { 'Content-type': CUSTOM_CONTENT_TYPE, 'Accept-language': CUSTOM_LANGUAGE },
      },
      DATA,
    );

    expect(mockFetch.mock.calls[0][1].headers['Content-type']).toStrictEqual(CUSTOM_CONTENT_TYPE);
    expect(mockFetch.mock.calls[0][1].headers['Accept-language']).toStrictEqual(CUSTOM_LANGUAGE);
  });

  it('should set method to `POST` by default', () => {
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(HTTPOPTIONS, DATA);

    expect(mockFetch.mock.calls[0][1].method).toStrictEqual('POST');
  });

  it('should not set `Content-type` by default', () => {
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(HTTPOPTIONS, DATA);

    expect(mockFetch.mock.calls[0][1]['Content-type']).toBeUndefined();
  });
});
