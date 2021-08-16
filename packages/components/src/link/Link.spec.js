import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';

import Link from '.';

describe('Link', () => {
  const props = {
    className: 'a-class',
    href: '/test',
  };

  it('renders Link component', () => {
    render(<Link {...props}>link text</Link>);

    const link = screen.getByText('link text');

    expect(link).toHaveAttribute('href', props.href);
    expect(link).toHaveClass(props.className);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders target and rel attributes when target is _blank', () => {
    render(
      <Link {...props} target="_blank">
        link text
      </Link>,
    );

    const link = screen.getByText('link text');

    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders with the provided aria-label', () => {
    render(
      <Link {...props} aria-label="make me accessible">
        link text
      </Link>,
    );

    const link = screen.getByText('link text');

    expect(link).toHaveAttribute('aria-label', 'make me accessible');
  });

  it.each([null, false, '', NaN, undefined])(
    'it renders the default aria label for invalid value "%s"',
    (value) => {
      render(
        <Link {...props} aria-label={value}>
          link text
        </Link>,
      );

      const link = screen.getByText('link text');

      expect(link).toHaveAttribute('aria-label', 'Open link');
    },
  );
});
