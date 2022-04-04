import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';

import Progress from './Progress';

describe('Progress', () => {
  const props = {
    progress: { value: 50, max: 100 },
  };
  describe('by default', () => {
    beforeEach(() => {
      render(<Progress {...props} />);
    });

    it('renders the progress', () => {
      const progress = document.querySelector('progress');
      expect(progress).toBeInTheDocument();
      expect(progress).toHaveValue(progress.value);
    });
  });
});
