import { renderHook } from '@testing-library/react-hooks';

import { useDebouncedRefresh } from './useDebouncedRefresh';

const fetchRefresh = jest.fn();

const debounceableSchema = { type: 'string' };
const nonDebounceableSchema = { type: 'string', oneOf: [{}, {}] };

describe('useDebouncedRefresh', () => {
  beforeAll(() => jest.useFakeTimers());
  beforeEach(() => fetchRefresh.mockClear());
  afterAll(() => jest.useRealTimers());

  describe('when the schema is debounceable', () => {
    describe(`and the url doesn't change`, () => {
      it('triggers only once, after the interval, with the latest data', async () => {
        const { result } = renderHook(() => useDebouncedRefresh(fetchRefresh));

        result.current({ url: '/path-1' }, 'data-1', 'etag-1', debounceableSchema);
        result.current({ url: '/path-1' }, 'data-2', 'etag-2', debounceableSchema);
        result.current({ url: '/path-1' }, 'data-3', 'etag-3', debounceableSchema);

        expect(fetchRefresh).toHaveBeenCalledTimes(0);

        jest.advanceTimersByTime(1000);

        expect(fetchRefresh).toHaveBeenCalledTimes(1);
        expect(fetchRefresh).toHaveBeenLastCalledWith({ url: '/path-1' }, 'data-3', 'etag-3');
      });
    });

    describe(`and the url changes`, () => {
      it('triggers once per url, after each interval', async () => {
        const { result } = renderHook(() => useDebouncedRefresh(fetchRefresh));

        result.current({ url: '/path-1' }, 'data-1', 'etag-1', debounceableSchema);
        result.current({ url: '/path-2' }, 'data-2', 'etag-2', debounceableSchema);
        result.current({ url: '/path-3' }, 'data-3', 'etag-3', debounceableSchema);

        expect(fetchRefresh).toHaveBeenCalledTimes(0);

        jest.advanceTimersByTime(1000);

        expect(fetchRefresh).toHaveBeenCalledTimes(3);
        expect(fetchRefresh).toHaveBeenCalledWith({ url: '/path-1' }, 'data-1', 'etag-1');
        expect(fetchRefresh).toHaveBeenCalledWith({ url: '/path-2' }, 'data-2', 'etag-2');
        expect(fetchRefresh).toHaveBeenCalledWith({ url: '/path-3' }, 'data-3', 'etag-3');
      });
    });
  });

  describe('when the schema is NON debounceable', () => {
    it('triggers immediately for each call', async () => {
      const { result } = renderHook(() => useDebouncedRefresh(fetchRefresh));

      result.current({ url: '/path-1' }, 'data-1', 'etag-1', nonDebounceableSchema);
      expect(fetchRefresh).toHaveBeenCalledWith({ url: '/path-1' }, 'data-1', 'etag-1');

      result.current({ url: '/path-1' }, 'data-2', 'etag-2', nonDebounceableSchema);
      expect(fetchRefresh).toHaveBeenCalledWith({ url: '/path-1' }, 'data-2', 'etag-2');

      result.current({ url: '/path-1' }, 'data-3', 'etag-3', nonDebounceableSchema);
      expect(fetchRefresh).toHaveBeenCalledWith({ url: '/path-1' }, 'data-3', 'etag-3');
    });
  });
});
