import { ReactElement } from 'react';

import { DocumentLink } from './pageUtils';

const PolyfillsNote = (): ReactElement => {
  return (
    <>
      <h2 id="polyfills" className="docs-heading">
        Polyfills
      </h2>
      This component requires some polyfills for Web API in order for it work properly in all
      browsers. See this{' '}
      <DocumentLink href="about/Setup#polyfills-for-web-browser-api">table</DocumentLink>.
    </>
  );
};

export default PolyfillsNote;
