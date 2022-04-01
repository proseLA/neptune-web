const getDefaultTrackingProperties = () => ({});

export const getCameraPermissionDialogTrackingProperties = () => ({
  ...getDefaultTrackingProperties(),
});

export const getCameraPermissionGrantedTrackingProperties = () => ({
  ...getDefaultTrackingProperties(),
  Provided: true,
});

export const getCameraPermissionDeniedTrackingProperties = (error) => ({
  ...getDefaultTrackingProperties(),
  Error: error,
  Provided: false,
});

export const getCameraFeedStartedTrackingProperties = (props, videoStream) => {
  const videoTrack = (videoStream?.getVideoTracks() || [])[0];

  const hardwareWidth = videoTrack?.getCapabilities?.()?.width?.max;
  const hardwareHeight = videoTrack?.getCapabilities?.()?.height?.max;

  const feedWidth = videoTrack?.getSettings?.()?.width;
  const feedHeight = videoTrack?.getSettings?.()?.height;

  return {
    ...getDefaultTrackingProperties(),
    ...(videoTrack && {
      'Camera Hardware Resolution': `${hardwareWidth} x ${hardwareHeight}`,
      'Camera Hardware Width': hardwareWidth,
      'Camera Hardware Height': hardwareHeight,
      'Camera Feed Resolution': `${feedWidth} x ${feedHeight}`,
      'Camera Feed Width': feedWidth,
      'Camera Feed Height': feedHeight,
      'Camera Direction (Actual)': videoTrack?.getSettings()?.facingMode,
    }),
    'Camera Direction (Asked)': props?.direction,
  };
};

export const getCameraErrorTrackingProperties = (error) => ({
  ...getDefaultTrackingProperties(),
  Error: error,
});

export const getCameraNotSupportedTrackingProperties = () => ({
  ...getDefaultTrackingProperties(),
});
