import { SyntheticEvent } from 'react';

export function isServerSide(): boolean {
  return typeof window === 'undefined';
}

export function isBrowser(): boolean {
  return !isServerSide();
}

export function stopPropagation(event: SyntheticEvent) {
  event.stopPropagation();
  event.preventDefault();
  if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
    event.nativeEvent.stopImmediatePropagation();
  }
}

export {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from './documentIosClick';
