export function isServerSideRendering(): boolean {
  return typeof window === 'undefined';
}

export {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from './documentIosClick';
