import { Image } from '@transferwise/components';

import { mount } from '../../test-utils';

import DynamicImage from '.';

const IMAGE_BLOB_URL = 'data:image/jpeg;base64,/9j';
const FAILURE_FETCH_URL = 'http://localhost/FAILURE.png';

const fetch = jest.spyOn(global, 'fetch').mockImplementation((url) => {
  if (url.toString().includes(FAILURE_FETCH_URL)) {
    throw new Error('error');
  }
  return Promise.resolve({ blob: () => new Blob() });
});

jest.spyOn(global, 'FileReader').mockImplementation(() => {
  const Reader = {
    addEventListener: (event, callback) => (Reader[event] = callback),
    result: IMAGE_BLOB_URL,
    readAsDataURL: () => Reader.loadend(),
  };
  return Reader;
});

describe('Given a component for dynamically rendering image', () => {
  let component;
  let spec;

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('when the image is a plain image', () => {
    beforeEach(() => {
      spec = {
        component: 'image',
        url: IMAGE_BLOB_URL,
        text: 'an image',
      };
      component = mount(<DynamicImage component={spec} />);
    });

    it('should render an image component using the url', () => {
      component.update();
      expect(fetch).not.toHaveBeenCalled();
      expect(component.find(Image).prop('src')).toBe(spec.url);
    });
    it('should use the text text for alt text', () => {
      component.update();
      expect(component.find(Image).prop('alt')).toBe(spec.text);
    });
  });

  describe('when the image contains a size property', () => {
    beforeEach(() => {
      spec = {
        component: 'image',
        url: IMAGE_BLOB_URL,
        text: 'an image',
        size: 'md',
      };
      component = mount(<DynamicImage component={spec} />);
    });

    it('is rendered in a wrapper with two divs with the expected classNames', () => {
      const divClasses = component.find('div').map((c) => c.prop('className'));

      expect(divClasses[0].match('row')).not.toBeNull();
      expect(
        divClasses[1].match(/col-(xs|sm|md|lg)-\d col-(xs|sm|md|lg)-offset-\d/),
      ).not.toBeNull();
    });
  });

  describe('when the image is on same path as window.origin', () => {
    beforeEach(() => {
      spec = {
        component: 'image',
        url: '/path-to-image/image.png',
        text: 'an image',
        size: 'md',
      };
      component = mount(<DynamicImage component={spec} />);
    });

    it('should render an image component using by fetching its content manually', async () => {
      component.update();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(component.find(Image).prop('src')).toBe(IMAGE_BLOB_URL);
    });
  });

  describe('when the image is on a different path as window.origin', () => {
    beforeEach(() => {
      spec = {
        component: 'image',
        url: 'http://test.com/path-to-image/image.png',
        text: 'an image',
        size: 'md',
      };
      component = mount(<DynamicImage component={spec} />);
    });

    it('should render an image component using by fetching its content manually', async () => {
      component.update();
      expect(fetch).not.toHaveBeenCalled();
      expect(component.find(Image).prop('src')).toBe(spec.url);
    });
  });

  describe('when the image is on a same path as window.origin and call fails', () => {
    beforeEach(() => {
      spec = {
        component: 'image',
        url: FAILURE_FETCH_URL,
        text: 'an image',
        size: 'md',
      };
      component = mount(<DynamicImage component={spec} />);
    });

    it('should render an image component using by fetching its content manually', async () => {
      component.update();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(component.find(Image).prop('src')).toBe(spec.url);
    });
  });
});
