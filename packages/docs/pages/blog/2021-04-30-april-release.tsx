/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import { Alert, Sentiment } from '@transferwise/components';
import React, { ReactElement } from 'react';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'April Release',
  date: '2021-04-30',
  authors: [
    {
      name: 'Anton Dozortsev',
      githubUsername: 'dozortsev',
    },
  ],
  version: {
    components: '36.0.0',
    css: '9.1.0',
  },
  tags: ['Typescript'],
};

export default function PageContent(): ReactElement {
  return (
    <div className="m-t-2">
      This release introduced TypeScript types for <code>@transferwise/components</code>, and adds the ability to write components in TypeScript 🎉 To do this we had to refactor how we expose prop values on components - more in the breaking changes section below.
      <h2 className="m-t-3 m-b-1">Features</h2>
      <h3 className="m-b-1">Types</h3>
      <p>
        The package now provides types for almost all components (with a few exceptions - see the bottom of the page). Even though all components are written in JavaScript we have found a way to
        provide pretty accurate (~90%) types using{' '}
        <a href="https://www.npmjs.com/package/react-to-typescript-definitions">
          react-to-typescript-definitions
        </a>, a tool which generates{' '}
        <a href="https://www.typescriptlang.org/docs/handbook/2/type-declarations.html">
          type declarations
        </a>{' '}
        based on <a href="https://reactjs.org/docs/typechecking-with-proptypes.html">PropTypes</a>.
      </p>
      <h3 className="m-b-1">JSDoc</h3>
      <p>
        With the addition of types, we now have some awesome <a href="https://jsdoc.app/">JSDoc</a> support. You should now be able to see documentation for anything that has it by hovering over a component instance or its props in VSCode.
      </p>
      <h3 className="m-b-1">TypeScript Support</h3>
      <p>
        We have added the ability to write components in TypeScript in <code>@transferwise/components</code>. Code will be transpiled using Babel and types generated using TSC. We welcome contributions in TypeScript
      </p>
      <p>
        Because we are using <code>react-to-typescript-definitions</code> to generate types for JS files, if you make a contribution in JS, please read our new <a href="https://github.com/transferwise/neptune-web/blob/main/packages/components/CONTRIBUTING.md#js-component-rules">contribution guidelines for JS components</a> to ensure types are generated correctly.
      </p>
      <h2 id="breaking-changes" className="m-t-3 m-b-1">Breaking Changes and Deprecations</h2>

      <h3 className="m-b-1">Component enums</h3>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        For accurate type generation we had to change the way we expose enumerated values for components. The pattern we used to follow was to expose them as static props on the component - for example <code>Alert.Size.SMALL</code>. We will now expose the enums via an object which must be imported separately. <b>This is big change.</b> We have written an upgrade script to make upgrading easier - see the upgrade guide below.
      </p>
      <h4 className="m-b-1">Before</h4>
      <pre>
      {`import { Alert, Popover, Button } from '@transferwise/components';

<Alert size={Alert.Size.SMALL} />
<Popover preferredPlacement={Popover.Placement.TOP} />
<Button type={Button.Type.POSITIVE} />`}
      </pre>

      <h4 className="m-b-1">After</h4>
      <pre>
      {`import { Alert, Popover, Button, Size, Position, Sentiment } from '@transferwise/components';

<Alert size={Size.SMALL} />
<Popover preferredPlacement={Position.TOP} />
<Button type={Sentiment.POSITIVE} />

// Raw values can also be used although we don't recommend it
<Alert size="sm" />
<Popover preferredPlacement="top" />
<Logo type="positive" />
`}
      </pre>
      <h4 id="reasons-for-enums">
        The use of the exposed enums is encouraged for a couple of reasons:
      </h4>
      <ul>
        <li>
          You can avoid unnecessary duplication by using the enums we expose in your own code
        </li>
        <li>
          Using consistent values across apps helps reduce confusion (e.g. avoiding the use of both <code>top_left</code> and <code>left_up</code>) and bugs (e.g. by using consistent constants for <code>Breakpoint</code>).
        </li>
        <li>If there is documentation available (and you&apos;re using TS), you&apos;ll see it</li>
      </ul>
    <h2 id="migration-checklist">Upgrade guide</h2>
    <ol>
      <li>
        Make sure all your dependencies have migrated to this version or higher version of components (36.x)
      </li>
      <li>
        Delete any custom type declarations that you have for <code>@transferwise/components</code> from{' '}
        <code>global.d.ts</code> / <code>declarations.d.ts</code> etc
      </li>
      <li>
        Run the provided code mod
        <pre>
{`$ yarn run neptune-upgrade-util
? ✨ Which upgrade would you like to run?
...
▶ 2021-04-v35-36-typescript-support.js`}
        </pre>
      </li>
      <li>
        If you have ESLint enabled for TypeScript files, search for <code>eslint-disable-*</code>
        comments with the following rules in your code. They may not be needed any more.
        <ul>
          <li>
            <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md">
              <code>@typescript-eslint/no-unsafe-assignment</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md">
              <code>@typescript-eslint/no-unsafe-member-access</code>
            </a>
          </li>
        </ul>
      </li>
    </ol>

    <h4 className="m-b-1">For TypeScript projects</h4>
    <ul>
      <li>
        <p>Translations and utils are now exported from the package. The warning generated by the TS compiler can be fixed by changing to the new syntax.</p>
    <h5 className="m-b-1">Before</h5>
    <pre>
      {`import componentTranslations from '@transferwise/components/build/i18n';
import { getLangFromLocale } from '@transferwise/components/build/es/polyfill/common/locale';`}
        </pre>
    <h5 className="m-b-1">After</h5>
    <pre>{"import { translations, getLangFromLocale } from '@transferwise/components';"}</pre>
      </li>
      <li>
      If TypeScript complains about incorrect prop types being passed into a component but you&apos;re sure the value is right, please let us know.
      </li>
      <li>
        You might find some redundant props that have been deleted in previous releases (for example <code>locale</code>). You can safely delete these.
      </li>
    </ul>
    <h2 className="m-b-1">Missing types</h2>
    <p>
      These components are missing types: <code>Upload</code>, <code>MoneyInput</code>, <code>Dimmer</code> and <code>Snackbar</code>. This is because they use higher-order components, and the type generator we use doesn&apos;t parse them correctly. We will look at fixing this in a subsequent release.
    </p>
  </div>
);
}
