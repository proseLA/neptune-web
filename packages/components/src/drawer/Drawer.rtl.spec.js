import { render, screen, userEvent } from '../test-utils';

import Drawer from './Drawer';

jest.mock(
  '../dimmer',
  () =>
    function ({ open, children }) {
      return open ? <div className="dimmer">{children}</div> : null;
    },
);

jest.mock(
  '../slidingPanel',
  () =>
    function ({ open, children }) {
      return open ? <div className="sliding-panel">{children}</div> : null;
    },
);

describe('Drawer', () => {
  const props = {
    onClose: jest.fn(),
    open: true,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders content when open', () => {
    const { container } = render(<Drawer {...props}>content</Drawer>);

    expect(container).toMatchSnapshot();
  });

  it("doesn't render content when closed", () => {
    const { container } = render(
      <Drawer {...props} open={false}>
        content
      </Drawer>,
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onClose when user clicks close button', () => {
    render(<Drawer {...props}>content</Drawer>);
    expect(props.onClose).not.toHaveBeenCalled();
    userEvent.click(getCloseButton());
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  const getCloseButton = () => screen.getByLabelText('Close');
});
