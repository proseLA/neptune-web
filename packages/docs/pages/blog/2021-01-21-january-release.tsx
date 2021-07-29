import { Image, Alert, Sentiment } from '@transferwise/components';

import { ReactElement } from 'react';
import { DocLink } from '../../utils/pageUtils';
import flowNavigation from '../../static/assets/blog/flow-nav-release-jan-2021.png';
import checkbox from '../../static/assets/blog/checkbox-release-jan-2021.png';
import overlayHeader from '../../static/assets/blog/overlay-header-release-jan-2021.png';
import checkboxButton from '../../static/assets/blog/checkbox-button-release-jan-2021.png';

import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'January Release',
  date: '2021-01-21',
  authors: [
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
    {
      name: 'Andrea Piras',
      githubUsername: 'andreapiras',
    },
  ],
  version: {
    components: '33.0.0',
    css: '6.0.0',
  },
  tags: ['FlowNavigation', 'OverflowHeader'],
};

export default function PageContent(): ReactElement {
  return (
    <div className="d-flex flex-column">
      <p className="m-t-4">
        Welcome to our January release. It’s a bit of a lightweight because of the holidays. More
        exciting things coming soon!
      </p>
      <h2 className="m-t-1 m-b-1">New and Improved</h2>
      <h3 className="m-t-4 m-b-1">FlowNavigation</h3>
      <DocLink href="/blog/2020-12-15-flownavigation-upgrade-guide">Upgrade guide</DocLink>
      <DocLink href="/components/navigation/FlowNavigation">Component docs</DocLink>
      <p className="m-t-3">
        The FlowNavigation component has had layout issues for a long time - as I’m sure you will
        have noticed if you ever saw it caught in that awkward screen width between “mobile” and
        “desktop”. With the upcoming Wise change, we took the opportunity to refactor the component
        to improve both the implementation and API. Previously the Wise logo was embedded - now you
        can pass it in. While it will still default to the Wise logo we recommend that you
        immediately update it to passing in a static logo asset so that you’re ready to switch
        assets when Wise time arrives. Check out the Breaking Changes section to see how the API has
        changed.
      </p>
      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-2">
        <Image src={flowNavigation} alt="New Flow Navigation" loading="lazy" stretch={false} />
      </div>
      <h3 className="m-t-4 m-b-1">OverlayHeader</h3>
      <DocLink href="/blog/2021-01-22-overlayheader-upgrade-guide">Upgrade guide</DocLink>
      <DocLink href="/components/navigation/OverlayHeader">Component docs</DocLink>
      <p className="m-t-3">
        OverlayHeader has been improved as part of the FlowNavigation work. If you use it, take a
        look in the Breaking Changes section for updates to the API.
      </p>
      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-2">
        <Image src={overlayHeader} alt="New Overlay Header" loading="lazy" stretch={false} />
      </div>
      <h3 className="m-t-4 m-b-1">CheckboxButton</h3>
      <DocLink href="/components/inputs/CheckboxButton">Component docs</DocLink>
      <p className="m-t-3">
        Misleadingly named because it’s not a button, this cute little fellow comes in handy when
        you have a long list of checks in a grid, and each item in the grid is labelled by the row
        or column header, and so doesn’t need its own visual label.
      </p>
      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-2">
        <Image
          src={checkboxButton}
          alt="Variants of Checkbox Button"
          loading="lazy"
          stretch={false}
        />
      </div>
      <p className="m-t-3">
        CheckboxButton was designed as an internal component, but we are aware of people using it
        directly, and want to better support those use cases. Confusingly, it did actually used to
        be a button.. In this update we’ve changed it to use an input, which is more accessible.
        We’ve also made some slight changes to the API (details below).
      </p>
      <h3 className="m-t-4 m-b-1">Checkbox</h3>
      <DocLink href="/components/inputs/Checkbox">Component docs</DocLink>
      <p className="m-t-3">
        As you would expect, Checkbox has been updated to use the new CheckboxButton, so it is now
        also more accessible, and has some updated focus and hover states. Oh - and we finally fixed
        the vertical text alignment!
      </p>
      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-2">
        <Image src={checkbox} alt="Variants of Checkboxes" loading="lazy" stretch={false} />
      </div>
      <h3 className="m-t-4 m-b-1">Misc</h3>
      CheckboxOption no longer requires an `id` property
      <h3 className="m-t-4">FlowNavigation API</h3>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you:</strong> If you use FlowNavigation.
        <br /> There are quite a few changes to the API, so please check out the{' '}
        <DocLink href="/blog/2020-12-15-flownavigation-upgrade-guide">upgrade guide</DocLink> for
        instructions on how to update.
      </p>
      <h3 className="m-t-4">OverlayHeader API</h3>
      <Alert className="m-y-2" message="Breaking change" type={Sentiment.NEGATIVE} />
      <p>
        <strong>Relevant for you:</strong> If you use OverlayHeader.
        <br /> Once again, there are quite a few changes to the API, so please check out the{' '}
        <DocLink href="/blog/2021-01-22-overlayheader-upgrade-guide">upgrade guide</DocLink>
      </p>
      <h3 className="m-t-4">CheckboxButton API</h3>
      <Alert className="m-y-2" message="API Change" type={Sentiment.WARNING} />
      <p>
        <strong>Relevant for you:</strong> If you use CheckboxButton.
        <br />
        We have removed the readOnly prop (as it doesn’t do anything) - use disabled instead.
        <br />
        We added a required onChange handler. Use this in preference to onClick. We’re using rest
        spreading, so if you want to add any other handlers to the input, you can. In particular,
        you should provide `aria-label` to ensure users know what they are checking when there is no
        associated label.
      </p>
    </div>
  );
}
