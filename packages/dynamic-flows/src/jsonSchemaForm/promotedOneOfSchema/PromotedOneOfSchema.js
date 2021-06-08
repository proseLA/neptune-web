import React, { useState } from 'react';
import Types from 'prop-types';
import ObjectSchema from '../objectSchema';
import GenericSchema from '../genericSchema';
import DynamicAlert from '../../layout/alert';
import PromotedOneOfControl from './control/PromotedOneOfControl';
import { getSelectionFromModel } from './PromotedOneOfSchemaModelMatcher';

const isPromoted = (schema) => schema.promoted === true;

const PromotedOneOfSchema = (props) => {
  const [selection, setSelection] = useState(
    getSelectionFromModel(props.schema, props.model) ||
      props.schema.promotion.default ||
      'promoted',
  );

  const promotedAlert = props.schema.alert;
  const promotedOneOf = props.schema.oneOf.find(isPromoted);

  const getPromotedObjectSchema = (promotedSchema) => {
    return {
      ...promotedSchema,
      // We don't need to show these since they are already displayed in the radio option
      title: undefined,
      description: undefined,
    };
  };

  const getOtherOneOf = (schema) => {
    const other = schema.oneOf.filter((one) => !isPromoted(one));
    const title = schema.promotion.other.heading.text;
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
  schema: Types.shape({
    oneOf: Types.arrayOf(Types.object).isRequired,
    promotion: Types.shape({
      default: Types.string,
      promoted: Types.shape({
        control: Types.string,
        checkedMeans: Types.string,
        title: Types.string,
      }),
      other: Types.shape({
        title: Types.string,
        heading: Types.shape({
          text: Types.string,
        }),
        description: Types.string,
      }).isRequired,
    }),
    alert: Types.shape({}),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
};

PromotedOneOfSchema.defaultProps = {
  model: null,
};

export default PromotedOneOfSchema;
