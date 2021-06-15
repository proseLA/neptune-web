import { defineMessages } from 'react-intl';

let messages: {
  [index: string]: { id: string; defaultMessage: string; description: string };
} = defineMessages({
  minLength: {
    id: 'minLength',
    defaultMessage: 'Please type a value longer than {minLength}',
    description: 'Validation message for short messages',
  },
});

export default messages;
