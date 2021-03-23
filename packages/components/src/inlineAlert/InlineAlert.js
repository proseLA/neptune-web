import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Sentiment } from '../common';
import withArrow, { ArrowPosition } from '../alert/withArrow';

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
  }, ArrowPosition.TOP_LEFT);

  return <AlertWithArrow {...props} />;
};

InlineAlert.ArrowPosition = ArrowPosition;

InlineAlert.Type = {
  SUCCESS: Sentiment.SUCCESS,
  ERROR: Sentiment.ERROR,
  WARNING: Sentiment.WARNING,
  INFO: Sentiment.INFO,
};

InlineAlert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(InlineAlert.Type)),
};

InlineAlert.defaultProps = {
  className: undefined,
  type: InlineAlert.Type.INFO,
};

export default InlineAlert;
