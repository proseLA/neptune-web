import { cleanup, render, screen } from '../../../test-utils';

import { getFocusableElements } from './getFocusableElements';

describe('getFocusableElements', () => {
  afterEach(() => {
    cleanup();
  });
  it('returns first and last focusable element', () => {
    const { container } = render(
      <>
        <div>another element</div>
        <a href="test">first</a>
        <div>another element</div>
        <a href="test">middle</a>
        <div>another element</div>
        <a href="test">last</a>
        <div>another element</div>
      </>,
    );
    getFocusableElements(container);
    expect(getFocusableElements(container)).toStrictEqual({
      first: first(),
      last: last(),
    });
  });

  it('returns container if there are no focusable elements', () => {
    const { container } = render(
      <>
        <div>another element</div>
      </>,
    );
    getFocusableElements(container);
    expect(getFocusableElements(container)).toStrictEqual({
      first: container,
      last: container,
    });
  });

  it('returns undefined if container is not provided', () => {
    getFocusableElements();
    expect(getFocusableElements()).toStrictEqual({
      first: undefined,
      last: undefined,
    });
  });

  const first = () => screen.getByText('first');
  const last = () => screen.getByText('last');
});
