import { Pagination } from '..';
import { render, screen } from '../../test-utils';

describe('Pagination', () => {
  const props = {
    onClick: () => {},
  };

  describe('when there is one page', () => {
    beforeEach(() => {
      render(<Pagination {...props} numberOfPages={1} currentPageIndex={0} />);
    });

    it('should display three buttons', () => {
      expect(screen.queryAllByRole('link')).toHaveLength(3);
    });

    it('should disable the left arrow', () => {
      expect(screen.queryAllByRole('link')[0]).toHaveClass('disabled', { exact: true });
    });

    it('should activate the middle button', () => {
      expect(screen.queryAllByRole('link')[1]).toHaveClass('active', { exact: true });
    });

    it('should disable the right arrow', () => {
      expect(screen.queryAllByRole('link')[2]).toHaveClass('disabled', { exact: true });
    });
  });

  describe('when there are two pages', () => {
    describe('when the first page is selected', () => {
      beforeEach(() => {
        render(<Pagination {...props} numberOfPages={2} currentPageIndex={0} />);
      });

      it('should disable the left arrow', () => {
        expect(screen.queryAllByRole('link')[0]).toHaveClass('disabled', { exact: true });
      });

      it('should activate the first button', () => {
        expect(screen.queryAllByRole('link')[1]).toHaveClass('active', { exact: true });
      });

      it('should not activate the second button', () => {
        expect(screen.queryAllByRole('link')[2]).not.toHaveClass('active', { exact: true });
      });

      it('should not disable the right arrow', () => {
        expect(screen.queryAllByRole('link')[3]).not.toHaveClass('disabled', { exact: true });
      });
    });

    describe('when the second page is selected', () => {
      beforeEach(() => {
        render(<Pagination {...props} numberOfPages={2} currentPageIndex={1} />);
      });

      it('should not disable the left arrow', () => {
        expect(screen.queryAllByRole('link')[0]).not.toHaveClass('disabled', { exact: true });
      });

      it('should not activate the first button', () => {
        expect(screen.queryAllByRole('link')[1]).not.toHaveClass('active', { exact: true });
      });

      it('should activate the second button', () => {
        expect(screen.queryAllByRole('link')[2]).toHaveClass('active', { exact: true });
      });

      it('should disable the right arrow', () => {
        expect(screen.queryAllByRole('link')[3]).toHaveClass('disabled', { exact: true });
      });
    });
  });

  describe('when there are three pages and the second page is selected', () => {
    beforeEach(() => {
      render(<Pagination {...props} numberOfPages={3} currentPageIndex={1} />);
    });

    it('should display five buttons', () => {
      expect(screen.queryAllByRole('link')).toHaveLength(5);
    });

    it('should not disable the left arrow', () => {
      expect(screen.queryAllByRole('link')[0]).not.toHaveClass('disabled', { exact: true });
    });

    it('should not activate the first button', () => {
      expect(screen.queryAllByRole('link')[1]).not.toHaveClass('active', { exact: true });
    });

    it('should activate the second button', () => {
      expect(screen.queryAllByRole('link')[2]).toHaveClass('active', { exact: true });
    });

    it('should not activate the third button', () => {
      expect(screen.queryAllByRole('link')[3]).not.toHaveClass('active', { exact: true });
    });

    it('should not disable the right arrow', () => {
      expect(screen.queryAllByRole('link')[3]).not.toHaveClass('disabled', { exact: true });
    });
  });

  describe('when there are seven pages and the fourth is selected', () => {
    beforeEach(() => {
      render(<Pagination {...props} numberOfPages={9} currentPageIndex={4} />);
    });

    it('should display nine buttons', () => {
      expect(screen.queryAllByRole('link')).toHaveLength(9);
    });

    it('should disable ... in the second button', () => {
      expect(screen.queryAllByRole('link')[2]).toHaveTextContent('...');
    });

    it('should disable ... in the sixth button', () => {
      expect(screen.queryAllByRole('link')[6]).toHaveTextContent('...');
    });
  });
});
