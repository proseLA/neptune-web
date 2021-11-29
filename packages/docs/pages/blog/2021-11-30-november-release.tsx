/* eslint-disable react/jsx-child-element-spacing */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-curly-brace-presence */
// /* eslint-disable prettier/prettier */
import { Accordion, Link, Section } from '@transferwise/components';
import { Eye } from '@transferwise/icons';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
import BreakingChangeNotice from '../../utils/BreakingChangeNotice';
import DeprecationNotice from '../../utils/DeprecationNotice';
import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'November Release',
  date: '2021-11-30',
  version: {
    components: '39.0.0',
    css: '12.0.0',
    'dynamic-flows': '16.0.0',
  },
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
  tags: ['Updated Typography', 'Accessible Colors', 'Support for RTL mode'],
};

export default function PageContent(): ReactElement {
  return (
    <>
      <Section>
        {/* Colors */}
        <Heading as="h2">New and Accessible Colors</Heading>
        <p>
          Neptune Design System team made changes to colors palette to address issues of cross
          platform alignment and accessibility. Learn more about that{' '}
          <Link href="https://neptune.wise.com/design/colour/" target="_blank">
            here
          </Link>
          .
        </p>
        <p>
          In this release we updated styles of components, styes of Neptune CSS and docs to use only{' '}
          <DocumentLink href="styles/tokens/Colors">Neptune color tokens</DocumentLink>.
        </p>
        <Heading as="h3">Color Tokens</Heading>
        <BreakingChangeNotice />
        <p>Tokens available both as CSS custom properties and as a LESS variables.</p>
        <p>
          If you choose to use Less variables make sure to have an import
          <pre>{`@import '@transferwise/neptune-css/dist/less/neptune-tokens.less';`}</pre>
        </p>
        <p>
          If you wish to use CSS custom properties no import is required, the variables avaialble at
          a root level (<code>:root</code>) but if you need provide support for IE11 we suggest
          using{' '}
          <DocumentLink href="/about/Styles#tokens-css-custom-properties">
            PostCSS and <code>@arshaw/postcss-custom-properties</code> plugin
          </DocumentLink>
          .
        </p>
      </Section>
      <Section>
        {/* Typography */}
        <Heading as="h2">Updated Typography</Heading>
        <p>
          Neptune Design System team made cross platform alignment and improved consistency for
          typography styles. Learn more about that{' '}
          <Link target="_blank" href="https://neptune.wise.com/design/typography/">
            here
          </Link>
          . So in this release we updated styles of components and Neptune CSS (in particular: font
          size, font weight, line height and emphasis styles).
        </p>
        <p>We also adding new CSS utility classes that have cross platfrom naming.</p>
        <Heading as="h3" className="m-b-1">
          New Headings Utility Classes
        </Heading>
        <p className="m-b-1">
          Use <code>.title-1</code>, <code>.title-2</code> ... font styling classes for the headings
          (see{' '}
          <DocumentLink href="styles/core/Typography#headings">full documentation</DocumentLink>
          ).
        </p>
        <Accordion
          items={[
            {
              icon: <Eye />,
              title: 'A few usage and demo examples',
              content: (
                <>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Usage Example</th>
                        <th>Demo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <pre>{'<h1 class="title-1">Money without borders</h1>'}</pre>
                          <pre>{'<span class="title-1">Money without borders</span>'}</pre>
                        </td>
                        <td>
                          <h1 className="title-1">Money without borders</h1>
                          <span className="title-1">Money without borders</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>{'<h2 class="title-2">Money without borders</h2>'}</pre>
                          <pre>{'<span class="title-2">Money without borders</span>'}</pre>
                        </td>
                        <td>
                          <h1 className="title-2">Money without borders</h1>
                          <span className="title-2">Money without borders</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>{'<h3 class="title-3">Money without borders</h3>'}</pre>
                          <pre>{'<span class="title-3">Money without borders</span>'}</pre>
                        </td>
                        <td>
                          <h1 className="title-3">Money without borders</h1>
                          <span className="title-3">Money without borders</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ),
            },
          ]}
        />
      </Section>
      <Section>
        <Heading as="h3">New Body Utility classes</Heading>
        <code>.body-*</code>, <code>.control-*</code>, <code>.value</code>, <code>.label</code>, see{' '}
        <DocumentLink href="styles/core/Typography#body-copy">full documentation</DocumentLink>.
        <Accordion
          items={[
            {
              icon: <Eye />,
              title: 'A few usage and demo examples',
              content: (
                <>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Usage example</th>
                        <th>Demo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <pre>
                            {`<p class="body-1">Body 1<br />
  Were on a mission to bring transparency to finance.
</p>`}
                          </pre>
                        </td>
                        <td>
                          <p className="body-1">
                            Body 1<br />
                            Were on a mission to bring transparency to finance.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>
                            {`<p class="body-2">Body 1<br />
  Were on a mission to bring transparency to finance.
</p>`}
                          </pre>
                        </td>
                        <td>
                          <p className="body-2">
                            Body 1<br />
                            Were on a mission to bring transparency to finance.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>
                            {`<p class="body-3">Body 1<br />
  Were on a mission to bring transparency to finance.
</p>`}
                          </pre>
                        </td>
                        <td>
                          <p className="body-3">
                            Body 1<br />
                            Were on a mission to bring transparency to finance.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>
                            {`<p class="control-1">Control 1</p>
<span class="control-1">Control 1</span>

<p class="control-2">Control 2</p>
<span class="control-2">Control 2</span>

<p class="control-3">Control 3</p>
<span class="control-3">Control 3</span>`}
                          </pre>
                        </td>
                        <td>
                          <p className="control-1">Control 1</p>
                          <span className="control-1">Control 1</span>
                          <p className="control-2">Control 2</p>
                          <span className="control-2">Control 2</span>
                          <p className="control-3">Control 3</p>
                          <span className="control-3">Control 3</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>{'<p class="label">Label</p>'}</pre>
                        </td>
                        <td>
                          <p className="label">Label</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <pre>{'<p class="value">Value</p>'}</pre>
                        </td>
                        <td>
                          <p className="value">Value</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ),
            },
          ]}
        />
      </Section>
      <Section>
        <Heading as="h3">Typography Tokens</Heading>
        <p>
          Please use new tokens, they available as CSS custom properties and as a LESS variables,
          see <DocumentLink href="styles/tokens/Typography">full documentation</DocumentLink>.
        </p>
        <DeprecationNotice>
          <>
            The following Bootstrap less variables are deprecated. Map to migrate to new typography
            CSS custom properties.
          </>
        </DeprecationNotice>
        <Accordion
          items={[
            {
              icon: <Eye />,
              title: 'Table of Deprecation API and what to use instead',
              content: (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Legacy variables</th>
                      <th>New custom properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>@font-size-base</td>
                      <td>var(--font-size-16)</td>
                    </tr>
                    <tr>
                      <td>@font-size-large</td>
                      <td>
                        Was 18px, a deprecated size. Use var(--font-size-16) or var(--font-size-20)
                        depending the cas
                      </td>
                    </tr>
                    <tr>
                      <td>@font-size-medium</td>
                      <td>var(--font-size-16)</td>
                    </tr>
                    <tr>
                      <td>@font-size-small</td>
                      <td>var(--font-size-14)</td>
                    </tr>
                    <tr>
                      <td>@font-size-xsmall</td>
                      <td>var(--font-size-12)</td>
                    </tr>
                    <tr>
                      <td>@font-size-h1</td>
                      <td>var(--font-size-32)</td>
                    </tr>
                    <tr>
                      <td>@font-size-h2</td>
                      <td>var(--font-size-26)</td>
                    </tr>
                    <tr>
                      <td>@font-size-h3</td>
                      <td>var(--font-size-20)</td>
                    </tr>
                    <tr>
                      <td>@font-size-h4</td>
                      <td>var(--font-size-16)</td>
                    </tr>
                    <tr>
                      <td>@font-size-h5</td>
                      <td>var(--font-size-14)</td>
                    </tr>
                    <tr>
                      <td>@font-size-h6</td>
                      <td>var(--font-size-14)</td>
                    </tr>
                    <tr>
                      <td>@line-height-h1</td>
                      <td>var(--line-height-title)</td>
                    </tr>
                    <tr>
                      <td>@line-height-h2</td>
                      <td>var(--line-height-title)</td>
                    </tr>
                    <tr>
                      <td>@line-height-h3</td>
                      <td>var(--line-height-title)</td>
                    </tr>
                    <tr>
                      <td>@line-height-h4</td>
                      <td>var(--line-height-title)</td>
                    </tr>
                    <tr>
                      <td>@line-height-h5</td>
                      <td>var(--line-height-title)</td>
                    </tr>
                    <tr>
                      <td>@line-height-h6</td>
                      <td>var(--line-height-title</td>
                    </tr>
                    <tr>
                      <td>@line-height-base</td>
                      <td>var(--line-height-bod</td>
                    </tr>
                    <tr>
                      <td>@font-weight-normal</td>
                      <td>var(--font-weight-regular)</td>
                    </tr>
                    <tr>
                      <td>@font-weight-semi-bold</td>
                      <td>var(--font-weight-semi-bold)</td>
                    </tr>
                    <tr>
                      <td>@font-weight-bold</td>
                      <td>var(--font-weight-bold)</td>
                    </tr>
                  </tbody>
                </table>
              ),
            },
          ]}
        />
        <br />
        <br />
        <DeprecationNotice>
          <>
            The following Neptune less variables are deprecated. Map to migrate to new typography
            CSS custom properties.
          </>
        </DeprecationNotice>
        <Accordion
          items={[
            {
              icon: <Eye />,
              title: 'Table of Deprecation API and what to use instead',
              content: (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Legacy variables</th>
                      <th>New custom properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>@font-size-xx-large: 2.625rem; // 42px</td>
                      <td> Not equivalent</td>
                    </tr>
                    <tr>
                      <td>@font-size-x-large</td>
                      <td> var(--font-size-26)</td>
                    </tr>
                    <tr>
                      <td>@font-size-large</td>
                      <td> var(--font-size-20)</td>
                    </tr>
                    <tr>
                      <td>@font-size-medium</td>
                      <td>
                        {' '}
                        Was 18px, a deprecated size. Use var(--font-size-16) or var(--font-size-20)
                        depending the case
                      </td>
                    </tr>
                    <tr>
                      <td>@font-size-base:</td>
                      <td> var(--font-size-16</td>
                    </tr>
                    <tr>
                      <td>@font-size-small</td>
                      <td> var(--font-size-14)</td>
                    </tr>
                    <tr>
                      <td>@font-size-x-small</td>
                      <td> var(--font-size-12)</td>
                    </tr>
                  </tbody>
                </table>
              ),
            },
          ]}
        />
      </Section>
      <Section>
        <Heading as="h3" className="m-b-1">
          Legacy typography utility classes
        </Heading>
        <DeprecationNotice>
          <>Following API is deprecated. Please avoid using it and replace with new one.</>
        </DeprecationNotice>
        <p>
          Neptune recommends to use new typography utility classes listed in below tables to format
          typography, because some of the typography classes are deprecated:
        </p>
        <Accordion
          items={[
            {
              icon: <Eye />,
              title: 'Table of Deprecation API and what to use instead',
              content: (
                <>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Deprecated</th>
                        <th>New (use instead)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>{'<h6>'}</code> / <code>.h6</code>
                        </td>
                        <td>
                          .. / <code>.body-2 .font-weight-semi-bold</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.text-danger</code>
                        </td>
                        <td>
                          <code>.text-nagative</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.text-success</code>
                        </td>
                        <td>
                          <code>.text-postive</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.small</code>
                        </td>
                        <td>
                          <code>.body-2</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.tiny</code>
                        </td>
                        <td>
                          <code>.body-3</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.lead</code>
                        </td>
                        <td>
                          <code>.title-3</code> or <code>.title-4</code>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>.h1</code>, <code>.h2</code>, <code>.h3</code>, <code>.h4</code>,{' '}
                          <code>.h5</code>, <code>.h6</code>
                        </td>
                        <td>
                          <code>.title-1</code>, <code>.title-2</code>, <code>.title-3</code>,{' '}
                          <code>.title-4</code>,<code>.title-5</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ),
            },
          ]}
        />
      </Section>
      <Section>
        {/* Support for RTL mode */}
        <Heading as="h2">Support for RTL mode</Heading>
        <p>
          And last but not least we made all our components and styles (neptune-css) work in both
          page direction. Also, we provide{' '}
          <DocumentLink href="styles/addons/RtlLayout">guidance and tools</DocumentLink> for
          consumers to enable support for RTL mode on their side.
        </p>
        {/* Migration Checklist */}
        <Heading as="h2">Migration Checklist</Heading>
        <ol>
          <li>
            <p>
              Update Neptune and all UI dependencies (make sure all UI dependencies have migrated to
              this version or higher version of components (39.x) and neptune-css (12.x)).
            </p>
            <p>This should get you most of the updates. Now let adopt them in custom styles.</p>
          </li>
          <li>
            <p>
              Apply new colors incase you have custom color styles in your repository, check{' '}
              <code>.less</code> / <code>.css</code> files.
            </p>
            <p>
              <strong>Tip</strong>: We name our colours semantically. This means describing them by
              when they should be used, so you can pick them based on the purpose of the property
              you’re colouring.
              <ul>
                <li>
                  e.g if CSS property is <code>color</code> choose{' '}
                  <DocumentLink href="styles/tokens/Colors#content-color-tokens">
                    content (text and icon) tokens
                  </DocumentLink>
                  .
                </li>
                <li>
                  e.g if it's <code>background-color</code> for surface / screen pick one of{' '}
                  <DocumentLink href="styles/tokens/Colors#background-color-tokens">
                    background colors tokens
                  </DocumentLink>
                  , if background for some interactive element pick{' '}
                  <DocumentLink href="styles/tokens/Colors#interactive-colors-tokens">
                    interactive colors tokens
                  </DocumentLink>
                  .
                </li>
                <li>
                  for <code>border-color</code>, use{' '}
                  <DocumentLink href="styles/tokens/Colors#border-color-tokens">
                    border color tokens
                  </DocumentLink>{' '}
                  if the purpose of the border is decorative, if it’s used in an interactive
                  element, like inputs, use{' '}
                  <DocumentLink href="styles/tokens/Colors#interactive-colors-tokens">
                    interactive
                  </DocumentLink>
                  .
                </li>
                <li>
                  incase its <code>:hover</code> pseudo class use tokens with <code>-hover</code>{' '}
                  suffix, for <code>:focus</code> / <code>:active</code> use tokens with{' '}
                  <code>-active</code> suffix
                </li>
              </ul>
            </p>
            <p>
              <strong>Note</strong>: Mostly you would need to use default color (light theme)
              variables, in case you have some part of UI with Navy theme use{' '}
              <DocumentLink href="styles/tokens/Colors#navy-colors">
                Navy color variables (<code>color-navy-*</code>)
              </DocumentLink>
              .
            </p>
          </li>
          <li>
            Apply typography updates: check whether you use{' '}
            <DocumentLink href="blog/2021-11-30-november-release#legacy-typography-utility-classes">
              deprecated CSS classes
            </DocumentLink>
            , and use{' '}
            <DocumentLink href="blog/2021-11-30-november-release#new-typography-tokens">
              new tokens
            </DocumentLink>{' '}
            incase you have custom typogrpahy related styles in your repository.
          </li>
          <li>
            If you need add support for RTL mode please read{' '}
            <DocumentLink href="/styles/addons/RtlLayout">RTL layout guide</DocumentLink>.
          </li>
          <li>
            Lastly, please run application / dev envirnment to perform visual review to make sure
            that colors and typography (and RTL mode) looks correct.
          </li>
        </ol>
      </Section>
    </>
  );
}
