import { AlertCircle, CrossCircle } from '@transferwise/icons';
import classNames from 'classnames';
import { ReactElement, MouseEvent } from 'react';
import { useIntl } from 'react-intl';

import { Size, Status } from '../../common';
import { useDirection } from '../../common/hooks';
import ProcessIndicator from '../../processIndicator/ProcessIndicator';
import { UploadedFile } from '../types';

import MESSAGES from './UploadItem.messages';
import { UploadItemBody } from './UploadItemBody';

export type UploadItemProps = JSX.IntrinsicAttributes & {
  file: UploadedFile;
  canDelete: boolean;
  onDelete: () => void;

  /**
   * Callback to be called when the file link is clicked.
   * When provided, you need to manually trigger actions to load/download the file.
   *
   * @param file
   */
  onDownload?: (file: UploadedFile) => void;
};

export enum TEST_IDS {
  uploadItem = 'uploadItem',
  mediaBody = 'mediaBody',
}

const UploadItem = ({ file, canDelete, onDelete, onDownload }: UploadItemProps) => {
  const { formatMessage } = useIntl();
  const { status, filename, error, url } = file;

  const isSucceeded = [Status.SUCCEEDED, undefined].includes(status) && !!url;

  const getIcon = (): ReactElement => {
    if (error || status === Status.FAILED) {
      return <AlertCircle size={24} className="text-negative" />;
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
      return <span className="text-negative">{getErrorMessage()}</span>;
    }

    switch (status) {
      case Status.PENDING:
        return <span>{formatMessage(MESSAGES.uploading)}</span>;
      case Status.PROCESSING:
        return <span>{formatMessage(MESSAGES.deleting)}</span>;
      case Status.SUCCEEDED:
      case Status.DONE:
      default:
        return <span className="text-positive">{formatMessage(MESSAGES.uploaded)}</span>;
    }
  };

  const getTitle = () => {
    return filename || formatMessage(MESSAGES.uploadedFile);
  };

  const onDownloadFile = (event: MouseEvent): void => {
    if (onDownload) {
      event.preventDefault();
      onDownload(file);
    }
  };

  return (
    <div
      className={classNames('np-upload-item', { 'np-upload-item__link': isSucceeded })}
      data-testid={TEST_IDS.uploadItem}
    >
      <div className="np-upload-item__body">
        <UploadItemBody url={isSucceeded ? url : undefined} onDownload={onDownloadFile}>
          <div className="np-upload-button">
            <div className="media">
              <div className="np-upload-icon media-left">{getIcon()}</div>
              <div className="media-body text-xs-left" data-testid={TEST_IDS.mediaBody}>
                <div className="text-word-break text-primary">{getTitle()}</div>
                <small className="np-upload-description text-primary">{getDescription()}</small>
              </div>
            </div>
          </div>
        </UploadItemBody>
        {canDelete && (
          <button
            aria-label={formatMessage(MESSAGES.removeFile, { filename })}
            className="btn np-upload-item__remove-button media-left"
            type="button"
            onClick={() => onDelete()}
          >
            <CrossCircle filled size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadItem;
