import Types from 'prop-types';

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
  schema: Types.shape({
    title: Types.string,
    type: Types.string.isRequired,
    description: Types.string,
    maxItems: Types.number,
    minItems: Types.number,
    addItemTitle: Types.string,
    removeItemTitle: Types.string,
    items: Types.object.isRequired,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  disabled: Types.bool,
  errors: Types.string,
  hideTitle: Types.bool,
  locale: Types.string,
  onChange: Types.func.isRequired,
  required: Types.bool,
  submitted: Types.bool.isRequired,
  translations: Types.shape({}),
};

ArrayListSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default ArrayListSchema;
