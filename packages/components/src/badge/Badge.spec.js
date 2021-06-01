import React from 'react';
import { render, cleanup } from '../test-utils';

import Badge from '.';

import { useDirection } from '../common/hooks';

jest.mock('../common/hooks/useDirection');

describe('Badge', () => {
  beforeEach(() => {
    useDirection.mockImplementation(() => ({ direction: 'ltr', isRTL: false }));
  });
  const defaultProps = {
    badge: <div />,
  };
  const childText = 'badge-child';
  const child = <div>{childText}</div>;

  const renderBadge = (props = {}, children = child) => {
    return render(
      <Badge {...defaultProps} {...props}>
        {children}
      </Badge>,
    );
  };

  afterEach(cleanup);

  it('renders the badge content', () => {
    const badgeText = 'badge-text';
    const badge = <div>{badgeText}</div>;

    const { getByText } = renderBadge({ badge });

    expect(getByText(badgeText).parentElement).toHaveClass('tw-badge__content');
  });

  it('renders badge children', () => {
    const { getByText } = renderBadge();

    expect(getByText(childText).parentElement).toHaveClass('tw-badge__children');
  });

  it('applies correct css class when isRTL is true', () => {
    useDirection.mockImplementation(() => ({ direction: 'rtl', isRTL: true }));
    const { container } = render(<Badge />);
    expect(container.querySelector('.tw-badge')).toHaveClass('tw-badge--rtl');
  });
});
