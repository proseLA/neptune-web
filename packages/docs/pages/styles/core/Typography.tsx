/* eslint-disable react/function-component-definition */
import { ReactElement } from 'react';

import Heading from '../../../components/Heading';
import DeprecationNotice from '../../../utils/DeprecationNotice';
import { DocumentLink } from '../../../utils/pageUtils';
import { Meta } from '../../../utils/sections';

export const meta: Meta = {
  name: 'Typography',
  badge: {
    type: 'new',
    expiryDate: '2022-01-31',
  },
};

export default function PageContent(): ReactElement {
  return (
    <div>
      Base styles to style text in your application.
      <Heading as="h2">Headings</Heading>
      Use <code>.title-1</code> , <code>.title-2</code> ... font styling classes for the headings.{' '}
      {/* eslint-disable-next-line react/jsx-child-element-spacing */}
      <b>
        Avoid using heading elements (<code>h1</code>–<code>h6</code>) without any class. This
        avoids potential specificity issues and it's a better practice for posible use of CSS
        modules in future.
      </b>{' '}
      If a bigger size is needed, for a <code>h1</code> in a hero component in marketing pages, for
      example, you can use <code>.display-5</code>, instead of <code>.title-1</code>. E.g.{' '}
      <code>{'<h1 class="display-5" />'}</code>
      <table className="table">
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
      <Heading as="h2">Display headings</Heading>
      Use display headings <code>.display-1</code>–<code>.display-5</code> to stand out from
      traditional section headers.
      <table className="table">
        <tbody>
          <tr>
            <td>
              <h1 className="display-1">Display 1</h1>
              <code>.display-1</code>
              {/* MOBILE */}
              <span className="visible-xs visible-sm">
                <code>bold 56px</code>
                <br />
                <code>line-height 72px</code>
                <br />
                <code>margin-bottom 24px</code>
              </span>
            </td>
            <td>
              {/* DESKTOP */}
              <span className="hidden-xs hidden-sm">
                <code>bold 104px</code>
                <br />
                <code>line-height 128px</code>
                <br />
                <code>margin-bottom 8px</code>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="display-2">Display 2</h1>
              <code>.display-2</code>
              {/* MOBILE */}
              <span className="visible-xs visible-sm">
                <code>bold 56px</code>
                <br />
                <code>line-height 72px</code>
                <br />
                <code>margin-bottom 24px</code>
              </span>
            </td>
            <td>
              {/* DESKTOP */}
              <span className="hidden-xs hidden-sm">
                <code>bold 88px</code>
                <br />
                <code>line-height 112px</code>
                <br />
                <code>margin-bottom 16px</code>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="display-3">Display 3</h1>
              <code>.display-3</code>
              {/* MOBILE */}
              <span className="visible-xs visible-sm">
                <code>bold 42px</code>
                <br />
                <code>line-height 48px</code>
                <br />
                <code>margin-bottom 8px</code>
              </span>
            </td>
            <td>
              {/* DESKTOP */}
              <span className="hidden-xs hidden-sm">
                <code>bold 72px</code>
                <br />
                <code>line-height 88px</code>
                <br />
                <code>margin-bottom 24px</code>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="display-4">Display 4</h1>
              <code>.display-4</code>
              {/* MOBILE */}
              <span className="visible-xs visible-sm">
                <code>bold 28px</code>
                <br />
                <code>line-height 32px</code>
                <br />
                <code>margin-bottom 4px</code>
              </span>
            </td>
            <td>
              {/* DESKTOP */}
              <span className="hidden-xs hidden-sm">
                <code>bold 56px</code>
                <br />
                <code>line-height 72px</code>
                <br />
                <code>margin-bottom 24px</code>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="display-5">Display 5</h1>
              <code>.display-5</code>
              {/* MOBILE */}
              <span className="visible-xs visible-sm">
                <code>bold 28px</code>
                <br />
                <code>line-height 32px</code>
                <br />
                <code>margin-bottom 4px</code>
              </span>
            </td>
            <td>
              {/* DESKTOP */}
              <span className="hidden-xs hidden-sm">
                <code>bold 42px</code>
                <br />
                <code>line-height 72px</code>
                <br />
                <code>margin-bottom 8px</code>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <Heading as="h2">Body copy</Heading>
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
      <Heading as="h3">Lead body copy</Heading>
      <DeprecationNotice>
        <>
          This API is deprecated. Please use <code>.title-3</code> or <code>.title-4</code> instead.
        </>
      </DeprecationNotice>
      <pre>
        {`<p className="lead">
  We’re on a mission to bring transparency to finance, for people without borders
</p>`}
      </pre>
      <p className="lead">
        We’re on a mission to bring transparency to finance, for people without borders
      </p>
      <Heading as="h3">Small Text</Heading>
      <DeprecationNotice>
        <>
          This API is deprecated. Please use <code>.small</code> instead.
        </>
      </DeprecationNotice>
      <pre>
        {`<small>
  We’re on a mission to bring transparency to finance, for people without borders.
</small>
<span class="small">
  We’re on a mission to bring transparency to finance, for people without borders.
</span>`}
      </pre>
      <p>
        <small>
          We’re on a mission to bring transparency to finance, for people without borders.
        </small>
        <span className="small">
          We’re on a mission to bring transparency to finance, for people without borders.
        </span>
      </p>
      <Heading as="h3">Tiny Text</Heading>
      <DeprecationNotice>
        <>
          This API is deprecated. Please use <code>.body-3</code> instead.
        </>
      </DeprecationNotice>
      <pre>
        {`<p className="tiny">
  We’re on a mission to bring transparency to finance, for people without borders.
</p>`}
      </pre>
      <p className="tiny">
        We’re on a mission to bring transparency to finance, for people without borders.
      </p>
      <Heading as="h3">Emphasis styles</Heading>
      Text styles can also be emphasised with a stronger priority or a different purpose. If the
      style's weight is <strong>regular</strong>, then its emphasised counterpart changes to{' '}
      <strong>semibold</strong>. Otherwise there's no change.
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
                {' '}
                I am a <span className="font-weight-regular">regular</span> text
              </p>
              <code>.font-weight-regular</code>
            </td>
            <td>font-weight: 500</td>
          </tr>
          <tr>
            <td>
              <p>
                {' '}
                I am a <span className="font-weight-semi-bold">semi bold</span> text
              </p>
              <code>.font-weight-semi-bold</code>
            </td>
            <td>font-weight: 600</td>
          </tr>
          <tr>
            <td>
              <p>
                {' '}
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
            <th>Light (Default)</th>
            <th>Navy</th>
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
            <td className="bg-primary">
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
            <td className="bg-primary">
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
            <td className="bg-primary">
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
            <td className="bg-primary">
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
            <td className="bg-primary">
              <span className="text-info">Info</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Heading as="h3">Utility styles</Heading>
      <Heading as="h4">Inverse</Heading>
      <p className="bg-primary text-inverse p-a-2">Text inverse</p>
      <pre>.text-inverse</pre>
      <Heading as="h4">Muted</Heading>
      <p className="text-muted">Text muted</p>
      <pre>.text-muted</pre>
      <Heading as="h3">Alignment classes</Heading>
      <Heading as="h4">Left</Heading>
      <pre>.text-xs|sm|md|lg|xl-left</pre>
      <p className="text-xs-left">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h4">Center</Heading>
      <pre>.text-xs|sm|md|lg|xl-center</pre>
      <p className="text-xs-center">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h4">Right</Heading>
      <pre>.text-xs|sm|md|lg|xl-right</pre>
      <p className="text-xs-right">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h4">Justify</Heading>
      <pre>.text-xs|sm|md|lg|xl-justify</pre>
      <p className="text-xs-justify">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h4">Nowap</Heading>
      <pre>.text-xs|sm|md|lg|xl-nowrap</pre>
      <p className="text-xs-nowrap">
        We’re on a mission to bring transparency to finance, for people without borders.
      </p>
      <Heading as="h3">Transformation </Heading>
      <Heading as="h4">Lowercase</Heading>
      <pre>.text-lowercase</pre>
      <p className="text-lowercase">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h4">Uppercase</Heading>
      <pre>.text-uppercase</pre>
      <p className="text-uppercase">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h4">Capitalize</Heading>
      <pre>.text-capitalize</pre>
      <p className="text-capitalize">
        We’re on a mission to bring transparency to finance, for people without borders. We charge
        as little as possible, and we always show you upfront. No hidden fees. No bad exchange
        rates. No surprises.
      </p>
      <Heading as="h2">Blockquotes</Heading>
      <pre>{'<blockquote /> / .blockquote-reverse '}</pre>
      <blockquote>
        <p>We’re on a mission to bring transparency to finance, for people without borders.</p>
      </blockquote>
      <blockquote>
        <p>We’re on a mission to bring transparency to finance, for people without borders.</p>
        <footer>
          Kristo in <cite title="Wise">Wise Blog</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote-reverse">
        <p>We’re on a mission to bring transparency to finance, for people without borders.</p>
        <footer>
          Kristo in <cite title="Wise">Wise Blog</cite>
        </footer>
      </blockquote>
      <Heading as="h2">Lists</Heading>
      Unstyled list can be achieved using <code>.list-unstyled</code> class.
      <Heading as="h3">Unordered list</Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Cras ac augue vitae massa dapibus condimentum et sit amet augue.
          <ul>
            <li>Vivamus volutpat nisi ut ex consectetur auctor.</li>
            <li>Nullam ut tortor ut odio aliquet elementum.</li>
          </ul>
        </li>
        <li>Nulla mollis justo et dolor tincidunt maximus.</li>
        <li>Sed rutrum quam eget libero tristique hendrerit.</li>
      </ul>
      <Heading as="h3">Ordered list</Heading>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Cras ac augue vitae massa dapibus condimentum et sit amet augue.
          <ol>
            <li>Vivamus volutpat nisi ut ex consectetur auctor.</li>
            <li>Nullam ut tortor ut odio aliquet elementum.</li>
          </ol>
        </li>
        <li>Nulla mollis justo et dolor tincidunt maximus.</li>
        <li>Sed rutrum quam eget libero tristique hendrerit.</li>
      </ol>
    </div>
  );
}
