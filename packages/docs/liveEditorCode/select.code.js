() => {
  const [selected, setSelected] = React.useState({
    value: 0,
    label: 'A thing',
    note: 'with a note',
  });

  return (
    <Select
      size="md"
      placeholder="Placeholder"
      dropdownRight="xs"
      dropdownWidth="lg"
      inverse={false}
      block
      selected={selected}
      disabled={false}
      onChange={(v) => setSelected(v)}
      required={false}
      searchPlaceholder="Search placeholder"
      dropdownUp={false}
      search
      options={[
        { header: 'Basic' },
        { value: 0, label: 'A thing' },
        { value: 1, label: 'A thing', note: 'with a note' },
        { value: 2, label: 'Another thing', secondary: 'with secondary text this time' },
        {
          value: 3,
          label: 'One more thing',
          note: 'with a note',
          secondary: 'and with secondary text',
        },
        { value: 4, label: 'A disabled thing', disabled: true },
        { header: 'Icons' },
        { value: 5, label: 'Profile', icon: <ProfileIcon /> },
        { value: 6, label: 'Globe', icon: <GlobeIcon /> },
        { header: 'Currencies' },
        { value: 7, label: 'British pound', currency: 'gbp' },
        { value: 8, label: 'Euro', currency: 'eur' },
        { separator: true },
        { value: 9, label: 'Something else' },
        { header: 'Options with searchable alternatives' },
        {
          value: 10,
          label: 'A thing with searchable alternatives',
          searchStrings: ['abbreviation', 'acronym', 'nickname'],
        },
      ]}
    />
  );
};
