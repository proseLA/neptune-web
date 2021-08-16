import { isKey, isUndefined } from '@transferwise/neptune-validation';
import Types from 'prop-types';
import { useEffect, useRef } from 'react';

import { useConditionalListener } from '../hooks';
import { Key } from '../key';

import { getFocusableElements, resetFocus } from './utils';

const { TAB } = Key;

const FocusBoundary = ({ children }) => {
  const boundaryReference = useRef();
  const parent = isUndefined(document) ? undefined : document;
  let focusableEls = {};

  useEffect(() => {
    boundaryReference.current.focus();
    focusableEls = getFocusableElements(boundaryReference.current);
  }, []);

  // If event type is Tab the resetFocus will force the focus to either the first focusable or last in boundaryRef .
  useConditionalListener({
    eventType: 'keydown',
    callback: (event) => isKey({ keyType: TAB, event }) && resetFocus({ event, focusableEls }),
    attachListener: true,
    parent,
  });

  return (
    <span ref={boundaryReference} tabIndex={-1} className="np-focus-boundary outline-none">
      {children}
    </span>
  );
};

FocusBoundary.propTypes = {
  children: Types.node.isRequired,
};

export default FocusBoundary;
