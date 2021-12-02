import { CircularButton, ControlType, Priority } from '@transferwise/components';
import { Check, Cross } from '@transferwise/icons';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import screenfull from 'screenfull';

import {
  CAMERA_ERROR,
  CAMERA_FEED_STARTED,
  CAMERA_NOT_SUPPORTED,
  CAMERA_PERMISSION_ACTIONED,
  CAMERA_PERMISSION_DIALOG,
} from '../../../common/tracking/events';

import { drawLayers } from './layerDrawer/layerDrawer';
import NoCameraAccess from './screens';
import {
  getCameraErrorTrackingProperties,
  getCameraFeedStartedTrackingProperties,
  getCameraNotSupportedTrackingProperties,
  getCameraPermissionDeniedTrackingProperties,
  getCameraPermissionDialogTrackingProperties,
  getCameraPermissionGrantedTrackingProperties,
} from './tracking/properties';

export const CAMERA_DIRECTION = {
  FRONT: 'front',
  BACK: 'back',
};

const MODE = {
  CAMERA_ACCESS_PROMPTED: 'CAMERA_ACCESS_PROMPTED',
  CAPTURE: 'CAPTURE',
  PREVIEW: 'PREVIEW',
  NO_CAMERA_ACCESS: 'NO_CAMERA_ACCESS',
};

const isSelfieCamera = (videoStream) => {
  const { facingMode } = videoStream?.getVideoTracks()[0].getSettings() || {};

  return facingMode === 'user' || facingMode === undefined;
};

const isIOS = () => /(iPhone|iPad|iPod)/.test(window?.navigator?.userAgent);

const isSupported = () => 'mediaDevices' in navigator;

const wait = (t) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

const loadLayoutImages = (imageUrls) => {
  return Promise.all(imageUrls.map(loadLayoutImage));
};

const loadLayoutImage = (imageUrl) => {
  const image = new Image();

  const promise = new Promise((resolve) => {
    image.addEventListener('load', resolve);
    image.addEventListener('error', resolve);
  }).then((event) => {
    return event.type === 'load' ? image : undefined;
  });

  image.src = imageUrl;

  return promise;
};

const startLayoutRenderer = (videoReference, layersReference, overlayImg, outlineImg) => {
  const renderLayout = () => drawLayers(videoReference, layersReference, overlayImg, outlineImg);

  renderLayout();
  window.addEventListener('resize', renderLayout);
  return renderLayout;
};

const tryLockOrientation = () => window?.screen?.orientation?.lock('portrait').catch(() => {});

const tryAcquireFullScreenAndLockOrientation = () => {
  if (screenfull.isEnabled && !screenfull.isFullscreen) {
    // eslint-disable-next-line testing-library/await-async-utils
    return Promise.race([screenfull.request().catch(() => {}), wait(750)]) // wait 750 to acquire fullscreen
      .then(tryLockOrientation) // lock automatically released when exiting fullscreen
      .then(() => wait(100)); // give a little time for the fullscreen animation
  }
  return Promise.resolve();
};

const CameraCapture = (props) => {
  const {
    direction,
    overlay,
    outline,
    imageUrl,
    title,
    instructions,
    showPreview,
    onError,
    onCancel,
    onCapture,
    onTrackableEvent,
  } = props;

  const videoReference = useRef();
  const snapshotReference = useRef();
  const layersReference = useRef();

  const [mode, setMode] = useState(MODE.CAMERA_ACCESS_PROMPTED);
  const [isVideoMirrored, setIsVideoMirrored] = useState(false);
  const [random, setRandom] = useState(Math.random());

  useEffect(() => {
    if (!isSupported()) {
      onTrackableEvent(CAMERA_NOT_SUPPORTED, getCameraNotSupportedTrackingProperties());
      onError(new Error('navigator.mediaDevices not accessible on this browser'));
      return null;
    }

    let renderLayout;
    // load images and ask for permission first, then try to acquire fullscreen, and only then start the camera and overlays
    /* prettier-ignore */
    Promise.all([
      getMediaStreamWithTracking(),
      loadLayoutImages([overlay, outline]),
    ])
      .then(async ([videoStream, images]) => {
        setIsVideoMirrored(isSelfieCamera(videoStream));

        await tryAcquireFullScreenAndLockOrientation();
        await startCameraCaptureWithTracking(videoStream, props);

        const [overlayImage, outlineImage] = images;
        // eslint-disable-next-line testing-library/render-result-naming-convention
        renderLayout = startLayoutRenderer(
          videoReference.current,
          layersReference.current,
          overlayImage,
          outlineImage,
        );

        setMode(MODE.CAPTURE);
      })
      .catch(async (error) => {
        if (error.name === 'NotAllowedError') {
          setMode(MODE.NO_CAMERA_ACCESS);
        } else {
          onError(error);
        }
      });

    // cleanup
    return () => {
      closeVideoStream();

      if (screenfull.isEnabled) {
        screenfull.exit();
      }

      window.removeEventListener('resize', renderLayout);
    };
  }, [random]);

  const startCameraCaptureWithTracking = async (stream, props) => {
    return startCameraCapture(stream).then((stream) => {
      onTrackableEvent(CAMERA_FEED_STARTED, getCameraFeedStartedTrackingProperties(props, stream));
      return stream;
    });
  };

  const startCameraCapture = async (stream) => {
    return new Promise((resolve) => {
      videoReference.current.addEventListener('loadeddata', () => {
        videoReference.current.play();
        resolve(stream);
      });
      videoReference.current.srcObject = stream;
    });
  };

  const getMediaStreamWithTracking = async () => {
    let dialogShown = false;

    const dialogEventTimeout = setTimeout(() => {
      dialogShown = true;
      onTrackableEvent(CAMERA_PERMISSION_DIALOG, getCameraPermissionDialogTrackingProperties());
    }, 500);

    return getMediaStream()
      .then((videoStream) => {
        if (dialogShown) {
          onTrackableEvent(
            CAMERA_PERMISSION_ACTIONED,
            getCameraPermissionGrantedTrackingProperties(),
          );
        } else {
          clearTimeout(dialogEventTimeout);
        }

        return videoStream;
      })
      .catch(async (error) => {
        if (error.name === 'NotAllowedError') {
          onTrackableEvent(
            CAMERA_PERMISSION_ACTIONED,
            getCameraPermissionDeniedTrackingProperties(error),
          );
        } else {
          onTrackableEvent(CAMERA_ERROR, getCameraErrorTrackingProperties(error));
        }
        throw error;
      });
  };

  const getMediaStream = () => {
    const constraints = {
      video: {
        // The video size constraints are very finicky, hence only setting for iOS for now
        ...(isIOS() && {
          width: { ideal: 4032 },
          height: { ideal: 3024 },
        }),
        facingMode: {
          ideal:
            (direction || '').toLowerCase() === CAMERA_DIRECTION.FRONT.toLowerCase()
              ? 'user'
              : 'environment',
        },
      },
      audio: false,
    };

    return navigator.mediaDevices.getUserMedia(constraints);
  };

  const closeVideoStream = () => {
    if (videoReference.current && videoReference.current.srcObject) {
      videoReference.current.srcObject.getVideoTracks().forEach((track) => track.stop());
    }
  };

  const returnCapturedImage = () => {
    snapshotReference.current.toBlob(
      (blob) => {
        closeVideoStream();
        onCapture({ file: blob });
      },
      'image/jpeg',
      0.92,
    );
  };

  const onCancelButtonClick = () => {
    closeVideoStream();
    onCancel();
  };

  const onCaptureButtonClick = () => {
    videoReference.current.pause();
    snapshotReference.current.width = videoReference.current.videoWidth;
    snapshotReference.current.height = videoReference.current.videoHeight;
    snapshotReference.current.getContext('2d').drawImage(videoReference.current, 0, 0);

    if (!showPreview) {
      return returnCapturedImage();
    }

    setMode(MODE.PREVIEW);
  };

  const onRecaptureButtonClick = () => {
    videoReference.current.play();

    setMode(MODE.CAPTURE);
  };

  const onUploadButtonClick = () => {
    returnCapturedImage();
  };

  const onRetryButtonClick = () => {
    setRandom(Math.random());
  };

  return (
    <>
      <NoCameraAccess hidden={mode !== MODE.NO_CAMERA_ACCESS} onAction={onRetryButtonClick} />

      <div id="cameraCapture" className={`${isVideoMirrored ? 'mirrored' : ''}`}>
        {mode === MODE.CAMERA_ACCESS_PROMPTED && <div id="cameraAccessOverlay" />}

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={videoReference} id="cameraCaptureVideo" autoPlay playsInline controls={false} />

        <canvas ref={layersReference} id="cameraCaptureLayers" />

        <div id="cameraCaptureSnapshot">
          <canvas ref={snapshotReference} hidden={mode !== MODE.PREVIEW} />
        </div>

        <div className="camera-capture-bar-top">
          {onCancel && (
            <CircularButton
              icon={<Cross />}
              type={ControlType.ACCENT}
              priority={Priority.PRIMARY}
              onClick={onCancelButtonClick}
            />
          )}
        </div>

        <div className="camera-capture-bar-bottom">
          {mode === MODE.PREVIEW && (
            <span className="camera-capture-box-small">
              <CircularButton
                className="m-b-2"
                icon={<Cross />}
                type={ControlType.NEGATIVE}
                priority={Priority.PRIMARY}
                onClick={onRecaptureButtonClick}
              />
              <CircularButton
                className="m-b-2"
                icon={<Check />}
                type={ControlType.POSITIVE}
                priority={Priority.PRIMARY}
                onClick={onUploadButtonClick}
              />
            </span>
          )}
          {mode === MODE.CAPTURE && (
            <>
              {imageUrl && <img className="camera-capture-img" src={imageUrl} alt="" />}
              <h4 className="camera-capture-title m-b-1 m-t-1 p-x-3">{title}</h4>
              <small className="camera-capture-instructions m-b-2 p-x-3">{instructions}</small>
            </>
          )}
          {(mode === MODE.CAMERA_ACCESS_PROMPTED || mode === MODE.CAPTURE) && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <span className="camera-capture-btn-big m-b-2" onClick={onCaptureButtonClick}>
              <span className="camera-capture-btn-big-inner" />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

CameraCapture.propTypes = {
  overlay: PropTypes.string,
  outline: PropTypes.string,
  direction: PropTypes.oneOf([CAMERA_DIRECTION.FRONT, CAMERA_DIRECTION.BACK]),

  imageUrl: PropTypes.string,
  title: PropTypes.string,
  instructions: PropTypes.string,

  showPreview: PropTypes.bool,

  onCancel: PropTypes.func,
  onCapture: PropTypes.func.isRequired,
  onError: PropTypes.func,

  onTrackableEvent: PropTypes.func,
};

CameraCapture.defaultProps = {
  overlay: '',
  outline: '',
  direction: CAMERA_DIRECTION.BACK,

  imageUrl: '',
  title: '',
  instructions: '',

  showPreview: true,

  onCancel: undefined,
  onError: () => {},

  onTrackableEvent: () => {},
};

export default CameraCapture;
