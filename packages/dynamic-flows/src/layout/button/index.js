import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@transferwise/components';
import { actionModel, sizeModel, alignModel, marginModel, contextModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicButton = (props) => {
  const { component, onAction } = props;

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

  const getButtonType = (context) => {
    switch (context) {
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

  const getButtonPriority = (context) => {
    switch (context) {
      case 'primary':
      case 'success':
        return 'primary';
      default:
        return 'secondary';
    }
  };

  return (
    <Button
      size={getButtonSize(component.size)}
      type={getButtonType(component.context)}
      priority={getButtonPriority(component.context)}
      block
      className={getActionClasses(component.action)}
      onClick={() => onAction(component.action)}
      disabled={component.action.disabled}
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
    context: contextModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicButton;
