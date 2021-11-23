import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'dynamicFlows.CameraCapture.NoCameraAccess.title',
    defaultMessage: 'No access to camera',
    description: 'Title of standalone page prompting missing camera permissions',
  },
  paragraph: {
    id: 'dynamicFlows.CameraCapture.NoCameraAccess.paragraph',
    defaultMessage:
      'We don’t have access to your camera. You can enable access in your browser’s settings',
    description: 'Further text of standalone page prompting missing camera permissions',
  },
  action: {
    id: 'dynamicFlows.CameraCapture.NoCameraAccess.action',
    defaultMessage: 'Allow camera access',
    description: 'Action to ask for camera permissions again',
  },
});
