import Types from 'prop-types';

import PersistAsyncBasicSchema from './basic';
import PersistAsyncBlobSchema from './blob';

const PersistAsyncSchema = (props) => {
  const persistAsyncSchemaType = props.schema.persistAsync.schema.type;

  // eslint-disable-next-line sonarjs/no-small-switch
  switch (persistAsyncSchemaType) {
    case 'blob':
      return <PersistAsyncBlobSchema {...props} />;
    default:
      return <PersistAsyncBasicSchema {...props} />;
  }
};

PersistAsyncSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    persistAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
      idProperty: Types.string,
      schema: Types.shape({
        format: Types.string,
        type: Types.string,
      }),
    }),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number, Types.bool])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    format: Types.string,
    title: Types.string,
    values: Types.arrayOf(Types.shape({})),
    default: Types.oneOfType([Types.string, Types.number, Types.bool]),
    disabled: Types.bool,
    hidden: Types.bool,
    help: Types.shape({}),
  }).isRequired,
  translations: Types.shape({}),
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  onPersistAsync: Types.func.isRequired,
  required: Types.bool,
};

PersistAsyncSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default PersistAsyncSchema;
