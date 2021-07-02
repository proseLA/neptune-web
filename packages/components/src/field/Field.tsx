import React, { useState, cloneElement } from 'react';
import classNames from 'classnames';

import getAlertMessage from './getAlertMessage';
import InlineAlert from '../inlineAlert';
import Info from '../info';
import WithExtendedMethods from '../withExtendedMethods';
import { Sentiment } from '../common';
import { useIntl } from 'react-intl';
import translations from './Field.messages';

type FieldProps = {
  children: React.ReactElement;
  label?: string;
  messages: {
    error?: string;
    help?: string;
    info?: string;
    infoAriaLabel?: string;
    validations?: { message: string }[];
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

  const intl = useIntl();

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

  const infoAriaLabel = messages?.infoAriaLabel
    ? messages?.infoAriaLabel
    : intl.formatMessage(translations.infoAriaLabel);

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

  const alert = getAlertMessage({
    blurred,
    changed,
    focused,
    messages,
    submitted,
  });

  return (
    <div
      className={classNames('form-group', {
        'has-error': alert.type === Sentiment.ERROR && alert.message,
        'has-info': alert.type === Sentiment.INFO,
      })}
    >
      {label ? (
        <label className="control-label d-block">
          <span className="d-flex">
            {label}
            {messages?.info && (
              <Info content={messages.info} aria-label={infoAriaLabel} className="m-l-1" />
            )}
          </span>
          {child}
        </label>
      ) : (
        child
      )}
      {alert.message && <InlineAlert type={alert.type}>{alert.message}</InlineAlert>}
    </div>
  );
};

export default Field;
