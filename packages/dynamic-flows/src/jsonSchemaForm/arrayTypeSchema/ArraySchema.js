import Types from 'prop-types';

import { ArraySchemaVariants, getArrayVariant } from '../../common/schemaTypes/arraySchemaTypes';

import ArrayListSchema from './arrayListSchema/ArrayListSchema';

//Responsibility: decision-maker what array type is
const ArraySchema = (props) => {
  const { schema } = props;
  const { TUPLE, LIST } = ArraySchemaVariants;

  const arraySchemaVariant = getArrayVariant(schema);

  switch (arraySchemaVariant) {
    case LIST:
      return <ArrayListSchema {...props} />;

    case TUPLE:
    default:
      throw new Error('Not implemented');
  }
};

const ListSchemaItemsType = Types.object;
const TupleSchemaItemsType = Types.array;

ArraySchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    type: Types.string.isRequired,
    description: Types.string,
    maxItems: Types.number,
    minItems: Types.number,
    items: Types.oneOfType([ListSchemaItemsType, TupleSchemaItemsType]).isRequired,
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

ArraySchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default ArraySchema;
