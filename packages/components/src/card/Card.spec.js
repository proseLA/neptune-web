import { render, fireEvent, cleanup, screen } from '../test-utils';

import Card from '.';

describe('Card', () => {
  const defaultProps = {
    title: 'A Card',
    details: 'Some details about this card',
    icon: <svg />,
    isExpanded: false,
    onClick: jest.fn(),
  };
  const children = <div />;
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
    const { container } = renderCard();
    const panelBody = container.querySelector('.tw-card__panel .media-body');
    const { container: renderedCardDetails } = render(defaultProps.details);

    expect(panelBody.innerHTML).toContain(renderedCardDetails.innerHTML);
  });

  it('renders the card icon', () => {
    const { container } = renderCard();
    const iconWrapper = container.querySelector('.tw-card__panel .circle');
    const { container: renderedIcon } = render(defaultProps.icon);

    expect(iconWrapper.innerHTML).toStrictEqual(renderedIcon.innerHTML);
  });

  describe('when there is no children prop', () => {
    it("doesn't have active class irrespective of isExpanded prop", () => {
      expect(activeClassCard()).toBeNull();
      cleanup();

      const expandedProps = { isExpanded: true };
      expect(activeClassCard(expandedProps)).toBeNull();
    });

    it('has an inactive toggle panel', () => {
      const { container } = renderCard();
      expect(container.querySelector('.tw-card__panel--inactive')).not.toBeNull();
    });

    it("doesn't call onClick when the toggle panel is clicked", () => {
      clickTogglePanel();
      expect(defaultProps.onClick).not.toHaveBeenCalled();
    });

    it("doesn't render a chevron", () => {
      expect(chevron()).toBeNull();
    });

    it("doesn't render content panel irrespective of isExpanded prop", () => {
      expect(contentPanel()).toBeNull();
      cleanup();

      const expandedProps = { isExpanded: true };
      expect(contentPanel(expandedProps)).toBeNull();
    });
  });

  describe('when there is children prop', () => {
    it('has active class when expanded', () => {
      const closedProps = { children };
      expect(activeClassCard(closedProps)).toBeNull();
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(activeClassCard(expandedProps)).not.toBeNull();
    });

    it('calls on onClick with inverse of current isExpanded value when the toggle panel is clicked', () => {
      clickTogglePanel(true);
      expect(defaultProps.onClick).toHaveBeenCalledWith(!defaultProps.isExpanded);
    });

    it('calls onClick with inverse of current isExpanded value when toggle panel is toggled with keyboard', () => {
      keyboardTogglePanel(true);
      expect(defaultProps.onClick).toHaveBeenCalledWith(!defaultProps.isExpanded);
    });

    it('renders a chevron', () => {
      expect(chevron({ children })).not.toBeNull();
    });

    it('flips chevron when expanded', () => {
      const closedProps = { children };
      expect(flippedChevron(closedProps)).toBeNull();
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(flippedChevron(expandedProps)).not.toBeNull();
    });

    it('inverses media circle when expanded', () => {
      const closedProps = { children };
      expect(inversedMediaCircle(closedProps)).toBeNull();
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(inversedMediaCircle(expandedProps)).not.toBeNull();
    });

    it('renders content panel when expanded', () => {
      const closedProps = { children };
      expect(contentPanel(closedProps)).toBeNull();
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(contentPanel(expandedProps)).not.toBeNull();
    });

    it('renders children when expanded', () => {
      const { rerender } = render(
        <Card {...defaultProps} isExpanded={false}>
          Children
        </Card>,
      );

      expect(screen.queryByText('Children')).not.toBeInTheDocument();

      rerender(
        <Card {...defaultProps} isExpanded>
          Children
        </Card>,
      );

      expect(screen.getByText('Children')).toBeInTheDocument();
    });
  });

  const activeClassCard = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-card.active');
  };
  const clickTogglePanel = (withChildren) => {
    const togglePanel = findPanel(withChildren);
    fireEvent.click(togglePanel);
  };
  const keyboardTogglePanel = (withChildren) => {
    const togglePanel = findPanel(withChildren);
    fireEvent.keyDown(togglePanel, { key: 'Spacebar', keycode: 'Spacebar' });
  };
  const findPanel = (withChildren) => {
    const props = withChildren ? { children } : {};
    const { container } = renderCard(props);
    return container.querySelector('.tw-card__panel');
  };
  const chevron = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-icon-chevron-up.bottom');
  };
  const flippedChevron = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-icon-chevron-up.top');
  };
  const contentPanel = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.p-l-panel');
  };
  const inversedMediaCircle = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-card__panel .circle-inverse');
  };
});
