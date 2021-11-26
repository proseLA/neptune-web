() => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <DropFade show={show}>
        {/* The top level child element must accept a ref */}
        <div>
          <Nudge
            media={
              <img
                alt=""
                style={{ width: '44px', height: '44px' }}
                src="https://wise.com/public-resources/assets/public-navigation/saving.svg"
              />
            }
            title="Did you know it's cool to be Wise?"
            link="Get Wise"
            href="https://wise.com"
            onDismiss={() => {}}
          />
        </div>
      </DropFade>
      <Button className="m-t-3" block onClick={() => setShow(!show)}>
        Click me to demonstrate the animation
      </Button>
    </>
  );
};
