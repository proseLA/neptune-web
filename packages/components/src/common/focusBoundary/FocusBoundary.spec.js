import React from 'react';
import { render, screen, userEvent, fireEvent } from '../../test-utils';
import FocusBoundary from './FocusBoundary';

const props = {
  onClose: jest.fn(),
};

describe('FocusBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders component', () => {
    const { container } = render(
      <FocusBoundary {...props}>
        <a href="test">Test</a>
      </FocusBoundary>,
    );

    expect(container).toMatchSnapshot();
  });

  it('focus on container by default', () => {
    render(
      <>
        <a href="test">not focusable</a>
        <FocusBoundary {...props}>
          <a href="test">Test</a>
        </FocusBoundary>
      </>,
    );

    expect(focusBoundary()).toHaveFocus();
  });

  it('traps the focus when user presses tab', () => {
    render(
      <>
        <a href="test">not focusable</a>
        <FocusBoundary {...props}>
          <a href="test">firstFocusable</a>
          <a href="test">lastFocusable</a>
        </FocusBoundary>
      </>,
    );

    userEvent.tab();
    expect(firstFocusableElement()).toHaveFocus();

    userEvent.tab();
    expect(lastFocusableElement()).toHaveFocus();

    userEvent.tab();
    expect(firstFocusableElement()).toHaveFocus();

    userEvent.tab({ shift: true });
    expect(lastFocusableElement()).toHaveFocus();

    userEvent.tab({ shift: true });
    expect(firstFocusableElement()).toHaveFocus();
  });

  it('calls onClose when user press Escape', () => {
    render(
      <FocusBoundary {...props}>
        <a href="test">firstFocusable</a>
        <a href="test">lastFocusable</a>
      </FocusBoundary>,
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(props.onClose).toHaveBeenCalled();
  });

  it(`doesn't call onClose when calls onClose when user press unsupported key`, () => {
    render(
      <FocusBoundary {...props}>
        <a href="test">firstFocusable</a>
        <a href="test">lastFocusable</a>
      </FocusBoundary>,
    );

    fireEvent.keyDown(document, { key: 'Enter' });
    expect(props.onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when user clicks outside', () => {
    render(
      <FocusBoundary {...props}>
        <a href="test">firstFocusable</a>
        <a href="test">lastFocusable</a>
      </FocusBoundary>,
    );

    fireEvent.click(document);
    expect(props.onClose).toHaveBeenCalled();
  });

  it(`doesn't call onClose when user clicks in target`, () => {
    render(
      <FocusBoundary {...props}>
        <a href="test">firstFocusable</a>
        <a href="test">lastFocusable</a>
      </FocusBoundary>,
    );

    fireEvent.click(firstFocusableElement());
    expect(props.onClose).not.toHaveBeenCalled();
  });

  const firstFocusableElement = () => screen.getByText('firstFocusable');
  const lastFocusableElement = () => screen.getByText('lastFocusable');
  const focusBoundary = () => document.querySelector('.np-focus-boundary');
});
