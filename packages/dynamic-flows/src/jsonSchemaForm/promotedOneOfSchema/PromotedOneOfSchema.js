import PropTypes from 'prop-types';
import { useState } from 'react';

import DynamicAlert from '../../layout/alert';
import GenericSchema from '../genericSchema';
import ObjectSchema from '../objectSchema';

import { getSelectionFromModel } from './PromotedOneOfSchemaModelMatcher';
import PromotedOneOfControl from './control/PromotedOneOfControl';

const isPromoted = (schema) => schema.promoted === true;

const getPromotedObjectSchema = (promotedSchema) => {
  return {
    ...promotedSchema,
    // We don't need to show these since they are already displayed in the radio option
    title: undefined,
    description: undefined,
  };
};

const PromotedOneOfSchema = (props) => {
  const [selection, setSelection] = useState(
    getSelectionFromModel(props.schema, props.model) ||
      props.schema.promotion.default ||
      'promoted',
  );

  const promotedAlert = props.schema.alert;
  const promotedOneOf = props.schema.oneOf.find(isPromoted);

  const getOtherOneOf = (schema) => {
    const other = schema.oneOf.filter((one) => !isPromoted(one));
    const title = schema.promotion.other.heading?.text;
    if (other.length === 1) {
      return { ...other[0], title };
    }
    if (other.length > 1) {
      return {
        title,
        oneOf: other,
        control: schema.control,
      };
    }

    return null;
  };

  const promotedObjectSchema = getPromotedObjectSchema(promotedOneOf);

  const otherOneOf = getOtherOneOf(props.schema);

  return (
    <>
      {promotedAlert && <DynamicAlert component={promotedAlert} />}
      <PromotedOneOfControl
        title={props.schema.title}
        promotedOneOf={promotedOneOf}
        promotion={props.schema.promotion}
        selection={selection}
        setSelection={setSelection}
      />

      {selection === 'promoted' && <ObjectSchema {...props} schema={promotedObjectSchema} />}
      {selection === 'other' && <GenericSchema {...props} schema={otherOneOf} />}
    </>
  );
};

PromotedOneOfSchema.propTypes = {
  schema: PropTypes.shape({
    title: PropTypes.string,
    oneOf: PropTypes.arrayOf(PropTypes.object).isRequired,
    promotion: PropTypes.shape({
      default: PropTypes.string,
      promoted: PropTypes.shape({
        control: PropTypes.string,
        checkedMeans: PropTypes.string,
        title: PropTypes.string,
      }),
      other: PropTypes.shape({
        title: PropTypes.string,
        heading: PropTypes.shape({
          text: PropTypes.string,
        }),
        description: PropTypes.string,
      }).isRequired,
    }),
    alert: PropTypes.shape({}),
  }).isRequired,
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
};

PromotedOneOfSchema.defaultProps = {
  model: null,
};

export default PromotedOneOfSchema;
