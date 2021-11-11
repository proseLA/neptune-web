import { Status } from '../common';
import { render, fireEvent, screen } from '../test-utils';

import Summary from './Summary';

describe('Summary', () => {
  it('renders minimal component', () => {
    const { asFragment } = render(<Summary icon={<strong>icon</strong>} title="Hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders full component', async () => {
    const { container } = render(
      <Summary
        action={{
          text: 'text',
          href: 'href',
          'aria-label': 'aria-label',
        }}
        description="description"
        info={{
          title: 'title',
          content: 'description',
          'aria-label': 'aria-label',
        }}
        icon={<strong>icon</strong>}
        status={Status.DONE}
        title="title"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  describe('action', () => {
    const onClickStub = jest.fn();
    const props = {
      icon: <strong>icon</strong>,
      title: 'Hello world',
      action: {
        text: 'text',
        href: 'href',
        target: '_blank',
        onClick: onClickStub,
      },
    };

    it('sets target on the link', () => {
      render(<Summary {...props} />);

      const element = screen.getByText('text');
      expect(element).toHaveAttribute('target', props.action.target);
    });

    it('runs the onClick callback provided', () => {
      const { container } = render(<Summary {...props} />);

      fireEvent.click(container.querySelector('.np-summary__action'));

      expect(onClickStub).toHaveBeenCalledTimes(1);
    });
  });

  describe('statuses', () => {
    const props = {
      icon: <strong>icon</strong>,
      title: 'Hello world',
    };
    it('renders no badge by default', () => {
      const { container } = render(<Summary {...props} />);
      expect(container.querySelector('.np-summary-icon__pending')).not.toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__done')).not.toBeInTheDocument();
    });

    it('renders an aria-label and no badge for a not done status', () => {
      const { container } = render(<Summary {...props} status={Status.NOT_DONE} />);

      expect(screen.getByLabelText('Item to do')).toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__pending')).not.toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__done')).not.toBeInTheDocument();
    });

    it('renders badge and aria-label for a pending status', () => {
      const { container } = render(<Summary {...props} status={Status.PENDING} />);

      expect(screen.getByLabelText('Item pending')).toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__pending')).toBeInTheDocument();
    });

    it('renders badge and aria-label for a done status', () => {
      const { container } = render(<Summary {...props} status={Status.DONE} />);

      expect(screen.getByLabelText('Item done')).toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__done')).toBeInTheDocument();
    });
  });
});
