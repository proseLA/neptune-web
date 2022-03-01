import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { filterHiddenSchemas } from '../../common/stepTypes/stepTypes';
import { useTracking } from '../../common/tracking';

import CameraCapture from './cameraCapture';

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

const CameraStep = (props) => {
  const { stepSpecification, model, onModelChange, onAction } = props;

  const onTrackableEvent = useTracking();

  if (filterHiddenSchemas(stepSpecification.schemas).length !== 1) {
    throw new Error('camera step expects 1 non-hidden object schema');
  }
  const formSchema = filterHiddenSchemas(stepSpecification.schemas)[0];
  const cameraSchema = Object.values(formSchema?.properties)[0];

  if (stepSpecification.actions.length !== 1) {
    throw new Error('camera step expects 1 action');
  }
  const action = stepSpecification.actions[0];

  const { title, image, cameraConfig } = cameraSchema;
  const { assets, direction, instructions } = cameraConfig || {};
  const { overlay, outline } = assets || {};
  const { url: imageUrl } = image || {};

  const [captureClicked, setCaptureClicked] = useState(false);

  // We need to wait for model to update before we call onAction()
  useEffect(() => {
    if (captureClicked) {
      onAction(action);
    }
  }, [model]);

  const handleCapture = async (result) => {
    const { $id } = cameraSchema;

    const newValue = await blobToBase64(result.file);
    const newModel = { [$id]: newValue };

    setCaptureClicked(true);
    onModelChange(newModel, formSchema, newValue, cameraSchema);
  };

  return (
    <>
      <CameraCapture
        overlay={overlay}
        outline={outline}
        title={title}
        imageUrl={imageUrl}
        instructions={instructions}
        showPreview={false}
        direction={direction}
        onTrackableEvent={onTrackableEvent}
        onError={(error) => {
          throw error;
        }}
        onCapture={handleCapture}
      />
    </>
  );
};

CameraStep.propTypes = {
  stepSpecification: PropTypes.object.isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.bool,
  ]),
  submitted: PropTypes.bool.isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  onAction: PropTypes.func.isRequired,
  onModelChange: PropTypes.func.isRequired,
};

export default CameraStep;
