import { Button } from '@transferwise/components';
import PropTypes from 'prop-types';

import { actionModel, sizeModel, alignModel, marginModel } from '../models';
import { getMarginBottom } from '../utils';

const getActionClasses = (action) => {
  return getMarginBottom(action.margin || 'md') + (action.primary ? ' btn-primary' : '');
};

const getButtonSize = (size) => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'sm';
    case 'lg':
    case 'xl':
      return 'lg';
    case 'md':
    default:
      return 'md';
  }
};

const getButtonType = (action) => {
  switch (action.type) {
    case 'primary':
      return 'accent';
    case 'success':
      return 'positive';
    case 'failure':
    case 'warning':
      return 'negative';
    default:
      return 'accent';
  }
};

const getButtonPriority = (action) => {
  switch (action.type) {
    case 'primary':
    case 'success':
      return 'primary';
    default:
      return 'secondary';
  }
};

const DynamicButton = (props) => {
  const { component, onAction } = props;

  return (
    <Button
      size={getButtonSize(component.size)}
      type={getButtonType(component.action)}
      priority={getButtonPriority(component.action)}
      block
      className={getActionClasses(component.action)}
      disabled={component.action.disabled}
      onClick={() => onAction(component.action)}
    >
      {component.action.title}
    </Button>
  );
};

DynamicButton.propTypes = {
  onAction: PropTypes.func.isRequired,
  component: PropTypes.shape({
    action: actionModel.isRequired,
    size: sizeModel,
    align: alignModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicButton;
