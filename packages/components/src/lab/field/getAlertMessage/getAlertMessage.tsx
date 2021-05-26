import React from 'react';
import { Sentiment } from '../../../common/propsValues/sentiment';

interface Args {
  blurred: boolean;
  changed: boolean;
  focused: boolean;
  messages: { error: string; help: string; validation: string[] };
  submitted: boolean;
}

interface Return {
  message: null | string | [];
  type: string | Sentiment.NEUTRAL | Sentiment.NEGATIVE;
}

const getAlertMessage = ({
  blurred,
  changed,
  focused,
  messages: { error, help, validation },
  submitted,
}: Args): Return => {
  let type = '';
  let message = null;

  const isErrorVisible = !changed && error;
  const isValidationVisible = (submitted || (changed && blurred)) && !!validation.length;
  const isHelpVisible = focused && help && !isValidationVisible;

  if (isErrorVisible) {
    type = Sentiment.NEGATIVE;
    message = error;
  } else if (isValidationVisible) {
    type = Sentiment.NEGATIVE;
    message = validation.map((val) => <div key={val}>{val}</div>);
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
