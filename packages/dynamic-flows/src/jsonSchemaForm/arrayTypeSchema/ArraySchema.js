import PropTypes from 'prop-types';

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

const ListSchemaItemsType = PropTypes.object;
const TupleSchemaItemsType = PropTypes.array;

ArraySchema.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    maxItems: PropTypes.number,
    minItems: PropTypes.number,
    items: PropTypes.oneOfType([ListSchemaItemsType, TupleSchemaItemsType]).isRequired,
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
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  submitted: PropTypes.bool.isRequired,
};

ArraySchema.defaultProps = {
  errors: null,
  required: false,
};

export default ArraySchema;
