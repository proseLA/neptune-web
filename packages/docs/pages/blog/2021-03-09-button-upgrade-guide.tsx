import { ReactElement } from 'react';
import { Alert, Image, Sentiment } from '@transferwise/components';

import button1 from '../../public/static/assets/blog/button-release-mar-2021_1.png';
import button2 from '../../public/static/assets/blog/button-release-mar-2021_2.png';

export const meta = {
  name: 'Button Upgrade Guide',
  date: '2021-03-09',
  authors: [
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
  ],
  hidden: true,
};

export default function PageContent(): ReactElement {
  return (
    <div className="d-flex flex-column">
      <Alert
        className="m-y-2"
        message="These changes will be released in components **v35**. See the Button designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@31.4.2-beta.48"
      />
      <p>
        We have made some changes to our buttons to address inconsistencies across platforms, and to
        update our types to reflect our new standard of using semantic colours. This guide will
        provide the necessary steps to upgrade to the latest version.
      </p>
      <p>
        <strong>Note:</strong> For most people your buttons will continue to work without any
        changes - however you will see deprecation warnings asking you to update prop usage.
      </p>
      <p>
        <a href="#steps-to-upgrade">Skip to the upgrade steps.</a>
      </p>
      <h2>Changes</h2>
      <h3 className="m-t-4 m-b-1">Type has been split into Type + Priority</h3>
      <p>
        Our old types:
        <ul className="m-t-1">
          <li>PRIMARY</li>
          <li>SECONDARY</li>
          <li>PAY</li>
          <li>DANGER</li>
          <li>LINK</li>
        </ul>
        were a mix of colours and weights. We have deprecated these and introduced two props: TYPE
        and PRIORITY.
        <br /> These are the possible options:
        <ul className="m-t-1">
          <li>
            <strong>TYPE:</strong> ACCENT, POSITIVE and NEGATIVE
          </li>
          <li>
            <strong>PRIORITY:</strong> PRIMARY, SECONDARY and TERTIARY
          </li>
        </ul>
        <br />
        TYPE maps to different colours and semantic use cases. PRIORITY varies the weight or impact
        of the component. PRIMARY buttons are filled to draw the user’s attention, SECONDARY are
        outlined, and TERTIARY are text only (currently only supported with type ACCENT).
      </p>
      <br />
      <div style={{ maxWidth: '500px' }} className="align-self-center m-y-2">
        <Image src={button1} loading="lazy" stretch={false} alt="button types" />
      </div>
      <h3 className="m-t-4 m-b-1">Negative (a.k.a danger) buttons are now always red</h3>
      <Alert className="m-y-2" type="warning" message="**VISUAL CHANGE**" />
      <p>
        We have updated the secondary negative button (previously the danger button) to have a red
        outline, not grey. This rectifies a longstanding inconsistency across platforms, and gives
        users a clearer indication that this button will produce a destructive action. See the
        before and after:
      </p>
      <div style={{ maxWidth: '300px' }} className="align-self-center m-y-2">
        <Image src={button2} loading="lazy" stretch={false} alt="secondary negative button" />
      </div>
      <h3 className="m-t-4 m-b-1">
        Moved social media button classes out of the Neptune CSS bundle
      </h3>
      <Alert className="m-y-2" type={Sentiment.NEGATIVE} message="Breaking change" />
      <p>
        Neptune CSS contains the Google and Facebook logos. These are used very rarely, and add
        unnecessary weight to most people’s bundles. We have separated these into a new, optional
        file: <code>neptune-social-media.css</code>.
      </p>
      <h3 className="m-t-4 m-b-1">Removed the .btn-download class from Neptune CSS</h3>
      <Alert className="m-y-2" type={Sentiment.NEGATIVE} message="Breaking change" />
      We have removed styling for an unused button type - the download button
      <code>.btn-download</code>
      <br /> <strong>We don’t believe anyone is using this</strong>.
      <h2 className="m-t-4 m-b-1" id="steps-to-upgrade">
        Steps to upgrade
      </h2>
      <h3 className="m-t-4 m-b-1">1: Import social-media css if required</h3>
      <Alert className="m-y-2" message="Most people will not need to follow this step." />
      If you have social media buttons that use either of the{' '}
      <ul>
        <li>
          <code>.btn-google</code>
        </li>
        <li>
          <code>.btn-facebook</code>
        </li>
      </ul>
      classes, you will now need to import <code className="m-y-2">neptune-social-media.css</code>{' '}
      after <code className="m-t-2">neptune.css</code>
      <pre>
        import &apos;@transferwise/neptune-css/dist/css/neptune.css&apos;;
        <br />
        import &apos;@transferwise/neptune-css/dist/css/neptune-social-media.css&apos;;
      </pre>
      <h3 className="m-t-4 m-b-1">2: Update prop usage for Buttons</h3>
      <strong>Note:</strong> Buttons will continue to work without this step, but you will see
      deprecation warnings being logged if you are still using old types. If you are using any of
      the old types listed below, you will need to update the type and add the new priority. Buttons
      without a type can be left alone (the defaults will still work).
      <Alert
        className="m-y-2"
        type={Sentiment.POSITIVE}
        message="**We have created a tool that will perform these mappings for you.** Simply update to the latest version of components and run yarn run neptune-upgrade-util. Choose the upgrade script 2021-02-v34-35.js and follow the instructions to run the script on your source folder."
      />
      <p>If you prefer to do these manually, you can update as per the table below:</p>
      <table className="docs-table table m-t-1">
        <thead>
          <tr>
            <th>Type (old)</th>
            <th>Type (new)</th>
            <th>Priority (new)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PRIMARY</td>
            <td>ACCENT</td>
            <td>PRIMARY (can be left off, as PRIMARY is the default)</td>
          </tr>
          <tr>
            <td>PAY</td>
            <td>POSITIVE</td>
            <td>PRIMARY (can be left off, as PRIMARY is the default)</td>
          </tr>
          <tr>
            <td>SECONDARY</td>
            <td>ACCENT</td>
            <td>SECONDARY</td>
          </tr>
          <tr>
            <td>DANGER</td>
            <td>NEGATIVE</td>
            <td>SECONDARY</td>
          </tr>
          <tr>
            <td>LINK</td>
            <td>ACCENT</td>
            <td>TERTIARY</td>
          </tr>
        </tbody>
      </table>
      <p>For example:</p>
      <pre>
        {`<Button type={Button.Type.SECONDARY}>Secondary</Button>`}
        <br />
        {`<Button type={Button.Type.PAY}>Pay</Button>`}
      </pre>
      Becomes:
      <pre>
        {`<Button type={Button.Type.ACCENT} priority={Button.Priority.SECONDARY}>Secondary</Button>`}
        <br />
        {`<Button type={Button.Type.POSITIVE}>Pay</Button>`}
      </pre>
      <h2>Dependency requirements</h2>
      <pre>
        {'@transferwise/components >= 35.x.x'}
        <br />
        {'@transferwise/neptune-css >= 9.x.x'}
      </pre>
    </div>
  );
}
