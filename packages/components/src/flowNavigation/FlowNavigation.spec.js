import '@testing-library/jest-dom';

import Avatar, { AvatarType } from '../avatar';
import { Breakpoint, Size } from '../common';
import { render, screen } from '../test-utils';

import FlowNavigation from '.';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

jest.mock('./animatedLabel', () => {
  return function ({ className, activeLabel }) {
    return (
      <div className={className} data-testid={`activeLabel-${activeLabel}`}>
        AnimatedLabel
      </div>
    );
  };
});
jest.mock('./backButton', () => {
  return function ({ className, label }) {
    return <div className={className}>BackButton{label}</div>;
  };
});

describe('FlowNavigation', () => {
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };
  beforeEach(() => {
    resetClientWidth(Breakpoint.LARGE + 1);
  });

  afterAll(() => {
    const originalClientWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'clientWidth',
    );

    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  const props = {
    avatar: (
      <Avatar type={AvatarType.INITIALS} size={Size.MEDIUM}>
        TM
      </Avatar>
    ),
    logo: <img alt="logo" src="logo.svg" width="138" height="24" />,
    onClose: jest.fn(),
    steps: [
      {
        label: 'label-0',
      },
      { label: 'label-1' },
      { label: 'label-2' },
    ],
    activeStep: 0,
  };

  it(`renders as expected`, () => {
    expect(render(<FlowNavigation {...props} />).container).toMatchSnapshot();
  });

  it(`renders full Logo`, () => {
    render(<FlowNavigation {...props} />);
    expect(logoFull()).toBeInTheDocument();
  });

  it(`renders separator if avatar and onClose are provided`, () => {
    const { container } = render(<FlowNavigation {...props} />);

    expect(container.querySelector('.separator')).toBeInTheDocument();
  });

  it(`doesn't render separator if avatar or onClose are not provided`, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });

  it(`doesn't render separator if done is true`, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} done />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });

  it(`renders border based on done`, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--border-bottom')).toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} done />);

    expect(container.querySelector('.np-flow-navigation--border-bottom')).not.toBeInTheDocument();
  });

  it(`hides stepper when done is true`, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation__stepper')).toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} done />);

    expect(container.querySelector('.np-flow-navigation__stepper')).not.toBeInTheDocument();
  });

  it(`renders xs-max class`, () => {
    resetClientWidth(Breakpoint.SMALL - 1);
    const { container } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--xs-max')).toBeInTheDocument();
  });

  it(`renders sm class`, () => {
    resetClientWidth(Breakpoint.SMALL);
    const { container } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--sm')).toBeInTheDocument();
  });

  it(`renders lg class`, () => {
    resetClientWidth(Breakpoint.LARGE);
    const { container } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--lg')).toBeInTheDocument();
  });

  describe('on mobile', () => {
    beforeEach(() => {
      resetClientWidth(Breakpoint.SMALL - 1);
    });

    it('renders as expected', () => {
      expect(
        render(<FlowNavigation {...props} activeStep={1} onGoBack={jest.fn()} />).container,
      ).toMatchSnapshot();
    });

    it('renders Logo', () => {
      render(<FlowNavigation {...props} />);
      expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('renders flag if activeStep <= 0 onGoBack or is not provided', () => {
      const { rerender } = render(
        <FlowNavigation {...props} activeStep={0} onGoBack={undefined} />,
      );

      const flag = screen.queryByAltText('logo');

      expect(flag).toBeInTheDocument();

      rerender(<FlowNavigation {...props} activeStep={1} onGoBack={undefined} />);

      expect(flag).toBeInTheDocument();

      rerender(<FlowNavigation {...props} activeStep={0} onGoBack={jest.fn()} />);

      expect(flag).toBeInTheDocument();

      rerender(<FlowNavigation {...props} activeStep={1} onGoBack={jest.fn()} />);

      expect(flag).not.toBeInTheDocument();
    });

    it('renders BackButton with AnimatedLabel if onGoBack is provided and activeStep > 0', () => {
      const { rerender } = render(<FlowNavigation {...props} onGoBack={jest.fn()} />);

      expect(screen.queryByText('BackButton')).not.toBeInTheDocument();

      rerender(<FlowNavigation {...props} activeStep={1} />);
      expect(screen.queryByText('BackButton')).not.toBeInTheDocument();

      rerender(<FlowNavigation {...props} activeStep={1} onGoBack={jest.fn()} />);

      expect(screen.getByText('BackButton')).toBeInTheDocument();
      expect(screen.getByText('AnimatedLabel')).toBeInTheDocument();
    });

    it('renders correct AnimatedLabel', () => {
      const { rerender } = render(
        <FlowNavigation {...props} activeStep={1} onGoBack={jest.fn()} />,
      );

      expect(screen.getByTestId('activeLabel-0')).toBeInTheDocument();

      rerender(<FlowNavigation {...props} activeStep={2} onGoBack={jest.fn()} />);

      expect(screen.getByTestId('activeLabel-1')).toBeInTheDocument();
    });
  });
  const logoFull = () => screen.getByAltText(`logo`);
});
