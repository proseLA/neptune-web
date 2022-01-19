import { isEmpty } from '@transferwise/neptune-validation';
import Types from 'prop-types';

import DynamicLayout from '../../layout';

import { convertStepToLayout, inlineReferences } from './layoutService';
import StickyLayout from '../../layout/StickyLayout';
import { convertStepActionToDynamicAction } from './layoutService/LayoutService';
import DynamicButton from '../../layout/button';

const getComponents = (step) => {
  if (!step || isEmpty(step) || (!step.layout && !step.type)) {
    return [];
  }

  const layout = convertStepToLayout(step);

  return inlineReferences(layout, step.schemas, step.actions);
};

const useStickyLayout = (stepSpecification) =>
  stepSpecification.actions.filter((action) => action.type === 'primary').length;

const LayoutStep = (props) => {
  const { stepSpecification, submitted, model, errors, onModelChange, onAction } = props;

  if (useStickyLayout(stepSpecification)) {
    const stickyButton = stepSpecification.actions
      .filter((action) => action.type === 'primary')
      .pop();
    const newStepSpecification = {
      ...stepSpecification,
      actions: stepSpecification.actions.filter((action) => action?.$id !== stickyButton?.$id),
    };

    const bodyComponents = getComponents(newStepSpecification);

    const stickyButtonComponent = convertStepActionToDynamicAction(stickyButton);

    return (
      <StickyLayout
        stickyContent={<DynamicButton component={stickyButtonComponent} onAction={onAction} />}
      >
        <DynamicLayout
          components={bodyComponents}
          submitted={submitted}
          model={model}
          errors={errors}
          onAction={onAction}
          onModelChange={onModelChange}
        />
      </StickyLayout>
    );
  }

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
