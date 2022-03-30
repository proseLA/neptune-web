import { Bank, Email, Profile, ArrowLeft } from '@transferwise/icons';
import { shallow } from 'enzyme';

import DynamicIcon from '.';

describe('Given a component for dynamically rendering icons', () => {
  const cases = [
    ['bank', Bank],
    ['profile', Profile],
    ['email', Email],
    ['Email', Email],
    ['ArrowLeft', ArrowLeft],
    ['arrowLeft', ArrowLeft],
    ['arrow-left', ArrowLeft],
  ];

  cases.forEach(([type, ExpectedIcon]) => {
    it(`renders the correct icon for ${type}`, () => {
      const component = shallow(<DynamicIcon type={type} />);
      expect(component.find(ExpectedIcon)).toHaveLength(1);
    });
  });
});
