import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

import Button from '../button';
import { CommonProps, ControlType, Priority, Status } from '../common';
import Modal from '../modal';
import { isSizeValid } from '../upload/utils/isSizeValid';
import { isTypeValid } from '../upload/utils/isTypeValid';

import MESSAGES from './UploadInput.messages';
import { UploadedFile, UploadError, UploadResponse } from './types';
import UploadButton, { UploadButtonProps } from './uploadButton/UploadButton';
import { DEFAULT_SIZE_LIMIT, imageFileTypes } from './uploadButton/defaults';
import UploadItem, { UploadItemProps } from './uploadItem/UploadItem';

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
   *
   * @param formData
   */
  onUploadFile: (formData: FormData) => Promise<UploadResponse>;

  /**
   * Provide a callback if the file can be removed/deleted from the server
   * Your app is responsible for reloading the uploaded files list and updating the component to ensure that the file has in fact been deleted successfully
   *
   * @param id
   */
  onDeleteFile?: (id: string | number) => Promise<any>;

  /**
   * Provide a callback to trigger on validation error
   *
   * @param file
   */
  onValidationError?: (file: UploadedFile) => void;

  /**
   * Provide a callback to trigger on change whenever the files are updated
   *
   * @param files
   */
  onFilesChange?: (files: UploadedFile[]) => void;

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

  /**
   * Maximum number of files allowed, if provided, shows error below file item
   */
  maxFiles?: number;

  /**
   * Error message to show when the maximum number of files are uploaded already
   */
  maxFilesErrorMessage?: string;

  /**
   * Error message to show when files over a allowed size limit are uploaded
   */
  sizeLimitErrorMessage?: string;
} & Pick<
  UploadButtonProps,
  'disabled' | 'multiple' | 'fileTypes' | 'sizeLimit' | 'description' | 'id' | 'uploadButtonTitle'
> &
  Pick<UploadItemProps, 'onDownload'> &
  CommonProps;

function generateFileId(file: File) {
  const { name, size } = file;
  const uploadTimeStamp = new Date().getTime();
  return `${name}_${size}_${uploadTimeStamp}`;
}

const UploadInput = ({
  files = [],
  fileInputName = 'file',
  className,
  deleteConfirm,
  disabled,
  multiple = false,
  fileTypes = imageFileTypes,
  sizeLimit = DEFAULT_SIZE_LIMIT,
  description,
  onUploadFile,
  onDeleteFile,
  onValidationError,
  onFilesChange,
  onDownload,
  maxFiles,
  maxFilesErrorMessage,
  id,
  sizeLimitErrorMessage,
  uploadButtonTitle,
}: UploadInputProps): ReactElement => {
  const [markedFileForDelete, setMarkedFileForDelete] = useState<UploadedFile | null>(null);
  const [mounted, setMounted] = useState(false);
  const { formatMessage } = useIntl();

  const PROGRESS_STATUSES = new Set([Status.PENDING, Status.PROCESSING]);

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(
    multiple || files.length === 0 ? files : [files[0]],
  );

  const uploadedFilesListReference = useRef(multiple || files.length === 0 ? files : [files[0]]);

  function addFileToList(recentUploadedFile: UploadedFile) {
    function addToList(listToAddTo: UploadedFile[]) {
      return [...listToAddTo, recentUploadedFile];
    }

    setUploadedFiles(addToList);
    uploadedFilesListReference.current = addToList(uploadedFilesListReference.current);
  }

  const removeFileFromList = (file: UploadedFile) => {
    function filterOutFrom(listToFilterFrom: UploadedFile[]) {
      return listToFilterFrom.filter(
        (fileInList) => file !== fileInList && file.id !== fileInList.id,
      );
    }

    setUploadedFiles(filterOutFrom);
    uploadedFilesListReference.current = filterOutFrom(uploadedFilesListReference.current);
  };

  const modifyFileInList = (file: UploadedFile, updates: Partial<UploadedFile>) => {
    const updateListItem = (listToUpdate: UploadedFile[]) =>
      listToUpdate.map((fileInList) => {
        return fileInList === file || fileInList.id === file.id
          ? { ...file, ...updates }
          : fileInList;
      });

    setUploadedFiles(updateListItem);
    uploadedFilesListReference.current = updateListItem(uploadedFilesListReference.current);
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
          modifyFileInList(file, { error: error as UploadError });
        });
    }
  };

  function handleFileUploadFailure(file: File, failureMessage: string) {
    const { name } = file;
    const id = generateFileId(file);
    const failedUpload = {
      id,
      filename: name,
      status: Status.FAILED,
      error: failureMessage,
    };

    addFileToList(failedUpload);

    if (onValidationError) {
      onValidationError(failedUpload);
    }
  }

  function getNumberOfFilesUploaded() {
    const uploadInitiatedStatus = new Set([Status.SUCCEEDED, Status.PENDING]);
    const validFiles = uploadedFilesListReference.current.filter(
      (file) => file.status && uploadInitiatedStatus.has(file.status),
    );
    return validFiles.length;
  }

  function areMaximumFilesUploadedAlready() {
    if (!maxFiles) {
      return false;
    }

    const numberOfValidFiles = getNumberOfFilesUploaded();
    return numberOfValidFiles >= maxFiles;
  }

  // One or more files selected, create entries for them
  const addFiles = (selectedFiles: FileList) => {
    for (let i = 0; i < selectedFiles.length; i += 1) {
      const file = selectedFiles.item(i);

      // Returning a FormData[] array instead of FileList so we can filter out incorrect files
      const formData = new FormData();

      if (file) {
        const { name } = file;
        const id = generateFileId(file);

        const allowedFileTypes = Array.isArray(fileTypes) ? fileTypes.join(',') : fileTypes;

        // Check if file type is valid
        if (!isTypeValid(file, allowedFileTypes)) {
          handleFileUploadFailure(file, formatMessage(MESSAGES.fileTypeNotSupported));
          continue;
        }

        // Check if the filesize is valid
        // Convert to rough bytes
        if (!isSizeValid(file, sizeLimit * 1000)) {
          const failureMessage = sizeLimitErrorMessage || formatMessage(MESSAGES.fileIsTooLarge);
          handleFileUploadFailure(file, failureMessage);
          continue;
        }

        if (areMaximumFilesUploadedAlready()) {
          const failureMessage =
            maxFilesErrorMessage ||
            formatMessage(MESSAGES.maximumFilesAlreadyUploaded, { maxFilesAllowed: maxFiles });
          handleFileUploadFailure(file, failureMessage);
          continue;
        }

        formData.append(fileInputName, file);
        const pendingFile = {
          id,
          filename: name,
          status: Status.PENDING,
        };

        addFileToList(pendingFile);

        // Start uploading the file
        onUploadFile(formData)
          .then(({ id, url, error }: UploadResponse) => {
            // Replace the temporary id with the final one received from the API, and also set any errors
            modifyFileInList(pendingFile, { id, url, error, status: Status.SUCCEEDED });
          })
          .catch((error) => {
            modifyFileInList(pendingFile, { error: error as UploadError, status: Status.FAILED });
          });

        if (!multiple) {
          // Only upload a single file
          break;
        }
      }
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (onFilesChange && mounted) {
      onFilesChange(uploadedFiles);
    }
  }, [onFilesChange, uploadedFiles]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={classNames('np-upload-input', className)}>
        {uploadedFiles.map((file) => (
          <UploadItem
            key={file.id}
            file={file}
            canDelete={
              (!!onDeleteFile || file.status === Status.FAILED) &&
              (!file.status || !PROGRESS_STATUSES.has(file.status))
            }
            onDelete={
              file.status === Status.FAILED
                ? () => removeFile(file)
                : () => setMarkedFileForDelete(file)
            }
            onDownload={onDownload}
          />
        ))}
        {(multiple || (!multiple && !uploadedFiles.length)) && (
          <UploadButton
            id={id}
            uploadButtonTitle={uploadButtonTitle}
            disabled={areMaximumFilesUploadedAlready() || disabled}
            multiple={multiple}
            fileTypes={fileTypes}
            sizeLimit={sizeLimit}
            description={description}
            maxFiles={maxFiles}
            onChange={addFiles}
          />
        )}
      </div>
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
        onClose={() => {
          setMarkedFileForDelete(null);
        }}
      />
    </>
  );
};

export default UploadInput;
