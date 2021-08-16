import { Upload as UploadIcon } from '@transferwise/icons';
import PropTypes from 'prop-types';
import { createRef, PureComponent } from 'react';

class UploadImageStep extends PureComponent {
  constructor() {
    super();
    this.uploadInputRef = createRef();
  }

  onManualUpload = () => {
    const { fileDropped } = this.props;
    if (this.uploadInputRef && this.uploadInputRef.current) {
      const file = this.uploadInputRef.current.files[0];
      fileDropped(file);
    }
  };

  getImage = () => {
    const { usHelpImage, usLabel } = this.props;

    if (!usHelpImage) {
      return (
        <div className="circle circle-sm circle-inverse p-t-1">
          <UploadIcon size={24} />
        </div>
      );
    }

    if (typeof usHelpImage === 'string') {
      return <img src={usHelpImage} alt={usLabel} className="thumbnail text-xs-center" />;
    }

    return usHelpImage;
  };

  render() {
    const { isComplete, usAccept, usButtonText, usDisabled, usLabel, usPlaceholder } = this.props;

    return (
      <div>
        <div className="droppable-default-card" aria-hidden={isComplete}>
          <div className="droppable-card-content">
            <div className="m-b-3">{this.getImage()}</div>
            {usLabel && <h4 className="m-b-1">{usLabel}</h4>}
            {usPlaceholder && <p className="m-b-3">{`${usPlaceholder}`}</p>}
            <label className={`btn btn-primary btn-sm ${usDisabled ? 'disabled' : ''}`}>
              {usButtonText ? (
                <span>{usButtonText}</span>
              ) : (
                <UploadIcon size={24} className="m-r-0" />
              )}
              <input
                ref={this.uploadInputRef}
                type="file"
                accept={usAccept === '*' ? null : usAccept}
                className="tw-droppable-input hidden"
                disabled={usDisabled}
                name="file-upload"
                onChange={() => this.onManualUpload()}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

UploadImageStep.propTypes = {
  fileDropped: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
  usAccept: PropTypes.string.isRequired,
  usButtonText: PropTypes.string.isRequired,
  usDisabled: PropTypes.bool.isRequired,
  usHelpImage: PropTypes.node.isRequired,
  usLabel: PropTypes.string.isRequired,
  usPlaceholder: PropTypes.string.isRequired,
};

export default UploadImageStep;
