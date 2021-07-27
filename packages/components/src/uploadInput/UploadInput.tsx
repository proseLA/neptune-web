import React, { ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import { UploadedFile, UploadResponse } from './types';

import { CommonProps, ControlType, Priority, Status } from '../common';
import { isSizeValid } from '../upload/utils/isSizeValid';
import { isTypeValid } from '../upload/utils/isTypeValid';
import Button from '../button';
import Modal from '../modal';

import UploadButton, { UploadButtonProps } from './uploadButton/UploadButton';
import { DEFAULT_SIZE_LIMIT, imageFileTypes } from './uploadButton/defaults';

import UploadItem from './uploadItem/UploadItem';

import MESSAGES from './UploadInput.messages';

import './UploadInput.css';

export type UploadInputProps = {
  /**
   * List of already existing, failed or in progress files
   */
  files?: UploadedFile[];

  /**
   * The key of the file in the returned FormData object (default: file)
   */
  fileInputName?: string;

  /**
   * Callback that handles form submission
   * @param formData
   */
  onUploadFile: (formData: FormData) => Promise<UploadResponse>;

  /**
   * Provide a callback if the file can be removed/deleted from the server
   * Your app is responsible for reloading the uploaded files list and updating the component to ensure that the file has in fact been deleted successfully
   * @param id
   */
  onDeleteFile?: (id: string | number) => Promise<any>;

  /**
   * Confirmation modal displayed on delete
   */
  deleteConfirm?: {
    /**
     * The title of the confirmation modal on delete
     */
    title?: string;

    /**
     * The body of the confirmation modal on delete
     */
    body?: React.ReactNode;

    /**
     * The confirm button text of the confirmation modal on delete
     */
    confirmText?: string;

    /**
     * The cancel button text of the confirmation modal on delete
     */
    cancelText?: string;
  };
} & Pick<UploadButtonProps, 'disabled' | 'multiple' | 'fileTypes' | 'sizeLimit'> &
  CommonProps;

const UploadInput = ({
  files = [],
  fileInputName = 'file',
  className,
  onUploadFile,
  onDeleteFile,
  deleteConfirm,
  ...rest
}: UploadInputProps): ReactElement => {
  const [markedFileForDelete, setMarkedFileForDelete] = useState<UploadedFile | null>(null);
  const { multiple, sizeLimit = DEFAULT_SIZE_LIMIT, fileTypes = imageFileTypes } = rest;
  const { formatMessage } = useIntl();

  const PROGRESS_STATUSES = [Status.PENDING, Status.PROCESSING];

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(
    multiple || !files.length ? files : [files[0]],
  );

  const removeFileFromList = (file: UploadedFile) => {
    setUploadedFiles((currentFiles) =>
      currentFiles.filter((fileInList) => file !== fileInList && file.id !== fileInList.id),
    );
  };

  const modifyFileInList = (file: UploadedFile, updates: Partial<UploadedFile>) => {
    setUploadedFiles((currentFiles) =>
      currentFiles.map((fileInList) => {
        return fileInList === file || fileInList.id === file.id
          ? { ...file, ...updates }
          : fileInList;
      }),
    );
  };

  const removeFile = (file: UploadedFile) => {
    const { id, status } = file;

    if (status === Status.FAILED) {
      // If removing a failed upload, we're just updating the view
      removeFileFromList(file);
    } else if (onDeleteFile && id) {
      // Set status to PROCESSING
      modifyFileInList(file, { status: Status.PROCESSING, error: undefined });

      // Notify host app about deletion
      onDeleteFile(id)
        .then(() => removeFileFromList(file))
        .catch((error) => {
          modifyFileInList(file, { error });
        });
    }
  };

  // One or more files selected, create entries for them
  const addFiles = (selectedFiles: FileList) => {
    for (let i = 0; i < selectedFiles.length; i += 1) {
      const file = selectedFiles.item(i);

      // Returning a FormData[] array instead of FileList so we can filter out incorrect files
      const formData = new FormData();

      if (file) {
        const { name, size } = file;
        const id = `${name}_${size}`;

        const allowedFileTypes = Array.isArray(fileTypes) ? fileTypes.join(',') : fileTypes;

        // Check if file type is valid
        if (!isTypeValid(file, allowedFileTypes)) {
          setUploadedFiles((currentFiles) => [
            ...currentFiles,
            {
              id,
              filename: name,
              status: Status.FAILED,
              error: formatMessage(MESSAGES.fileTypeNotSupported),
            },
          ]);
          // eslint-disable-next-line no-continue
          continue;
        }

        // Check if the filesize is valid
        // Convert to rough bytes
        if (!isSizeValid(file, sizeLimit * 1000)) {
          setUploadedFiles((currentFiles) => [
            ...currentFiles,
            {
              id,
              filename: name,
              status: Status.FAILED,
              error: formatMessage(MESSAGES.fileIsTooLarge),
            },
          ]);
          // eslint-disable-next-line no-continue
          continue;
        }

        formData.append(fileInputName, file);
        const pendingFile = {
          id,
          filename: name,
          status: Status.PENDING,
        };

        setUploadedFiles((currentFiles) => [...currentFiles, pendingFile]);

        // Start uploading the file
        onUploadFile(formData)
          .then(({ id, url, error }: UploadResponse) => {
            // Replace the temporary id with the final one received from the API, and also set any errors
            modifyFileInList(pendingFile, { id, url, error, status: Status.SUCCEEDED });
          })
          .catch((error) => {
            modifyFileInList(pendingFile, { error, status: Status.FAILED });
          });

        if (!multiple) {
          // Only upload a single file
          break;
        }
      }
    }
  };

  return (
    <>
      <div className={classNames('np-upload-input', className)}>
        {uploadedFiles.map((file) => (
          <UploadItem
            key={file.id}
            file={file}
            canDelete={
              (!!onDeleteFile || file.status === Status.FAILED) &&
              (!file.status || !PROGRESS_STATUSES.includes(file.status))
            }
            onDelete={
              file.status === Status.FAILED
                ? () => removeFile(file)
                : () => setMarkedFileForDelete(file)
            }
          />
        ))}
        {(multiple || (!multiple && !uploadedFiles.length)) && (
          <UploadButton onChange={addFiles} {...rest} />
        )}
      </div>
      {/* @ts-expect-error Remove this comment once Modal is migrated to TypeScript */}
      <Modal
        title={
          deleteConfirm?.title !== undefined
            ? deleteConfirm.title
            : formatMessage(MESSAGES.deleteModalTitle)
        }
        body={
          deleteConfirm?.body !== undefined
            ? deleteConfirm.body
            : formatMessage(MESSAGES.deleteModalBody)
        }
        onClose={() => {
          setMarkedFileForDelete(null);
        }}
        open={!!markedFileForDelete}
        footer={
          <>
            <Button
              block
              onClick={() => {
                setMarkedFileForDelete(null);
              }}
            >
              {deleteConfirm?.cancelText || formatMessage(MESSAGES.deleteModalCancelButtonText)}
            </Button>
            <Button
              block
              priority={Priority.SECONDARY}
              type={ControlType.NEGATIVE}
              onClick={() => {
                if (markedFileForDelete) {
                  removeFile(markedFileForDelete);
                }
                setMarkedFileForDelete(null);
              }}
            >
              {deleteConfirm?.confirmText || formatMessage(MESSAGES.deleteModalConfirmButtonText)}
            </Button>
          </>
        }
      />
    </>
  );
};

export default UploadInput;
