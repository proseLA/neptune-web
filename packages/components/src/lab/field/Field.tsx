import React, { useState, cloneElement } from 'react';
import classNames from 'classnames';

import getAlertMessage from './getAlertMessage';
import InlineAlert from '../../inlineAlert';
import WithNormaliser from '../../withNormaliser';
import { Sentiment } from '../../common';

type FieldProps = {
  children: React.ReactNode;
  label?: string;
  messages: { error: string; help: string; validation: string[] };
  submitted?: boolean;
};

type OverriddenMethods = {
  onChange: (arg: any) => any;
  onBlur: (arg: any) => any;
  onFocus: (arg: any) => any;
  onSuccess: (arg: any) => any;
  onFailure: (arg: any) => any;
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

  return (
    <div
      className={classNames('form-group', {
        'has-error': type === Sentiment.NEGATIVE,
        'has-info': type === Sentiment.NEUTRAL,
      })}
    >
      <label className="control-label d-block">
        {label}

        <WithNormaliser
          render={(overriddenMethods: OverriddenMethods) =>
            cloneElement(children, {
              className: 'form-control',
              ...overriddenMethods,
            })
          }
          methodsToOvverride={methodsToOvverride}
          {...children.props}
        />
      </label>
      {message && <InlineAlert type={type}>{message}</InlineAlert>}
    </div>
  );
};

export default Field;
