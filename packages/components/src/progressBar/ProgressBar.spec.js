import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  const props = {
    progress: '80%',
    description: 'description',
    title: 'title',
    value: 'value',
  };
  describe('by default', () => {
    beforeEach(() => {
      render(<ProgressBar {...props} />);
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
      const progress = document.querySelector('.np-progress-indicator__bar__content');
      expect(progress).toBeInTheDocument();
      expect(progress).toHaveStyle(`width: ${props.progress}`);
    });
  });
});
