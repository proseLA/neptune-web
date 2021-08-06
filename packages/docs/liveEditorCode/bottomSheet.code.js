() => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      Show menu
      <Button priority="tertiary" size={Size.SMALL} onClick={() => setOpen(true)}>
        <Menu />
      </Button>
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <h2 className="p-x-2">Manage your card</h2>
        <NavigationOption
          showMediaAtAllSizes
          title="Show card details"
          media={<Card size={24} />}
          className="p-l-2"
        />
        <NavigationOption
          showMediaAtAllSizes
          title="Show PIN"
          media={<PinCode size={24} />}
          className="p-l-2"
        />
      </BottomSheet>
    </>
  );
};
