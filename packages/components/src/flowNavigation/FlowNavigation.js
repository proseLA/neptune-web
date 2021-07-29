import { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../header';
import Stepper from '../stepper';
import AnimatedLabel from './animatedLabel';
import BackButton from './backButton';
import CloseButton from '../common/closeButton';

import { Breakpoint, Layout } from '../common';
import { useClientWidth } from '../common/hooks';

import './FlowNavigation.css';
import Logo from '../logo';

// Size switches on parent container which may or may not have the same size as the window.
const containerBreakpoints = {
  'np-flow-navigation--sm': Breakpoint.SMALL,
  'np-flow-navigation--lg': Breakpoint.LARGE,
};

const FlowNavigation = ({ activeStep, avatar, logo, onClose, onGoBack, done, steps }) => {
  const ref = useRef(null);

  const [clientWidth] = useClientWidth({ ref });
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  const isSmall = clientWidth < Breakpoint.SMALL;

  const newAvatar = done ? null : avatar;

  const getLeftContentSmall = () => {
    const displayGoBack = onGoBack && activeStep > 0;
    return (
      <>
        {displayGoBack && (
          <BackButton
            label={
              <AnimatedLabel
                className="m-x-1"
                labels={steps.map((step) => step.label)}
                activeLabel={activeStep - 1}
              />
            }
            onClick={onGoBack}
          />
        )}
        <div
          className={classNames('np-flow-navigation--flag', {
            'np-flow-navigation--flag__hidden': displayGoBack,
            'np-flow-navigation--flag__display': !displayGoBack,
          })}
        />
      </>
    );
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'np-flow-navigation d-flex align-items-center justify-content-center p-y-3',
        { 'np-flow-navigation--border-bottom': !done },
      )}
    >
      <Header
        className={classNames(
          'np-flow-navigation__content p-x-3',
          {
            'np-flow-navigation--hidden': !clientWidth,
            'np-flow-navigation--xs-max': isSmall,
          },
          Object.keys(containerBreakpoints).filter(
            (key) => clientWidth >= containerBreakpoints[key],
          ),
        )}
        leftContent={isSmall ? getLeftContentSmall() : logo}
        rightContent={
          <>
            {newAvatar}
            {newAvatar && closeButton && <span className="separator" />}
            {closeButton}
          </>
        }
        bottomContent={
          !done && (
            <Stepper
              activeStep={activeStep}
              steps={steps}
              className={classNames('np-flow-navigation__stepper')}
            />
          )
        }
        layout={clientWidth < Breakpoint.LARGE ? Layout.VERTICAL : Layout.HORIZONTAL}
      />
    </div>
  );
};

FlowNavigation.defaultProps = {
  activeStep: 0,
  avatar: undefined,
  logo: <Logo />,
  onGoBack: undefined,
  onClose: undefined,
  done: false,
};

FlowNavigation.propTypes = {
  activeStep: PropTypes.number,
  /** An Avatar */
  avatar: PropTypes.element,
  logo: PropTypes.node,
  /** Called when the close button is clicked. If not provided the close button won't show */
  onClose: PropTypes.func,
  /** Called when the back button is clicked. If not provided the back button won't show. The back button only shows on small screens */
  onGoBack: PropTypes.func,
  done: PropTypes.bool,
  /** Steps to be displayed in stepper. If you don't need the stepper, please use OverlayHeader instead */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      hoverLabel: PropTypes.node,
    }),
  ).isRequired,
};

export default FlowNavigation;
