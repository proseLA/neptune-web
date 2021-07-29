import { defineMessages } from 'react-intl';

export default defineMessages({
  uploadingFailed: {
    id: 'neptune.UploadItem.uploadingFailed',
    defaultMessage: 'Uploading failed',
    description: 'Default error message when upload has failed',
  },

  uploaded: {
    id: 'neptune.UploadItem.uploaded',
    defaultMessage: 'Uploaded',
    description: 'Success copy when upload was successful',
  },

  uploading: {
    id: 'neptune.UploadItem.uploading',
    defaultMessage: 'Uploading...',
    description: 'Copy that is displayed during uploading a file',
  },

  deleting: {
    id: 'neptune.UploadItem.deleting',
    defaultMessage: 'Deleting...',
    description: 'Copy that is displayed during deleting a file',
  },

  uploadedFile: {
    id: 'neptune.UploadItem.uploadedFile',
    defaultMessage: 'Uploaded file',
    description: 'Default copy when filename is missing',
  },

  removeFile: {
    id: 'neptune.UploadItem.removeFile',
    defaultMessage: 'Remove file {filename}',
    description: 'Screenreader text for the delete file button',
  },
});
