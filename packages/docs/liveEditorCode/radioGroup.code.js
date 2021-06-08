() => {
  const avatar = <Avatar type={AvatarType.INITIALS}>HD</Avatar>;

  return (
    <RadioGroup
      selectedValue="radio-2"
      name="radio-group"
      onChange={(v) => console.log(v)}
      radios={[
        {
          value: 'radio-1',
          label: 'Radio1',
          secondary: 'Secondary line 1',
          disabled: false,
        },
        {
          value: 'radio-2',
          label: 'Radio2',
          secondary: 'Secondary line 2',
          disabled: false,
        },
        {
          value: 'radio-3',
          label: 'Radio3',
          secondary: 'Secondary line 3',
          disabled: true,
        },
      ]}
    />
  );
};
