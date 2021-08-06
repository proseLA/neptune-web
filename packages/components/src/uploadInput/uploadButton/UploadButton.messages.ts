import { defineMessages } from 'react-intl';

export default defineMessages({
  uploadFile: {
    id: 'neptune.UploadButton.uploadFile',
    defaultMessage: 'Upload file',
    description: 'Main CTA copy in the upload button when only a single file is allowed',
  },

  uploadFiles: {
    id: 'neptune.UploadButton.uploadFiles',
    defaultMessage: 'Upload files',
    description: 'Main CTA copy in the upload button when multiple files are allowed',
  },

  instructions: {
    id: 'neptune.UploadButton.instructions',
    defaultMessage: '{fileTypes}, less than {size}MB',
    description: 'Description about filetypes and size limit for uploading files',
  },

  allFileTypes: {
    id: 'neptune.UploadButton.allFileTypes',
    defaultMessage: 'All file types',
    description: 'Copy to show when all filetypes are allowed to be uploaded',
  },

  dropFile: {
    id: 'neptune.UploadButton.dropFiles',
    defaultMessage: 'Drop file to start upload',
    description: 'Copy to show when dragging files over the upload component',
  },
});
