() => {
  const [selected, setSelected] = React.useState(1);
  return (
    <Chips
      chips={[
        {
          value: 1,
          label: '100 GBP',
        },
        {
          value: 2,
          label: '200 GBP',
        },
        {
          value: 3,
          label: '300 GBP+',
        },
      ]}
      onChange={({ selectedValue }) => setSelected(selectedValue)}
      selected={selected}
      aria-label="Choose category"
    />
  );
};
