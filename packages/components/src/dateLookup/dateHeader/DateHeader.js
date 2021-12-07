import PropTypes from 'prop-types';

import Chevron from '../../chevron';
import { Position, Size } from '../../common';

const buttonClasses = 'btn-link p-a-0 text-no-decoration font-weight-bold';

const DateHeader = ({ label, onLabelClick, onPreviousClick, onNextClick }) => (
  <div className="text-xs-center p-t-1 p-b-2 clearfix">
    <div className="pull-left-single-direction">
      <button type="button" className={buttonClasses} onClick={onPreviousClick}>
        <Chevron orientation={Position.LEFT} className="left-single-direction" size={Size.MEDIUM} />
      </button>
    </div>
    {label && (
      <button
        type="button"
        className={`tw-date-lookup-header-current ${buttonClasses}`}
        onClick={onLabelClick}
      >
        {label}
      </button>
    )}
    <div className="pull-right-single-direction">
      <button type="button" className={buttonClasses} onClick={onNextClick}>
        <Chevron
          orientation={Position.RIGHT}
          className="right-single-direction"
          size={Size.MEDIUM}
        />
      </button>
    </div>
  </div>
);

DateHeader.propTypes = {
  label: PropTypes.string,
  onLabelClick: PropTypes.func,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

DateHeader.defaultProps = {
  label: null,
  onLabelClick: () => {},
};

export default DateHeader;
