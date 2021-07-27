import { defineMessages } from 'react-intl';

export default defineMessages({
  fileIsTooLarge: {
    id: 'neptune.UploadInput.fileIsTooLarge',
    defaultMessage: 'File is too large',
    description: 'Error message when the selected file size exceeds the limit',
  },
  fileTypeNotSupported: {
    id: 'neptune.UploadInput.fileTypeNotSupported',
    defaultMessage: 'File type not supported',
    description: 'Error message when the selected file is not one of the supported types',
  },
  deleteModalTitle: {
    id: 'neptune.UploadInput.deleteModalTitle',
    defaultMessage: 'Sure you want to remove this file?',
    description: 'Title to display on delete confirmation modal',
  },
  deleteModalBody: {
    id: 'neptune.UploadInput.deleteModalBody',
    defaultMessage: 'Removing this file will delete it from our system.',
    description: 'Body copy to display on delete confirmation modal',
  },
  deleteModalCancelButtonText: {
    id: 'neptune.UploadInput.deleteModalCancelButtonText',
    defaultMessage: 'Cancel',
    description: 'Cancel button text to display on delete confirmation modal',
  },
  deleteModalConfirmButtonText: {
    id: 'neptune.UploadInput.deleteModalConfirmButtonText',
    defaultMessage: 'Remove',
    description: 'Confirm button text to display on delete confirmation modal',
  },
});
