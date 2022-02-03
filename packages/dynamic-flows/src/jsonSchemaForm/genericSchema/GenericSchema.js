import Types from 'prop-types';

import { getSchemaType, schemaType } from '../../common/schemaTypes/schemaTypes';
import AllOfSchema from '../allOfSchema';
import ArraySchema from '../arrayTypeSchema';
import BasicTypeSchema from '../basicTypeSchema';
import ObjectSchema from '../objectSchema';
import OneOfSchema from '../oneOfSchema';
import PersistAsyncSchema from '../persistAsyncSchema';
import PromotedOneOfSchema from '../promotedOneOfSchema';
import ReadOnlySchema from '../readOnlySchema';
import ValidationAsyncSchema from '../validationAsyncSchema';

const GenericSchemaForm = (props) => {
  const { schema } = props;

  const type = getSchemaType(schema);

  switch (type) {
    case schemaType.READ_ONLY:
      return <ReadOnlySchema {...props} />;
    case schemaType.PERSIST_ASYNC:
      return <PersistAsyncSchema {...props} />;
    case schemaType.VALIDATION_ASYNC:
      return <ValidationAsyncSchema {...props} />;
    case schemaType.BASIC:
      return <BasicTypeSchema {...props} />;
    case schemaType.OBJECT:
      return <ObjectSchema {...props} key={JSON.stringify(schema)} />;
    case schemaType.ARRAY:
      return <ArraySchema {...props} />;
    case schemaType.PROMOTED_ONE_OF:
      return <PromotedOneOfSchema {...props} />;
    case schemaType.ONE_OF:
      return <OneOfSchema {...props} />;
    case schemaType.ALL_OF:
      return <AllOfSchema {...props} />;
    default:
      return <></>;
  }
};

GenericSchemaForm.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean', 'object', 'array']),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    oneOf: Types.arrayOf(Types.shape({})),
    allOf: Types.arrayOf(Types.shape({})),
    persistAsync: Types.shape({}),
    validationAsync: Types.shape({}),
    promotion: Types.shape({}),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  hideTitle: Types.bool,
  disabled: Types.bool,
  onPersistAsync: Types.func.isRequired,
};

GenericSchemaForm.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
  disabled: false,
};

export default GenericSchemaForm;
