export function isServerSide(): boolean {
  return typeof window === 'undefined';
}

export function isBrowser(): boolean {
  return !isServerSide();
}

export {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from './documentIosClick';
