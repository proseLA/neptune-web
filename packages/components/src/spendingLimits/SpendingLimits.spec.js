import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';

import Progress from './SpendingLimits';

describe('Progress', () => {
  const props = {
    description: 'description',
    title: 'title',
    progress: 80,
    value: 'value',
    className: 'className',
    id: 'id',
  };
  describe('by default', () => {
    beforeEach(() => {
      render(<Progress {...props} />);
    });

    it('renders the title', () => {
      expect(screen.getByText('title')).toBeInTheDocument();
    });

    it('renders the description', () => {
      expect(screen.getByText('description')).toBeInTheDocument();
    });

    it('renders the value', () => {
      expect(screen.getByText('value')).toBeInTheDocument();
    });

    it('renders the progress', () => {
      const progress = document.querySelector('progress');
      expect(progress).toBeInTheDocument();
      expect(progress).toHaveValue(80);
    });
  });
});
