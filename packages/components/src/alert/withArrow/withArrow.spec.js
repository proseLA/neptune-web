import { render, screen } from '../../test-utils';
import Alert from '../Alert';

import { ArrowPosition } from './alertArrowPositions';
import withArrow from './withArrow';

describe('withArrow', () => {
  const message = 'I hope you have a nice day today';

  describe('default props', () => {
    it(`returns an arrowless alert if you don't pass an arrow`, () => {
      const ArrowLessAlert = withArrow(Alert);

      render(<ArrowLessAlert message={message} />);
      const component = screen.getByRole('alert');

      expect(component).not.toHaveClass('arrow');
    });

    it(`ignores the arrow prop passed to the new alert`, () => {
      const AlertTopArrow = withArrow(Alert, ArrowPosition.TOP_LEFT);

      render(<AlertTopArrow message={message} arrow={ArrowPosition.BOTTOM_LEFT} />);
      const component = screen.getByRole('alert');
      expect(component).toHaveClass('arrow');
      expect(component).not.toHaveClass('arrow-bottom');
    });
  });

  describe('renders arrows', () => {
    const getPointyAlert = (arrow) => withArrow(Alert, arrow);

    it(`returns an bottom arrowed alert if you pass a bottom arrow`, () => {
      const BottomArrowAlert = getPointyAlert(ArrowPosition.BOTTOM);
      render(<BottomArrowAlert message={message} />);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('arrow');
      expect(component).toHaveClass('arrow-bottom');
    });

    it(`returns an top-right arrowed alert if you pass a top right arrow`, () => {
      const BottomArrowAlert = getPointyAlert(ArrowPosition.TOP_RIGHT);
      render(<BottomArrowAlert message={message} />);
      const component = screen.getByRole('alert');

      expect(component).toHaveClass('arrow');
      expect(component).toHaveClass('arrow-right');
    });
  });
});
