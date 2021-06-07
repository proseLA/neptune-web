() => {
  const [value, setValue] = React.useState('');
  const [validation, setValidation] = React.useState([]);

  const handleOnChange = (val) => {
    const validations = {
      minLength: { value: 3, message: 'Insert a value longer than 3' },
      maxLength: { value: 6, message: 'Insert a value shorter than 6' },
    };

    const failures = formValidators({
      value: val,
      validations,
      isRequired: true,
      type: 'string',
    });

    setValidation(failures);
    setValue(val);
  };

  return (
    <Field
      label="Text Field"
      messages={{
        help: 'help message',
        error: 'manual error',
        validation,
      }}
    >
      <input type="text" value={value} onChange={(val) => handleOnChange(val)} />
    </Field>
  );
};
