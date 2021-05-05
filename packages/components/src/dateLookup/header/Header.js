import React from 'react';
import PropTypes from 'prop-types';
import Chevron from '../../chevron';
import { Position, Size } from '../../common';

const btnClasses = 'btn-link p-a-0 text-no-decoration font-weight-bold';

const Header = ({ label, onLabelClick, onPreviousClick, onNextClick }) => (
  <div className="text-xs-center p-t-1 p-b-2 clearfix">
    <div className="pull-xs-left">
      <button type="button" onClick={onPreviousClick} className={btnClasses}>
        <Chevron orientation={Position.LEFT} size={Size.MEDIUM} />
      </button>
    </div>
    {label && (
      <button
        type="button"
        onClick={onLabelClick}
        className={`tw-date-lookup-header-current ${btnClasses}`}
      >
        {label}
      </button>
    )}
    <div className="pull-xs-right">
      <button type="button" onClick={onNextClick} className={btnClasses}>
        <Chevron orientation={Position.RIGHT} size={Size.MEDIUM} />
      </button>
    </div>
  </div>
);

Header.propTypes = {
  label: PropTypes.string,
  onLabelClick: PropTypes.func,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  label: null,
  onLabelClick: () => {},
};

export default Header;
