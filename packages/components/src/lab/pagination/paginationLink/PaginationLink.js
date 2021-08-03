import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useSafeIntl } from '../../../common';
import messages from './PaginationLink.messages';

const PaginationLink = ({ disabled, active, pageNumber, onClick, children }) => {
  const intl = useSafeIntl();

  const handleClick = (e) => {
    e.preventDefault();
    if (!disabled && !active) {
      onClick(pageNumber);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  };

  const ariaLabel = intl.formatMessage(
    active ? messages.ariaLabelActive : messages.ariaLabelInactive,
    { pageNumber },
  );
  return (
    <li>
      <a
        href="/"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        aria-current={active}
        className={classNames({ disabled, active })}
      >
        {children}
      </a>
    </li>
  );
};

PaginationLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

PaginationLink.defaultProps = {
  disabled: false,
  active: false,
};

export default PaginationLink;
