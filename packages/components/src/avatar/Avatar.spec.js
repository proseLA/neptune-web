import { render } from '../test-utils';

import Avatar, { AvatarType } from '.';
import { Size } from '../common';

describe('Avatar', () => {
  it('renders a medium sized thumbnail Avatar with NO outline', () => {
    const { getByText } = render(
      <Avatar size={Size.MEDIUM}>
        <span role="img" aria-label="Person with sunglasses emoji">
          😎
        </span>
      </Avatar>,
    );

    expect(getByText('😎').parentElement.parentElement).toHaveClass(
      'tw-avatar tw-avatar--thumbnail tw-avatar--md',
    );
  });

  it('renders a small sized emoji Avatar with outline', () => {
    const { getByText } = render(
      <Avatar type={AvatarType.EMOJI} size={Size.SMALL} outlined>
        <span role="img" aria-label="Money bag emoji">
          💰
        </span>
      </Avatar>,
    );

    expect(getByText('💰').parentElement.parentElement).toHaveClass(
      'tw-avatar tw-avatar--emoji tw-avatar--sm tw-avatar--outlined',
    );
  });
});
