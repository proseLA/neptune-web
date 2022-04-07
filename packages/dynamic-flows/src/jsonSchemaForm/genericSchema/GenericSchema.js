import PropTypes from 'prop-types';

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
  schema: PropTypes.shape({
    type: PropTypes.oneOf(['string', 'number', 'integer', 'boolean', 'object', 'array']),
    enum: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    const: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    oneOf: PropTypes.arrayOf(PropTypes.shape({})),
    allOf: PropTypes.arrayOf(PropTypes.shape({})),
    persistAsync: PropTypes.shape({}),
    validationAsync: PropTypes.shape({}),
    promotion: PropTypes.shape({}),
  }).isRequired,
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
  hideTitle: PropTypes.bool,
  disabled: PropTypes.bool,
  onPersistAsync: PropTypes.func.isRequired,
};

GenericSchemaForm.defaultProps = {
  model: null,
  errors: null,
  hideTitle: false,
  disabled: false,
};

export default GenericSchemaForm;
