import React from 'react';
import PropTypes from 'prop-types';

import { Button, Priority, ControlType } from '@transferwise/components';
import { actionModel, sizeModel, alignModel, marginModel } from '../models';
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

  const getButtonType = (action) => {
    return Object.values(ControlType).includes(action.type) ? action.type : ControlType.ACCENT;
  };

  const getButtonPriority = (action) => {
    return Object.values(Priority).includes(action.priority) ? action.priority : Priority.SECONDARY;
  };

  return (
    <Button
      size={getButtonSize(component.size)}
      type={getButtonType(component.action)}
      priority={getButtonPriority(component.action)}
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
    margin: marginModel,
  }).isRequired,
};

export default DynamicButton;
