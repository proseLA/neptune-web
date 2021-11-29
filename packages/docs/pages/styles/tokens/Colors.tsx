/* eslint-disable react/function-component-definition */
import { Link, Accordion } from '@transferwise/components';
import { Eye } from '@transferwise/icons';
import classNames from 'classnames';

import Heading from '../../../components/Heading';
import { DocumentLink } from '../../../utils/pageUtils';

export function ColorToken(props: { token: string; colorValue?: string; className?: string }) {
  const color: string = props.colorValue === undefined ? `var(${props.token})` : props.colorValue;
  return (
    <div className={classNames('d-flex', 'align-items-center', props.className)}>
      <div
        // eslint-disable-next-line react/forbid-dom-props
        style={{
          backgroundColor: color,
          border: 'solid 1px var(--color-border-neutral)',
          borderRadius: '100%',
          width: '70px',
          height: '70px',
        }}
      />
      <code className="m-l-2">{props.token}</code>
    </div>
  );
}

export default function PageContent() {
  return (
    <>
      <p>
        Neptune provides semantic colors as CSS custom properties and as LESS variables. Read more
        about colors at{' '}
        <Link target="_blank" href="https://neptune.wise.com/design/colour">
          Neptune design website
        </Link>
        .
      </p>
      <p>
        CSS custom properties available at root scope (<code>:root</code>) (If this is your first
        time using CSS custom properties in your repository and you need support for IE11, read{' '}
        <DocumentLink href="/about/Styles#tokens-css-custom-properties">our guide</DocumentLink>{' '}
        first to get set up.).
      </p>
      <p>
        For LESS variables, you need add import:
        <pre>@import '@transferwise/neptune-css/dist/less/neptune-tokens.less';</pre>
      </p>
      <div className="m-b-4">
        <Heading as="h2">Content Color Tokens</Heading>
        <p>
          We use content colours to communicate the purpose of <strong>text</strong> and{' '}
          <strong>icons</strong>. To ensure readability, text and line icons always use content
          colours, even if they are interactive.
        </p>
        <ColorToken token="--color-content-primary" className="m-b-2" />
        <ColorToken token="--color-content-secondary" className="m-b-2" />
        <ColorToken token="--color-content-accent" className="m-b-2" />
        <ColorToken token="--color-content-accent-hover" className="m-b-2" />
        <ColorToken token="--color-content-accent-active" className="m-b-2" />
        <ColorToken token="--color-content-positive" className="m-b-2" />
        <ColorToken token="--color-content-positive-hover" className="m-b-2" />
        <ColorToken token="--color-content-positive-active" className="m-b-2" />
        <ColorToken token="--color-content-negative" className="m-b-2" />
        <ColorToken token="--color-content-negative-hover" className="m-b-2" />
        <ColorToken token="--color-content-negative-active" className="m-b-2" />
        <ColorToken token="--color-content-warning" className="m-b-2" />
        <ColorToken token="--color-content-warning-hover" className="m-b-2" />
        <ColorToken token="--color-content-warning-active" className="m-b-2" />
        <ColorToken token="--color-content-disabled" className="m-b-2" />
      </div>
      <div className="m-b-4">
        <Heading as="h2">Interactive Colors Tokens</Heading>
        <p>
          Used to convey interactivity in any property that does not involve content, such as the
          colour of a button or the border of an input.
        </p>
        <ColorToken token="--color-interactive-accent" className="m-b-2" />
        <ColorToken token="--color-interactive-accent-hover" className="m-b-2" />
        <ColorToken token="--color-interactive-accent-active" className="m-b-2" />
        <ColorToken token="--color-interactive-positive" className="m-b-2" />
        <ColorToken token="--color-interactive-positive-hover" className="m-b-2" />
        <ColorToken token="--color-interactive-positive-active" className="m-b-2" />
        <ColorToken token="--color-interactive-negative" className="m-b-2" />
        <ColorToken token="--color-interactive-negative-hover" className="m-b-2" />
        <ColorToken token="--color-interactive-negative-active" className="m-b-2" />
        <ColorToken token="--color-interactive-warning" className="m-b-2" />
        <ColorToken token="--color-interactive-warning-hover" className="m-b-2" />
        <ColorToken token="--color-interactive-warning-active" className="m-b-2" />
        <ColorToken token="--color-interactive-secondary" className="m-b-2" />
        <ColorToken token="--color-interactive-secondary-hover" className="m-b-2" />
        <ColorToken token="--color-interactive-secondary-active" className="m-b-2" />
        <ColorToken token="--color-interactive-disabled" className="m-b-2" />
      </div>
      <div className="m-b-4">
        <Heading as="h2">Border Color Tokens</Heading>
        <p>
          We use border colours to provide subtle visual aid to separate different blocks of
          content.
        </p>
        <ColorToken token="--color-border-neutral" className="m-b-2" />
        <ColorToken token="--color-border-overlay" className="m-b-2" />
      </div>
      <div className="m-b-4">
        <Heading as="h2">Background Color Tokens</Heading>
        <ColorToken token="--color-background-screen" className="m-b-2" />
        <ColorToken token="--color-background-elevated" className="m-b-2" />
        <ColorToken token="--color-background-neutral" className="m-b-2" />
        <ColorToken token="--color-background-accent" className="m-b-2" />
        <ColorToken token="--color-background-positive" className="m-b-2" />
        <ColorToken token="--color-background-negative" className="m-b-2" />
        <ColorToken token="--color-background-warning" className="m-b-2" />
        <ColorToken token="--color-background-overlay" className="m-b-2" />
      </div>
      <Heading as="h2">Navy Colors</Heading>
      <p>
        In some rare cases you might would need to use Navy colors. Usually when background is Navy
        color or when using <code>.bg-primary</code> CSS class.
      </p>
      <p>
        There are the same number of them as default (light) tokens and they have same naming
        (except <code>-navy-</code> bit in the middle).
      </p>
      <p>
        <strong>Note:</strong> They only as available Less variables.
      </p>
      <Accordion
        items={[
          {
            icon: <Eye />,
            title: 'List of Navy Colors',
            content: (
              <>
                <ColorToken
                  token="@color-navy-content-primary"
                  colorValue="#ffffff"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-secondary"
                  colorValue="#c9cbce"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-accent"
                  colorValue="#00b9ff"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-accent-hover"
                  colorValue="#00a6ea"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-accent-active"
                  colorValue="#0097db"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-positive"
                  colorValue="#6fd698"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-positive-hover"
                  colorValue="#5ac285"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-positive-active"
                  colorValue="#4bb377"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-negative"
                  colorValue="#ffa6a9"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-negative-hover"
                  colorValue="#ea9396"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-negative-active"
                  colorValue="#da8488"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-warning"
                  colorValue="#ffd184"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-warning-hover"
                  colorValue="#e9bd71"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-warning-active"
                  colorValue="#daae63"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-content-disabled"
                  colorValue="#a8aaac"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-accent"
                  colorValue="#00a2dd"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-accent-hover"
                  colorValue="#008fc9"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-accent-active"
                  colorValue="#0081ba"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-positive"
                  colorValue="#2ead4b"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-positive-hover"
                  colorValue="#069939"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-positive-active"
                  colorValue="#008b2b"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-negative"
                  colorValue="#e74848"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-negative-hover"
                  colorValue="#d03238"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-negative-active"
                  colorValue="#bf1e2c"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-warning"
                  colorValue="#df8700"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-warning-hover"
                  colorValue="#c97500"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-warning-active"
                  colorValue="#b86700"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-secondary"
                  colorValue="#a8aaac"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-secondary-hover"
                  colorValue="#959799"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-secondary-active"
                  colorValue="#87898b"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-interactive-disabled"
                  colorValue="#a8aaac"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-screen"
                  colorValue="#2e4369"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-elevated"
                  colorValue="#37517e"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-neutral"
                  colorValue="#86a7bd1a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-accent"
                  colorValue="#38c8ff1a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-positive"
                  colorValue="#36c7971a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-negative"
                  colorValue="#ff87871a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-warning"
                  colorValue="#ffac001a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-background-overlay"
                  colorValue="#ffffff1a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-border-neutral"
                  colorValue="#ffffff1a"
                  className="m-b-2"
                />
                <ColorToken
                  token="@color-navy-border-overlay"
                  colorValue="#ffffff1a"
                  className="m-b-2"
                />
              </>
            ),
          },
        ]}
      />
    </>
  );
}

export const meta = {
  name: 'Colors',
  badge: {
    expiryDate: '2022-01-31',
    type: 'new',
  },
};
