import { renderHook } from '@testing-library/react-hooks';

import { useFetcher } from '../contexts/fetcherContext';

import { usePersistAsync } from './usePersistAsync';

jest.mock('react-intl', () => ({
  ...jest.requireActual('react-intl'),

  useIntl: jest.fn(() => ({
    formatMessage: jest.fn((message) => message),
  })),

  defineMessages: jest.fn((errorMessages) => {
    const translatedErrors = {};
    for (const errorKey in errorMessages) {
      translatedErrors[errorKey] = errorMessages[errorKey].defaultMessage;
    }
    return translatedErrors;
  }),
}));

jest.mock('../contexts/fetcherContext');

describe('usePersistAsync hook', () => {
  const idProperty = 'responseKey';
  const param = 'bodyAttribute';
  const schema = {
    url: 'http://localhost:3001/v1/save-file/',
    method: 'POST',
    param,
    idProperty,
    schema: {
      type: 'string',
      format: 'base64url',
    },
  };

  const mockFetcher = jest.fn();
  beforeEach(() => {
    useFetcher.mockImplementation(() => mockFetcher);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when invoked with persist async schema for a file', () => {
    it('should validate the passed value if null and return a rejected promise', async () => {
      const { result } = renderHook(() => usePersistAsync(schema));
      const handlePersistAsync = result.current;

      await expect(handlePersistAsync(null)).rejects.toThrow({
        message: 'Something went wrong, please try again later!',
      });
    });

    it('should validate the passed value if not as per schema and return a rejected promise', async () => {
      const { result } = renderHook(() => usePersistAsync(schema));
      const handlePersistAsync = result.current;

      await expect(handlePersistAsync([])).rejects.toThrow({
        message: 'Something went wrong, please try again later!',
      });
    });

    it('should make an API request as per the passed schema specs, with base64 json body upload approach', async () => {
      mockFetcher.mockResolvedValue({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue({ [idProperty]: 'savedFileId' }),
      });

      const { result } = renderHook(() => usePersistAsync(schema));
      const handlePersistAsync = result.current;

      await handlePersistAsync('some string');

      expect(mockFetcher).toHaveBeenCalledWith('http://localhost:3001/v1/save-file/', {
        body: `{"${param}":"some string"}`,
        headers: { 'Content-Type': 'application/json', 'X-Access-Token': 'Tr4n5f3rw153' },
        method: 'POST',
        signal: expect.any(AbortSignal),
      });
    });

    it('should make an API request as per the passed schema specs, with blob type schemas', async () => {
      mockFetcher.mockResolvedValue({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue({ [idProperty]: 'savedFileId' }),
      });

      const blobSchema = {
        ...schema,
        schema: {
          type: 'blob',
        },
      };

      const { result } = renderHook(() => usePersistAsync(blobSchema));
      const handlePersistAsync = result.current;

      const dummyUserInput = new File([], 'test-file');
      await handlePersistAsync(dummyUserInput);

      expect(mockFetcher).toHaveBeenCalledWith('http://localhost:3001/v1/save-file/', {
        body: expect.any(FormData),
        headers: { 'X-Access-Token': 'Tr4n5f3rw153' },
        method: 'POST',
        signal: expect.any(AbortSignal),
      });
    });

    it('should make an API request and on invalid value response from backend, should return appropriate error', async () => {
      const UNPROCESSABLE_ENTITY_HTTP_STATUS_CODE = 422;
      const validationError = 'We need a dog, not a mock';
      mockFetcher.mockResolvedValue({
        ok: false,
        status: UNPROCESSABLE_ENTITY_HTTP_STATUS_CODE,
        json: jest.fn().mockResolvedValue({ validation: { [param]: validationError } }),
      });

      const stringSchema = {
        ...schema,
        schema: {
          type: 'string',
        },
      };
      const { result } = renderHook(() => usePersistAsync(stringSchema));
      const handlePersistAsync = result.current;

      await expect(handlePersistAsync('fileBase64String')).rejects.toThrow({
        message: validationError,
      });
    });

    it('should make an API request and if unable to reach server/no network should throw Generic error', async () => {
      mockFetcher.mockRejectedValue();

      const { result } = renderHook(() => usePersistAsync(schema));
      const handlePersistAsync = result.current;

      await expect(handlePersistAsync('fileBase64String')).rejects.toThrow({
        message: 'Something went wrong, please try again later!',
      });
    });
  });
});
