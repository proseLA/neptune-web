import { InlineAlert } from '@transferwise/components';
import { formatDate } from '@transferwise/formatting';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import controlFeedbackMessages from './ControlFeedback.messages';

const ControlFeedback = (props) => {
  const defaultValidationMessages = useDefaultValidationMessages(props.schema);

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

function useDefaultValidationMessages(schema) {
  const { formatMessage, locale } = useIntl();

  const formattedMessages = {
    type: formatMessage(controlFeedbackMessages.type),
    minimum: formatMessage(controlFeedbackMessages.minimum, { minimum: schema.minimum }),
    maximum: formatMessage(controlFeedbackMessages.maximum, { maximum: schema.maximum }),
    minLength: formatMessage(controlFeedbackMessages.minLength, { minLength: schema.minLength }),
    maxLength: formatMessage(controlFeedbackMessages.maxLength, { maxLength: schema.maxLength }),
    pattern: formatMessage(controlFeedbackMessages.pattern),
    required: formatMessage(controlFeedbackMessages.required),
  };

  if (schema.format === 'date') {
    formattedMessages.minimum = formatMessage(controlFeedbackMessages.minimumDate, {
      minimum: formatDate(new Date(schema.minimum), locale, { dateStyle: 'long' }),
    });
    formattedMessages.maximum = formatMessage(controlFeedbackMessages.maximumDate, {
      maximum: formatDate(new Date(schema.maximum), locale, { dateStyle: 'long' }),
    });
    formattedMessages.pattern = formatMessage(controlFeedbackMessages.patternDate);
  }

  return formattedMessages;
}

export default ControlFeedback;
