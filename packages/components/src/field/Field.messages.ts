import { defineMessages, MessageDescriptor } from 'react-intl';

const messages: {
  [index: string]: MessageDescriptor;
} = defineMessages({
  minLength: {
    id: 'neptune.field.minLength',
    defaultMessage: 'Please provide message for {minLength}',
    description: 'Validation message for short entries',
  },
  maxLength: {
    id: 'neptune.field.maxLength',
    defaultMessage: 'Please provide message for {maxLength}',
    description: 'Validation message for long entries',
  },
  minimum: {
    id: 'neptune.field.minimum',
    defaultMessage: 'Please provide message for {minimum}',
    description: 'Validation message for small entries',
  },
  maximum: {
    id: 'neptune.field.maximum',
    defaultMessage: 'Please provide message for {maximum}',
    description: 'Validation message for big entries',
  },
  pattern: {
    id: 'neptune.field.pattern',
    defaultMessage: 'Please provide message for {pattern}',
    description: 'Validation message for incorrect format',
  },
  required: {
    id: 'neptune.field.required',
    defaultMessage: 'Please provide message for {required}',
    description: 'Validation message for required entires',
  },
});

export default messages;
