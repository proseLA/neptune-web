/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */

import React, { ReactElement } from 'react';

import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'July Release',
  date: '2021-07-28',
  authors: [
    {
      name: 'Naiara Abaroa',
      githubUsername: 'nabaroa',
    },
    {
      name: 'Mate Bek',
      githubUsername: 'matebek-tw',
    },
    {
      name: 'Anton Dozortsev',
      githubUsername: 'dozortsev',
    },
  ],
  version: {
    components: '36.0.0',
    css: '9.1.0',
  },
};

const PageContent = (): ReactElement => {
  return (
    <>
      <h2 className="m-t-3 m-b-1">New Typography</h2>
      <p>
        Neptune has common{' '}
        <a href="https://transferwise.github.io/neptune/design/typography/">typography styles</a>{' '}
        which are consistent cross platforms.
      </p>
      <p>This july release extends all these new styles on Neptune-css.</p>
      <p>Updated:</p>
      <ul>
        <li>Font size</li>
        <li>Font weight</li>
        <li>Line height</li>
        <li>Emphasis styles</li>
      </ul>
      <h3 className="m-b-1">What{"'"}s new: Typography utility classes.</h3>
      <p className="m-b-1">
        Use <code>.title-1</code> , <code>.title-2</code> ... font styling classes for the headings.
      </p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Style</th>
            <th>Properties</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h1>Title 1. Money without borders</h1>
              <code>.title-1</code>
            </td>
            <td>
              <code>bold 32px</code>
              <br />
              <code>line-height 1.2</code>
              <br />
              <code>margin-bottom 8px</code>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Title 2. Money without borders</h2>
              <code>.title-2</code>
            </td>
            <td>
              <code>bold 26px</code>
              <br />
              <code>line-height 1.2</code>
              <br />
              <code>margin-bottom 4px</code>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Title 3. Money without borders</h3>
              <code>.title-3</code>
            </td>
            <td>
              <code>semi-bold 20px</code>
              <br />
              <code>line-height 1.2</code>
              <br />
              <code>margin-bottom 2px</code>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Title 4. Money without borders</h4>
              <code>.title-4</code>
            </td>
            <td>
              <code>semi-bold 16px</code>
              <br />
              <code>line-height 1.2</code>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Title 5. Money without borders</h5>
              <code>.title-5</code>
            </td>
            <td>
              <code>semi-bold 14px</code>
              <br />
              <code>line-height 1.2</code>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 className="title-4 m-b-1">Body utility classes</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Style</th>
            <th>Properties</th>
            <th>How to use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="body-1">
                Body 1
                <br />
                We’re on a mission to bring transparency to finance, for people without borders. We
                charge as little as possible, and we always show you upfront. No hidden fees. No bad
                exchange rates. No surprises.
              </p>
              <code>.body-1</code>
            </td>
            <td>
              <code className="text-xs-nowrap">regular 16px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.5</code>
            </td>
            <td>Our default style for content in paragraphs and longer form copy.</td>
          </tr>
          <tr>
            <td>
              <p className="body-2">
                Body 2
                <br />
                We’re on a mission to bring transparency to finance, for people without borders. We
                charge as little as possible, and we always show you upfront. No hidden fees. No bad
                exchange rates. No surprises.
              </p>
              <code>.body-2</code>
            </td>
            <td>
              <code className="text-xs-nowrap">regular 14px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.5</code>
            </td>
            <td>Use for secondary information related to another piece of copy set in Body 1.</td>
          </tr>
          <tr>
            <td>
              <p className="body-3">
                Body 3
                <br />
                We’re on a mission to bring transparency to finance, for people without borders. We
                charge as little as possible, and we always show you upfront. No hidden fees. No bad
                exchange rates. No surprises.
              </p>
              <code>.body-3</code>
            </td>
            <td>
              <code className="text-xs-nowrap">regular 12px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.5</code>
            </td>
            <td>Should be avoided. Use only when the information is not critical to the user.</td>
          </tr>
          <tr>
            <td>
              <p className="control-1">Control 1</p>
              <code>.control-1</code>
            </td>
            <td>
              <code className="text-xs-nowrap">semibold 16px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.2</code>
            </td>
            <td rowSpan={2}>
              Use inside interactive components, such as buttons, dropdowns, tabs.
            </td>
          </tr>
          <tr>
            <td>
              <p className="control-2">Control 2</p>
              <code>.control-2</code>
            </td>
            <td>
              <code className="text-xs-nowrap">semibold 14px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.2</code>
            </td>
          </tr>
          <tr>
            <td>
              <p className="label">Label</p>
              <code>.label</code>
            </td>
            <td>
              <code className="text-xs-nowrap">regular 14px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.5</code>
            </td>
            <td rowSpan={2}>Use for labelling inputs and values.</td>
          </tr>
          <tr>
            <td>
              <p className="value">Value</p>
              <code>.value</code>
            </td>
            <td>
              <code className="text-xs-nowrap">regular 16px</code>
              <br />
              <code className="text-xs-nowrap">line-height 1.5</code>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="m-b-1">Emphasis styles</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Font weights</th>
            <th>Properties</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                I am a <span className="font-weight-regular">regular</span> text
              </p>
              <code>.font-weight-regular</code>
            </td>
            <td>font-weight: 500</td>
          </tr>
          <tr>
            <td>
              <p>
                I am a <span className="font-weight-semi-bold">semi bold</span> text
              </p>
              <code>.font-weight-semi-bold</code>
            </td>
            <td>font-weight: 600</td>
          </tr>
          <tr>
            <td>
              <p>
                I am a <span className="font-weight-bold">bold</span> text
              </p>
              <code>.font-weight-bold</code>
            </td>
            <td>font-weight: 800</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Emphasis colour</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>.text-primary</code>
            </td>
            <td>
              <span className="text-primary">Primary</span>
            </td>
          </tr>
          <tr>
            <td>
              <code>.text-positive</code>
            </td>
            <td>
              <span className="text-positive">Positive</span>
            </td>
          </tr>
          <tr>
            <td>
              <code>.text-negative</code>
            </td>
            <td>
              <span className="text-negative">Negative</span>
            </td>
          </tr>
          <tr>
            <td>
              <code>.text-warning</code>
            </td>
            <td>
              <span className="text-warning">Warning</span>
            </td>
          </tr>
          <tr>
            <td>
              <code>.text-info</code>
            </td>
            <td>
              <span className="text-info">Info</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="m-b-1">Points to have into account:</h3>
      <ul>
        <li>Headings{"'"} font size is going to be 2px smaller, 10px for <code>h1</code>.</li>
        <li>Headings are going to keep the same size for mobile and desktop.</li>
        <li>
          To keep former <code>h1</code> size, specially in marketing pages, you can use `.display-5` utility
          class.
        </li>
        <li>
          Headings{"'"} line height has changed and you may notice a lack of spacing between the heading
          and the next element. If this is the case you can use spacing utility classes
          (<code>m-b-1</code>,...) to sort it out.
        </li>
      </ul>
      <h3 className="m-b-1">Best practices</h3>
      <ul>
        <li>Use new typography styles and replace existing ones. The old typography styles are going to be moved to the deprecation list, which are going to be maintained by now, but eventually can be removed.</li>
        <li>Avoid using headings without a class. Use, <code>h2 className={'"'}title-2{'"'}</code> instead. This avoids potential specificity issues and it{"'"}s a better practice for posible use of CSS modules in future.</li>
      </ul>
      <h3 className="m-b-1">New typography tokens</h3>
      <p>Use/update new tokens. Example: <code>.foo &#123;font-size: var(--font-size-16);&#125;</code></p>
      
        <ul>
          <li><code>--font-size-12: 0.75rem;</code></li>
          <li><code>--font-size-14: 0.875rem;</code></li>
          <li><code>--font-size-16: 1rem;</code></li>
          <li><code>--font-size-20: 1.25rem;</code></li>
          <li><code>--font-size-26: 1.625rem;</code></li>
          <li><code>--font-size-32: 2rem;</code></li>
          <li><code>--line-height-title: 1.2;</code></li>
          <li><code>--line-height-body: 1.5;</code></li>
          <li><code>--line-height-control: 1.2;</code></li>
          <li><code>--font-weight-regular: 500;</code></li>
          <li><code>--font-weight-semi-bold: 600;</code></li>
          <li><code>--font-weight-bold: 800;</code></li>
        </ul>
      <h3 className="m-b-1">Deprecation list</h3>
      <p>Neptune recommends to use new typography utility classes listed in above tables to format typography, because some of the typography classes are going to be deprecated:</p>
      <ul>
        <li><code>&lt;h6&gt;</code></li>
        <li><code>.h1</code>, <code>.h2</code>, <code>.h3</code>, <code>.h4</code>, <code>.h5</code>, <code>.h6</code></li>
        <li><code>.small</code>,<code> .tiny</code></li>
        <li><code>.lead</code></li>
        <li><code>&lt;small&gt;</code> / <code>.small</code> inside headings</li>
        <li><code>.text-danger</code></li>
        <li><code>.text-success</code></li>
      </ul>

      <h3>Map to migrate legacy Bootstrap less variables to new typography custom properties:</h3>
      <ul>
        <li>@font-size-base → var(--font-size-16); </li>
        <li>@font-size-large → Was 18px, a deprecated size. Use var(--font-size-16) or var(--font-size-20) depending the case.</li>
        <li>@font-size-medium → var(--font-size-16); </li>
        <li>@font-size-small → var(--font-size-14); </li>
        <li>@font-size-xsmall → var(--font-size-12); </li>
        <li>@font-size-h1 → var(--font-size-32); </li>
        <li>@font-size-h2 → var(--font-size-26); </li>
        <li>@font-size-h3 → var(--font-size-20); </li>
        <li>@font-size-h4 → var(--font-size-16); </li>
        <li>@font-size-h5 → var(--font-size-14); </li>
        <li>@font-size-h6 → var(--font-size-14); </li>
        <li>@line-height-h1 → var(--line-height-title); </li>
        <li>@line-height-h2 → var(--line-height-title); </li>
        <li>@line-height-h3 → var(--line-height-title); </li>
        <li>@line-height-h4 → var(--line-height-title); </li>
        <li>@line-height-h5 → var(--line-height-title); </li>
        <li>@line-height-h6 → var(--line-height-title); </li>
        <li>@line-height-base → var(--line-height-body)</li>
        <li>@font-weight-normal → var(--font-weight-regular); </li>
        <li>@font-weight-semi-bold → var(--font-weight-semi-bold); </li>
        <li>@font-weight-bold → var(--font-weight-bold); </li>
      </ul>

      <h3>Map to migrate from Neptune typography less variables to new typography custom properties:</h3>
      <ul>
        <li>@font-size-xx-large: 2.625rem; // 42px → Not equivalent.</li>
        <li>@font-size-x-large → var(--font-size-26);</li>
        <li>@font-size-large → var(--font-size-20);</li>
        <li>@font-size-medium → Was 18px, a deprecated size. Use var(--font-size-16) or var(--font-size-20) depending the case.</li>
        <li>@font-size-base: → var(--font-size-16)</li>
        <li>@font-size-small → var(--font-size-14);</li>
        <li>@font-size-x-small → var(--font-size-12);</li>
      </ul>
    </>
  );
};

export default PageContent;
