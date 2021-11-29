/* eslint-disable react/function-component-definition */
import { Alert, Link, Sentiment } from '@transferwise/components';
import { ReactElement } from 'react';

import Heading from '../../components/Heading';
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
  tags: ['Typography', 'Accessible Colors', 'RTL'],
};

export default function PageContent(): ReactElement {
  return (
    <div className="d-flex flex-column">
      <Heading as="h2" className="m-t-4">
        Accessible colours
      </Heading>
      <Link href="https://neptune.wise.com/design/colour">Colour system docs</Link>
      <DocumentLink href="/styles/tokens/Colors">CSS colour tokens</DocumentLink>
      <p className="m-t-3">
        We've known for a long time that some of our colour combinations were inaccessible. Recently
        we did work to address this, and in this release we put our new accessible colours to work.
        We've updated our components, base CSS and docs to use the new colours.
      </p>
      <div style={{ maxWidth: '300px' }} className="align-self-center m-y-4">
        {/* TODO: colours image <Image src={popoverNew} alt="New Popover" loading="lazy" stretch={false} /> */}
      </div>
      <Heading as="h3" className="m-t-4">
        Semantic colours
      </Heading>
      <p className="m-t-2">
        Our colour tokens are named semantically. This means that when you are looking for a colour,
        you should think about your use case, rather than the colour itself. For example, if you
        were looking to apply some colour to some paragraph text you should use{' '}
        <code>--color-content-primary</code>, rather than <code>@color-base-navy-mid</code>. Learn
        more about{' '}
        <Link href="https://neptune.wise.com/design/colour/">choosing colours semantically</Link>{' '}
        over on the main Neptune site.
      </p>
      <p>
        You'll notice that the above example makes use of CSS custom properties in place of the old
        less variable.{' '}
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
        moment. Note: if you still support IE11, you will need to follow{' '}
        <DocumentLink href="/about/Styles#tokens-css-custom-properties">this guide</DocumentLink>{' '}
        before using custom properties.
      </p>
      <p>
        We have updated the name of some of our tokens to better communicate their purpose. See the
        breaking changes section below.
      </p>
      <Heading as="h2" className="m-t-4">
        Typography
      </Heading>
      <Link href="https://neptune.wise.com/design/typography/">Typography docs</Link>
      <DocumentLink href="/styles/core/Typography#headings">Typography classes</DocumentLink>
      <p className="m-t-3">
        We've updated typography styles to improve consistency across platforms: in particular: font
        size, font weight, line height and emphasis styles. We've added some new utility classes and
        improved our documentation.
      </p>
      <Heading as="h3" className="m-t-4">
        Heading utilities
      </Heading>
      <DocumentLink href="styles/core/Typography#headings">Headings docs</DocumentLink>
      <p className="m-t-2">
        New title classes (<code>.title-1</code>, <code>.title-2</code> etc) are available for
        styling headings.
      </p>
      <Heading as="h3" className="m-t-4">
        General text utilities
      </Heading>
      <DocumentLink href="styles/core/Typography#body-copy">Text utility docs</DocumentLink>
      <p className="m-t-2">
        Several new utility classes (<code>.body-*</code>, <code>.control-*</code>,{' '}
        <code>.value</code>, <code>.label</code> etc) are available for styling text.
      </p>
      <Heading as="h3" className="m-t-4">
        Typography tokens
      </Heading>
      <DocumentLink href="styles/tokens/Typography">Typography tokens docs</DocumentLink>.
      <p className="m-t-2">
        We've exposed a set of tokens for font size, line height and font weight.
      </p>
      <Heading as="h2" className="m-t-4">
        Right to Left
      </Heading>
      <DocumentLink href="/styles/addons/RtlLayout">RTL setup guide</DocumentLink>
      <p className="m-t-3">
        We have added right to left support for Neptune CSS and all components. If you want to get
        started supporting right to left in your application today, we have{' '}
        <DocumentLink href="/styles/addons/RtlLayout">a guide</DocumentLink> describing the steps
        you need to take.
      </p>
      <Heading as="h2" className="m-t-4">
        Breaking changes and deprecations
      </Heading>
      <Heading as="h3" className="m-t-4">
        Token names
      </Heading>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>Some token names have changed and some have been removed.</p>
      <Heading as="h3" className="m-t-4">
        Typography utility classes deprecated
      </Heading>
      <Alert className="m-y-2" message="Deprecation" type={Sentiment.WARNING} />
      <p>Some classes have been deprecated.</p>
    </div>
  );
}
