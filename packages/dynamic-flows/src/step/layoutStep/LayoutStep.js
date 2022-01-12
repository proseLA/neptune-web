import { isEmpty } from '@transferwise/neptune-validation';
import Types from 'prop-types';

import DynamicLayout from '../../layout';

import { convertStepToLayout, inlineReferences } from './layoutService';

const getComponents = (step) => {
  if (!step || isEmpty(step) || (!step.layout && !step.type)) {
    return [];
  }

  const layout = convertStepToLayout(step);

  return inlineReferences(layout, step.schemas, step.actions);
};

const LayoutStep = (props) => {
  const { stepSpecification, submitted, model, errors, onModelChange, onAction } = props;

  const components = getComponents(stepSpecification);

  return (
    <DynamicLayout
      components={components}
      submitted={submitted}
      model={model}
      errors={errors}
      onAction={onAction}
      onModelChange={onModelChange}
    />
  );
};

LayoutStep.propTypes = {
  stepSpecification: Types.object.isRequired,
  model: Types.oneOfType([Types.string, Types.object, Types.array, Types.number, Types.bool]),
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  onAction: Types.func.isRequired,
  onModelChange: Types.func.isRequired,
};

export default LayoutStep;
