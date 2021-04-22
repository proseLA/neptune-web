import { useEffect } from 'react';

/**
 * useConditionalListener attaches an event to the document when a condition is met.
 *
 * @param {bool} attachListener - condition to be met for the listener to be attached
 * @param {function} callback - function registered with the event listener
 * @param {string} eventType - type of event to attach to document
 *
 * @usage `useConditionalListener({
 *  eventType: 'click',
 *  callback,
 *  attachListener: condition,
 * });`
 *
 * */
export const useConditionalListener = ({ attachListener, callback, eventType, parent }) => {
  useEffect(() => {
    if (attachListener) {
      if (typeof parent !== 'undefined') {
        parent.addEventListener(eventType, callback, true);
      }
    }

    return () => {
      if (typeof parent !== 'undefined') {
        parent.removeEventListener(eventType, callback, true);
      }
    };
  }, [attachListener]);
};
