import PropTypes from 'prop-types';

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
  const { components, model, submitted, errors, onModelChange, onAction, onPersistAsync, baseUrl } =
    props;

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
        return <DynamicButton key={getKey(component)} component={component} onAction={onAction} />;
      case 'box':
        return (
          <DynamicBox
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
  components: PropTypes.arrayOf(componentModel).isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.bool,
  ]),
  submitted: PropTypes.bool.isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  baseUrl: PropTypes.string,
  onAction: PropTypes.func.isRequired,
  onModelChange: PropTypes.func.isRequired,
  onPersistAsync: PropTypes.func,
};

DynamicLayout.defaultProps = {
  model: null,
  errors: null,
  onPersistAsync: () => {},
};

export default DynamicLayout;
