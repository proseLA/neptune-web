import { isEmpty } from '@transferwise/neptune-validation';
import Types from 'prop-types';

import DynamicLayout from '../../layout';
import StickyLayout from '../../layout/StickyLayout';
import DynamicButton from '../../layout/button';

import { convertStepToLayout, inlineReferences } from './layoutService';
import { convertStepActionToDynamicAction } from './layoutService/LayoutService';

const getComponents = (step) => {
  if (!step || isEmpty(step) || (!step.layout && !step.type)) {
    return [];
  }

  const layout = convertStepToLayout(step);

  return inlineReferences(layout, step.schemas, step.actions);
};

const removePrimaryButtonFromSchema = (stepSpecification) => {
  const stickyButton = stepSpecification.actions
    .filter((action) => action.type === 'primary')
    .pop();
  const newStepSpecification = {
    ...stepSpecification,
    actions: stepSpecification.actions.filter((action) => action?.$id !== stickyButton?.$id),
  };

  return {
    newStepSpecification,
    stickyButton,
  };
};

const singlePrimaryActionExists = (stepSpecification) =>
  stepSpecification.actions.filter((action) => action.type === 'primary').length;

const LayoutStep = (props) => {
  const { stepSpecification, submitted, model, errors, onModelChange, onAction } = props;

  const getDynamicLayout = () => {
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

  if (singlePrimaryActionExists(stepSpecification)) {
    const { newStepSpecification, stickyButton } = removePrimaryButtonFromSchema(stepSpecification);
    const bodyComponents = getComponents(newStepSpecification);
    const stickyButtonComponent = convertStepActionToDynamicAction(stickyButton);

    return (
      <>
        <div className="hidden-md hidden-lg hidden-xl">
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
        </div>
        <div className="hidden-xs hidden-sm">{getDynamicLayout()}</div>
      </>
    );
  }

  return getDynamicLayout();
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
