import { isEmpty } from '@transferwise/neptune-validation';
import PropTypes from 'prop-types';

import { useDynamicFlow } from '../../common/contexts/dynamicFlowContext/dynamicFlowContext';
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
  const { stepSpecification, submitted, model, errors, onModelChange } = props;

  const components = getComponents(stepSpecification);

  const { refreshing, registerPersistAsyncPromise } = useDynamicFlow();

  const onAction = !refreshing ? props.onAction : () => {};

  return (
    <DynamicLayout
      components={components}
      submitted={submitted}
      model={model}
      errors={errors}
      onAction={onAction}
      onModelChange={onModelChange}
      onPersistAsync={registerPersistAsyncPromise}
    />
  );
};

LayoutStep.propTypes = {
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

export default LayoutStep;
