import { PlusCircle as PlusIcon, Upload as UploadIcon } from '@transferwise/icons';
import classNames from 'classnames';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

import { FileType } from '../../common';
import { useDirection } from '../../common/hooks';

import MESSAGES from './UploadButton.messages';
import { DEFAULT_SIZE_LIMIT, imageFileTypes } from './defaults';
import getAllowedFileTypes from './getAllowedFileTypes';

type AllowedFileTypes = string | string[] | FileType[];
export type UploadButtonProps = {
  /**
   * Disable the upload button if your app is not yet ready to accept uploads
   */
  disabled?: boolean;

  /**
   * Allow multiple file uploads
   */
  multiple?: boolean;

  /**
   * List of allowed filetypes, eg. '*' | '.zip,application/zip' | ['.jpg,.jpeg,image/jpeg', '.png,image/png'] (default: image files + PDF)
   */
  fileTypes?: AllowedFileTypes;

  /**
   * Size limit in KBs 1000 KB = 1 MB (default: 5000 KB)
   */
  sizeLimit?: number;

  /**
   * Description for the upload button
   */
  description?: string | undefined;

  /**
   * Maximum number of files allowed, if provided, shows error below file item
   */
  maxFiles?: number;

  /**
   * Called when some files were successfully selected
   *
   * @param files
   */
  onChange: (files: FileList) => void;

  /**
   * Id for the upload input
   */
  id?: string;

  /**
   * Title for the upload button
   */
  uploadButtonTitle?: string;
};

export enum TEST_IDS {
  uploadInput = 'uploadInput',
  mediaBody = 'mediaBody',
}

const onDragOver = (event: DragEvent): void => {
  event.preventDefault();
};

const DEFAULT_FILE_INPUT_ID = 'np-upload-button';
const UploadButton = ({
  disabled,
  multiple,
  description,
  fileTypes = imageFileTypes,
  sizeLimit = DEFAULT_SIZE_LIMIT,
  maxFiles,
  onChange,
  id = DEFAULT_FILE_INPUT_ID,
  uploadButtonTitle,
}: UploadButtonProps) => {
  const { isRTL } = useDirection();
  const { formatMessage } = useIntl();
  const inputReference = useRef<HTMLInputElement>(null);

  const [isDropping, setIsDropping] = useState(false);

  const dragCounter = useRef(0);

  const reset = (): void => {
    dragCounter.current = 0;
    setIsDropping(false);
  };

  const onDragLeave = (event: DragEvent): void => {
    event.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDropping(false);
    }
  };

  const onDragEnter = (event: DragEvent): void => {
    event.preventDefault();
    dragCounter.current += 1;
    if (dragCounter.current === 1) {
      setIsDropping(true);
    }
  };

  const onDrop = (event: DragEvent): void => {
    event.preventDefault();
    reset();
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
      onChange(event.dataTransfer.files);
    }
  };

  const filesSelected = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;

    if (files) {
      onChange(files);

      if (inputReference.current) {
        inputReference.current.value = '';
      }
    }
  };

  const getFileTypesDescription = (): string => {
    if (fileTypes === '*') {
      return fileTypes;
    }

    return Array.isArray(fileTypes)
      ? getAllowedFileTypes(fileTypes).join(', ')
      : getAllowedFileTypes([fileTypes]).join(', ');
  };

  function getDescription() {
    if (description) {
      return description;
    }

    const fileTypesDescription = getFileTypesDescription();

    const derivedFileDescription =
      fileTypesDescription === '*' ? formatMessage(MESSAGES.allFileTypes) : fileTypesDescription;

    return formatMessage(MESSAGES.instructions, {
      fileTypes: derivedFileDescription,
      size: Math.round(sizeLimit / 1000),
    });
  }

  function getAcceptedTypes() {
    const areAllFilesAllowed = getFileTypesDescription() === '*';

    if (areAllFilesAllowed) {
      return null; //file input by default allows all files
    }

    if (Array.isArray(fileTypes)) {
      return { accept: fileTypes.join(',') };
    }

    return { accept: fileTypes };
  }

  function renderDescription() {
    return (
      <>
        <small className={classNames('np-upload-description', { 'text-primary': !disabled })}>
          {getDescription()}
          {maxFiles && (
            <>
              <br />
              {`Maximum ${maxFiles} files.`}
            </>
          )}
        </small>
      </>
    );
  }

  function renderButtonTitle() {
    if (uploadButtonTitle) {
      return uploadButtonTitle;
    }
    return formatMessage(multiple ? MESSAGES.uploadFiles : MESSAGES.uploadFile);
  }

  return (
    <div
      className={classNames('np-upload-button-container', 'droppable', {
        'droppable-dropping': isDropping,
      })}
      {...(!disabled && { onDragEnter, onDragLeave, onDrop, onDragOver })}
    >
      <input
        ref={inputReference}
        id={id}
        type="file"
        {...getAcceptedTypes()}
        {...(multiple && { multiple: true })}
        className="tw-droppable-input"
        disabled={disabled}
        name="file-upload"
        data-testid={TEST_IDS.uploadInput}
        onChange={filesSelected}
      />
      <label
        htmlFor="np-upload-button"
        className={classNames('btn', 'np-upload-accent', 'np-upload-button', {
          disabled,
        })}
      >
        <div className="media">
          <div className="np-upload-icon media-left">
            <UploadIcon size={24} className="text-link" />
          </div>
          <div className="media-body text-xs-left" data-testid={TEST_IDS.mediaBody}>
            <div>{renderButtonTitle()}</div>
            {renderDescription()}
          </div>
        </div>
      </label>

      {/* Drop area overlay */}
      {isDropping && (
        <div className="droppable-card droppable-dropping-card droppable-card-content">
          <PlusIcon filled size={24} className="text-info m-x-1" />
          <div className="text-info">{formatMessage(MESSAGES.dropFile)}</div>
        </div>
      )}
    </div>
  );
};

export default UploadButton;
