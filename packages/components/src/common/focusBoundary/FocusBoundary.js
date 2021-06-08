import React, { useEffect, useRef } from 'react';
import Types from 'prop-types';

import { isKey, isUndefined } from '@transferwise/neptune-validation';

import { useConditionalListener } from '../hooks';
import { getFocusableElements, resetFocus } from './utils';
import { Key } from '../key';

const { TAB, ESCAPE } = Key;

const FocusBoundary = ({ children, onClose }) => {
  const boundaryRef = useRef();
  const parent = isUndefined(document) ? undefined : document;
  let focusableEls = {};

  useEffect(() => {
    boundaryRef.current.focus();
    focusableEls = getFocusableElements(boundaryRef.current);
  }, []);

  // If event type is Tab the resetFocus will force the focus to either the first focusable or last in boundaryRef .
  useConditionalListener({
    eventType: 'keydown',
    callback: (event) => isKey({ keyType: TAB, event }) && resetFocus({ event, focusableEls }),
    attachListener: true,
    parent,
  });
  // If the click is from outside the focused area calls onClose callBack.
  useConditionalListener({
    eventType: 'click',
    callback: (event) => !boundaryRef?.current?.contains(event.target) && onClose(event),
    attachListener: true,
    parent,
  });

  useConditionalListener({
    eventType: 'keydown',
    callback: (event) => isKey({ keyType: ESCAPE, event }) && onClose(event),
    attachListener: true,
    parent,
  });

  return (
    <span ref={boundaryRef} tabIndex={-1} className="np-focus-boundary d-inline-flex outline-none">
      {children}
    </span>
  );
};

FocusBoundary.propTypes = {
  children: Types.node.isRequired,
  onClose: Types.func.isRequired,
};

export default FocusBoundary;
