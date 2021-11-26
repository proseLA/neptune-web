() => {
  const createSnackbar = useSnackbar();

  const handleClick = () => {
    createSnackbar({
      text: <span>Triggered using hook</span>,
      theme: "light"
    });
  };

  return (
  <Button block onClick={handleClick}>
    Show
  </Button>
  );
};
