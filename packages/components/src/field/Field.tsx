import React, { useState, cloneElement } from 'react';
import classNames from 'classnames';

import getAlertMessage from './getAlertMessage';
import InlineAlert from '../inlineAlert';
import Info from '../info';
import WithExtendedMethods from '../withExtendedMethods';
import { Sentiment } from '../common';

export interface Validations {
  message: string;
}

type FieldProps = {
  children: React.ReactElement;
  /** If label is not provided the field will be wrapped in a span */
  label?: string;
  messages: {
    error: string;
    help: string;
    info: { content: string; 'aria-label': string };
    validations: Validations[];
  };
  submitted?: boolean;
};

type OverriddenMethods = {
  onChange: (arg: any) => string;
  onBlur: (arg: any) => string;
  onFocus: (arg: any) => string;
};

const Field: React.FunctionComponent<FieldProps> = ({
  children,
  label,
  messages,
  submitted = false,
}) => {
  const [blurred, setBlurred] = useState(false);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleOnBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  const handleOnChange = () => {
    setChanged(true);
  };

  const handleOnFocus = () => {
    setFocused(true);
    setBlurred(false);
  };

  const { message, type } = getAlertMessage({
    blurred,
    changed,
    focused,
    messages,
    submitted,
  });

  const methodsToOvverride = {
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
  };

  const Element = label ? 'label' : 'span';

  return (
    <div
      className={classNames('form-group', {
        'has-error': type === Sentiment.NEGATIVE && message,
        'has-info': type === Sentiment.NEUTRAL,
      })}
    >
      <Element className="control-label d-block">
        {label}
        {messages?.info && <Info {...messages.info} className="m-l-1" />}

        <WithExtendedMethods
          render={(overriddenMethods: OverriddenMethods) =>
            cloneElement(children, {
              className: 'form-control',
              ...overriddenMethods,
            })
          }
          methodsToOvverride={methodsToOvverride}
          {...children.props}
        />
      </Element>
      {message && <InlineAlert type={type}>{message}</InlineAlert>}
    </div>
  );
};

export default Field;
