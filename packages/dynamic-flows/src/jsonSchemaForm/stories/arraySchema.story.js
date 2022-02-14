import { select } from '@storybook/addon-knobs';

import base64MultipleFileUploadSchema from '../schemas/base64Url_MultipleFileUpload.json';
import blobMultipleFileUploadSchema from '../schemas/blob_MultipleFileUpload.json';

import { JsonSchemaFormWrapper } from './utils';

export default {
  title: 'JsonSchemaForm/Array',
};

export const FileUploadBase64 = () => {
  const schemas = {
    'Multiple File Upload': base64MultipleFileUploadSchema,
  };

  const schema = select('schema', schemas, base64MultipleFileUploadSchema);

  const initialFormState = { multiUpload: [] };
  // const initialFormState = { multiUpload: [{ id: 131, status: 'success', filename: '23423.pdf' }] };
  return <JsonSchemaFormWrapper schema={schema} initialModel={initialFormState} />;
};

export const FileUploadBlob = () => {
  const schemas = {
    'Multiple File Upload': blobMultipleFileUploadSchema,
  };

  const schema = select('schema', schemas, blobMultipleFileUploadSchema);

  const initialFormState = { multiUpload: [] };
  // const initialFormState = { multiUpload: [{ id: 131, status: 'success', filename: '23423.pdf' }] };
  return <JsonSchemaFormWrapper schema={schema} initialModel={initialFormState} />;
};
