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
        <Heading as="h1">New and improved</Heading>
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
        <Heading as="h3">Semantic naming</Heading>
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
        <Heading as="h2">Right to Left</Heading>
        <DocumentLink href="/styles/addons/RtlLayout">Setup guide</DocumentLink>
        <p className="m-t-3">
          We have added right to left support for Neptune CSS and all components. If you want to get
          started supporting right to left in your application today, we have{' '}
          <DocumentLink href="/styles/addons/RtlLayout">a guide</DocumentLink> describing the steps
          you need to take.
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
      <Section>
        <Heading as="h2">Typography</Heading>
        <div>
          <Link href="https://neptune.wise.com/design/typography/">Typography docs</Link>
        </div>
        <DocumentLink href="/styles/core/Typography#headings">Typography classes</DocumentLink>
        <Alert className="m-y-2" message="Visual updates" type={Sentiment.WARNING} />
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

        <Heading as="h3">Typography tokens</Heading>
        <DocumentLink href="styles/tokens/Typography">Typography tokens docs</DocumentLink>
        <p className="m-t-2">
          We've exposed a set of tokens for font size, line height and font weight. See the{' '}
          <DocumentLink href="styles/tokens/Typography">documentation</DocumentLink> for the full
          list.
        </p>

        <Heading as="h3">Deprecated typography variables</Heading>
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
          <table className="table docs-table table-condensed">
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
          <table className="table docs-table table-condensed">
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
        <Heading as="h2">Token updates</Heading>
        <Alert className="m-y-2" type={Sentiment.NEGATIVE} message="Breaking change" />
        <p>
          As part of the accessible colours work, tokens have been updated. In line with our new
          approach to choose colours semantically, some token names have been changed, and a few
          tokens removed. Read on to get familiar with new, updated and deprecated tokens.
        </p>
        <Alert
          type={Sentiment.POSITIVE}
          message="**We have an upgrade script you can use to fix all breaking changes.**"
          action={{
            'aria-label': 'Skip to the upgrade steps',
            text: 'Skip to the upgrade steps',
            href: '#steps-to-upgrade',
          }}
        />
      </Section>
      <Section>
        <Heading as="h3" className="m-b-1">
          Changes
        </Heading>
        <p>
          Currently, all our tokens are built into both less variables (e.g.{' '}
          <code>@color-content-primary</code>) and CSS custom properties (
          {/*
           */}
          <code>--color-content-primary</code>). Although the examples below are written as custom
          properties, <strong>the changes below apply to both less and custom properties.</strong>
        </p>
      </Section>
      <Section>
        <Heading as="h3" className="m-b-1">
          New tokens
        </Heading>
        <table className="table docs-table table-condensed">
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
          <Heading as="h3" className="m-b-1">
            Updated tokens
          </Heading>
          <table className="table docs-table table-condensed">
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
          <Heading as="h3" className="m-b-1">
            Removed tokens
          </Heading>
          <table className="table docs-table table-condensed">
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
          <Heading as="h3" className="m-b-1">
            Deprecated color tokens
          </Heading>
          <table className="table docs-table table-condensed">
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
      </Section>
      <Section>
        <Heading as="h1">Steps to upgrade</Heading>

        <Alert
          className="m-y-2"
          type={Sentiment.POSITIVE}
          message="**We have an upgrade script to fix all breaking changes for you.** See step 2."
        />

        <Heading as="h2">1. Update versions</Heading>
        <p>
          Update components (39.x) and neptune-css (12.x). Ensure all of your UI dependencies have
          also migrated to these versions or higher.
          <pre>yarn add @transferwise/neptune-css@12 @transferwise/components@39</pre>
          <pre>npm install @transferwise/neptune-css@12 @transferwise/components@39</pre>
        </p>

        <Heading as="h2">2. Run the upgrade script</Heading>

        <p>
          Run the upgrade script, choose <code>2021-11-v11-v12.js</code> and follow the
          instructions.
          <pre>yarn run neptune-css-upgrade-util</pre>
          <pre>npm exec neptune-css-upgrade-util</pre>
        </p>

        <Heading as="h2">3. Replace custom colours (recommended)</Heading>

        <p>
          All colours should eventually use only colours in our semantic palette. It's recommended
          that you look through your <code>.less</code> / <code>.css</code> files for custom
          colours, and begin replacing them with semantic tokens if you're not already using them.{' '}
          <strong>Prefer custom properties over less variables.</strong>
        </p>

        <Heading as="h3">Choosing semantic colours</Heading>

        <p>Here are some tips to help you choose the right colour token:</p>
        <ul>
          <li>
            <code>color</code> &ndash; the colour of text on an interactive element will always be{' '}
            <code>#fff</code> - this is not themed. For everything else, choose from the{' '}
            <DocumentLink href="styles/tokens/Colors#content-color-tokens">
              content (text and icon) tokens
            </DocumentLink>
            .
          </li>
          <li>
            <code>background-color</code> &ndash; for surfaces / screens choose a{' '}
            <DocumentLink href="styles/tokens/Colors#background-color-tokens">
              background color token
            </DocumentLink>
            . If the background is for an interactive element, choose an{' '}
            <DocumentLink href="styles/tokens/Colors#interactive-colors-tokens">
              interactive color token
            </DocumentLink>
            .
          </li>
          <li>
            <code>border-color</code> &ndash; use{' '}
            <DocumentLink href="styles/tokens/Colors#border-color-tokens">
              border color tokens
            </DocumentLink>{' '}
            if the purpose of the border is decorative. If it’s used in an interactive element use{' '}
            <DocumentLink href="styles/tokens/Colors#interactive-colors-tokens">
              interactive
            </DocumentLink>
            .
          </li>
          <li>
            <code>:hover</code> &ndash; use tokens with <code>-hover</code> suffix
          </li>
          <li>
            <code>:focus</code> / <code>:active</code> &ndash; use tokens with <code>-active</code>{' '}
            suffix
          </li>
        </ul>

        <Heading as="h2">4. Replace deprecated variables (recommended)</Heading>

        <p>
          Check whether you're using any of the{' '}
          <Link href="#deprecated-typography-tokens">deprecated typography tokens</Link>, and
          replace them with the <Link href="#new-typography-tokens">new typography tokens</Link>.
        </p>

        <Heading as="h2">5. Right to left setup (optional)</Heading>

        <p>
          If you need right to left support, please read the{' '}
          <DocumentLink href="/styles/addons/RtlLayout">RTL setup guide</DocumentLink>.
        </p>

        <Heading as="h2">6. Visual regression test</Heading>

        <p>
          Lastly, please perform a visual regression test of your application to ensure sure that
          colour, typography and right to left changes (if applied) look correct.{' '}
          <strong>Please rememeber that some changes are expected</strong>: we have updated our
          colours to be darker and we have updated our font styles. If in doubt, speak with us.
        </p>
      </Section>
    </>
  );
}
