import PropTypes from 'prop-types';

import { Status, Size } from '../../../common';
import ProcessIndicator from '../../../processIndicator';

const ProcessingStep = (props) => {
  const {
    isComplete,
    isError,
    isSuccess,
    onAnimationCompleted,
    onClear,
    psButtonText,
    psProcessingText,
  } = props;

  let processStatus = Status.PROCESSING;
  if (isError) {
    processStatus = Status.FAILED;
  }
  if (isSuccess) {
    processStatus = Status.SUCCEEDED;
  }

  return (
    <div className="droppable-processing-card droppable-card" aria-hidden={isComplete}>
      <div className="droppable-card-content">
        <ProcessIndicator
          size={Size.Small}
          status={processStatus}
          onAnimationCompleted={(status) => onAnimationCompleted(status)}
        />
        <h4 className="m-t-3 m-b-3">{psProcessingText}</h4>
        {psButtonText && (
          <button
            type="button"
            className="btn btn-default btn-sm"
            onClick={(event) => onClear(event)}
          >
            {psButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

ProcessingStep.propTypes = {
  isComplete: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onAnimationCompleted: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  psButtonText: PropTypes.string.isRequired,
  psProcessingText: PropTypes.string.isRequired,
};

export default ProcessingStep;
