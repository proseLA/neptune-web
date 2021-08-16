import { render, cleanup, screen } from '../test-utils';

import Loader from '.';

describe('Loader', () => {
  afterEach(cleanup);

  it('tests default state', () => {
    const { container } = render(<Loader />);
    expect(container.querySelectorAll('div.tw-loader--xl')).toHaveLength(1);
    expect(container.querySelector('div[data-testid]')).toBeNull();
  });

  it('has data-testid prop', () => {
    const dataTestId = 'test-loader';
    render(<Loader data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('shows a small loader if that property is set', () => {
    const { container } = render(<Loader {...{ small: true }} />);
    expect(container.querySelectorAll('div.tw-loader--xs')).toHaveLength(1);
  });
});
