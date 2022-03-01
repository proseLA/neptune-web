import PropTypes from 'prop-types';

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
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: PropTypes.shape({
      context: PropTypes.string,
      markdown: PropTypes.string,
    }),
    persistAsync: PropTypes.shape({
      method: PropTypes.string,
      url: PropTypes.string,
      param: PropTypes.string,
      idProperty: PropTypes.string,
      schema: PropTypes.shape({
        format: PropTypes.string,
        type: PropTypes.string,
      }),
    }),
    enum: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    ),
    const: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    format: PropTypes.string,
    title: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({})),
    default: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    help: PropTypes.shape({}),
  }).isRequired,
  translations: PropTypes.shape({}),
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.shape({})]),
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  onPersistAsync: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

PersistAsyncSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default PersistAsyncSchema;
