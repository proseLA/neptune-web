import React from 'react';
import Types from 'prop-types';

import DynamicAlert from './alert';
import DynamicBox from './box';
import DynamicButton from './button';
import DynamicColumns from './columns';
import DynamicDecision from './decision';
import DynamicDivider from './divider';
import DynamicForm from './form';
import DynamicHeading from './heading';
import DynamicImage from './image';
import DynamicInfo from './info';
import DynamicParagraph from './paragraph';
import DynamicReview from './review';

import { componentModel } from './models';
import { convertStepToLayout } from '../flow/layoutService';

const DynamicLayout = (props) => {
  const { components, model, submitted, errors, onModelChange, onAction, onPersistAsync } = props;

  const getKey = (component) => JSON.stringify(component);

  const renderComponent = (component) => {
    switch (component.type) {
      case 'heading':
        return <DynamicHeading key={getKey(component)} component={component} />;
      case 'paragraph':
        return <DynamicParagraph key={getKey(component)} component={component} />;
      case 'image':
        return <DynamicImage key={getKey(component)} component={component} />;
      case 'alert':
        return <DynamicAlert key={getKey(component)} component={component} />;
      case 'review':
        return <DynamicReview key={getKey(component)} component={component} onAction={onAction} />;
      case 'divider':
        return <DynamicDivider key={getKey(component)} component={component} />;
      case 'info':
        return <DynamicInfo key={getKey(component)} component={component} />;
      case 'columns':
        return (
          <DynamicColumns
            key={getKey(component)}
            component={component}
            model={model}
            submitted={submitted}
            errors={errors}
            baseUrl={props.baseUrl}
            onModelChange={onModelChange}
            onAction={onAction}
            onPersistAsync={onPersistAsync}
          />
        );
      case 'form':
        return (
          <DynamicForm
            key={getKey(component)}
            component={component}
            model={model}
            submitted={submitted}
            errors={errors}
            baseUrl={props.baseUrl}
            onModelChange={onModelChange}
            onPersistAsync={onPersistAsync}
          />
        );
      case 'button':
        return <DynamicButton key={getKey(component)} component={component} onAction={onAction} />;
      case 'box':
        return (
          <DynamicBox
            key={getKey(component)}
            component={component}
            model={model}
            submitted={submitted}
            errors={errors}
            baseUrl={props.baseUrl}
            onModelChange={onModelChange}
            onAction={onAction}
            onPersistAsync={onPersistAsync}
          />
        );
      case 'decision':
        return (
          <DynamicDecision key={getKey(component)} component={component} onAction={onAction} />
        );
      case 'final':
        return <>{convertStepToLayout(component).map(renderComponent)}</>;
      default:
        return <div key={getKey(component)} />;
    }
  };

  return <>{components.map(renderComponent)}</>;
};

DynamicLayout.propTypes = {
  components: Types.arrayOf(componentModel).isRequired,
  model: Types.oneOfType([Types.string, Types.object, Types.array, Types.number, Types.bool]),
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  baseUrl: Types.string.isRequired,
  onAction: Types.func.isRequired,
  onModelChange: Types.func.isRequired,
  onPersistAsync: Types.func,
};

DynamicLayout.defaultProps = {
  model: null,
  errors: null,
  onPersistAsync: () => {},
};

export default DynamicLayout;
