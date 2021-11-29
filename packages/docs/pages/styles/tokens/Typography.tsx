/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-curly-brace-presence */
// /* eslint-disable prettier/prettier */
import { Link } from '@transferwise/components';
import { ReactElement } from 'react';

import { DocumentLink } from '../../../utils/pageUtils';
import { Meta } from '../../../utils/sections';

export const meta: Meta = {
  name: 'Typography',
  badge: {
    expiryDate: '2022-01-31',
    type: 'new',
  },
};

export default function PageContent(): ReactElement {
  return (
    <>
      <p>
        Neptune provides typography tokens as CSS custom properties and as LESS variables. Read more
        about typogrpahy at{' '}
        <Link target="_blank" href="https://neptune.wise.com/design/typography/">
          Neptune design website
        </Link>
        .
      </p>
      <p>
        CSS custom properties available at root scope (<code>:root</code>) (If this is your first
        time using CSS custom properties in your repository and you need support for IE11, read{' '}
        <DocumentLink href="/about/Styles#tokens-css-custom-properties">our guide</DocumentLink>{' '}
        first to get set up.).
      </p>
      <p>
        For LESS variables, you need add import:
        <pre>@import '@transferwise/neptune-css/dist/less/neptune-tokens.less';</pre>
      </p>
      <div className="scroll-table">
        <table className="table table-condensed docs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--font-size-12</code>
              </td>
              <td>0.75rem</td>
            </tr>
            <tr>
              <td>
                <code>--font-size-14</code>
              </td>
              <td>0.875rem</td>
            </tr>
            <tr>
              <td>
                <code>--font-size-16</code>
              </td>
              <td>1rem</td>
            </tr>
            <tr>
              <td>
                <code>--font-size-20</code>
              </td>
              <td>1.25rem</td>
            </tr>
            <tr>
              <td>
                <code>--font-size-26</code>
              </td>
              <td>1.625rem</td>
            </tr>
            <tr>
              <td>
                <code>--font-size-32</code>
              </td>
              <td>2rem</td>
            </tr>
            <tr>
              <td>
                <code>--line-height-title</code>
              </td>
              <td>1.2</td>
            </tr>
            <tr>
              <td>
                <code>--line-height-body</code>
              </td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>
                <code>--line-height-control</code>
              </td>
              <td>1.2</td>
            </tr>
            <tr>
              <td>
                <code>--font-weight-regular</code>
              </td>
              <td>500</td>
            </tr>
            <tr>
              <td>
                <code>--font-weight-semi-bold</code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <code>--font-weight-bold</code>
              </td>
              <td>800</td>
            </tr>
          </tbody>
        </table>
        Regarding <code>--font-weight-*</code> tokens see also{' '}
        <DocumentLink href="styles/core/Typography#emphasis-styles">emphasis styles</DocumentLink>.
      </div>
    </>
  );
}
