/* eslint-disable no-console */
import '@testing-library/jest-dom';
import { Sentiment } from '../common';
import { render, screen } from '../test-utils';

import InlineAlert from './InlineAlert';

describe('InlineAlert', () => {
  const message = 'Your card is on its way.';

  describe('defaults', () => {
    it('the message is rendered', () => {
      render(<InlineAlert>{message}</InlineAlert>);

      expect(screen.getByText(message)).toBeInTheDocument();
    });

    it('will be of type info', () => {
      render(<InlineAlert>{message}</InlineAlert>);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('alert-info');
    });

    it('has a top left arrow', () => {
      render(<InlineAlert>{message}</InlineAlert>);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('arrow');
    });
  });

  describe('render with types', () => {
    it('renders info', () => {
      render(<InlineAlert type={Sentiment.INFO}>{message}</InlineAlert>);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('alert-info');
    });

    it('renders success', () => {
      render(<InlineAlert type={Sentiment.SUCCESS}>{message}</InlineAlert>);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('alert-success');
    });

    it('renders error', () => {
      render(<InlineAlert type={Sentiment.ERROR}>{message}</InlineAlert>);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('alert-danger');
    });

    it('renders warning', () => {
      render(<InlineAlert type={Sentiment.WARNING}>{message}</InlineAlert>);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('alert-warning');
    });
  });
});
