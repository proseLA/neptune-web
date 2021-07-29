() => {
  return (
    <ActionOption
      title="Action option"
      content="Normally, the button and icon are vertically centered."
      action="Action"
      onClick={console.log}
      media={<FastFlagIcon size={24} />}
    />
  );
};
