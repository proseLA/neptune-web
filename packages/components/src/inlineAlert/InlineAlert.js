import classNames from 'classnames';
import PropTypes from 'prop-types';

import withArrow, { AlertArrowPosition } from '../alert/withArrow';
import { Sentiment } from '../common';

const typeClassMap = {
  [Sentiment.ERROR]: 'danger',
};

const InlineAlert = (props) => {
  const AlertWithArrow = withArrow(({ children, className, type }) => {
    const typeClass = `alert-${typeClassMap[type] || type}`;
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
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
};

InlineAlert.defaultProps = {
  className: undefined,
  type: Sentiment.INFO,
};

export default InlineAlert;
