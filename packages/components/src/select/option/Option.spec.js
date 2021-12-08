import { Profile as ProfileIcon } from '@transferwise/icons';
import { shallow } from 'enzyme';

import Option from './Option';

describe('option', () => {
  let component;
  let props;

  beforeEach(() => {
    props = { label: 'hello' };
    component = shallow(<Option {...props} />);
  });

  it('renders the given label', () => {
    expect(component.text()).toStrictEqual(props.label);
  });

  it('renders the given small note', () => {
    component.setProps({ note: 'whadup' });
    expect(component.find('span.body-2').text()).toStrictEqual('whadup');
  });

  it('renders the given secondary text in a separate line', () => {
    component.setProps({ secondary: 'secondary text' });
    expect(component.find('span.body-2.text-ellipsis').text()).toStrictEqual('secondary text');
  });

  it('renders a given icon', () => {
    component.setProps({ icon: <ProfileIcon /> });
    expect(component.find(ProfileIcon)).toHaveLength(1);
  });

  it('renders the given currency flag for a given currency', () => {
    component.setProps({ currency: 'hustle' });
    expect(component.find('i.currency-flag.currency-flag-hustle')).toHaveLength(1);
  });

  it('overrides currency flag with icon', () => {
    component.setProps({ currency: 'hustle', icon: <ProfileIcon /> });
    expect(component.find(ProfileIcon)).toHaveLength(1);
    expect(component.find('i.currency-flag.currency-flag-hustle')).toHaveLength(0);
  });

  it('does not show currency flags on mobile if it is selected', () => {
    const flagHiddenOnMobile = () => component.find('i.currency-flag').hasClass('hidden-xs');
    component.setProps({ currency: 'hustle' });
    expect(flagHiddenOnMobile()).toBe(false);
    component.setProps({ selected: true });
    expect(flagHiddenOnMobile()).toBe(true);
  });

  it('does not show currency icons on mobile if it is selected', () => {
    const flagHiddenOnMobile = () => component.find(ProfileIcon).hasClass('hidden-xs');
    component.setProps({ currency: 'hustle', icon: <ProfileIcon /> });
    expect(flagHiddenOnMobile()).toBe(false);
    component.setProps({ selected: true });
    expect(flagHiddenOnMobile()).toBe(true);
  });

  it('can override class names', () => {
    component.setProps({
      currency: 'hustle',
      classNames: {
        'currency-flag-hustle': 'currency-flag-hustle-xyz',
        'currency-flag': 'currency-flag-xyz',
      },
    });
    expect(component.find('i.currency-flag-xyz.currency-flag-hustle-xyz')).toHaveLength(1);
  });
});
