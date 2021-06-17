import { defineMessages, MessageDescriptor } from 'react-intl';

const messages: {
  [index: string]: MessageDescriptor;
} = defineMessages({
  minLength: {
    id: 'minLength',
    defaultMessage: 'Please type a value longer than {minLength}',
    description: 'Validation message for short messages',
  },
  maxLength: {
    id: 'maxLength',
    defaultMessage: 'Please type a value shorter than than {maxLength}',
    description: 'Validation message for long messages',
  },
});

export default messages;
