import { Alert, Link, Sentiment } from '@transferwise/components';
import { ReactElement } from 'react';

import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'August Release',
  date: '2021-08-06',
  authors: [
    {
      name: 'Anton Dozortsev',
      githubUsername: 'dozortsev',
    },
    {
      name: 'Mate Bek',
      githubUsername: 'matebek-tw',
    },
  ],
  version: {
    components: '37.0.0',
    'dynamic-flows': '15.0.0',
  },
  tags: [
    'UploadInput',
    'BottomSheet',
    'Link',
    'React 17',
    'Next.js 11',
    'no polyfills for Web API',
  ],
};

const PageContent = (): ReactElement => {
  return (
    <div className="m-t-2">
      This release introduces several new components, compatibility with React 17 & Next.js 11 and
      drop of polyfills for Web API.
      <h2 id="new-components" className="m-t-3 m-b-1">
        New Components
      </h2>
      <h4 className="m-b-1">Upload Input</h4>
      <p>
        An <DocumentLink href="components/inputs/UploadInput">upload input component</DocumentLink>{' '}
        that allows users upload a single file, or multiple files, which is meant to be use in
        forms.
      </p>
      <h4 className="m-b-1">Bottom Sheet</h4>
      <p>
        A bottom sheet is a container you can use to display supporting content or a short,
        supplementary task on <b>mobile experiences</b>. Here is the{' '}
        <DocumentLink href="components/overlays/BottomSheet">docs page</DocumentLink> for more info.
        Also, see this component in use at mobile view in{' '}
        <DocumentLink href="components/alerts/Popover">Popover</DocumentLink> and{' '}
        <DocumentLink href="components/inputs/DateLookup">DateLookup</DocumentLink> (later,
        potentially it will be integrated in Select).
      </p>
      <h4 className="m-b-1">Link</h4>
      <p>
        Introducing a <DocumentLink href="components/content/Link">link component</DocumentLink>, it
        encapsulates good a11y and security practices, adds Neptune specific styles, and most
        importantly attaches the navigate away icon for <code>target="_blank"</code>. The main
        purpose of this component is to enforce consistency for links across product.
      </p>
      <h2 id="react-nextjs" className="m-t-3 m-b-1">
        Compatibility with React 17 & Next.js 11
      </h2>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <h3>React 17</h3>
      <p>
        Prior this release it was not recommended to use Neptune components with React 17 as some of
        components were broken. But not anymore. We fixed them and introduced support for React
        version <code>^17</code> in neptune-web monorepo, for all packages.
        <br />
        <br />
        <b>Note:</b> <code>@transferwise/components</code> and{' '}
        <code>@transferwise/dynamic-flows</code> require the host applications to have at least{' '}
        <code>react@16.14.0</code> and <code>react-dom@16.14.0</code> installed, this is because we
        are leveraging the{' '}
        <Link
          href="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"
          target="_blank"
        >
          new JSX transform
        </Link>{' '}
        introduced in React 17 (which is backported to 16.14.0, 15.7.0, and 0.14.10 as well) so now
        importing <code>React</code>{' '}
        <Link
          target="_blank"
          href="https://github.com/transferwise/neptune-web/pull/1047/commits/83732394c50ecb566a44d4b83e6dd30ffb248736#diff-38b5fb5f11655b49137ac75f043af11f74b10c3bd89db7545dde5ef510a684b3L1"
        >
          in neptune-web is not required anymore
        </Link>
        .
      </p>
      <h3>Next.js</h3>
      <p>
        Since version 9.2{' '}
        <Link
          href="https://nextjs.org/blog/next-9-2#built-in-css-support-for-global-stylesheets"
          target="_blank"
        >
          Next.js provides build-in support for CSS
        </Link>
        . It's now recommended to use it instead of{' '}
        <Link href="https://www.npmjs.com/package/@zeit/next-css" target="_blank">
          <code>@zeit/next-css</code>
        </Link>{' '}
        plugin. With this change global CSS imports must be in your custom <code>_app.js</code>,
        otherwise you will get an{' '}
        <Link href="https://nextjs.org/docs/messages/css-global" target="_blank">
          error
        </Link>
        . To make component libraries compatible, we had to remove the CSS imports from the
        components. We are now providing a <code>main.css</code> bundle for both{' '}
        <code>@transferwise/components</code> and <code>@transferwise/dynamic-flows</code> which has
        to be imported in the root of the host application (see Upgrade Guide for more info).
      </p>
      <h2>No Polyfills for Web API</h2>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        Historically, sometimes we have been providing polyfills for Web API at{' '}
        <code>@transferwise/components</code>, but we have been doing that inconsistently (some have
        polyfills, some don't). In this release we align our components on that, and we officially
        drop support of Web API polyfills.
        <br />
      </p>
      <p>
        This doesn't make the library worse, in fact vice-versa. In most cases we won't ship
        redundant code (as the percentage of browsers that need them is quite small), plus it means
        less fuss for maintainers / contributors. It's way more convenient to provide polyfills at
        the consumers' side, and there are plenty of great tools that would do that in best way
        (lazy loading) polyfill-library, Polyfill.io, NextJS etc.
        <br />
      </p>
      <p>
        If a certain component requires some polyfill(s) this will be noted on component's page (e.g{' '}
        <DocumentLink href="components/content/Image#polyfills">Image</DocumentLink>,{' '}
        <DocumentLink href="components/inputs/DateInput#polyfills">DateInput</DocumentLink>);
      </p>
      <h2 id="upgrade-guide" className="m-t-3 m-b-1">
        Upgrade Guide
      </h2>
      <ol>
        <li>
          Update <code>@transferwise/components</code> (and <code>@transferwise/dynamic-flows</code>{' '}
          if you use it).
        </li>
        <li>
          Import CSS from the packages at the root component <b>after</b> Neptune CSS.
          <br />
          <b>Note:</b> do that only if the app bundles components ({/* */}
          <code>@transferwise/components</code> defined in <code>"dependencies"</code>, there's no
          need to add import if the package is defined in <code>"peerDependencies"</code>
          ).
          <pre>
            {`import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/components/build/main.css';
// and / or
import '@transferwise/dynamic-flows/build/main.css';`}
          </pre>
          Do not forget to add the import at development environments (e.g Storybook, custom demo
          pages).
        </li>
        <li>
          Make sure you have the necessary version of React, required: <code>16.14.x</code> or{' '}
          <code>17.x.x</code>
          <pre>yarn list react react-dom</pre>
        </li>
        <li>
          <DocumentLink href="about/Setup#polyfills-for-web-browser-api">
            Check whether you need to provide polyfills
          </DocumentLink>{' '}
          of JavaScript Web API for some components. (<b>Note:</b> This is only necessary for
          repositories that bundle package(s)).
        </li>
      </ol>
    </div>
  );
};

export default PageContent;
