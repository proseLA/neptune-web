import { defineMessages } from 'react-intl';

const messages = defineMessages({
  minLength: {
    id: 'minLength',
    defaultMessage: 'Please type a value longer than {minLength}',
    description: 'Validation message for short messages',
  },
});

export default messages;
