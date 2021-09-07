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

const getButtonTypeAndPriority = (action) => {
  switch (action.type) {
    case 'link':
      return { type: 'accent', priority: 'tertiary' };
    case 'primary':
      return { type: 'accent', priority: 'primary' };
    case 'secondary':
      return { type: 'accent', priority: 'secondary' };
    case 'positive':
      return { type: 'positive', priority: 'primary' };
    case 'negative':
      return { type: 'negative', priority: 'primary' };
    default:
      return { type: 'accent', priority: 'secondary' };
  }
};

const DynamicButton = (props) => {
  const { component, onAction } = props;
  const { type, priority } = getButtonTypeAndPriority(component.action);

  return (
    <Button
      size={getButtonSize(component.size)}
      type={type}
      priority={priority}
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
