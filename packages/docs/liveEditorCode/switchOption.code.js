() => {
  const [checked, setChecked] = React.useState(false);
  return (
    <SwitchOption
      id="switch-option"
      checked={checked}
      name="switch-option"
      title="Switch option"
      aria-label="Switch option"
      content="Normally, the button and icon are vertically centered."
      onChange={() => setChecked(!checked)}
      media={<FastFlagIcon size={24} />}
    />
  );
};
