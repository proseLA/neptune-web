() => {
  const [check, setCheck] = React.useState(false);
  const avatar = <Avatar type={AvatarType.INITIALS}>HD</Avatar>;

  return (
    <Radio
      label="label"
      name="name"
      id="id"
      checked={check}
      disabled={false}
      onChange={() => setCheck(!check)}
    />
  );
};
