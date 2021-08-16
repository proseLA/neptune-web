import { Size } from '../common';
import { act, render, fireEvent, waitFor, screen } from '../test-utils';

import Info, { InfoPresentation } from '.';

describe('Info', () => {
  const props = {
    content: 'content',
    className: 'className',
    title: 'title',
    'aria-label': 'aria-label',
  };

  it('renders small icon', async () => {
    await waitFor(() => {
      render(<Info {...props} />);
    });

    expect(getSvgIcon()).toHaveAttribute('height', '16');
  });

  it('renders large icon', async () => {
    await waitFor(() => {
      render(<Info {...props} size={Size.LARGE} />);
    });

    expect(getSvgIcon()).toHaveAttribute('height', '24');
  });

  it('calls onClick on click event', async () => {
    const fn = jest.fn();
    await act(async () => {
      render(<Info {...props} onClick={fn} />);
    });
    await act(async () => {
      fireEvent.click(getTriggerButton());
    });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  describe(`when in ${InfoPresentation.POPOVER} mode`, () => {
    it('renders help button trigger', async () => {
      await waitFor(() => {
        render(<Info {...props} />);
      });
      expect(getTriggerButton()).toBeInTheDocument();
    });
    it('opens popover onClick', async () => {
      await waitFor(() => {
        render(<Info {...props} />);
      });
      expect(getPopover()).not.toBeInTheDocument();
      await openPopover();
      expect(getPopover()).toBeInTheDocument();
    });
  });

  describe(`when in ${InfoPresentation.MODAL} mode`, () => {
    it('renders help button trigger', async () => {
      await waitFor(() => {
        render(<Info {...props} />);
      });

      expect(getTriggerButton()).toBeInTheDocument();
    });
    it('opens modal onClick', () => {
      render(<Info {...props} presentation={InfoPresentation.MODAL} />);

      expect(getModal()).not.toBeInTheDocument();

      fireEvent.click(getTriggerButton());

      expect(getModal()).toBeInTheDocument();
    });
  });

  const getTriggerButton = () => screen.queryByLabelText('aria-label');
  const getSvgIcon = () => document.querySelector('.tw-icon-help-circle > svg');
  const getPopover = () => screen.queryByRole('tooltip');
  const getModal = () => screen.queryByRole('dialog');

  const openPopover = async () => {
    await waitFor(() => fireEvent.click(getTriggerButton()));
  };
});
