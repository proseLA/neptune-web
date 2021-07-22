import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Sentiment } from '../common';
import withArrow, { AlertArrowPosition } from '../alert/withArrow';

const InlineAlert = (props) => {
  const AlertWithArrow = withArrow(({ children, className, type }) => {
    const typeClass = `alert-${type}`;
    return (
      <div
        role="alert"
        className={classNames('alert alert-detach p-x-2 p-y-1', typeClass, className)}
      >
        {children}
      </div>
    );
  }, AlertArrowPosition.TOP_LEFT);

  return <AlertWithArrow {...props} />;
};

InlineAlert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['negative', 'neutral', 'positive', 'warning']),
};

InlineAlert.defaultProps = {
  className: undefined,
  type: Sentiment.NEUTRAL,
};

export default InlineAlert;
