import React from 'react';
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
    status: Status.FAILED,
    error: 'File is too large',
  },
  {
    id: 4,
    filename: 'receipt failed with error object.png',
    status: Status.FAILED,
    error: {
      message: 'Filetype not supported',
    },
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

export const singleFile = Template.bind({});
singleFile.args = { ...props };

export const multipleFiles = Template.bind({});
multipleFiles.args = { ...props, multiple: true };

export const disabled = Template.bind({});
disabled.args = { ...props, disabled: true };

export const withAnyFileType = Template.bind({});
withAnyFileType.args = { ...props, fileTypes: '*' };

export const withSingleFileType = Template.bind({});
withSingleFileType.args = { ...props, fileTypes: '.zip,application/zip' };

export const withMultipleExistingFiles = Template.bind({});
withMultipleExistingFiles.args = {
  ...props,
  files,
  multiple: true,
};

export const withoutDelete = Template.bind({});
withoutDelete.args = {
  ...props,
  files,
  onDeleteFile: undefined,
  multiple: true,
};

export const withUploadFailed = Template.bind({});
withUploadFailed.args = {
  ...props,
  files: files.slice(0),
  onUploadFile: () => createDelayedPromise({ successful: false }),
  multiple: true,
};

export const withDeleteFailed = Template.bind({});
withDeleteFailed.args = {
  ...props,
  files: files.slice(0),
  onDeleteFile: () => createDelayedPromise({ successful: false }),
  multiple: true,
};

export const customConfirmMessage = Template.bind({});
customConfirmMessage.args = {
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
