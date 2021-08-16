import { action } from '@storybook/addon-actions';
import { boolean, select, date, text } from '@storybook/addon-knobs';
import { useLayoutEffect, useState } from 'react';

import { Size, MonthFormat, DateMode } from '../common';

import DateInput from './DateInput';

export default {
  component: DateInput,
  title: 'DateInput',
};

export const Basic = () => {
  const disabled = boolean('disabled', false);
  const size = select('size', Object.values(Size), Size.MEDIUM);
  const monthFormat = select('monthFormat', Object.values(MonthFormat), MonthFormat.LONG);
  const mode = select('mode', Object.values(DateMode), DateMode.DAY_MONTH_YEAR);
  const useInitialValue = boolean('useInitialValue', false);
  const initialValue = date('initialValue', new Date('2020-01-01'));
  const day = text('dayPlacheholder', 'DD');
  const month = text('monthPlaceholder', 'Select an option...');
  const year = text('yearPlaceholder', 'YYYY');
  const value = useInitialValue ? new Date(initialValue) : null;

  const { changeLog, appendToLog } = useChangeLog();
  useLayoutEffect(() => {
    appendToLog(`DateInput key={${value}} ... />`);
  }, [useInitialValue, initialValue]);

  return (
    <>
      <DateInput
        dayLabel="Day input"
        monthLabel="Month Select"
        yearLabel="Year input"
        disabled={disabled}
        size={size}
        value={value}
        monthFormat={monthFormat}
        mode={mode}
        placeholders={{
          day,
          month,
          year,
        }}
        id="date-input-1"
        onChange={(value_) => {
          appendToLog(` onChange: ${value_}`);
          return action(value_);
        }}
        onFocus={() => {
          appendToLog(` onFocus`);
        }}
        onBlur={() => {
          appendToLog(` onBlur`);
        }}
      />
      <br />
      <DateInput
        disabled={disabled}
        size={size}
        value={value}
        monthFormat={monthFormat}
        mode={mode}
        placeholders={{
          day,
          month,
          year,
        }}
        id="date-input-2"
        onChange={(value_) => {
          appendToLog(` onChange: ${value_}`);
          return action(value_);
        }}
        onFocus={() => {
          appendToLog(` onFocus`);
        }}
        onBlur={() => {
          appendToLog(` onBlur`);
        }}
      />
      <br />
      <pre>{changeLog}</pre>
    </>
  );
};

function useChangeLog() {
  const [changeLog, setChangeLog] = useState('ChangeLog: (events from both components)');
  const appendToLog = (line) => setChangeLog((log) => `${log}\n${line}`);
  return { changeLog, appendToLog };
}
