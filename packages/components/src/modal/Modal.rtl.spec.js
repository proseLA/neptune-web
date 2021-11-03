import { Position, Scroll } from '../common';
import { render, fireEvent, screen } from '../test-utils';

import Modal from './Modal';

describe('Modal', () => {
  const props = {
    onClose: jest.fn(),
    body: 'Some body',
    position: Position.TOP,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('appends the tw-modal--content scroll class to modal', () => {
    render(<Modal {...props} open scroll={Scroll.CONTENT} />);

    expect(getModal()).toHaveClass('tw-modal--content');
  });

  it(`doesn't calls onClose when click is inside modal`, () => {
    render(<Modal {...props} open />);

    fireEvent.click(getDialog());
    expect(props.onClose).not.toHaveBeenCalled();
  });

  it('calls onClose if click outside the content', () => {
    render(<Modal {...props} open />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('presentation'));
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape is pressed on Modal', () => {
    render(<Modal {...props} open />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.keyDown(getDialog(), { key: 'Escape' });
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape is pressed on document', () => {
    render(<Modal {...props} open />);
    expect(props.onClose).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  const getDialog = () => screen.getByRole('dialog');
  const getModal = () => document.querySelector('.tw-modal');
});
