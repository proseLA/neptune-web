import { testID as chevronTestID } from '../chevron/Chevron';
import { Position } from '../common';
import { render, screen, userEvent } from '../test-utils';

import Card from '.';

jest.mock('../chevron');

describe('Card', () => {
  const defaultProps = {
    title: 'A Card',
    details: 'Some details about this card',
    icon: <svg />,
    isExpanded: false,
    onClick: jest.fn(),
  };
  const dataTestId = 'testCard';
  const renderCard = (props = {}) => {
    return render(<Card {...defaultProps} {...props} />);
  };

  it('renders as a div by default', () => {
    renderCard({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId).tagName).toBe('DIV');
  });

  it('renders as a tag passed to it', () => {
    renderCard({ as: 'li', 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId).tagName).toBe('LI');
  });

  it('adds the passed id to the card element', () => {
    const id = 'card-id';
    renderCard({ id, 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId).id).toBe(id);
  });

  it('adds the passed className to the card element', () => {
    const className = 'card-class';
    renderCard({ className, 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('renders the card title', () => {
    renderCard();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('renders the card details', () => {
    renderCard();
    expect(screen.getByText(defaultProps.details)).toBeInTheDocument();
  });

  it('renders the card icon', () => {
    renderCard({ icon: <span>mock icon</span> });
    expect(screen.getByText('mock icon')).toBeInTheDocument();
  });

  describe('when there is no children prop', () => {
    it('redners Option as a div', () => {
      const onClick = jest.fn();
      renderCard(onClick);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      expect(screen.getByText(defaultProps.title).tagName).toBe('DIV');
    });

    it('has an inactive class', () => {
      renderCard({ 'data-testid': dataTestId });

      expect(screen.getByTestId(dataTestId)).toHaveClass('np-card--inactive');
    });

    it("doesn't call onClick when clicked", () => {
      renderCard();

      userEvent.click(screen.getByText(defaultProps.title));

      expect(defaultProps.onClick).not.toHaveBeenCalled();
    });

    it("doesn't render a chevron", () => {
      renderCard();

      expect(screen.queryByTestId('mock-chevron')).not.toBeInTheDocument();
    });
  });

  describe('when there is children prop', () => {
    it('calls on onClick with inverse of current isExpanded value when clicked', () => {
      const onClick = jest.fn();
      renderCard({ title: 'test title', children: 'mock children', isExpanded: false, onClick });

      userEvent.click(screen.getByRole('button', { name: 'test title' }));
      expect(onClick).toHaveBeenCalledWith(true);
    });

    it('renders a chevron', () => {
      renderCard({ children: 'mock children' });

      expect(screen.getByTestId('mock-chevron')).toHaveAttribute('orientation', Position.BOTTOM);
    });

    describe('when expanded', () => {
      it('flips chevron', () => {
        renderCard({ children: 'mock children', isExpanded: true });

        expect(screen.getByTestId('mock-chevron')).toHaveAttribute('orientation', Position.TOP);
      });

      it('renders children', () => {
        renderCard({ children: 'mock children', isExpanded: true });

        expect(screen.getByText('mock children')).toBeInTheDocument();
      });
    });
  });
});
