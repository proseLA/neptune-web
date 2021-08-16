import { formatDate } from '@transferwise/formatting';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import TableLink from '../../tableLink';

const ROWS = 5;
const COLS = 4;
const YEAR_ONLY_FORMAT = { year: 'numeric' };

const YearCalendarTable = ({ selectedDate, min, max, viewYear, placeholder, onSelect }) => {
  const { locale } = useIntl();
  const startYear = viewYear - (viewYear % 20);
  const getLink = (year) => (
    <TableLink
      item={year}
      type="year"
      title={formatDate(new Date(year, 0), locale, YEAR_ONLY_FORMAT)}
      active={!!(selectedDate && year === selectedDate.getFullYear())}
      disabled={!!((min && year < min.getFullYear()) || (max && year > max.getFullYear()))}
      today={year === new Date().getFullYear()}
      onClick={onSelect}
    />
  );
  return (
    <table className="table table-condensed table-bordered tw-date-lookup-calendar m-b-0">
      <thead className="sr-only">
        <tr>
          <th colSpan="4">{placeholder}</th>
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable react/no-array-index-key */}
        {[...new Array(ROWS)].map((row, rowIndex) => (
          <tr key={rowIndex}>
            {[...new Array(COLS)].map((col, colIndex) => (
              <td key={colIndex}>{getLink(startYear + rowIndex * COLS + colIndex)}</td>
            ))}
          </tr>
        ))}
        {/* eslint-enable react/no-array-index-key */}
      </tbody>
    </table>
  );
};

YearCalendarTable.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  viewYear: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

YearCalendarTable.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default YearCalendarTable;
