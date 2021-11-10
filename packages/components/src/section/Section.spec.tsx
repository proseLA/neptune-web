import { render, screen } from '../test-utils';

import Section from '.';

describe('Section', () => {
  it('can render children', () => {
    render(<Section>Children here</Section>);

    expect(screen.getByText('Children here')).toBeInTheDocument();
  });
});
