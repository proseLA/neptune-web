/* eslint-disable no-lonely-if */
import { DefinitionList, Layout } from '@transferwise/components';
import { isBoolean } from '@transferwise/neptune-validation';
import Types from 'prop-types';
import React from 'react';
import { useIntl } from 'react-intl';

import { isBasicSchema, isOneOfSchema } from '../../common/schemaTypes/schemaTypes';
import { getCurrencyFlag } from '../schemaFormControl/availableCurrencyFlags';

import messages from './ReadOnlySchema.messages';

const ReadOnlySchema = (props) => {
  const { schema, model } = props;
  const { title = '' } = schema;
  const { formatMessage } = useIntl();

  let value = null;
  if (isBasicSchema(schema)) {
    if (isOneOfSchema(schema)) {
      value = getValueFromOneOfSchema(schema, model);
    } else {
      if (schema.type === 'boolean' && isBoolean(model)) {
        value = model ? formatMessage(messages.yes) : formatMessage(messages.no);
      } else {
        value = model && model.toString();
      }
    }
  }

  return (
    <DefinitionList
      layout={Layout.VERTICAL_ONE_COLUMN}
      definitions={[{ title, value: value || '', key: '' }]}
    />
  );
};

export default ReadOnlySchema;

function getValueFromOneOfSchema(schema, model) {
  const option = getSelectedOneOf(schema, model);
  return option ? getValueFromOption(option) : model;
}

function getSelectedOneOf(schema, model) {
  return schema.oneOf.find((childSchema) => {
    if ('const' in childSchema) {
      return model === childSchema.const;
    }
    if ('enum' in childSchema && childSchema.enum.length > 0) {
      return model === childSchema.enum[0];
    }
    return false;
  });
}

function getValueFromOption(option) {
  const text = option.description ? `${option.title} - ${option.description}` : option.title;
  const currencyFlag = getCurrencyFlagFromOption(option);
  return currencyFlag ? (
    <>
      {currencyFlag} {text}
    </>
  ) : (
    text
  );
}

function getCurrencyFlagFromOption(option) {
  const currency = getCurrencyFlag(option.icon?.name)?.currency;
  return currency ? <i className={`currency-flag currency-flag-${currency} hidden-xs`} /> : null;
}

ReadOnlySchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    type: Types.oneOf(['string', 'number', 'integer', 'boolean', 'object', 'array']),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    oneOf: Types.arrayOf(Types.shape({})),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
};

ReadOnlySchema.defaultProps = {
  model: null,
};
