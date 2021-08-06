import { render } from '../../test-utils';

import BottomSheet from './BottomSheet';

describe('BottomSheet', () => {
  it('renders content when open', () => {
    const { baseElement } = render(
      <BottomSheet open onClose={jest.fn()}>
        <b>Test Content</b>
      </BottomSheet>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('does not renders when closed', () => {
    const { container } = render(
      <BottomSheet open={false} onClose={jest.fn()}>
        content
      </BottomSheet>,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
