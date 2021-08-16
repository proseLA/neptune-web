import { Breakpoint, Position } from '../common';
import { render, screen, userEvent } from '../test-utils';

import Popover from './Popover';

jest.mock(
  'react-transition-group/CSSTransition',
  () => (props) => props.in ? props.children : null,
);

jest.mock(
  '../dimmer',
  () =>
    function ({ open, children }) {
      return open ? <div className="dimmer">{children}</div> : null;
    },
);

describe('Popover', () => {
  const props = {
    arrow: true,
    content: 'content',
    position: Position.BOTTOM,
    title: 'title',
  };

  let container;
  let rerender;

  describe('on desktop', () => {
    it('renders when is open', async () => {
      render(
        <Popover {...props}>
          <button type="button">Open</button>
        </Popover>,
      );

      userEvent.click(screen.getByText('Open'));

      await waitForPanel();
      expect(getPanel()).toMatchSnapshot();
    });

    it('renders title', async () => {
      ({ container, rerender } = render(
        <Popover {...props}>
          <button type="button">Open</button>
        </Popover>,
      ));

      userEvent.click(screen.getByText('Open'));
      await waitForPanel();

      expect(getTitle()).toBeInTheDocument();

      rerender(
        <Popover {...props} title={undefined}>
          <button type="button">Open</button>
        </Popover>,
      );

      userEvent.click(screen.getByText('Open'));

      expect(getTitle()).not.toBeInTheDocument();
    });

    it('renders Panel onClick', async () => {
      render(
        <Popover {...props}>
          <button type="button">Open</button>
        </Popover>,
      );

      expect(getPanel()).not.toBeInTheDocument();

      userEvent.click(screen.getByText('Open'));
      await waitForPanel();

      expect(getPanel()).toBeInTheDocument();
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders when is open', () => {
      ({ container } = render(
        <Popover {...props}>
          <button type="button">Open</button>
        </Popover>,
      ));

      userEvent.click(screen.getByText('Open'));

      expect(container).toMatchSnapshot();
    });

    it('renders BottomSheet onClick', () => {
      render(
        <Popover {...props}>
          <button type="button">Open</button>
        </Popover>,
      );

      expect(getBottomSheet()).not.toBeInTheDocument();

      userEvent.click(screen.getByText('Open'));

      expect(getBottomSheet()).toBeInTheDocument();
    });
  });

  const waitForPanel = async () => screen.findByText('content');
  const getPanel = () => document.querySelector('.np-panel');
  const getBottomSheet = () => document.querySelector('.np-bottom-sheet');
  const getTitle = () => screen.queryByText('title');
});
