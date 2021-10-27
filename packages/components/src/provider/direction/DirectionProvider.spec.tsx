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
});
