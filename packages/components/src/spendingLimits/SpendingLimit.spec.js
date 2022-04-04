import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';

import SpendingLimit from './SpendingLimit';

describe('SpendingLimit', () => {
  const props = {
    description: 'description',
    title: 'title',
    progress: { value: 50, max: 100 },
    textEnd: 'textEnd',
    className: 'className',
    id: 'id',
  };
  describe('by default', () => {
    beforeEach(() => {
      render(<SpendingLimit {...props} />);
    });

    it('renders the title', () => {
      expect(screen.getByText('title')).toBeInTheDocument();
    });

    it('renders the description', () => {
      expect(screen.getByText('description')).toBeInTheDocument();
    });

    it('renders the textEnd', () => {
      expect(screen.getByText('textEnd')).toBeInTheDocument();
    });
  });
});
