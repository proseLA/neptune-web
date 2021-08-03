import { SafeIntlShape } from './types';
import en from '../../i18n/en.json';

function getMessage<Messages extends { [key: string]: string }>(
  messages: Messages,
  key: string,
): string {
  if (!Object.keys(messages).includes(key)) {
    return key;
  }

  return messages[key];
}

export const defaultIntl: SafeIntlShape = {
  locale: 'en-GB',
  formatMessage: (descriptor, values, opts) => {
    const messageId = String(descriptor.id);

    let message = getMessage(en, messageId);

    if (values) {
      Object.entries(values).forEach(([key, value]) => {
        message = message.replace(`{${key}}`, String(value));
      });
    }

    return message;
  },
};
