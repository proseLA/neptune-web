import React from 'react';
import { DocLink } from './pageUtils';

export default function PolyfillsNote(): React.ReactElement {
  return (
    <>
      <h2 id="polyfills" className="docs-heading">
        Polyfills
      </h2>
      This component requires some polyfills for Web API in order for it work properly in all
      browsers. See this <DocLink href="about/Setup#polyfills-for-web-browser-api">table</DocLink>.
    </>
  );
}
