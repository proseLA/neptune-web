import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import { Size, DateMode, MonthFormat } from '../common';
import { getMonthNames, isDateValid, isMonthAndYearFormat } from '../common/dateUtils';
import Select from '../select';

import messages from './DateInput.messages';
import { explodeDate, convertToLocalMidnight } from './utils';

const MonthBeforeDay = new Set(['en-US', 'ja-JP']);
const INITIAL_DEFAULT_STATE = { year: null, month: null, day: null };

const DateInput = ({
  disabled,
  size,
  value,
  dayLabel,
  monthLabel,
  yearLabel,
  monthFormat,
  mode,
  onChange,
  onFocus,
  onBlur,
  placeholders,
  id,
}) => {
  const { locale, formatMessage } = useIntl();
  const getDateObject = () => {
    if (value && isDateValid(value)) {
      return typeof value === 'string' ? convertToLocalMidnight(value) : value;
    }
    return null;
  };

  const getExplodedDate = (unit) => {
    let explodedDate = INITIAL_DEFAULT_STATE;

    if (value && isDateValid(value)) {
      const dateObject = getDateObject();
      explodedDate = explodeDate(dateObject);

      if (isMonthAndYearFormat(value)) {
        explodedDate.day = null;
      }
    }
    return explodedDate[unit];
  };

  const [day, setDay] = useState(() => getExplodedDate('day'));
  const [month, setMonth] = useState(() => getExplodedDate('month'));
  const [year, setYear] = useState(() => getExplodedDate('year'));
  const [lastBroadcastedValue, setLastBroadcastedValue] = useState(getDateObject);

  dayLabel = dayLabel || formatMessage(messages.dayLabel);
  monthLabel = monthLabel || formatMessage(messages.monthLabel);
  yearLabel = yearLabel || formatMessage(messages.yearLabel);
  placeholders = {
    day: placeholders?.day || 'DD',
    month: placeholders?.month || formatMessage(messages.monthLabel),
    year: placeholders?.year || 'YYYY',
  };

  const getDateAsString = (date) => {
    if (!isDateValid(date)) {
      return '';
    }
    switch (mode) {
      case DateMode.MONTH_YEAR:
        return [date.getFullYear(), `0${date.getMonth() + 1}`.slice(-2)].join('-');
      case DateMode.DAY_MONTH_YEAR:
      default:
        return [
          date.getFullYear(),
          `0${date.getMonth() + 1}`.slice(-2),
          `0${date.getDate()}`.slice(-2),
        ].join('-');
    }
  };

  const getSelectElement = () => {
    const months = getMonthNames(locale, monthFormat);

    return (
      <label>
        <span className="sr-only">{monthLabel}</span>
        <Select
          name="month"
          className="form-control"
          disabled={disabled}
          placeholder={placeholders.month}
          options={getMonthsOptions()}
          size={size}
          selected={month === null ? null : { value: month, label: months[month] }}
          onChange={(selectedValue) => handleMonthChange(selectedValue)}
        />
      </label>
    );
  };

  const getMonthsOptions = () => {
    const options = [];
    const months = getMonthNames(locale, monthFormat);

    months.forEach((label, index) => {
      options.push({ value: index, label });
    });
    return options;
  };

  const handleInternalValue = (newDay = day, newMonth = month, newYear = year) => {
    const dateValue =
      newDay != null && newMonth != null && newYear != null
        ? new Date(newYear, newMonth, newDay)
        : null;

    const newValue = isDateValid(dateValue) ? dateValue : null;

    if (!newValue) {
      broadcastNewValue(INITIAL_DEFAULT_STATE);
    }

    if (mode === DateMode.MONTH_YEAR) {
      if (newMonth >= 0 && newYear && (newMonth !== month || newYear !== year)) {
        broadcastNewValue(newValue);
      }
    } else if (
      newDay &&
      newMonth >= 0 &&
      newYear &&
      (newDay !== day || newMonth !== month || newYear !== year)
    ) {
      broadcastNewValue(newValue);
    }
  };

  const handleDayChange = (event) => {
    const { checkedDay } = checkDate(event.target.value, month, year);
    setDay(checkedDay);
    handleInternalValue(checkedDay, month, year);
  };

  const handleMonthChange = (selectedValue) => {
    if (!selectedValue) {
      setMonth(null);
      handleInternalValue(day, null, year);
      return;
    }
    const selectedMonth = selectedValue ? selectedValue.value : 0;
    const { checkedDay } = checkDate(day, selectedMonth, year);
    setMonth(selectedMonth);
    if (day) {
      if (checkedDay !== day) {
        setDay(checkedDay);
      }
    }
    handleInternalValue(checkedDay, selectedMonth, year);
  };

  const handleYearChange = (event) => {
    const newValue = event.target.value;
    const slicedYear = newValue.length > 4 ? newValue.slice(0, 4) : newValue;

    if (slicedYear.toString().length === 4) {
      // Correct day based on year and month.
      const { checkedDay } = checkDate(day, month, newValue);

      if (day) {
        if (checkedDay !== day) {
          setDay(checkedDay);
        }
      }
      setYear(slicedYear);
      handleInternalValue(checkedDay, month, slicedYear);
    } else {
      setYear(slicedYear);
      handleInternalValue(day, month, null);
    }
  };

  const broadcastNewValue = (newValue) => {
    if (newValue !== lastBroadcastedValue) {
      setLastBroadcastedValue(newValue);
      onChange(getDateAsString(newValue) || null);
    }
  };

  const checkDate = (newDay = null, newMonth = 0, newYear = null) => {
    let checkedDay = newDay;
    const maxDay = new Date(newYear || 2000, newMonth + 1, 0).getDate();

    if (!newDay) {
      checkedDay = null;
    }

    if ((newDay && newDay < 0) || newDay === '00') {
      checkedDay = 1;
    }

    if ((newDay && newMonth) || newDay > 31) {
      checkedDay = newDay > maxDay ? maxDay : newDay;
    }

    return { checkedDay, checkedMonth: newMonth, checkedYear: newYear };
  };

  const monthYearOnly = mode === DateMode.MONTH_YEAR;

  const monthWidth = classNames({
    'col-sm-8': monthYearOnly,
    'col-sm-5': !monthYearOnly,
  });

  const monthBeforeDay = MonthBeforeDay.has(locale);

  return (
    <div
      className="tw-date"
      id={id}
      onFocus={(event) =>
        shouldPropagateOnFocus(event) ? onFocus && onFocus() : event.stopPropagation()
      }
      onBlur={(event) =>
        shouldPropagateOnBlur(event) ? onBlur && onBlur() : event.stopPropagation()
      }
    >
      <div className="row">
        {monthBeforeDay && <div className={monthWidth}>{getSelectElement()}</div>}
        {!monthYearOnly && (
          <div className="col-sm-3">
            <div className={`input-group-${size}`}>
              <label>
                <span className="sr-only">{dayLabel}</span>
                <input
                  type="number"
                  name="day"
                  className="form-control"
                  value={day || ''}
                  placeholder={placeholders.day}
                  disabled={disabled}
                  onChange={(event) => handleDayChange(event)}
                />
              </label>
            </div>
          </div>
        )}

        {!monthBeforeDay && <div className={monthWidth}>{getSelectElement()}</div>}

        <div className="col-sm-4">
          <div className={`input-group-${size}`}>
            <label>
              <span className="sr-only">{yearLabel}</span>
              <input
                type="number"
                name="year"
                className="form-control"
                placeholder={placeholders.year}
                value={year || ''}
                disabled={disabled}
                onChange={(event) => handleYearChange(event)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// Should only propagate if the relatedTarget is not part of this DateInput component.
function shouldPropagateOnFocus({ target, relatedTarget }) {
  const targetParent = target.closest('.tw-date');
  const relatedParent = relatedTarget && relatedTarget.closest('.tw-date');
  return targetParent !== relatedParent;
}

// Should only propagate if the relatedTarget or the activeElement is not part of this DateInput component.
function shouldPropagateOnBlur({ target, relatedTarget }) {
  const blurElementParent = target.closest('.tw-date');
  // Even though FocusEvent.relatedTarget is supported by IE
  // (https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget)
  // "IE11 sets document.activeElement to the next focused element before the blur event is called."
  // (https://stackoverflow.com/a/49325196/986241)
  // Therefore if the relatedTarget is null, we try the document.activeElement,
  // which may contain the HTML element that is gaining focus
  const focusElement =
    relatedTarget || (document.activeElement !== target ? document.activeElement : null);
  const focusElementParent = focusElement && focusElement.closest('.tw-date');
  return blurElementParent !== focusElementParent;
}

DateInput.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  dayLabel: PropTypes.string,
  monthLabel: PropTypes.string,
  yearLabel: PropTypes.string,
  monthFormat: PropTypes.oneOf(['long', 'short']),
  mode: PropTypes.oneOf(['day-month-year', 'month-year']),
  placeholders: PropTypes.shape({
    day: PropTypes.node,
    month: PropTypes.node,
    year: PropTypes.node,
  }),
  id: PropTypes.string,
};

DateInput.defaultProps = {
  disabled: false,
  size: Size.MEDIUM,
  value: null,
  onFocus: null,
  onBlur: null,
  monthFormat: MonthFormat.LONG,
  mode: DateMode.DAY_MONTH_YEAR,
  id: '',
};

export default DateInput;
