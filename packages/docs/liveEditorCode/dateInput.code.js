<DateInput
  onChange={(value) => console.log(value)}
  disabled={false}
  size={Size.MEDIUM}
  value="1995-12-01"
  monthFormat={MonthFormat.LONG}
  mode={DateMode.DAY_MONTH_YEAR}
  placeholders={{
    day: 'DD',
    month: 'Month',
    year: 'YYYY',
  }}
/>;
