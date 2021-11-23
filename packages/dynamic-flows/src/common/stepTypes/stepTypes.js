export const stepType = {
  LAYOUT: 'layout',
  CAMERA: 'camera',
};

const isCameraStep = (step) => {
  return isFormStep(step) && hasSingleAction(step) && hasSingleFileUploadSchemaWithCameraOnly(step);
};

const isFormStep = (step) => step?.type === 'form';
const hasSingleAction = (step) => step?.actions?.length === 1;
const hasSingleFileUploadSchemaWithCameraOnly = (step) => {
  const schemas = filterHiddenSchemas(step.schemas);

  if (schemas?.length !== 1) {
    return false;
  }
  if (schemas[0].type !== 'object') {
    return false;
  }
  if (Object.values(schemas[0]?.properties).length !== 1) {
    return false;
  }

  const { type, format, source } = Object.values(schemas[0]?.properties)[0];
  return type === 'string' && format === 'base64url' && source === 'camera';
};
export const filterHiddenSchemas = (schemas) => {
  return schemas.filter((schema) => {
    if (schema?.type === 'object') {
      return Object.values(schema?.properties || {}).find((schema) => schema?.hidden !== true);
    }
    return schema?.hidden !== true;
  });
};

export const getStepType = (step) => {
  if (isCameraStep(step)) {
    return stepType.CAMERA;
  }

  return stepType.LAYOUT;
};
