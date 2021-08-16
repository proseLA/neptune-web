import classNames from 'classnames';
import PropTypes from 'prop-types';

const AnimatedLabel = ({ activeLabel, className, labels }) => {
  const numberLabels = labels.length - 1;

  return (
    <div className={classNames('np-animated-label', className)}>
      {labels.map((label, index) => {
        const nextLabel = index - 1;
        return (
          <div
            key={nextLabel}
            className={classNames('text-xs-left', {
              'np-animated-label--in': index === activeLabel,
              'np-animated-label--out': nextLabel === activeLabel && nextLabel !== numberLabels,
            })}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

AnimatedLabel.propTypes = {
  activeLabel: PropTypes.number.isRequired,
  className: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.node).isRequired,
};
AnimatedLabel.defaultProps = {
  className: undefined,
};

export default AnimatedLabel;
