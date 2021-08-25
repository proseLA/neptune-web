import { useDirection } from '../common/hooks';
import { render, fireEvent, cleanup, screen } from '../test-utils';

import Nudge from '.';

jest.mock('../common/hooks/useDirection');

describe('Nudge', () => {
  const defaultProps = {
    media: (
      <span role="img" aria-label="Party popper emoji">
        🎉
      </span>
    ),
    title: 'A nudge title',
    link: 'CTA',
    href: '#',
    onClick: jest.fn(),
    onDismiss: jest.fn(),
  };

  beforeEach(() => {
    useDirection.mockImplementation(() => ({ direction: 'rtl', isRTL: true }));
  });

  afterEach(cleanup);

  it('renders a media element', () => {
    render(<Nudge {...defaultProps} />);
    const media = screen.getByRole('img');
    expect(media).toBeInTheDocument();
  });

  it('renders a title', () => {
    render(<Nudge {...defaultProps} />);
    const title = screen.getByText('A nudge title');
    expect(title).toBeInTheDocument();
  });

  it('renders a link to the passed href', () => {
    render(<Nudge {...defaultProps} />);
    const link = screen.getByText('CTA');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', defaultProps.href);
  });

  it('calls onClick prop when the link is clicked', () => {
    render(<Nudge {...defaultProps} />);
    const link = screen.getByText('CTA');
    fireEvent.click(link);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onDismiss prop when close button is clicked', () => {
    render(<Nudge {...defaultProps} />);
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(defaultProps.onDismiss).toHaveBeenCalledTimes(1);
  });

  it('adds the passed id to the parent container', () => {
    render(<Nudge {...defaultProps} id="nudge-id" />);
    const parentContainer = screen.getByRole('img').parentElement.parentElement;
    expect(parentContainer.id).toBe('nudge-id');
  });

  it(`adds the passed className to the parent container's className`, () => {
    render(<Nudge {...defaultProps} className="happy-nudge" />);
    const parentContainer = screen.getByRole('img').parentElement.parentElement;
    expect(parentContainer).toHaveClass('happy-nudge');
  });

  it('applies correct css classes when isRTL is true', () => {
    const { container } = render(<Nudge {...defaultProps} />);
    expect(container.querySelector('.media-right')).toBeInTheDocument();
  });
});
