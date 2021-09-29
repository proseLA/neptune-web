() => {
  const [selected, setSelected] = React.useState(['accounting']);

  const handleOnChange = ({ selectedValue, isEnabled }) => {
    setSelected(isEnabled ?[...selected, selectedValue] : selected.filter(value => value !== selectedValue));
  }

  return (
    <Chips
      chips={[
        {
          value: 'accounting',
          label: 'Accounting',
        },
        {
          value: 'payroll',
          label: 'Payroll',
        },
        {
          value: 'reporting',
          label: 'Reporting',
        },
        {
          value: 'payments',
          label: 'Payments',
        },
      ]}
      onChange={handleOnChange}
      selected={selected}
      aria-label="Choose category"
      multiple
    />
  );
};
