import '@testing-library/jest-dom';
import { Breakpoint } from '../common';
import { render, fireEvent, screen } from '../test-utils';

import SizeSwapper from '.';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

describe('SizeSwapper', () => {
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };
  const breakpoints = [0, Breakpoint.EXTRA_SMALL];

  const items = breakpoints.map((bp) => ({
    items: [...new Array(2)].map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={`${index}-${bp}`}>
        element-{index + 1}-{bp}
      </div>
    )),
    layout: SizeSwapper.Layout.COLUMN,
    breakpoint: bp,
  }));

  afterAll(() => {
    const originalClientWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'clientWidth',
    );

    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  it('renders all elements and hides sizeswapper if clientWidth is not defined', () => {
    const { container } = render(<SizeSwapper items={items} />);

    expect(screen.getByText('element-1-0')).toBeInTheDocument();
    expect(screen.getByText('element-2-0')).toBeInTheDocument();
    expect(screen.getByText(`element-1-${breakpoints[1]}`)).toBeInTheDocument();
    expect(screen.getByText(`element-2-${breakpoints[1]}`)).toBeInTheDocument();

    expect(container.querySelector('.np-size-swapper')).toHaveStyle(`visibility: hidden`);
  });

  it('changes visibility when clientWidth is set', () => {
    const { container } = render(<SizeSwapper items={items} />);

    expect(container.querySelector('.np-size-swapper')).toHaveStyle(`visibility: hidden`);

    resetClientWidth(breakpoints[1]);
    fireEvent(window, new Event('resize'));

    expect(container.querySelector('.np-size-swapper')).toHaveStyle(`visibility: visible`);
  });

  it('switches elements according to breakpoints', () => {
    render(<SizeSwapper items={items} />);
    resetClientWidth(breakpoints[1] - 1);
    fireEvent(window, new Event('resize'));

    expect(screen.getByText(`element-1-0`)).toBeInTheDocument();
    expect(screen.getByText(`element-2-0`)).toBeInTheDocument();
    expect(screen.queryByText(`element-1-${breakpoints[1]}`)).not.toBeInTheDocument();
    expect(screen.queryByText(`element-2-${breakpoints[1]}`)).not.toBeInTheDocument();

    // resetClientWidth(breakpoints[1]);
    // fireEvent(window, new Event('resize'));

    // expect(screen.queryByText(`element-1-${breakpoints[0]}`)).not.toBeInTheDocument();
    // expect(screen.queryByText(`element-2-${breakpoints[0]}`)).not.toBeInTheDocument();
    // expect(screen.getByText(`element-1-${breakpoints[1]}`)).toBeInTheDocument();
    // expect(screen.getByText(`element-2-${breakpoints[1]}`)).toBeInTheDocument();
  });

  describe('when ref is window', () => {
    it('switches elements according to breakpoints', () => {
      render(<SizeSwapper ref={window} items={items} />);
      global.innerWidth = breakpoints[1] - 1;
      fireEvent(window, new Event('resize'));

      expect(screen.getByText(`element-1-0`)).toBeInTheDocument();
      expect(screen.getByText(`element-2-0`)).toBeInTheDocument();
      expect(screen.queryByText(`element-1-${breakpoints[1]}`)).not.toBeInTheDocument();
      expect(screen.queryByText(`element-2-${breakpoints[1]}`)).not.toBeInTheDocument();

      [, global.innerWidth] = breakpoints;

      fireEvent(window, new Event('resize'));

      expect(screen.queryByText(`element-1-${breakpoints[0]}`)).not.toBeInTheDocument();
      expect(screen.queryByText(`element-2-${breakpoints[0]}`)).not.toBeInTheDocument();
      expect(screen.getByText(`element-1-${breakpoints[1]}`)).toBeInTheDocument();
      expect(screen.getByText(`element-2-${breakpoints[1]}`)).toBeInTheDocument();
    });
  });
});
