() => {
  const [state, setDimmerState] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => setDimmerState(true)}
        disabled={false}
        block={false}
        size={Size.Medium}
      >
        Click here to Open dimmer!
      </Button>
      <Dimmer
        open={state}
        onClose={() => setDimmerState(false)}
        fadeContentOnExit
        fadeContentOnEnter
      />
    </>
  );
};
