import Avatar, { AvatarType } from '../avatar';
import { render } from '../test-utils';

import Radio from '.';

jest.mock('../common/hooks');

describe('Radio', () => {
  const props = {
    label: 'This is a label',
    name: 'name',
    onChange: jest.fn(),
    checked: false,
    disabled: false,
    secondary: '',
  };

  it('shows the avatar when supplied', () => {
    expect(
      render(<Radio {...props} avatar={<Avatar type={AvatarType.INITIALS}>HD</Avatar>} />)
        .container,
    ).toMatchSnapshot();
  });
});
