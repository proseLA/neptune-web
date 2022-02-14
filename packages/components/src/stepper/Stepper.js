import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Position } from '../common';
import { useDirection } from '../common/hooks';
import Tooltip from '../tooltip';

import { isTouchDevice } from './deviceDetection';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

/* eslint-disable react/no-array-index-key */
const Stepper = ({ steps, activeStep, className }) => {
  const { isRTL } = useDirection();

  if (steps.length === 0) {
    return null;
  }

  const activeStepIndex = clamp(0, steps.length - 1, activeStep);
  const stepPercentage = 1 / (steps.length - 1);
  const percentageCompleted = activeStepIndex / (steps.length - 1);
  const filledWidth = Math.max(percentageCompleted - stepPercentage, 0);
  const endingWidth = Math.min(activeStepIndex, 1) * stepPercentage;

  const renderStep = (step, index) => {
    const active = index === activeStepIndex;
    const clickable = step.onClick && !active;

    const labelButton = clickable ? (
      <button
        type="button"
        className="btn-unstyled tw-stepper__step-label"
        onClick={() => clickable && step.onClick()}
      >
        <small>{step.label}</small>
      </button>
    ) : (
      <small className="tw-stepper__step-label">{step.label}</small>
    );
    return (
      <li
        key={index}
        className={`
          hidden-xs
          tw-stepper__step
          ${active ? 'tw-stepper__step--active' : ''}
          ${clickable ? 'tw-stepper__step--clickable' : ''}
        `}
        style={
          isRTL
            ? { right: `${index * stepPercentage * 100}%` }
            : { left: `${index * stepPercentage * 100}%` }
        }
      >
        {step.hoverLabel && !isTouchDevice() ? (
          <Tooltip position={Position.BOTTOM} label={step.hoverLabel}>
            {labelButton}
          </Tooltip>
        ) : (
          labelButton
        )}
      </li>
    );
  };

  return (
    <div className={classNames('tw-stepper', className)}>
      <div className="progress">
        <div className="progress-bar-filler" style={{ width: `${filledWidth * 100}%` }} />
        <div className="progress-bar-ending" style={{ width: `${endingWidth * 100}%` }} />
      </div>
      <ul className="tw-stepper-steps p-t-1 m-b-0">{steps.map(renderStep)}</ul>
    </div>
  );
};
/* eslint-enable react/no-array-index-key */

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      hoverLabel: PropTypes.node,
    }),
  ).isRequired,
  activeStep: PropTypes.number,
  className: PropTypes.string,
};

Stepper.defaultProps = {
  activeStep: 0,
  className: undefined,
};

export default Stepper;
