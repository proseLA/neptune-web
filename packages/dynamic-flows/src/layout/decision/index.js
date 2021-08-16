import { NavigationOption, NavigationOptionsList } from '@transferwise/components';
import Types from 'prop-types';

import DynamicIcon from '../icon';
import { marginModel, actionModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicDecision = (props) => {
  const decision = props.component;

  const renderDecisionOption = (option, onAction) => {
    return (
      <NavigationOption
        key={JSON.stringify(option)}
        title={option.action.title}
        content={option.text}
        disabled={option.action.disabled}
        media={<DynamicIcon type={option.icon} />}
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
  onAction: Types.func.isRequired,
  component: Types.shape({
    options: Types.arrayOf(
      Types.shape({
        text: Types.string,
        action: actionModel.isRequired,
        icon: Types.string,
      }),
    ).isRequired,
    margin: marginModel,
  }).isRequired,
};

export default DynamicDecision;
