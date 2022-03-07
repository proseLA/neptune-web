import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { Status } from '../common';

import UploadInput, { UploadInputProps } from './UploadInput';
import { UploadResponse } from './types';

export default {
  title: 'UploadInput',
  component: UploadInput,
} as Meta;

const files = [
  {
    id: 1,
    filename: 'purchase-receipt.pdf',
    url: 'https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg',
  },
  {
    id: 2,
    filename: 'receipt failed.png',
    status: Status.FAILED,
  },
  {
    id: 3,
    filename: 'receipt failed with error string.png',
    status: Status.SUCCEEDED,
  },
  {
    id: 4,
    filename: 'receipt failed with error object.png',
    status: Status.SUCCEEDED,
  },
];

const createDelayedPromise = ({
  successful = true,
  delaySeconds = 3,
  response = { id: Math.round(Math.random() * 10000), url: '#' },
}: {
  successful?: boolean;
  delaySeconds?: number;
  response?: UploadResponse;
} = {}): Promise<UploadResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (successful ? resolve(response) : reject(new Error('Unexpected error'))),
      delaySeconds * 1000,
    );
  });

const props = {
  onUploadFile: (formData: FormData) => {
    return createDelayedPromise();
  },
  onDeleteFile: (id: string | number) => {
    return createDelayedPromise();
  },
};

const Template: Story<UploadInputProps> = (args: UploadInputProps) => <UploadInput {...args} />;

export const SingleFile = Template.bind({});
SingleFile.args = { ...props };

export const MultipleFiles = Template.bind({});
MultipleFiles.args = { ...props, multiple: true };

export const UploadInputWithDescriptionFromProps = Template.bind({});
UploadInputWithDescriptionFromProps.args = {
  ...props,
  multiple: true,
  description: 'Custom file description from prop',
};

export const Disabled = Template.bind({});
Disabled.args = { ...props, disabled: true };

export const WithAnyFileType = Template.bind({});
WithAnyFileType.args = { ...props, fileTypes: '*' };

export const WithSingleFileType = Template.bind({});
WithSingleFileType.args = { ...props, fileTypes: '.zip,application/zip' };

export const WithMultipleExistingFiles = Template.bind({});
WithMultipleExistingFiles.args = {
  ...props,
  files,
  multiple: true,
};

export const WithoutDelete = Template.bind({});
WithoutDelete.args = {
  ...props,
  files,
  onDeleteFile: undefined,
  multiple: true,
};

export const WithUploadFailed = Template.bind({});
WithUploadFailed.args = {
  ...props,
  files: files.slice(0),
  onUploadFile: () => createDelayedPromise({ successful: false }),
  multiple: true,
};

export const WithDeleteFailed = Template.bind({});
WithDeleteFailed.args = {
  ...props,
  files: files.slice(0),
  onDeleteFile: () => createDelayedPromise({ successful: false }),
  multiple: true,
};

export const CustomConfirmMessage = Template.bind({});
CustomConfirmMessage.args = {
  ...props,
  files: files.slice(0),
  deleteConfirm: {
    title: 'Sure you want to remove this invoice?',
    body: (
      <img
        alt="brand logo"
        src="https://wise.com/public-resources/assets/logos/wise/brand_logo.svg"
      />
    ),
  },
};

export const withManualDownloadHandler = Template.bind({});
withManualDownloadHandler.args = {
  ...props,
  files,
  onDownload: action('Manual download handler'),
};

export const withFilesChangeHandler = Template.bind({});
withFilesChangeHandler.args = {
  ...props,
  files,
  onFilesChange: action('Files change handler'),
};

export const withMaxFilesToUploadLimit = Template.bind({});
withMaxFilesToUploadLimit.args = {
  ...props,
  multiple: true,
  maxFiles: 5,
  maxFilesErrorMessage: "Can't upload as maximum number of files allowed are already uploaded",
};

export const withFileSizeErrorMessage = Template.bind({});
withFileSizeErrorMessage.args = {
  ...props,
  sizeLimit: 1,
  sizeLimitErrorMessage: 'The file is oversized',
};

export const withCustomUploadButtonTitle = Template.bind({});
withCustomUploadButtonTitle.args = {
  ...props,
  uploadButtonTitle: 'Upload the VAT receipts for FY 2022-23',
};
