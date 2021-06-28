import { Alert, Image, Sentiment } from '@transferwise/components';
import React, { ReactElement } from 'react';
import { DocLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

import popoverNew from '../../static/assets/blog/popover-release-mar-2021_4.png';
import buttonPriorityMap from '../../static/assets/blog/button-release-mar-2021_1.png';
import circularButtons from '../../static/assets/blog/button-release-mar-2021_3.png';
import infoButton from '../../static/assets/blog/info-button-release-march-2021.png';
import inlineAlert from '../../static/assets/blog/inline-alert-release-mar-2021_1.png';

export const meta: Meta = {
  name: 'March Release',
  date: '2021-03-10',
  authors: [
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
  ],
  version: {
    components: '35.0.0',
    css: '9.0.0',
  },
  tags: ['Popover', 'Button'],
};

export default function PageContent(): ReactElement {
  return (
    <div className="d-flex flex-column">
      <h2 className="m-t-4 m-b-1">Popover</h2>
      <DocLink href="/blog/2021-03-08-popover-upgrade-guide">Upgrade guide</DocLink>
      <DocLink href="/components/alerts/Popover">Component docs</DocLink>
      <p className="m-t-3">
        Popover has been re-written. We’ve made use of the popular library{' '}
        <a target="_blank" rel="noreferrer" href="https://popper.js.org/react-popper/">
          Popper
        </a>{' '}
        to better handle positioning, cleaned up the API and improved the transition. It will now
        move to avoid being cut off screen.
      </p>
      <div style={{ maxWidth: '300px' }} className="align-self-center m-y-4">
        <Image src={popoverNew} alt="New Popover" loading="lazy" stretch={false} />
      </div>
      <p>
        There have been quite significant changes to the API. Please refer to the{' '}
        <DocLink href="/blog/2021-03-08-popover-upgrade-guide">upgrade guide</DocLink> to upgrade
        instances of Popover in your application.
      </p>
      <h2 className="m-t-4 m-b-1">Button</h2>
      <DocLink href="/blog/2021-03-09-button-upgrade-guide">Upgrade guide</DocLink>
      <DocLink href="/components/inputs/Button">Component docs</DocLink>
      <p className="m-t-3">
        We have introduced new{' '}
        <a href="https://transferwise.github.io/neptune/design/colour/">semantic colours</a>,{' '}
        replacing the old types and adding a priority prop that controls the button fill. Below you
        can see the three types with decreasing priority left to right.
      </p>
      <div style={{ maxWidth: '300px' }} className="align-self-center m-y-4">
        <Image
          src={buttonPriorityMap}
          alt="Button priority mapping"
          loading="lazy"
          stretch={false}
        />
      </div>
      <p>
        We have mapped the old types to new ones. You may notice that there is no more grey button -
        the old danger button has become a secondary negative button, and now will always be red 🙌
      </p>
      <p>
        For now we have deprecated the old types, so you will see warnings but they will continue
        working.
        <strong>We are trialling an upgrader tool to help with these prop renames</strong>. See the{' '}
        <DocLink href="/blog/2021-03-09-button-upgrade-guide">upgrade guide</DocLink> for an
        in-depth guide to the changes and instructions on how to use the tool.
      </p>
      <h2>CircularButton</h2>
      <DocLink href="/components/inputs/CircularButton">Component docs</DocLink>
      <p className="m-t-3">
        We have introduced circular buttons on web. These use the same types as the above, and there
        are two priorities - primary (filled) and secondary (unfilled).
      </p>
      <div style={{ maxWidth: '250px' }} className="align-self-center m-y-4">
        <Image
          src={circularButtons}
          alt="Circular button variations"
          loading="lazy"
          stretch={false}
        />
      </div>
      <h2>Info</h2>
      <DocLink href="/components/content/Info">Component docs</DocLink>
      <p className="m-t-3">
        We have exposed the info component, which previously was in use in Summary. You can launch
        content in a modal or a popover, and the component has been built with accessibility in
        mind. Use this instead of custom alternatives to ensure consistency of experience for our
        users.
      </p>
      <div style={{ maxWidth: '100px' }} className="align-self-center m-y-4">
        <Image src={infoButton} alt="Info button" loading="lazy" stretch={false} />
      </div>

      <h2>InlineAlert</h2>
      <DocLink href="/components/alerts/InlineAlert">Component docs</DocLink>

      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-4">
        <Image src={inlineAlert} alt="Inline alert" loading="lazy" stretch={false} />
      </div>
      <p className="m-t-3">
        This component was previously exposed but undocumented. Our intention is to move{' '}
        <a href="https://transferwise.github.io/neptune-web/lab/Field">Field</a> out of the lab and
        extend it to support more components. That should mean that in all but the most custom use
        cases you would not need to use this component directly. But for now - here you go!
      </p>
      <h1>Breaking Changes and Deprecations</h1>
      <h2 className="m-t-3">Popover</h2>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use Popovers.
      </p>
      <p>
        Popover has been re-written and we have changed the API slightly. You must also now wrap
        your trigger in an interactive element if it is not already interactive. See the{' '}
        <DocLink href="/blog/2021-03-08-popover-upgrade-guide">upgrade guide</DocLink> for details
        of the changes and steps you can take to update.
      </p>
      <h2>Button types have been replaced</h2>
      <Alert className="m-y-2" message="Deprecation" type={Sentiment.WARNING} />
      <p>
        <strong>Relevant for you</strong>: If you use Buttons passing a type prop.
      </p>
      <p>
        <strong>We are trialling an upgrader tool to help with these prop renames.</strong>
        See the <DocLink href="/blog/2021-03-09-button-upgrade-guide">upgrade guide</DocLink> for an
        in depth guide to the changes and instructions on how to use the tool.
      </p>
      <h2>Social button styles have been removed from Neptune CSS</h2>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use the Google or Facebook button or styles. We
        think this only applies to
        <a href="https://github.com/transferwise/security-web-components">
          {' '}
          security-web-components
        </a>{' '}
        and <a href="https://github.com/transferwise/invite-program-web">invite-program-web</a>.
      </p>
      <p>
        Social buttons (Google and Facebook) have been moved to a new file, which you will need to
        import separately. See the{' '}
        <DocLink href="/blog/2021-03-09-button-upgrade-guide">upgrade guide</DocLink> for details.
      </p>
      <h2>Summary now requires an aria-label for info</h2>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use Summary with an info.
      </p>
      <p>
        Because screenreader users may arrive at the info within a summary without the context of
        the outer label, we require an aria-label to be attached to the info button. It should
        describe what the user will find in the info.
      </p>
      <h2>Tabs will now not animate by default</h2>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you</strong>: If you use Tabs (particularly if you’re Send)
      </p>
      <p>
        A new prop has been added to tabs: <code>animatePanelsOnClick</code>. Previously tabs always
        animated, but now you must set this prop to <code>true</code> for this to be the case. The
        rationale here is that in most instances tabs are used for navigation, where animation is a
        distraction (and can sometimes not work well if tabs are nested in a container). Sometimes
        though, animation is important - such as the calculator in the send flow. In this case, the
        animation provides helpful feedback to the user that something has changed.
      </p>
      <br />
    </div>
  );
}
