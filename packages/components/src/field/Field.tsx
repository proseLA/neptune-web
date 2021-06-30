import React, { useState, cloneElement, MouseEvent } from 'react';
import classNames from 'classnames';

import getAlertMessage from './getAlertMessage';
import InlineAlert from '../inlineAlert';
import Info from '../info';
import WithExtendedMethods from '../withExtendedMethods';
import { Sentiment } from '../common';

type FieldProps = {
  children: React.ReactElement;
  label?: string;
  messages: {
    error: string;
    help: string;
    info?: { content: string; 'aria-label': string };
    validations: { message: string }[];
  };
  submitted?: boolean;
};

type extendedMethods = {
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

  const methodsToExtend = {
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
  };

  const child = (
    <WithExtendedMethods
      render={(extendedMethods: extendedMethods) =>
        cloneElement(children, {
          className: 'form-control',
          ...extendedMethods,
        })
      }
      methodsToExtend={methodsToExtend}
      {...children.props}
    />
  );

  return (
    <div
      className={classNames('form-group', {
        'has-error': type === Sentiment.ERROR && message,
        'has-info': type === Sentiment.INFO,
      })}
    >
      {label ? (
        <label className="control-label d-block">
          <span className="d-flex">
            {label}
            {messages?.info && <Info {...messages.info} className="m-l-1" />}
          </span>
          {child}
        </label>
      ) : (
        child
      )}
      {message && <InlineAlert type={type}>{message}</InlineAlert>}
    </div>
  );
};

export default Field;
