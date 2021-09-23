import { AlertCircle as AlertCircleIcon, Document as DocumentIcon } from '@transferwise/icons';
import PropTypes from 'prop-types';

import { Priority, Size } from '../../..';
import Button from '../../../button';

const CompleteStep = (props) => {
  const {
    csButtonText,
    csFailureText,
    csSuccessText,
    fileName,
    isComplete,
    isError,
    isImage,
    onClear,
    uploadedImage,
  } = props;
  return (
    <div className="droppable-complete-card droppable-card" aria-hidden={!isComplete}>
      <div className="droppable-card-content">
        <div className="droppable-card-content d-flex flex-column align-items-center">
          {isError ? (
            <>
              <AlertCircleIcon size={24} className="text-danger" />
              {csFailureText && <p className="m-t-2">{csFailureText}</p>}
            </>
          ) : (
            <>
              {isImage && uploadedImage ? (
                <img src={uploadedImage} alt="OK" className="thumbnail " />
              ) : (
                <DocumentIcon />
              )}

              {fileName && (
                <p className="m-b-0">
                  <small>{fileName}</small>
                </p>
              )}
              {csSuccessText && (
                <div className="caption m-t-1">
                  <span className="h4">{csSuccessText}</span>
                </div>
              )}
            </>
          )}
        </div>
        {csButtonText && (
          <Button
            size={Size.SMALL}
            priority={Priority.SECONDARY}
            className="m-t-3"
            onClick={(event) => onClear(event)}
          >
            {csButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

CompleteStep.propTypes = {
  csButtonText: PropTypes.string.isRequired,
  csSuccessText: PropTypes.string.isRequired,
  csFailureText: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isImage: PropTypes.bool.isRequired,
  onClear: PropTypes.func.isRequired,
  uploadedImage: PropTypes.string,
};
CompleteStep.defaultProps = {
  uploadedImage: null,
};

export default CompleteStep;
