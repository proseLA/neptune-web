import { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import Header from '../header';
import MonthCalendarTable from './table';

class MonthCalendar extends PureComponent {
  onMonthSelect = (month) => {
    this.props.onViewDateUpdate({ month });
    this.props.onSelect();
  };

  selectPreviousYear = () => {
    this.props.onViewDateUpdate({ year: this.props.viewYear - 1 });
  };

  selectNextYear = () => {
    this.props.onViewDateUpdate({ year: this.props.viewYear + 1 });
  };

  render() {
    const {
      selectedDate,
      min,
      max,
      viewYear,
      intl: { locale },
      placeholder,
      onLabelClick,
    } = this.props;
    return (
      <div>
        <Header
          label={formatDate(new Date(viewYear, 0), locale, { year: 'numeric' })}
          onLabelClick={onLabelClick}
          onPreviousClick={this.selectPreviousYear}
          onNextClick={this.selectNextYear}
        />
        <MonthCalendarTable
          {...{ selectedDate, min, max, viewYear, placeholder }}
          onSelect={this.onMonthSelect}
        />
      </div>
    );
  }
}

MonthCalendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  viewYear: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onLabelClick: PropTypes.func.isRequired,
  onViewDateUpdate: PropTypes.func.isRequired,
};

MonthCalendar.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default injectIntl(MonthCalendar);
