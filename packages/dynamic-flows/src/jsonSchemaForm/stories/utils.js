import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { useState } from 'react';

import JsonSchemaForm from '../JsonSchemaForm';

// eslint-disable-next-line react/prop-types
export const JsonSchemaFormWrapper = ({ schema, initialModel }) => {
  const stringError = text('error from server', '');
  const errors = { string: stringError };
  const submitted = boolean('submitted', false);
  const disabled = boolean('disabled', false);

  const [model, setModel] = useState(initialModel);

  return (
    <>
      <JsonSchemaForm
        schema={schema}
        model={model}
        errors={errors}
        submitted={submitted}
        disabled={disabled}
        baseUrl=""
        onChange={(newModel) => {
          // eslint-disable-next-line no-console
          console.log(newModel);
          setModel(newModel);
          action('onChange')(newModel);
        }}
        onPersistAsync={() => {}}
      />
      <hr />
      <strong>Model:</strong>
      <pre>{JSON.stringify(model, null, 2)}</pre>
    </>
  );
};
