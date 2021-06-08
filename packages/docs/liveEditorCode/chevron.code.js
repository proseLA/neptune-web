() => {
  const [isTop, setIsTop] = React.useState(true);
  return (
    <>
      <Chevron orientation={isTop ? Position.TOP : Position.BOTTOM} size={Size.MEDIUM} />
      <Checkbox
        label="Check me to flip the chevron!"
        onChange={() => setIsTop(!isTop)}
        checked={isTop}
      />
    </>
  );
};
