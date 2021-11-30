import { Alert, Sentiment, Link } from '@transferwise/components';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
import { DocumentLink } from '../../utils/pageUtils';

export const meta = {
  name: 'Tokens upgrade guide',
  date: '2021-11-30',
  hidden: true,
  authors: [],
};

const PageContent = (): ReactElement => {
  return (
    <div className="d-flex flex-column">
      <p>
        Version <strong>12</strong> of Neptune CSS bumps{' '}
        <a href="https://github.com/transferwise/neptune-tokens">neptune-tokens</a> from v1 to v6,
        so there are lots of great updates and some breaking changes that we need to address.{' '}
        <strong>There is a script you can run to make most of these changes automatically.</strong>
      </p>
      <Link href="#steps-to-upgrade">Skip to the upgrade steps</Link>
      <Heading as="h2">Changes</Heading>
      <p>
        Currently, all our tokens are built into both less variables (e.g.{' '}
        <code>@color-content-primary</code>) and CSS custom properties (
        {/*
         */}
        <code>--color-content-primary</code>). Although the examples below are written as custom
        properties, <strong>the changes below apply to both less and custom properties.</strong>
      </p>

      <Alert
        className="m-y-2"
        type="positive"
        message="Prefer CSS custom properties over less variables."
      />

      <Heading as="h3" className="m-t-4 m-b-1">
        New tokens
      </Heading>
      <table className="table docs-table">
        <thead>
          <tr>
            <th>New token</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>{`--color-content-positive-hover
--color-content-positive-active
--color-content-warning-hover
--color-content-warning-active
--color-content-negative-hover
--color-content-negative-active`}</pre>
            </td>
            <td>
              We've added missing combinations of tokens so that we have default, hover and active
              states for postitive, negative and warning content colours.
            </td>
          </tr>
          <tr>
            <td>
              <pre>{`--color-content-secondary
--color-content-secondary-active
--color-content-secondary-hover`}</pre>
            </td>
            <td>We added a secondary content colour variation.</td>
          </tr>
          <tr>
            <td>
              <pre>--color-interactive-disabled</pre>
            </td>
            <td>We added a disabled colour for interactive elements.</td>
          </tr>
          <tr>
            <td>
              <pre>{`--color-border-overlay
--color-background-overlay`}</pre>
            </td>
            <td>We added overlay colours.</td>
          </tr>
          <tr>
            <td>
              <pre>--color-core-contrast</pre>
            </td>
            <td>???</td>
          </tr>
          <tr>
            <td>
              <pre>--space-content-horizontal</pre>
            </td>
            <td>???</td>
          </tr>
          <tr>
            <td>
              <pre>--font-family-regular</pre>
            </td>
            <td>
              While you shouldn’t need to set the font often, on the occasions that you do, you can
              now use <code>font-family-regular</code>
            </td>
          </tr>
        </tbody>
      </table>

      <Heading as="h3" className="m-t-4 m-b-1">
        Updated tokens
      </Heading>
      <Alert className="m-y-2" type={Sentiment.NEGATIVE} message="Breaking change" />
      <table className="table docs-table">
        <thead>
          <tr>
            <th>Old token</th>
            <th>New token</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>--color-text-*</pre>
            </td>
            <td>
              <pre>--color-content-*</pre>
            </td>
            <td>
              All <code>-text</code> tokens are now <code>-content</code> to better reflect that
              they should be used for more than just text (icons, for example).
            </td>
          </tr>
          <tr>
            <td>
              <pre>--color-control-*</pre>
            </td>
            <td>
              <pre>--color-interactive-*</pre>
            </td>
            <td>
              All <code>-control</code> tokens are now <code>-interactive</code> to emphasise that
              these tokens should be used to colour interactive elements.
            </td>
          </tr>
        </tbody>
      </table>

      <Heading as="h3" className="m-t-4 m-b-1">
        Removed tokens
      </Heading>
      <Alert className="m-y-2" type={Sentiment.NEGATIVE} message="Breaking change" />

      <table className="table docs-table">
        <thead>
          <tr>
            <th>Old token</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>--color-text-control</pre>
            </td>
            <td>
              Should be replaced with <code>#fff</code>, as this token is not themed.
            </td>
          </tr>
          <tr>
            <td>
              <pre>--color-text-important</pre>
            </td>
            <td>
              Should be replaced with <code>--color-content-primary</code>
            </td>
          </tr>
          <tr>
            <td>
              <pre>{`--color-border-focus
--color-border-positive
--color-border-negative
--color-border-warning`}</pre>
            </td>
            <td>
              Most people won't need this, but if you find you're using this, try{' '}
              <code>--color-interactive-accent</code> instead
            </td>
          </tr>
        </tbody>
      </table>

      <Heading as="h3" className="m-t-4 m-b-1">
        Deprecated tokens
      </Heading>
      <Alert
        className="m-y-2"
        type={Sentiment.WARNING}
        message="These tokens are considered legacy and may be removed in an upcoming release."
      />

      <table className="table docs-table">
        <thead>
          <tr>
            <th>Deprecated token</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>{`--color-primary
--color-secondary
--color-accent
--color-positive
--color-negative
--color-warning`}</pre>
            </td>
            <td>
              These are tricky to replace using a find and replace - you need to look at the usage
              and decide whether a <code>--color-content-</code> or{' '}
              <code>--color-interactive-</code> colour is best, depending on where it's being used.
            </td>
          </tr>
        </tbody>
      </table>
      <Heading as="h2" className="m-t-4 m-b-1">
        Steps to upgrade
      </Heading>
      <Heading as="h3" className="m-t-4 m-b-1">
        1: Run this script
      </Heading>

      <Heading as="h2">Dependency requirements</Heading>
      <pre>{'@transferwise/neptune-css >= 12.x.x'}</pre>
    </div>
  );
};

export default PageContent;
