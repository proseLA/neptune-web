import { act, renderHook } from '@testing-library/react-hooks';

import { fireEvent } from '../../../test-utils';

import { useConditionalListener } from './useConditionalListener';

describe('useConditionalListener', () => {
  const triggeredEvent = new Event('KittenEvent');
  const args = {
    eventType: 'click',
    callback: jest.fn(),
    attachListener: true,
    parent: document,
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`by default doesn't call callback`, () => {
    renderHook(() => useConditionalListener({ ...args }));

    expect(args.callback).not.toHaveBeenCalled();
  });

  describe('when attachListener is true', () => {
    it('calls callback when event is triggered', () => {
      renderHook(() => useConditionalListener({ ...args }));

      expect(args.callback).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('when attachListener is false', () => {
    it("doesn't call callback when event is triggered", () => {
      renderHook(() => useConditionalListener({ ...args, attachListener: false }));

      expect(args.callback).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callback).not.toHaveBeenCalled();
    });
  });

  describe('when cleanup runs', () => {
    it("doesn't call callback when event is triggered", () => {
      const { unmount } = renderHook(() => useConditionalListener({ ...args }));

      expect(args.callback).not.toHaveBeenCalled();

      unmount();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callback).not.toHaveBeenCalled();
    });
  });
});
