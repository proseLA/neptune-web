import { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import { MonthFormat } from '../../common';
import Header from '../header';
import DayCalendarTable from './table';

class DayCalendar extends PureComponent {
  selectPreviousMonth = () => {
    const { viewMonth, viewYear } = this.props;
    this.props.onViewDateUpdate({
      month: viewMonth <= 0 ? 11 : viewMonth - 1,
      year: viewMonth <= 0 ? viewYear - 1 : viewYear,
    });
  };

  selectNextMonth = () => {
    const { viewMonth, viewYear } = this.props;
    this.props.onViewDateUpdate({
      month: viewMonth >= 11 ? 0 : viewMonth + 1,
      year: viewMonth >= 11 ? viewYear + 1 : viewYear,
    });
  };

  render() {
    const {
      selectedDate,
      min,
      max,
      viewMonth,
      viewYear,
      intl: { locale },
      monthFormat,
      onLabelClick,
      onSelect,
    } = this.props;
    return (
      <div>
        <Header
          label={formatDate(new Date(viewYear, viewMonth), locale, {
            month: monthFormat,
            year: 'numeric',
          })}
          onLabelClick={onLabelClick}
          onPreviousClick={this.selectPreviousMonth}
          onNextClick={this.selectNextMonth}
        />
        <DayCalendarTable {...{ selectedDate, min, max, viewMonth, viewYear, onSelect }} />
      </div>
    );
  }
}

DayCalendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  viewMonth: PropTypes.number.isRequired,
  viewYear: PropTypes.number.isRequired,
  monthFormat: PropTypes.oneOf([MonthFormat.LONG, MonthFormat.SHORT]).isRequired,
  onSelect: PropTypes.func.isRequired,
  onLabelClick: PropTypes.func.isRequired,
  onViewDateUpdate: PropTypes.func.isRequired,
};

DayCalendar.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default injectIntl(DayCalendar);
