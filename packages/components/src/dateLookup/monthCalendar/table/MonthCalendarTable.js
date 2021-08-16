import { formatDate } from '@transferwise/formatting';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import TableLink from '../../tableLink';

const ROWS = 3;
const COLS = 4;
const MONTH_ONLY_FORMAY = { month: 'short' };

const MonthCalendarTable = ({
  selectedDate: selected,
  min,
  max,
  viewYear,
  placeholder,
  onSelect,
}) => {
  const { locale } = useIntl();

  const getLink = (month) => (
    <TableLink
      item={month}
      type="month"
      title={formatDate(new Date(viewYear, month), locale, MONTH_ONLY_FORMAY)}
      active={!!(selected && month === selected.getMonth() && viewYear === selected.getFullYear())}
      disabled={isDisabled(month)}
      today={viewYear === new Date().getFullYear() && month === new Date().getMonth()}
      onClick={onSelect}
    />
  );
  const isDisabled = (month) => {
    const date = new Date(viewYear, month);
    return !!(
      (min && date < new Date(min.getFullYear(), min.getMonth())) ||
      (max && date > new Date(max.getFullYear(), max.getMonth()))
    );
  };
  return (
    <table className="table table-condensed table-bordered tw-date-lookup-calendar m-b-0">
      <thead className="sr-only">
        <tr>
          <th colSpan="3">{placeholder}</th>
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable react/no-array-index-key */}
        {[...new Array(ROWS)].map((row, rowIndex) => (
          <tr key={rowIndex}>
            {[...new Array(COLS)].map((col, colIndex) => (
              <td key={colIndex}>{getLink(rowIndex * COLS + colIndex)}</td>
            ))}
          </tr>
        ))}
        {/* eslint-enable react/no-array-index-key */}
      </tbody>
    </table>
  );
};

MonthCalendarTable.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  viewYear: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

MonthCalendarTable.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default MonthCalendarTable;
