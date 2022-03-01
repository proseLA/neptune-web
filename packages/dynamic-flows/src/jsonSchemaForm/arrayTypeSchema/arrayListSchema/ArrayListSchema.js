import PropTypes from 'prop-types';

import { ArrayItemVariants, getListItemType } from '../../../common/schemaTypes/arraySchemaTypes';

import MultipleFileUploadSchema from './multipleFileUploadSchema';

const ArrayListSchema = (props) => {
  const { FILE } = ArrayItemVariants;
  const arrayItemType = getListItemType(props.schema);

  if (arrayItemType === FILE) {
    return <MultipleFileUploadSchema {...props} />;
  }

  throw new Error('Not implemented');
};

ArrayListSchema.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    maxItems: PropTypes.number,
    minItems: PropTypes.number,
    addItemTitle: PropTypes.string,
    removeItemTitle: PropTypes.string,
    items: PropTypes.object.isRequired,
  }).isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
  disabled: PropTypes.bool,
  errors: PropTypes.string,
  hideTitle: PropTypes.bool,
  locale: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  submitted: PropTypes.bool.isRequired,
  translations: PropTypes.shape({}),
};

ArrayListSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default ArrayListSchema;
