import { Image } from '@transferwise/components';
import { shallow } from 'enzyme';

import DynamicImage from '.';

describe('Given a component for dynamically rendering image', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'image',
      url: 'image.png',
      text: 'an image',
    };
    component = shallow(<DynamicImage component={spec} />);
  });

  it('should render an image component using the url', () => {
    expect(component.find(Image).prop('src')).toBe(spec.url);
  });
  it('should use the text text for alt text', () => {
    expect(component.find(Image).prop('alt')).toBe(spec.text);
  });

  describe('when the image contains a size property', () => {
    beforeEach(() => {
      spec = {
        component: 'image',
        url: 'image.png',
        text: 'an image',
        size: 'md',
      };
      component = shallow(<DynamicImage component={spec} />);
    });

    it('is rendered in a wrapper with two divs with the expected classNames', () => {
      const divClasses = component.find('div').map((c) => c.prop('className'));

      expect(divClasses[0].match('row')).not.toBeNull();
      expect(
        divClasses[1].match(/col-(xs|sm|md|lg)-\d col-(xs|sm|md|lg)-offset-\d/),
      ).not.toBeNull();
    });
  });
});
