import { render } from '../../test-utils';

import BottomSheet from './BottomSheet';

// eslint-disable-next-line react/prop-types
jest.mock('../../dimmer', () => ({ open, children }) =>
  open ? <div className="dimmer">{children}</div> : null,
);
// eslint-disable-next-line react/prop-types
jest.mock('../../slidingPanel', () => ({ open, children }) =>
  open ? <div className="sliding-panel">{children}</div> : null,
);

describe('BottomSheet', () => {
  it('renders content when open', async () => {
    const { container } = render(
      <BottomSheet open onClose={jest.fn()}>
        content
      </BottomSheet>,
    );

    expect(container).toMatchSnapshot();
  });

  it("doesn't renders content when closed", async () => {
    const { container } = render(<BottomSheet onClose={jest.fn()}>content</BottomSheet>);

    expect(container).toMatchSnapshot();
  });
});
