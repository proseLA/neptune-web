import React from 'react';
import { render, screen, userEvent } from '../test-utils';

import Drawer from './Drawer';

// eslint-disable-next-line react/prop-types
jest.mock('../dimmer', () => ({ open, children }) =>
  open ? <div className="dimmer">{children}</div> : null,
);
// eslint-disable-next-line react/prop-types
jest.mock('../slidingPanel', () => ({ open, children }) =>
  open ? <div className="sliding-panel">{children}</div> : null,
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
    expect(props.onClose).toHaveBeenCalled();
  });

  const getCloseButton = () => screen.getByLabelText('Close');
});
