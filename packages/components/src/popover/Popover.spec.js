import React from 'react';
import { fireEvent, render, waitFor, screen } from '../test-utils';
import Popover from './Popover';
import { Breakpoint, Position } from '../common';

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
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      await openPopover();

      expect(container).toMatchSnapshot();
    });

    it('renders title', async () => {
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      await openPopover();

      expect(getTitle()).toBeInTheDocument();

      await waitFor(() => {
        rerender(
          <Popover {...props} title={undefined}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      await openPopover();

      expect(getTitle()).not.toBeInTheDocument();
    });

    it('renders Panel onClick', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getPanel()).not.toBeInTheDocument();

      await openPopover();

      expect(getPanel()).toBeInTheDocument();
    });

    it('closes Panel on document click', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getPanel()).not.toBeInTheDocument();

      await openPopover();

      expect(getPanel()).toBeInTheDocument();

      fireEvent.click(document);

      expect(getPanel()).not.toBeInTheDocument();
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders when is open', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      await openPopover();

      expect(container).toMatchSnapshot();
    });

    it('renders BottomSheet onClick', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getBottomSheet()).not.toBeInTheDocument();

      await openPopover();

      expect(getBottomSheet()).toBeInTheDocument();
    });

    it('close BottomSheet on document click', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getBottomSheet()).not.toBeInTheDocument();

      await openPopover();

      expect(getBottomSheet()).toBeInTheDocument();

      fireEvent.click(document);

      expect(getBottomSheet()).not.toBeInTheDocument();
    });
  });

  const getPanel = () => document.querySelector('.np-panel--open');
  const getBottomSheet = () => document.querySelector('.np-bottom-sheet');
  const getTrigger = () => screen.queryByText('Open');
  const getTitle = () => screen.queryByText('title');

  const openPopover = async () => {
    await waitFor(() => fireEvent.click(getTrigger()));
  };
});
