import Types from 'prop-types';
import { useEffect, useState } from 'react';

import { filterHiddenSchemas } from '../../common/stepTypes/stepTypes';

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
        onError={(error) => {
          throw error;
        }}
        onCapture={handleCapture}
      />
    </>
  );
};

CameraStep.propTypes = {
  stepSpecification: Types.object.isRequired,
  model: Types.oneOfType([Types.string, Types.object, Types.array, Types.number, Types.bool]),
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  baseUrl: Types.string.isRequired,
  onAction: Types.func.isRequired,
  onModelChange: Types.func.isRequired,
};

export default CameraStep;
