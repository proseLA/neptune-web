import '@testing-library/jest-dom';
import { render, screen, userEvent } from '../test-utils';

import ActionButton from '.';

describe('ActionButton', () => {
  const props = {
    text: 'Personal profile',
    onClick: jest.fn(),
  };

  describe('by default', () => {
    beforeEach(() => {
      render(<ActionButton {...props} />);
    });

    it('renders the text', () => {
      expect(screen.getByText('Personal profile')).toBeInTheDocument();
    });

    it('is not disabled', () => {
      expect(screen.getByRole('button')).toBeEnabled();
    });

    it('renders the button', () => {
      expect(render(<ActionButton {...props} />).container).toMatchSnapshot();
    });
  });

  describe('button attributes', () => {
    it('disables the button if disabled', () => {
      render(<ActionButton {...props} disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('passes through custom classes if set', () => {
      render(<ActionButton {...props} className="catsarethebest" />);
      expect(screen.getByRole('button')).toHaveClass('catsarethebest');
    });
  });

  describe('onClick', () => {
    it('calls onClick when clicked', () => {
      const onClick = jest.fn();
      render(<ActionButton {...props} onClick={onClick} />);
      userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when clicked if disabled', () => {
      const onClick = jest.fn();
      render(<ActionButton {...props} disabled onClick={onClick} />);
      userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
