import Types from 'prop-types';

import {
  FetcherProviderFromBaseUrl,
  useHasFetcherProvider,
} from '../common/contexts/fetcherContext';

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
import { componentModel } from './models';
import DynamicParagraph from './paragraph';
import DynamicReview from './review';

const getKey = (component) => {
  return JSON.stringify(component);
};

const DynamicLayout = (props) => {
  const {
    components,
    model,
    submitted,
    disabled,
    errors,
    onModelChange,
    onAction,
    onPersistAsync,
    baseUrl,
  } = props;

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
            onModelChange={onModelChange}
            onPersistAsync={onPersistAsync}
          />
        );
      case 'button':
        return (
          <DynamicButton
            key={getKey(component)}
            component={component}
            disabled={disabled}
            onAction={onAction}
          />
        );
      case 'box':
        return (
          <DynamicBox
            key={getKey(component)}
            component={component}
            model={model}
            submitted={submitted}
            disabled={disabled}
            errors={errors}
            onModelChange={onModelChange}
            onAction={onAction}
            onPersistAsync={onPersistAsync}
          />
        );
      case 'decision':
        return (
          <DynamicDecision key={getKey(component)} component={component} onAction={onAction} />
        );
      default:
        return <div key={getKey(component)} />;
    }
  };

  if (useHasFetcherProvider() || baseUrl == null) {
    return components.map(renderComponent);
  } else {
    return (
      <FetcherProviderFromBaseUrl baseUrl={baseUrl}>
        {components.map(renderComponent)}
      </FetcherProviderFromBaseUrl>
    );
  }
};

DynamicLayout.propTypes = {
  components: Types.arrayOf(componentModel).isRequired,
  model: Types.oneOfType([Types.string, Types.object, Types.array, Types.number, Types.bool]),
  submitted: Types.bool.isRequired,
  disabled: Types.bool,
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  baseUrl: Types.string,
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
