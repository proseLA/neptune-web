import { render, screen } from '../test-utils';

import Avatar from '.';
import { Size } from '../common';

const name = 'Elizabeth Alexandra Mary Windsor';

describe('FlowNavigationAvatar', () => {
  describe('with a name', () => {
    it('shows the initials for a long name', () => {
      render(<Avatar name={name} />);

      expect(screen.getByText('EW')).toBeInTheDocument();
    });

    it('shows the first letter for a mononym', () => {
      render(<Avatar name="Michelangelo" />);

      expect(screen.getByText('M')).toBeInTheDocument();
    });

    describe('AND profileType', () => {
      it('renders as BUSINESS profile type with an icon', async () => {
        const { container } = render(<Avatar name={name} profileType="BUSINESS" />);

        expect(container.firstChild).toMatchSnapshot();
      });

      it('renders as PERSONAL profile type with an icon', async () => {
        const { container } = render(<Avatar name={name} profileType="PERSONAL" />);

        expect(container.firstChild).toMatchSnapshot();
      });

      describe('AND avatar url', () => {
        it('renders the image', async () => {
          const { container } = render(
            <Avatar
              url="https://wise.com"
              name={name}
              profileType="BUSINESS"
              avatarProps={{ theme: 'dark' }}
            />,
          );

          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });

  describe('with nothing passed', () => {
    it('renders a personal icon', () => {
      const { container } = render(<Avatar />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with a badge url passed', () => {
    it('renders the badge', () => {
      const { container } = render(
        <Avatar badgeUrl="https://badge.com" badgeProps={{ size: Size.LARGE }} />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
