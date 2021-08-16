import { Size } from '../common';
import { render, screen } from '../test-utils';

import Avatar, { AvatarType } from '.';

describe('Avatar', () => {
  it('renders a medium sized thumbnail Avatar with NO outline', () => {
    render(
      <Avatar size={Size.MEDIUM}>
        <span role="img" aria-label="Person with sunglasses emoji">
          😎
        </span>
      </Avatar>,
    );

    expect(screen.getByText('😎').parentElement.parentElement).toHaveClass(
      'tw-avatar tw-avatar--thumbnail tw-avatar--md',
    );
  });

  it('renders a small sized emoji Avatar with outline', () => {
    render(
      <Avatar type={AvatarType.EMOJI} size={Size.SMALL} outlined>
        <span role="img" aria-label="Money bag emoji">
          💰
        </span>
      </Avatar>,
    );

    expect(screen.getByText('💰').parentElement.parentElement).toHaveClass(
      'tw-avatar tw-avatar--emoji tw-avatar--sm tw-avatar--outlined',
    );
  });
});
