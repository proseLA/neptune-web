import { Direction } from '../../common';
import { useDirection } from '../../common/hooks';
import { render } from '../../test-utils';

import { DirectionProvider } from '.';

describe('DirectionProvider', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('dir');
  });

  it.each([
    [Direction.LTR, false],
    [Direction.RTL, true],
  ])('store direction %s in React Context', (direction, isRTL) => {
    let directionContext = null;
    const TestComponent = () => {
      directionContext = useDirection();
      return <></>;
    };
    render(
      <DirectionProvider direction={direction}>
        <TestComponent />
      </DirectionProvider>,
    );

    expect(directionContext).not.toBeNull();
    expect(directionContext).toHaveProperty('direction', direction);
    expect(directionContext).toHaveProperty('isRTL', isRTL);
  });

  it('attaches `dir` attribute to `html` tag', () => {
    expect(document.documentElement).not.toHaveAttribute('dir');

    render(<DirectionProvider />);
    expect(document.documentElement).toHaveAttribute('dir', 'ltr');

    render(<DirectionProvider direction="rtl" />);
    expect(document.documentElement).toHaveAttribute('dir', 'rtl');
  });
});
