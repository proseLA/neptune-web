import { Bank as BankIcon, Email as EmailIcon, Profile as ProfileIcon } from '@transferwise/icons';
import { shallow } from 'enzyme';

import DynamicIcon from '.';

describe('Given a component for dynamically rendering icons', () => {
  let component;

  it('should render the appropriate icon', () => {
    component = shallow(<DynamicIcon type="bank" />);
    expect(component.find(BankIcon)).toHaveLength(1);

    component = shallow(<DynamicIcon type="profile" />);
    expect(component.find(ProfileIcon)).toHaveLength(1);

    component = shallow(<DynamicIcon type="email" />);
    expect(component.find(EmailIcon)).toHaveLength(1);

    component = shallow(<DynamicIcon type="Email" />);
    expect(component.find(EmailIcon)).toHaveLength(1);
  });
});
