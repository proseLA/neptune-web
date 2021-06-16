import React from 'react';
import { Sentiment } from '../../common/propsValues/sentiment';
import { useIntl } from 'react-intl';
import { Validations } from '../Field';

import defaultMessages from '../Field.messages';

interface Args {
  blurred: boolean;
  changed: boolean;
  focused: boolean;
  messages: { error: string; help: string; validations: Validations[] };
  submitted: boolean;
}

interface Return {
  message: null | string | React.ReactElement;
  type: string | Sentiment.NEUTRAL | Sentiment.NEGATIVE;
}

const getAlertMessage = ({
  blurred,
  changed,
  focused,
  messages: { error, help, validations },
  submitted,
}: Args): Return => {
  const intl = useIntl();
  let type = '';
  let message = null;

  const isErrorVisible = !changed && error;
  const isValidationVisible = (submitted || (changed && blurred)) && !!validations.length;
  const isHelpVisible = focused && help;

  if (isErrorVisible) {
    type = Sentiment.NEGATIVE;
    message = error;
  } else if (isValidationVisible) {
    type = Sentiment.NEGATIVE;

    message = validations.map(({ message, value }) => {
      return (
        <li key={message}>
          {defaultMessages[message]
            ? intl.formatMessage(defaultMessages[message], {
                [message]: value,
              })
            : message}
        </li>
      );
    });

    message = <ul className="list-unstyled">{message}</ul>;
  } else if (isHelpVisible) {
    type = Sentiment.NEUTRAL;
    message = help;
  }

  return {
    message,
    type,
  };
};

export default getAlertMessage;
