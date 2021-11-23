const DEBUG_MODE = false;

// GLOBALS
const PADDING_TOP = 32;
const PADDING_RIGHT = 32;
const PADDING_BOTTOM = 32;
const PADDING_LEFT = 32;
const MARGIN_BOTTOM = 196;

const OUTLINE_PADDING = 0;

const getVideoStreamSize = (videoElement) => {
  const { offsetWidth: elementWidth, offsetHeight: elementHeight } = videoElement;
  const { videoWidth: streamOriginalWidth, videoHeight: streamOriginalHeight } = videoElement;

  const elementAspectRatio = elementWidth / elementHeight;
  const streamAspectRatio = streamOriginalWidth / streamOriginalHeight;

  let streamWidth, streamHeight;
  if (streamAspectRatio > elementAspectRatio) {
    streamWidth = elementWidth;
    streamHeight = (elementWidth / streamOriginalWidth) * streamOriginalHeight;
  } else {
    streamWidth = (elementHeight / streamOriginalHeight) * streamOriginalWidth;
    streamHeight = elementHeight;
  }

  return { width: streamWidth, height: streamHeight };
};

const getOverlayPositions = (videoElement, context, overlayImage) => {
  const { offsetWidth: elementWidth, offsetHeight: elementHeight } = videoElement;

  // VIDEO STREAM
  const { width: streamWidth, height: streamHeight } = getVideoStreamSize(videoElement);
  const streamLeft = (elementWidth - streamWidth) / 2;
  const streamTop = (elementHeight - streamHeight) / 2;

  if (DEBUG_MODE) {
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.fillRect(streamLeft, streamTop, streamWidth, streamHeight);
  }

  // USABLE SCREEN AREA
  // prettier-ignore
  const usableScreenAreaWidth = Math.min(elementWidth, streamWidth) - (PADDING_LEFT + PADDING_RIGHT);
  // prettier-ignore
  const usableScreenAreaHeight = Math.min(elementHeight - MARGIN_BOTTOM, streamHeight - (Math.max(0, MARGIN_BOTTOM - (elementHeight - streamHeight) / 2))) - (PADDING_TOP + PADDING_BOTTOM);
  const usableScreenAreaLeft = streamLeft + PADDING_LEFT;
  const usableScreenAreaTop = streamTop + PADDING_TOP;
  const usableScreenAreaAspectRatio = usableScreenAreaWidth / usableScreenAreaHeight;

  if (DEBUG_MODE) {
    context.fillStyle = 'rgba(0, 0, 255, 0.5)';
    // prettier-ignore
    context.fillRect(usableScreenAreaLeft, usableScreenAreaTop, usableScreenAreaWidth, usableScreenAreaHeight);
  }

  // OVERLAY
  const { width: overlayOriginalWidth, height: overlayOriginalHeight } = overlayImage;
  const overlayAspectRatio = overlayOriginalWidth / overlayOriginalHeight;

  let overlayLeft, overlayTop, overlayWidth, overlayHeight;
  if (overlayAspectRatio > usableScreenAreaAspectRatio) {
    overlayWidth = usableScreenAreaWidth;
    overlayHeight = (overlayWidth / overlayOriginalWidth) * overlayOriginalHeight;
    overlayLeft = usableScreenAreaLeft;
    overlayTop = usableScreenAreaTop + (usableScreenAreaHeight - overlayHeight) / 2;
  } else {
    overlayHeight = usableScreenAreaHeight;
    overlayWidth = (overlayHeight / overlayOriginalHeight) * overlayOriginalWidth;
    overlayLeft = usableScreenAreaLeft + (usableScreenAreaWidth - overlayWidth) / 2;
    overlayTop = usableScreenAreaTop;
  }

  return { overlayLeft, overlayTop, overlayWidth, overlayHeight };
};

const getOutlinePositions = (overlayPositions) => {
  const { overlayLeft, overlayTop, overlayWidth, overlayHeight } = overlayPositions;

  const outlineWidth = overlayWidth - OUTLINE_PADDING * 2;
  const outlineHeight = overlayHeight - OUTLINE_PADDING * 2;
  const outlineLeft = overlayLeft + OUTLINE_PADDING;
  const outlineTop = overlayTop + OUTLINE_PADDING;

  return { outlineWidth, outlineHeight, outlineLeft, outlineTop };
};

const drawOverlay = (videoElement, context, overlayImage, overlayPositions) => {
  const { offsetWidth: elementWidth, offsetHeight: elementHeight } = videoElement;
  const { overlayLeft, overlayTop, overlayWidth, overlayHeight } = overlayPositions;

  context.fillStyle = 'rgba(0, 0, 0, 0.7)';
  context.fillRect(0, 0, elementWidth, elementHeight);

  context.globalCompositeOperation = 'destination-out';
  context.drawImage(overlayImage, overlayLeft, overlayTop, overlayWidth, overlayHeight);
};

const drawOutline = (videoElement, context, outlineImage, overlayPositions) => {
  const { outlineWidth, outlineHeight, outlineLeft, outlineTop } =
    getOutlinePositions(overlayPositions);

  context.globalCompositeOperation = 'source-over';
  context.drawImage(outlineImage, outlineLeft, outlineTop, outlineWidth, outlineHeight);
};

const drawLayers = (videoElement, canvas, overlayImage, outlineImage) => {
  const { offsetWidth: elementWidth, offsetHeight: elementHeight } = videoElement;
  const context = canvas.getContext('2d');

  canvas.width = elementWidth;
  canvas.height = elementHeight;

  if (overlayImage) {
    const overlayPositions = getOverlayPositions(videoElement, context, overlayImage);

    drawOverlay(videoElement, context, overlayImage, overlayPositions);

    if (outlineImage) {
      drawOutline(videoElement, context, outlineImage, overlayPositions);
    }
  }
};

export { drawLayers };
