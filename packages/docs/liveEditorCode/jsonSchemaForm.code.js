<JsonSchemaForm
  errors={{ string: 'Manual error' }}
  onChange={(model) => console.log('model', model)}
  submitted={false}
  locale="en-GB"
  model={{
    number: 3,
    string: 'hi',
    date: '12-10-2001',
    phone: '+447573135343',
  }}
  schema={{
    allOf: [
      {
        title: 'Number schemas',
        type: 'object',
        properties: {
          number: {
            type: 'number',
            title: 'Number input',
            minimum: 2,
            maximum: 200,
            default: 1,
            help: {
              message: '2 or more',
            },
            validationMessages: {
              minimum: 'Too low buddy!',
              maximum: 'Crazy high!',
            },
          },
        },
        required: ['number'],
      },
      {
        title: 'String schemas',
        type: 'object',
        properties: {
          string: {
            type: 'string',
            title: 'Text input',
            minLength: 2,
            maxLength: 8,
            pattern: '^[a-z]+$',
            default: 'abc',
            help: {
              list: ['Keep it secret', 'Keep it safe'],
            },
          },
          date: {
            type: 'string',
            format: 'date',
            title: 'Date input',
            minimum: '2000-02-01',
            maximum: '2010-01-01',
            validationMessages: {
              minimum: 'Must be after Feb 2000',
              maximum: 'Must be before Jan 2010',
            },
          },
          phone: {
            type: 'string',
            format: 'phone',
            title: 'Phone input',
            minLength: 10,
            maxLength: 12,
          },
          file: {
            type: 'string',
            format: 'base64url',
            title: 'File input',
          },
        },
        required: ['string'],
      },
      {
        title: 'Boolean schemas',
        type: 'object',
        properties: {
          boolean: {
            type: 'boolean',
            title: 'Boolean input',
            width: 'md',
          },
        },
      },
      {
        title: 'Enum schemas',
        type: 'object',
        properties: {
          select: {
            title: 'Select',
            placeholder: 'Please choose',
            values: [
              {
                value: 'one',
                label: 'One',
              },
              {
                value: 'two',
                label: 'Two',
              },
              {
                value: 'three',
                label: 'Three',
              },
            ],
            enum: ['one', 'two', 'three'],
          },
          radio: {
            title: 'Radio',
            placeholder: 'Please choose',
            values: [
              {
                value: 'one',
                label: 'One',
              },
              {
                value: 'two',
                label: 'Two',
              },
            ],
            enum: ['one', 'two'],
          },
        },
        required: ['select', 'radio'],
      },
    ],
  }}
/>;
