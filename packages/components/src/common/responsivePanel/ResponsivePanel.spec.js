import { Breakpoint, Position } from '..';
import { render, waitFor } from '../../test-utils';

import ResponsivePanel from './ResponsivePanel';

jest.mock('../bottomSheet', () => {
  const { forwardRef } = require('react');
  return forwardRef(({ open, children }, reference) =>
    open ? (
      <div ref={reference} className="np-bottom-sheet">
        {children}
      </div>
    ) : null,
  );
});

jest.mock('../panel', () => {
  const { forwardRef } = require('react');
  return forwardRef(({ open, children }, reference) =>
    open ? (
      <div ref={reference} className="np-panel np-panel--open">
        {children}
      </div>
    ) : null,
  );
});

describe('ResponsivePanel', () => {
  const props = {
    arrow: true,
    children: 'content',
    open: true,
    position: Position.TOP,
    title: 'title',
    anchorRef: jest.fn(),
    onClose: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  let container;

  describe('on desktop', () => {
    it('renders Panel', async () => {
      await waitFor(() => {
        ({ container } = render(
          <ResponsivePanel {...props} intialOpen>
            children
          </ResponsivePanel>,
        ));
      });

      expect(container).toMatchSnapshot();
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders bottomSheet', async () => {
      await waitFor(() => {
        ({ container } = render(
          <ResponsivePanel {...props} open>
            children
          </ResponsivePanel>,
        ));
      });

      expect(container).toMatchSnapshot();
    });
  });
});
