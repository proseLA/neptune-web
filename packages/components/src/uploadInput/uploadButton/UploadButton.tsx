import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { Upload as UploadIcon, PlusCircle as PlusIcon } from '@transferwise/icons';

import { useDirection } from '../../common/hooks';
import { imageFileTypes, DEFAULT_SIZE_LIMIT } from './defaults';
import getAllowedFileTypes from './getAllowedFileTypes';
import { FileType } from '../../common';

import MESSAGES from './UploadButton.messages';

import './UploadButton.css';

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
  fileTypes?: string | string[] | FileType[];

  /**
   * Size limit in KBs 1000 KB = 1 MB (default: 5000 KB)
   */
  sizeLimit?: number;

  /**
   * Called when some files were successfully selected
   * @param files
   */
  onChange: (files: FileList) => void;
};

export enum TEST_IDS {
  uploadInput = 'uploadInput',
  mediaBody = 'mediaBody',
}

const UploadButton = ({
  disabled,
  multiple,
  fileTypes = imageFileTypes,
  sizeLimit = DEFAULT_SIZE_LIMIT,
  onChange,
}: UploadButtonProps) => {
  const { isRTL } = useDirection();
  const { formatMessage } = useIntl();
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDropping, setIsDropping] = useState(false);

  const dragCounter = useRef(0);

  const reset = (): void => {
    dragCounter.current = 0;
    setIsDropping(false);
  };

  const onDragLeave = (e: DragEvent): void => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDropping(false);
    }
  };

  const onDragEnter = (e: DragEvent): void => {
    e.preventDefault();
    dragCounter.current += 1;
    if (dragCounter.current === 1) {
      setIsDropping(true);
    }
  };

  const onDrop = (e: DragEvent): void => {
    e.preventDefault();
    reset();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files);
    }
  };

  const onDragOver = (e: DragEvent): void => {
    e.preventDefault();
  };

  const filesSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;

    if (files) {
      onChange(files);

      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  const getFileTypesDescription = (): string => {
    if (Array.isArray(fileTypes)) {
      return getAllowedFileTypes(fileTypes).join(', ');
    }
    if (fileTypes === '*') {
      return fileTypes;
    }

    return getAllowedFileTypes([fileTypes]).join(', ');
  };

  const fileTypesDescription = getFileTypesDescription();
  const allowAllFileTypes = fileTypesDescription === '*';
  const description = allowAllFileTypes
    ? formatMessage(MESSAGES.allFileTypes)
    : fileTypesDescription;

  const acceptFileTypes = Array.isArray(fileTypes) ? fileTypes.join(',') : fileTypes;

  return (
    <div
      className={classNames('np-upload-button-container', 'droppable', {
        'droppable-dropping': isDropping,
      })}
      {...(!disabled && { onDragEnter, onDragLeave, onDrop, onDragOver })}
    >
      <input
        ref={inputRef}
        id="np-upload-button"
        type="file"
        {...(!allowAllFileTypes && { accept: acceptFileTypes })}
        {...(multiple && { multiple: true })}
        className="tw-droppable-input"
        disabled={disabled}
        name="file-upload"
        onChange={filesSelected}
        data-testid={TEST_IDS.uploadInput}
      />
      <label
        htmlFor="np-upload-button"
        className={classNames('btn', 'np-upload-accent', 'np-upload-button', {
          disabled,
        })}
      >
        <div className="media">
          <div
            className={classNames('np-upload-icon', {
              'media-right': isRTL,
              'media-left': !isRTL,
            })}
          >
            <UploadIcon size={24} className="text-link" />
          </div>
          <div
            className={classNames('media-body', {
              'text-xs-right': isRTL,
              'text-xs-left': !isRTL,
            })}
            data-testid={TEST_IDS.mediaBody}
          >
            <div>{formatMessage(multiple ? MESSAGES.uploadFiles : MESSAGES.uploadFile)}</div>
            <small className={classNames('np-upload-description', { 'text-primary': !disabled })}>
              {formatMessage(MESSAGES.instructions, {
                fileTypes: description,
                size: Math.round(sizeLimit / 1000),
              })}
            </small>
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
