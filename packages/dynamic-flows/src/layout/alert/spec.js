import { render, screen } from '@testing-library/react';

import DynamicAlert from '.';

const specs = [
  {
    component: 'alert',
    markdown: '**This is a bold title** and some normal text',
    context: 'neutral',
  },
  {
    component: 'alert',
    markdown: '**This is a bold title** and some normal text',
    context: 'warning',
  },
  {
    component: 'alert',
    markdown: '**This is a bold title** and some normal text',
    context: 'negative',
  },
  {
    component: 'alert',
    markdown: '**This is a bold title** and some normal text',
    context: 'positive',
  },
  {
    component: 'alert',
    markdown: '**This is a bold title** and some normal text',
    context: '',
  },
  {
    component: 'alert',
    markdown: '**This is a bold title** and some normal text',
    context: 'failure',
  },
];

describe.each(specs)('Given a component for dynamically rendering alert', (spec) => {
  it('should render the markdown in an alert component', () => {
    const { container } = render(<DynamicAlert component={spec} />);

    const bolded = container.querySelector('strong');
    expect(bolded).toBeInTheDocument();
    expect(bolded.innerHTML).toBe('This is a bold title');

    expect(screen.getByText('and some normal text')).toBeInTheDocument();
  });
});
