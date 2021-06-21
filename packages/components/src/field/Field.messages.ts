import { defineMessages, MessageDescriptor } from 'react-intl';

const messages: {
  [index: string]: MessageDescriptor;
} = defineMessages({
  minLength: {
    id: 'neptune.field.minLength',
    defaultMessage: 'Please enter at least {minLength} characters.',
    description: 'Validation message for short entries',
  },
  maxLength: {
    id: 'neptune.field.maxLength',
    defaultMessage: 'Please enter less than {maxLength} characters.',
    description: 'Validation message for long entries',
  },
  minimum: {
    id: 'neptune.field.minimum',
    defaultMessage: 'Please enter a number that’s {minimum} or greater.',
    description: 'Validation message for small entries',
  },
  maximum: {
    id: 'neptune.field.maximum',
    defaultMessage: 'Please enter a number that’s {maximum} or less.',
    description: 'Validation message for big entries',
  },
  pattern: {
    id: 'neptune.field.pattern',
    defaultMessage: 'Please correct the format.',
    description: 'Validation message for incorrect format',
  },
  required: {
    id: 'neptune.field.required',
    defaultMessage: 'This field is required.',
    description: 'Validation message for required entires',
  },
});

export default messages;
