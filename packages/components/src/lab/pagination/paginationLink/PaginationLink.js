import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import messages from './PaginationLink.messages';

const PaginationLink = ({ disabled, active, pageNumber, onClick, children }) => {
  const intl = useIntl();

  const handleClick = (event) => {
    event.preventDefault();
    if (!disabled && !active) {
      onClick(pageNumber);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick(event);
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
        aria-label={ariaLabel}
        aria-current={active}
        className={classNames({ disabled, active })}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
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
