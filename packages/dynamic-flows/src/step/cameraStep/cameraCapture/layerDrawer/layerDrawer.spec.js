import { drawLayers } from './layerDrawer';

describe('Given outline and overlay exist and drawLayers is called (horizontally constrained overlay)', () => {
  let fillRect;
  let drawImage;
  let videoElement = {
    offsetWidth: 1000,
    offsetHeight: 1000,
    videoWidth: 1000,
    videoHeight: 500,
  };
  let canvas = {
    getContext: jest.fn(() => ({
      fillRect,
      drawImage,
    })),
  };
  let overlayImage = new Image(150, 100);
  let outlineImage = new Image(150, 100);

  beforeEach(() => {
    fillRect = jest.fn();
    drawImage = jest.fn();

    drawLayers(videoElement, canvas, overlayImage, outlineImage);
  });

  it('should draw black layer onto canvas', () => {
    expect(fillRect).toHaveBeenCalledWith(
      0,
      0,
      videoElement.offsetWidth,
      videoElement.offsetHeight,
    );
  });

  it('should draw overlay image onto canvas', () => {
    expect(drawImage).toHaveBeenNthCalledWith(1, overlayImage, 173, 282, 654, 436);
  });

  it('should draw outline image onto canvas', () => {
    expect(drawImage).toHaveBeenNthCalledWith(2, outlineImage, 173, 282, 654, 436);
  });
});

describe('Given outline and overlay exist and drawLayers is called (vertically constrained overlay)', () => {
  let fillRect;
  let drawImage;
  let videoElement = {
    offsetWidth: 1000,
    offsetHeight: 1000,
    videoWidth: 1000,
    videoHeight: 500,
  };
  let canvas = {
    getContext: jest.fn(() => ({
      fillRect,
      drawImage,
    })),
  };
  let overlayImage = new Image(75, 150);
  let outlineImage = new Image(75, 150);

  beforeEach(() => {
    fillRect = jest.fn();
    drawImage = jest.fn();

    drawLayers(videoElement, canvas, overlayImage, outlineImage);
  });

  it('should draw black layer onto canvas', () => {
    expect(fillRect).toHaveBeenCalledWith(
      0,
      0,
      videoElement.offsetWidth,
      videoElement.offsetHeight,
    );
  });

  it('should draw overlay image onto canvas', () => {
    expect(drawImage).toHaveBeenNthCalledWith(1, overlayImage, 391, 282, 218, 436);
  });

  it('should draw outline image onto canvas', () => {
    expect(drawImage).toHaveBeenNthCalledWith(2, outlineImage, 391, 282, 218, 436);
  });
});

describe('Given only overlay exist and drawLayers is called', () => {
  let fillRect;
  let drawImage;
  let videoElement = {
    offsetWidth: 1000,
    offsetHeight: 1000,
    videoWidth: 1000,
    videoHeight: 500,
  };
  let canvas = {
    getContext: jest.fn(() => ({
      fillRect,
      drawImage,
    })),
  };
  let overlayImage = new Image(150, 100);
  let outlineImage = null;

  beforeEach(() => {
    fillRect = jest.fn();
    drawImage = jest.fn();

    drawLayers(videoElement, canvas, overlayImage, outlineImage);
  });

  it('should draw black layer onto canvas', () => {
    expect(fillRect).toHaveBeenCalledWith(
      0,
      0,
      videoElement.offsetWidth,
      videoElement.offsetHeight,
    );
  });

  it('should draw overlay image onto canvas', () => {
    expect(drawImage).toHaveBeenNthCalledWith(1, overlayImage, 173, 282, 654, 436);
  });

  it('should not draw outline image onto canvas', () => {
    expect(drawImage).toHaveBeenCalledTimes(1);
    expect(drawImage).not.toHaveBeenNthCalledWith(2, outlineImage, 173, 282, 654, 436);
  });
});

describe('Given only outline exist and drawLayers is called', () => {
  let fillRect;
  let drawImage;
  let videoElement = {
    offsetWidth: 1000,
    offsetHeight: 1000,
    videoWidth: 1000,
    videoHeight: 500,
  };
  let canvas = {
    getContext: jest.fn(() => ({
      fillRect,
      drawImage,
    })),
  };
  let overlayImage = null;
  let outlineImage = new Image(150, 100);

  beforeEach(() => {
    fillRect = jest.fn();
    drawImage = jest.fn();

    drawLayers(videoElement, canvas, overlayImage, outlineImage);
  });

  it('should not draw black layer onto canvas', () => {
    expect(fillRect).not.toHaveBeenCalled();
  });

  it('should not draw overlay image onto canvas', () => {
    expect(drawImage).not.toHaveBeenCalled();
  });

  it('should not draw outline image onto canvas', () => {
    expect(drawImage).not.toHaveBeenCalled();
  });
});
