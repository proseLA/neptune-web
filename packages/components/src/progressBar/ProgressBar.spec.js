import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  const props = {
    description: 'description',
    label: 'label',
    progress: 80,
    value: 'value',
    className: 'className',
    id: 'id',
  };
  describe('by default', () => {
    beforeEach(() => {
      render(<ProgressBar {...props} />);
    });

    it('renders the label', () => {
      expect(screen.getByText('label')).toBeInTheDocument();
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
      expect(progress).toHaveValue('80');
    });
  });
});
