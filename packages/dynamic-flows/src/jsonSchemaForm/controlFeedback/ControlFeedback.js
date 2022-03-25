import { InlineAlert } from '@transferwise/components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import controlFeedbackMessages from './ControlFeedback.messages';

const ControlFeedback = (props) => {
  const defaultValidationMessages = useDefaultValidationMessages();

  const validationMessages = {
    ...defaultValidationMessages, //       default validation messages
    ...props.validationMessages, //        overridden by props
    ...props.schema.validationMessages, // overriden by schema
  };

  const isErrorVisible = (props.submitted || !props.changed) && !!props.errors;
  const isValidationVisible =
    (props.submitted || (props.changed && props.blurred)) && !!props.validations.length;
  const isDescriptionVisible = props.focused && props.schema.description && !isValidationVisible;
  const isValidationAsyncSuccessMessageVisible = !!props.validationAsyncSuccessMessage;

  return (
    <div>
      {isErrorVisible && <InlineAlert type="error">{props.errors}</InlineAlert>}
      {isValidationVisible && (
        <InlineAlert type="error">
          {props.validations.map((validation) => (
            <div key={validation}>{validationMessages[validation]}</div>
          ))}
        </InlineAlert>
      )}
      {(isDescriptionVisible || isValidationAsyncSuccessMessageVisible) && (
        <InlineAlert type="info">
          {isDescriptionVisible && <div>{props.schema.description}</div>}
          {isValidationAsyncSuccessMessageVisible && (
            <div>{props.validationAsyncSuccessMessage}</div>
          )}
        </InlineAlert>
      )}
    </div>
  );
};

const validationMessagesProps = PropTypes.shape({
  minimum: PropTypes.string,
  maximum: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.string,
});

ControlFeedback.propTypes = {
  changed: PropTypes.bool.isRequired, // Has the control been interacted with
  blurred: PropTypes.bool.isRequired, // Has the control been blurred at least once
  focused: PropTypes.bool.isRequired, // Is the control in focus
  submitted: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  validations: PropTypes.arrayOf(PropTypes.string),
  validationMessages: validationMessagesProps,
  schema: PropTypes.shape({
    description: PropTypes.string,
    validationMessages: validationMessagesProps,
  }).isRequired,
  validationAsyncSuccessMessage: PropTypes.string,
};

ControlFeedback.defaultProps = {
  errors: '',
  validations: [],
  validationMessages: {},
  validationAsyncSuccessMessage: null,
};

function useDefaultValidationMessages() {
  const { formatMessage } = useIntl();

  const formattedMessages = {};
  for (const key in controlFeedbackMessages) {
    formattedMessages[key] = formatMessage(controlFeedbackMessages[key]);
  }
  return formattedMessages;
}

export default ControlFeedback;
