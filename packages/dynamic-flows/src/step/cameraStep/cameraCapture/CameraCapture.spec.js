import 'jest-canvas-mock';

import { mount, wait } from '../../../test-utils';

import CameraCapture from '.';

let mockDrawLayers;
jest.mock('./layerDrawer/layerDrawer', () => ({
  drawLayers: (...args) => mockDrawLayers(...args),
}));

const getUserMedia = jest.fn(() => Promise.resolve());
global.navigator.mediaDevices = {
  getUserMedia,
};

jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => {});
jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});

global.Image = class {
  cb = () => {};

  constructor() {
    setTimeout(() => {
      this.cb({ type: 'load' });
    }, 0);
  }

  addEventListener(event, callback) {
    this.cb = callback;
  }
};

const schemas = [
  {
    format: 'base64url',
    title: 'Front side of your driving license',
    cameraConfig: {
      assets: {
        overlay: 'https://wise.com/public-resources/assets/camera-guidelines/v2/overlay_id.png',
        outline: 'https://wise.com/public-resources/assets/camera-guidelines/v2/outline_id.png',
      },
      direction: 'back',
      instructions: 'step.idwl.front_side.instructions.driving_license',
    },
    image: {
      url: 'https://wise.com/public-resources/assets/camera-guidelines/id-icon.png',
    },
    source: 'camera',
    type: 'string',
  },
  {
    format: 'base64url',
    title: 'Front side of your driving license',
    cameraConfig: {
      assets: {
        overlay: 'https://wise.com/public-resources/assets/camera-guidelines/v2/overlay_id.png',
        mesh: '',
      },
      direction: 'front',
      instructions: 'step.idwl.front_side.instructions.driving_license',
    },
    image: {
      url: 'https://wise.com/public-resources/assets/camera-guidelines/id-icon.png',
    },
    source: 'camera',
    type: 'string',
  },
];

describe.each(schemas)('Given a component for rendering a camera capture experience', (schema) => {
  let component;
  let onError;
  let onCapture;

  beforeEach(async () => {
    onError = jest.fn();
    onCapture = jest.fn();
    mockDrawLayers = jest.fn();
    component = mount(
      <CameraCapture
        overlay={schema.cameraConfig.assets.overlay}
        outline={schema.cameraConfig.assets.outline}
        title={schema.title}
        imageUrl={schema.image.url}
        instructions={schema.cameraConfig.instructions}
        showPreview={false}
        direction={schema.cameraConfig.direction}
        onError={onError}
        onCapture={onCapture}
      />,
    );
    await wait(0);
    component.find('video').getDOMNode().dispatchEvent(new Event('loadeddata'));
  });

  it('should render correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should draw layers correctly', () => {
    expect(mockDrawLayers).toHaveBeenCalledWith(
      expect.any(Element),
      expect.any(Element),
      expect.any(Image),
      expect.any(Image),
    );
  });

  describe('when capture is clicked', () => {
    beforeEach(async () => {
      component.find('.camera-capture-btn-big').simulate('click');
      await wait(0);
    });
    it('should broadcast onCapture', () => {
      expect(onCapture).toHaveBeenCalledWith({ file: expect.any(Blob) });
    });
  });

  describe('when camera is not supported', () => {
    beforeEach(async () => {
      getUserMedia.mockRejectedValueOnce(new Error(''));
      component = mount(
        <CameraCapture
          overlay={schema.cameraConfig.assets.overlay}
          outline={schema.cameraConfig.assets.outline}
          title={schema.title}
          imageUrl={schema.image.url}
          instructions={schema.cameraConfig.instructions}
          showPreview={false}
          direction={schema.cameraConfig.direction}
          onError={onError}
          onCapture={onCapture}
        />,
      );
      await wait(0);
    });
    it('should broadcast onError', () => {
      expect(onError).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('when camera permission is declined', () => {
    beforeEach(async () => {
      getUserMedia.mockRejectedValueOnce(new DOMException('', 'NotAllowedError'));
      component = mount(
        <CameraCapture
          overlay={schema.cameraConfig.assets.overlay}
          outline={schema.cameraConfig.assets.outline}
          title={schema.title}
          imageUrl={schema.image.url}
          instructions={schema.cameraConfig.instructions}
          showPreview={false}
          direction={schema.cameraConfig.direction}
          onError={onError}
          onCapture={onCapture}
        />,
      );
      await wait(0);
    });
    it('should display permission error page', () => {
      expect(component.find('h2').text()).toBe('No access to camera');
      expect(component.find('p').text()).toBe(
        'We don’t have access to your camera. You can enable access in your browser’s settings',
      );
      expect(component.find('button').text()).toBe('Allow camera access');
    });
  });
});
