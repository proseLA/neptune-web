import { NavigationOption, NavigationOptionsList } from '@transferwise/components';
import PropTypes from 'prop-types';

import DynamicIcon from '../icon';
import { actionModel, marginModel } from '../models';
import { getMarginBottom } from '../utils';

const getMedia = (option) => {
  if (option.icon) {
    return <DynamicIcon type={option.icon.name} />;
  } else if (option.image?.url) {
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    return <img src={option.image?.url} alt={option.image?.text} />;
  }
  return undefined;
};

const DynamicDecision = (props) => {
  const decision = props.component;

  const renderDecisionOption = (option, onAction) => {
    const media = getMedia(option);

    return (
      <NavigationOption
        key={JSON.stringify(option)}
        title={option.title}
        content={option.description}
        disabled={option.disabled}
        media={media}
        showMediaCircle={false}
        onClick={() => onAction(option.action)}
      />
    );
  };

  return (
    <div className={getMarginBottom(decision.margin)}>
      <NavigationOptionsList>
        {decision.options.map((option) => renderDecisionOption(option, props.onAction))}
      </NavigationOptionsList>
    </div>
  );
};

DynamicDecision.propTypes = {
  onAction: PropTypes.func.isRequired,
  component: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        action: actionModel.isRequired,
        icon: PropTypes.shape({
          name: PropTypes.string,
        }),
        image: PropTypes.shape({
          url: PropTypes.string,
        }),
        disabled: PropTypes.bool,
      }),
    ).isRequired,
    margin: marginModel,
  }).isRequired,
};

export default DynamicDecision;
