() => {
  const [value, setValue] = React.useState('a value');
  const [validations, setValidations] = React.useState([]);
  const intl = useIntl();

  const handleOnChange = (val) => {
    const failures = [];
    const minLength = 3;
    const maxLength = 6;
    if (val.length < minLength) {
      const message = intl.formatMessage({ id: 'neptune.field.minLength' }, { minLength });
      failures.push(message);
    }

    if (val.length > maxLength) {
      const message = 'A custom message for maxLength errors';
      failures.push(message);
    }

    setValue(val);
    setValidations(failures);
  };

  return (
    <Field
      label="Text Field"
      messages={{
        help: 'Please insert a value between 3 and 6 character',
        error: 'manual error',
        validations,
        info: {
          content: 'Auxiliary help text for field',
          'aria-label': 'Click here for more details',
        },
      }}
    >
      <input type="text" value={value} onChange={(event) => handleOnChange(event.target.value)} />
    </Field>
  );
};
