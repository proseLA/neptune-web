import { defineMessages } from 'react-intl';

export default defineMessages({
  minItemsError: {
    id: 'dynamicFlows.MultipleFileUploadSchema.minItemsError',
    defaultMessage: 'Please upload at least {minItems} file(s).',
    description: 'Customer has uploaded not enough files. To fix: upload more files.',
  },
  maxItemsError: {
    id: 'dynamicFlows.MultipleFileUploadSchema.maxItemsError',
    defaultMessage: 'Please upload {maxItems} or fewer files.',
    description: 'Customer has uploaded too many files. To fix: upload fewer files.',
  },
  maxFileSizeError: {
    id: 'dynamicFlows.MultipleFileUploadSchema.maxFileSizeError',
    defaultMessage: 'Sorry, that file is too big. Please upload a smaller file.',
    description: "Customer has uploaded a file that's too big. To fix: upload a smaller file.",
  },
});
