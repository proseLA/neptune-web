import '@testing-library/jest-dom';
import * as useHasIntersectedUtils from '../common/hooks/useHasIntersected/useHasIntersected';
import { render, fireEvent, screen } from '../test-utils';

import { EmptyTransparentImage } from './Image';

import Image from '.';

const props = {
  id: 'id',
  src: 'https://www.a-valid-src.png/',
  alt: 'test',
  className: 'className',
  loading: 'lazy',
  onLoad: jest.fn(),
  onError: jest.fn(),
  shrink: false,
  stretch: false,
};

describe('Image', () => {
  describe('when lazy loading is not enabled', () => {
    it(`renders image`, () => {
      render(<Image {...props} loading="eager" />);

      const image = screen.getByRole('img');

      expect(image).toBeInTheDocument();
      expect(image.src).toStrictEqual(props.src);
      expect(image.id).toStrictEqual(props.id);
      expect(image.alt).toStrictEqual(props.alt);
    });
  });

  describe('when lazy loading is enabled', () => {
    it('renders the image with EmptyTransparentImage if element is not visible', () => {
      jest.spyOn(useHasIntersectedUtils, 'useHasIntersected').mockReturnValue([false]);
      render(<Image {...props} />);

      const image = screen.getByRole('img');

      expect(image).toBeInTheDocument();
      expect(image.src).toStrictEqual(EmptyTransparentImage);
    });

    it('renders the image with src if element is visible', () => {
      jest.spyOn(useHasIntersectedUtils, 'useHasIntersected').mockReturnValue([true]);

      render(<Image {...props} />);

      const image = screen.getByRole('img');

      expect(image).toBeInTheDocument();
      expect(image.src).toStrictEqual(props.src);
    });

    it(`calls onload only if image has intersected`, () => {
      jest.spyOn(useHasIntersectedUtils, 'useHasIntersected').mockReturnValue([false]);
      const { rerender } = render(<Image {...props} />);
      const image = screen.getByRole('img');

      fireEvent.load(image);
      expect(props.onLoad).not.toHaveBeenCalled();

      jest.spyOn(useHasIntersectedUtils, 'useHasIntersected').mockReturnValue([true]);
      rerender(<Image {...props} />);

      fireEvent.load(image);
      expect(props.onLoad).toHaveBeenCalledTimes(1);
    });
  });

  it(`when shrink is true it has shrink class`, () => {
    const { rerender } = render(<Image {...props} />);
    const image = screen.getByRole('img');

    expect(image).not.toHaveClass('tw-image__shrink');

    rerender(<Image {...props} shrink />);

    expect(image).toHaveClass('tw-image__shrink');
  });

  it(`when stretch is true it has stretch class`, () => {
    const { rerender } = render(<Image {...props} />);
    const image = screen.getByRole('img');

    expect(image).not.toHaveClass('tw-image__stretch');

    rerender(<Image {...props} stretch />);

    expect(image).toHaveClass('tw-image__stretch');
  });
});
