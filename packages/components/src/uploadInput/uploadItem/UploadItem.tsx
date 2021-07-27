import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { AlertCircle, CrossCircle } from '@transferwise/icons';

import ProcessIndicator from '../../processIndicator/ProcessIndicator';

import { Size, Status } from '../../common';
import { useDirection } from '../../common/hooks';
import { UploadedFile } from '../types';

import MESSAGES from './UploadItem.messages';

import './UploadItem.css';
import { UploadItemBody } from './UploadItemBody';

export type UploadItemProps = JSX.IntrinsicAttributes & {
  file: UploadedFile;
  canDelete: boolean;
  onDelete: () => void;
};

export enum TEST_IDS {
  uploadItem = 'uploadItem',
  mediaBody = 'mediaBody',
}

const UploadItem = ({ file, canDelete, onDelete }: UploadItemProps) => {
  const { isRTL } = useDirection();
  const { formatMessage } = useIntl();
  const { status, filename, error, url } = file;

  const isSucceeded = [Status.SUCCEEDED, undefined].includes(status) && !!url;

  const getIcon = (): ReactElement => {
    if (error || status === Status.FAILED) {
      return <AlertCircle size={24} className="text-danger" />;
    }

    let processIndicator: ReactElement;

    switch (status) {
      case Status.PROCESSING:
      case Status.PENDING:
        processIndicator = <ProcessIndicator size={Size.EXTRA_SMALL} status={Status.PROCESSING} />;
        break;
      case Status.SUCCEEDED:
      case Status.DONE:
      default:
        processIndicator = <ProcessIndicator size={Size.EXTRA_SMALL} status={Status.SUCCEEDED} />;
    }

    return <span style={{ transform: 'scale(0.8335)' }}>{processIndicator}</span>; // Scale down ProcessIndicator to be 20px*20px to match `icons`
  };

  const getErrorMessage = () =>
    (typeof error === 'object' && error.message) ||
    error ||
    formatMessage(MESSAGES.uploadingFailed);

  const getDescription = () => {
    if (error || status === Status.FAILED) {
      return <span className="text-danger">{getErrorMessage()}</span>;
    }

    switch (status) {
      case Status.PENDING:
        return <span>{formatMessage(MESSAGES.uploading)}</span>;
      case Status.PROCESSING:
        return <span>{formatMessage(MESSAGES.deleting)}</span>;
      case Status.SUCCEEDED:
      case Status.DONE:
      default:
        return <span className="text-success">{formatMessage(MESSAGES.uploaded)}</span>;
    }
  };

  const getTitle = () => {
    return filename || formatMessage(MESSAGES.uploadedFile);
  };

  return (
    <div
      className={classNames('np-upload-item', { 'np-upload-item__link': isSucceeded })}
      data-testid={TEST_IDS.uploadItem}
    >
      <div className="np-upload-item__body">
        <UploadItemBody url={isSucceeded ? url : undefined}>
          <div className="np-upload-button">
            <div className="media">
              <div
                className={classNames('np-upload-icon', {
                  'media-right': isRTL,
                  'media-left': !isRTL,
                })}
              >
                {getIcon()}
              </div>
              <div
                className={classNames('media-body', {
                  'text-xs-right': isRTL,
                  'text-xs-left': !isRTL,
                })}
                data-testid={TEST_IDS.mediaBody}
              >
                <div className="text-primary">{getTitle()}</div>
                <small className="np-upload-description text-primary">{getDescription()}</small>
              </div>
            </div>
          </div>
        </UploadItemBody>
        {canDelete && (
          <button
            aria-label={formatMessage(MESSAGES.removeFile, { filename })}
            className={classNames('btn np-upload-item__remove-button', {
              'media-right': !isRTL,
              'media-left': isRTL,
            })}
            onClick={() => onDelete()}
            type="button"
          >
            <CrossCircle filled size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadItem;
