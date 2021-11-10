import { Alert, Image, Section, Sentiment } from '@transferwise/components';

import Heading from '../../components/Heading';
import cardClosedImage from '../../public/static/assets/blog/introducing-sections-card-closed.png';
import cardsImage from '../../public/static/assets/blog/introducing-sections-cards.png';
import headerImage from '../../public/static/assets/blog/introducing-sections-header.png';
import sectionMarginImage from '../../public/static/assets/blog/introducing-sections-margin.png';
import optionContentImage from '../../public/static/assets/blog/introducing-sections-option-content.png';
import optionPaddingsImage from '../../public/static/assets/blog/introducing-sections-option-paddings.png';
import optionTopBorderImage from '../../public/static/assets/blog/introducing-sections-option-top-border.png';
import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'Introducing Sections',
  date: '2021-11-05',
  authors: [
    {
      name: 'Mate Bek',
      githubUsername: 'matebek-tw',
    },
  ],
  version: {
    components: '38.0.0',
    css: '11.0.0',
  },
  tags: ['Secion', 'Header', 'Card', 'Option'],
};

const PageContent = () => {
  return (
    <div>
      <Section>
        <p>
          For most people no changes are necessary, though we recommend you to revise the pages
          where you are using any of the <a href="#option">Option</a> components, and refactor your
          code to use them together with the newly introduced{' '}
          <DocumentLink href="/components/content/Section">Section</DocumentLink> and{' '}
          <DocumentLink href="/components/content/Header">Header</DocumentLink> components.
        </p>
      </Section>
      <Section>
        <Heading as="h2">Section</Heading>
        <p>
          We've been using implicit sections on mobile and web, with different implementations, but
          the Section component allows us to start seeing sections as the exact same across all
          platforms. No visual changes are necessary to display sections on web and mobile, the only
          difference is that on desktop web we display them on top of a grey background. This will
          lay the foundation for us to get rid of the grey background and create drilling navigation
          on web as well, to further unify the products. Creating the Section component before
          removing the grey background allows us to roll out these changes across the web product
          without meaningful difference for customers. Sincronizing the rollout of sections across
          pages is not needed, changing the primary background of the root product pages is.
        </p>
        <Heading as="h3">Embedded top margin</Heading>
        <p>
          Section has an embedded margin at the top. This allows developers and designers to stack
          sections and the distance between them is implicit. The internal paddings are all defined
          by the Section header and Option components.
          <Image
            className="m-t-2"
            src={sectionMarginImage}
            loading="lazy"
            alt="Section embedded top margin"
          />
        </p>
      </Section>
      <Section>
        <Heading as="h2">Header</Heading>
        <p>
          The component already exists on mobile and is widely used in Figma. A similar style is
          already used on web, but the line separator comes from other components like navigation
          option, so we don't have a single way to use it as a header for groups of other
          components, like summaries or form elements. Using it as a component also allows us to set
          consistent spacing between the title and the line, and a unified colour.
          <Image className="m-t-2" src={headerImage} loading="lazy" alt="Header" />
        </p>
      </Section>
      <Section>
        <Heading as="h2">Option</Heading>
        <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
        <p>
          Option components got a general face-lift on web to align the styles what we already have
          on mobile. These changes are subtle, but can affect the visual alignment of other
          components relative to them.
        </p>
        <p>
          List of components sharing Option as a base:
          <ul>
            <li>
              <DocumentLink href="/components/content/Accordion">Accordion</DocumentLink>
            </li>
            <li>
              <DocumentLink href="/components/options/ActionOption">ActionOption</DocumentLink>
            </li>
            <li>
              <DocumentLink href="/components/options/CheckboxOption">CheckboxOption</DocumentLink>
            </li>
            <li>
              <DocumentLink href="/components/options/NavigationOption">
                NavigationOption
              </DocumentLink>
            </li>
            <li>
              <DocumentLink href="/components/options/RadioOption">RadioOption</DocumentLink>
            </li>
            <li>
              <DocumentLink href="/components/options/SwitchOption">SwitchOption</DocumentLink>
            </li>
          </ul>
        </p>
        <Heading as="h3">Reducing the width of separator inside the Option components</Heading>
        <p>
          The indentation of the Avatar on the Option components is already something that exists
          exclusively on large screens, and was already removed from activity items. This extra
          space creates unnecessary complexity when aligning the component within different
          containers, as it often looks out of place. By aligning the ends of the separator with the
          content of the component, within the embedded paddings on its left and right, we can now
          paint hover states that go seemingly beyond the boundaries of the column, but are still
          within the component.
          <Image className="m-t-2" src={optionPaddingsImage} loading="lazy" alt="Option paddings" />
        </p>
        <Heading as="h3">Removing the top border</Heading>
        <p>
          We are removing the border at the top of the component, as is already the case on mobile.
          We remove the complexity of checking siblings and unite the implementation across
          platforms and Figma. As navigation options are designed to be used in lists, and most of
          the time with headers, there will almost always be a line above each item.
          <Image
            className="m-t-2"
            src={optionTopBorderImage}
            loading="lazy"
            alt="Option top border"
          />
        </p>
        <Heading as="h3">Reducing the avatar size and margin between elements</Heading>
        <p>
          To reduce the need to resize the avatar on smaller resolutions and align the component
          across platforms, we're changing the avatar size from 48px to 40px. The reduction in size
          of the elements requires less space between them, so we're also reducing the space between
          elements from 24px to 16px. These changes were already made on activity list items, so
          this would bring consistency with the rest of the app.
          <Image
            className="m-t-2"
            src={optionContentImage}
            loading="lazy"
            alt="Option content margins"
          />
        </p>
      </Section>
      <Section>
        <Heading as="h2">Card</Heading>
        <p>
          Moving the line to the bottom (to accomodate the incoming Section and Section header
          components) and decreasing paddings and margins should help align the small differences
          between the 2 types of components that seem unintentional.
          <Image className="m-t-2" src={cardClosedImage} loading="lazy" alt="Card closed" />
        </p>
        <Heading as="h3">Expanding within horizontal boundaries</Heading>
        <p>
          Even though the component still seeminly expands horizontally when open, it only does so
          to the same amount of padding already contained in it, so it's still horizontally within
          its original boundaries.
          <Image className="m-t-2" src={cardsImage} loading="lazy" alt="Cards in list" />
        </p>
      </Section>
    </div>
  );
};

export default PageContent;
