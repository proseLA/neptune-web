import { Button } from '..';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import { render, cleanup, waitFor, screen, userEvent } from '../test-utils';

import { Dimmer } from './Dimmer';

jest.mock('../common');

describe('Dimmer', () => {
  const props = {
    open: true,
    children: <div />,
  };

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('closing behaviour', () => {
    it('calls onClose if the dimmer is clicked', () => {
      const onClose = jest.fn();
      render(<Dimmer {...props} onClose={onClose} />);
      userEvent.click(screen.getByRole('presentation'));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose if the dimmer content is clicked', () => {
      const onClose = jest.fn();
      render(
        <Dimmer {...props} onClose={onClose}>
          <Button onClick={() => {}}>McClicky</Button>
        </Dimmer>,
      );
      userEvent.click(screen.getByRole('button'));
      expect(onClose).toHaveBeenCalledTimes(0);
    });

    it('does not call onClose when clicked if disableClickToClose is true', () => {
      const onClose = jest.fn();
      render(<Dimmer {...props} disableClickToClose onClose={onClose} />);
      userEvent.click(screen.getByRole('presentation'));
      expect(onClose).toHaveBeenCalledTimes(0);
    });

    it('calls onClose if the escape key is pressed', () => {
      const onClose = jest.fn();
      render(<Dimmer {...props} onClose={onClose} />);
      userEvent.keyboard('{esc}');
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose if the escape key is pressed when disableClickToClose is true', () => {
      const onClose = jest.fn();
      render(<Dimmer {...props} disableClickToClose onClose={onClose} />);
      userEvent.keyboard('{esc}');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('transparent', () => {
    it('shows backdrop by default', () => {
      render(<Dimmer {...props} />);
      expect(screen.getByRole('presentation')).not.toHaveClass('dimmer--transparent');
    });

    it('adds a class to hide the backdrop when transparent is true', () => {
      render(<Dimmer {...props} transparent />);
      expect(screen.getByRole('presentation')).toHaveClass('dimmer--transparent');
    });

    it('will not lock body scroll when transparent is true', () => {
      render(<Dimmer {...props} transparent />);

      expect(addNoScrollBodyClass).not.toHaveBeenCalled();
    });
  });

  describe('addNoScrollBodyClass', () => {
    it('calls addNoScrollBodyClass on render', () => {
      expect(addNoScrollBodyClass).not.toHaveBeenCalled();

      render(<Dimmer {...props} />);

      expect(addNoScrollBodyClass).toHaveBeenCalledTimes(1);
    });

    it('calls removeNoScrollBodyClass on unmount', async () => {
      expect(removeNoScrollBodyClass).not.toHaveBeenCalled();

      const { unmount } = render(<Dimmer {...props} />);

      unmount();

      await waitFor(() => {
        expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(1);
      });
    });

    it('calls removeNoScrollBodyClass only once when the children is unmounted', async () => {
      const { rerender, unmount } = render(<Dimmer {...props} />);

      expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(0);
      rerender(<Dimmer {...props} open={false} />);

      await waitFor(() => {
        expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(1);
      });

      unmount();

      await waitFor(() => {
        expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(1);
      });
    });
  });
});
