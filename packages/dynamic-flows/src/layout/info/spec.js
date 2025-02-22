import { Markdown } from '@transferwise/components';
import { shallow } from 'enzyme';

import DynamicInfo from '.';

describe('Given a component for dynamically rendering information with markdown', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'info',
      markdown: '### Title ###\n[first link](./first-link)',
    };
    component = shallow(<DynamicInfo component={spec} />);
  });

  it('should render the markdown in a markdown component', () => {
    expect(component.find(Markdown).contains(spec.markdown)).toBe(true);
  });

  it('should render links with target=_blank', () => {
    expect(component.find(Markdown).html()).toMatch(/target="_blank"/);
  });
});
