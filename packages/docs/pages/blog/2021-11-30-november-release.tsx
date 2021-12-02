/* eslint-disable react/function-component-definition */
import { Alert, Link, Image, Sentiment, NavigationOption, Section } from '@transferwise/components';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
import coloursImg from '../../public/static/assets/blog/colours-release-nov-2021.png';
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
      name: 'Anton Dozortsev',
      githubUsername: 'dozortsev',
    },
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
    {
      name: 'Mate Bek',
      githubUsername: 'matebek-tw',
    },
    {
      name: 'Naiara Abaroa',
      githubUsername: 'nabaroa',
    },
  ],
  tags: ['Typography', 'Accessible Colors', 'Right to Left'],
};

export default function PageContent(): ReactElement {
  return (
    <>
      <Section>
        <Heading as="h2">Accessible colours</Heading>
        <div>
          <Link href="https://neptune.wise.com/design/colour">Colour system docs</Link>
        </div>
        <div>
          <DocumentLink href="/styles/tokens/Colors">CSS colour tokens</DocumentLink>
        </div>
        <p className="m-t-3">
          We've known for a long time that some of our colour combinations were inaccessible.
          Recently we did work to address this, and in this release we put our new accessible
          colours to work. We've updated our components, base CSS and docs to use the new colours.
        </p>
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div style={{ maxWidth: 757 }} className="align-self-center m-y-4">
          <Image src={coloursImg} alt="New accessible colours" loading="lazy" stretch={false} />
        </div>
      </Section>
      <Section>
        <Heading as="h3">Semantic colours</Heading>
        <p className="m-t-2">
          Our colour tokens are named semantically. This means that when you are looking for a
          colour, you should think about your use case, rather than the colour itself. For example,
          if you were looking to apply some colour to some paragraph text you should use{' '}
          <code>--color-content-primary</code>, rather than <code>@color-base-navy-mid</code>. Learn
          more about{' '}
          <Link href="https://neptune.wise.com/design/colour/">choosing colours semantically</Link>.
        </p>
        <p>
          You'll notice that the above example makes use of CSS custom properties in place of the
          old less variable.{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
          >
            Custom properties
          </Link>{' '}
          give us the ability to swap colours out at run time.{' '}
          <strong>
            We strongly recommend using custom properties in place of legacy less variables.
          </strong>{' '}
          This will ease the future work required to support theming, which we're working on at the
          moment.
        </p>
        <Alert
          message="If you still support IE 11, you will need some extra setup before you can use custom properties."
          action={{
            'aria-label': 'Setup custom properties for IE11',
            href: 'https://transferwise.github.io/neptune-web/about/Styles#installation',
            text: 'Setup for IE11',
          }}
        />
        <p>
          We have updated the name of some of our tokens to better communicate their purpose. See
          the breaking changes section below.
        </p>
      </Section>
      <Section>
        <Heading as="h2">Typography</Heading>
        <div>
          <Link href="https://neptune.wise.com/design/typography/">Typography docs</Link>
        </div>
        <div>
          <DocumentLink href="/styles/core/Typography#headings">Typography classes</DocumentLink>
        </div>
        <p className="m-t-3">
          We've made extensive typography improvements to increase consistency across platforms. As
          part of this we've adopted a new typography scale, which is shared across all platforms.
          We've also updated some font styles, added new utility classes and improved our
          documentation. Please note that{' '}
          <strong>
            this will result in some visual changes to typography when you update - these are
            expected
          </strong>
          {/*
           */}
          . Read the{' '}
          <Link href="https://neptune.wise.com/design/typography/">typography documentation</Link>{' '}
          to see all the changes.
        </p>
      </Section>
      <Section>
        <Heading as="h3">Heading utilities</Heading>
        <DocumentLink href="styles/core/Typography#headings">Headings docs</DocumentLink>
        <p className="m-t-2">
          New title classes (<code>.title-1</code>, <code>.title-2</code> etc) are available for
          styling headings.
        </p>
        <table className="table docs-table">
          <thead>
            <tr>
              <th>Usage</th>
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
              <td colSpan={2} className="text-xs-center body-1">
                See the{' '}
                <DocumentLink href="styles/core/Typography#headings">documentation</DocumentLink>{' '}
                for more examples.
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section>
        <Heading as="h3">General text utilities</Heading>
        <DocumentLink href="styles/core/Typography#body-copy">Text utility docs</DocumentLink>
        <p className="m-t-2">
          Several new utility classes (<code>.body-*</code>, <code>.control-*</code>,{' '}
          <code>.value</code>, <code>.label</code> etc) are available for styling text.
        </p>
        <table className="table docs-table">
          <thead>
            <tr>
              <th>Usage example</th>
              <th>Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre>{`<p class="body-1">Body 1 - money without borders</p>`}</pre>
              </td>
              <td>
                <p className="body-1">Body 1 - money without borders</p>
              </td>
            </tr>
            <tr>
              <td>
                <pre>{`<p class="control-1">Control 1</p>`}</pre>
              </td>
              <td>
                <p className="control-1">Control 1</p>
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
            <tr>
              <td colSpan={2} className="text-xs-center body-1">
                See the{' '}
                <DocumentLink href="styles/core/Typography#body-copy">documentation</DocumentLink>{' '}
                for more examples.
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section>
        <Heading as="h3">Typography tokens</Heading>
        <DocumentLink href="styles/tokens/Typography">Typography tokens docs</DocumentLink>
        <p className="m-t-2">
          We've exposed a set of tokens for font size, line height and font weight. See the{' '}
          <DocumentLink href="styles/tokens/Typography">documentation</DocumentLink> for the full
          list.
        </p>
        <Section>
          <Heading as="h2">Right to Left</Heading>
          <DocumentLink href="/styles/addons/RtlLayout">Setup guide</DocumentLink>
          <p className="m-t-3">
            We have added right to left support for Neptune CSS and all components. If you want to
            get started supporting right to left in your application today, we have{' '}
            <DocumentLink href="/styles/addons/RtlLayout">a guide</DocumentLink> describing the
            steps you need to take.
          </p>
          <div className="d-flex justify-content-center" dir="rtl">
            {/* eslint-disable-next-line react/forbid-dom-props */}
            <div style={{ width: 576 }}>
              <NavigationOption
                media={<FastFlagIcon />}
                title="I am a title"
                content="Here is the rest of the content"
                // eslint-disable-next-line no-console
                onClick={console.log}
              />
              <NavigationOption
                media={<FastFlagIcon />}
                title="I am a title"
                content="Here is the rest of the content"
                // eslint-disable-next-line no-console
                onClick={console.log}
              />
            </div>
          </div>
        </Section>
      </Section>
      <Section>
        <Heading as="h2">Tokens upgrade</Heading>
        <p>
          Version <strong>12</strong> of Neptune CSS bumps{' '}
          <a href="https://github.com/transferwise/neptune-tokens">neptune-tokens</a> from v1 to v6,
          so there are lots of great updates and some breaking changes that we need to address. Read
          on to get familiar with new and updated tokens, and to see which tokens have been removed
          and deprecated.
        </p>
        <Alert
          type={Sentiment.POSITIVE}
          message="**We have an upgrade script you can use to fix all breaking changes.** Update and run **yarn run neptune-css-upgrade-util**. Choose the upgrade script **2021-11-v11-v12.js** and follow the instructions."
        />
        <Link href="#steps-to-upgrade">Skip to the upgrade steps</Link>
      </Section>
      <Section>
        <Heading as="h3">Changes</Heading>
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
      </Section>
      <Section>
        <Heading as="h3">New tokens</Heading>
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
                <pre>--space-content-horizontal</pre>
              </td>
              <td>
                Can be used to add consistent horizontal padding to the content, the same token is
                used internally for our components.
              </td>
            </tr>
            <tr>
              <td>
                <pre>--font-family-regular</pre>
              </td>
              <td>
                While you shouldn’t need to set the font often, on the occasions that you do, you
                can now use <code>font-family-regular</code>
              </td>
            </tr>
          </tbody>
        </table>
        <Section>
          <Heading as="h3">Updated tokens</Heading>
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
                  All <code>-control</code> tokens are now <code>-interactive</code> to emphasise
                  that these tokens should be used to colour interactive elements.
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section>
          <Heading as="h3">Removed tokens</Heading>
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
        </Section>
        <Section>
          <Heading as="h3">Deprecated color tokens</Heading>
          <Alert
            className="m-y-2"
            type={Sentiment.WARNING}
            message="These tokens are considered legacy and will be removed in an upcoming release."
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
                  These are tricky to replace using a find and replace - you need to look at the
                  usage and decide whether a <code>--color-content-</code> or{' '}
                  <code>--color-interactive-</code> colour is best, depending on where it's being
                  used.
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section>
          <Heading as="h3">Steps to upgrade</Heading>
          <p>
            Once you've updated to <code>neptune-css</code> v12, run{' '}
            <code>yarn run neptune-css-upgrade-util</code>, choose the upgrade script{' '}
            <code>2021-11-v11-v12.js</code> and follow the instructions.
          </p>

          <Alert
            className="m-y-2"
            type={Sentiment.WARNING}
            message="This script only works on less and css files. If you're using tokens in your js or ts files, please contact us and we can look at extending the script."
          />
        </Section>
      </Section>
      <Section>
        <Heading as="h2">Typography visual changes</Heading>
        <Alert className="m-y-2" message="Visual updates" type={Sentiment.WARNING} />
        <p>
          In version <strong>12</strong> of Neptune CSS we updated many of our typography styles,
          and added new ones. As part of this we've adopted a new typography scale, which is shared
          across all platforms. We've also updated some font styles, added new utility classes and
          improved our documentation. Refer to{' '}
          <Link href="https://neptune.wise.com/design/typography/">the documentation</Link> to see
          all the changes.
        </p>
        <p>
          Eventually we would like to move away from using less variables and towards custom
          properties. As stated above,{' '}
          <strong>
            we strongly recommend using custom properties in place of legacy less variables.
          </strong>{' '}
          This will ease the future work required to support theming, which we're working on at the
          moment. You can start the migration today by only using custom properties listed on our{' '}
          <DocumentLink href="/styles/tokens/Colors">token docs</DocumentLink> page.
        </p>
      </Section>
      <Section>
        <Heading as="h3">New typography tokens</Heading>
        <p>
          This release introduced new custom properties that can be used in place of old less
          typography variables. Read all about them on the new{' '}
          <DocumentLink href="/styles/tokens/Typography">documentation</DocumentLink> page.
        </p>
      </Section>
      <Section>
        <Heading as="h3">Deprecated typography tokens</Heading>
        <Alert
          className="m-y-2"
          type={Sentiment.WARNING}
          message="These tokens are considered legacy and will be removed in an upcoming release."
        />
        <Section>
          <Heading as="h4">legacy-variable.less deprecations</Heading>
          <p>
            The following less variables come from the <code>legacy-variable.less</code> file and
            are deprecated, we are recommending to replace them following these instructions.
          </p>
          <table className="table docs-table">
            <thead>
              <tr>
                <th>Legacy variables</th>
                <th>Replacement custom properties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>@font-size-base</code>
                </td>
                <td>
                  <code>--font-size-16</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-large</code>
                </td>
                <td>
                  18px is not part of our new type scale. Use <code>--font-size-16</code> or{' '}
                  <code>--font-size-20</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-medium</code>
                </td>
                <td>
                  <code>--font-size-16</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-small</code>
                </td>
                <td>
                  <code>--font-size-14</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-xsmall</code>
                </td>
                <td>
                  <code>--font-size-12</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-h1</code>
                </td>
                <td>
                  <code>--font-size-32</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-h2</code>
                </td>
                <td>
                  <code>--font-size-26</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-h3</code>
                </td>
                <td>
                  <code>--font-size-20</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-h4</code>
                </td>
                <td>
                  <code>--font-size-16</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-h5</code>
                </td>
                <td>
                  <code>--font-size-14</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-h6</code>
                </td>
                <td>
                  <code>--font-size-14</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-h1</code>
                </td>
                <td>
                  <code>--line-height-title</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-h2</code>
                </td>
                <td>
                  <code>--line-height-title</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-h3</code>
                </td>
                <td>
                  <code>--line-height-title</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-h4</code>
                </td>
                <td>
                  <code>--line-height-title</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-h5</code>
                </td>
                <td>
                  <code>--line-height-title</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-h6</code>
                </td>
                <td>
                  <code>--line-height-title</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@line-height-base</code>
                </td>
                <td>
                  <code>--line-height-bod</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-weight-normal</code>
                </td>
                <td>
                  <code>--font-weight-regular</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-weight-semi-bold</code>
                </td>
                <td>
                  <code>--font-weight-semi-bold</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-weight-bold</code>
                </td>
                <td>
                  <code>--font-weight-bold</code>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section>
          <Heading as="h4">_typography.less deprecations</Heading>
          <p>
            The following less variables come from the{' '}
            <code>src/less/variables/_typography.less</code> file and are deprecated.
          </p>
          <table className="table docs-table">
            <thead>
              <tr>
                <th>Legacy variables</th>
                <th>New custom properties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>@font-size-xx-large</code>
                </td>
                <td>No equivalent - speak to us if you need this.</td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-x-large</code>
                </td>
                <td>
                  <code> --font-size-26</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-large</code>
                </td>
                <td>
                  <code> --font-size-20</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-medium</code>
                </td>
                <td>
                  18px is not part of our new type scale. Use <code>--font-size-16</code> or{' '}
                  <code>--font-size-20</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-base:</code>
                </td>
                <td>
                  <code> --font-size-16</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-small</code>
                </td>
                <td>
                  <code> --font-size-14</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>@font-size-x-small</code>
                </td>
                <td>
                  <code> --font-size-12</code>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
      </Section>
      <Section>
        <Heading as="h2">Upgrade guide</Heading>
        <ol>
          <li>
            <p>
              Update Neptune and all UI dependencies (make sure all UI dependencies have migrated to
              this version or higher version of components (39.x) and neptune-css (12.x)).
              <br />
              <br />
              <code>npm install @transferwise/neptune-css@12 @transferwise/components@39</code>{' '}
              <strong>or</strong>{' '}
              <code>yarn add @transferwise/neptune-css@12 @transferwise/components@39</code>
            </p>
          </li>
          <li>
            <p>
              Apply new colors in case you have custom color styles in your repository, check{' '}
              <code>.less</code> / <code>.css</code> files.
            </p>
            <p>
              To help you with the upgrades, we added a codemode to get you started with renaming
              the deprecated/removed tokens to the replacement value.
              <br />
              <br />
              <code>npm exec neptune-css-upgrade-util</code> <strong>or</strong>{' '}
              <code>yarn run neptune-css-upgrade-util</code>
            </p>
            <p>
              We named our colours semantically. This means describing them by when they should be
              used, so you can pick them based on the purpose of the property you’re colouring:
              <ul>
                <li>
                  <code>color</code> &ndash; choose{' '}
                  <DocumentLink href="styles/tokens/Colors#content-color-tokens">
                    content (text and icon) tokens
                  </DocumentLink>
                  .
                </li>
                <li>
                  <code>background-color</code> &ndash; for surface / screen pick one of{' '}
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
                  <code>border-color</code> &ndash; use{' '}
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
                  <code>:hover</code> &ndash; pseudo class use tokens with <code>-hover</code>{' '}
                  suffix
                </li>
                <li>
                  <code>:focus</code> / <code>:active</code> &ndash; use tokens with{' '}
                  <code>-active</code> suffix
                </li>
              </ul>
            </p>
          </li>
          <li>
            Apply typography updates: check whether you use{' '}
            <Link href="#deprecated-typography-tokens">deprecated typography tokens</Link>, and use{' '}
            <Link href="#new-typography-tokens">new typography tokens</Link> in case you have custom
            typogrpahy related styles in your repository.
          </li>
          <li>
            If you need add support for RTL mode please read{' '}
            <DocumentLink href="/styles/addons/RtlLayout">RTL layout guide</DocumentLink>.
          </li>
          <li>
            Lastly, please review the visual changes to your application or perform visual
            regression test to make sure that colors and typography (and RTL mode) looks correct.
          </li>
        </ol>
      </Section>
    </>
  );
}
