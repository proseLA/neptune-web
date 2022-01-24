import { Link } from '@transferwise/components';
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
        Neptune provides semantic colours as{' '}
        <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">
          CSS custom properties
        </Link>
        . Read{' '}
        <Link target="_blank" href="https://neptune.wise.com/design/colour">
          more about our colour system.
        </Link>
        .
      </p>
      <p>
        CSS custom properties are available at the root scope (<code>:root</code>). If this is your
        first time using CSS custom properties in your repository and you need support for IE11,
        read{' '}
        <DocumentLink href="/about/Styles#tokens-css-custom-properties">our guide</DocumentLink>{' '}
        first to get set up.).
      </p>
      <p>
        For LESS variables, you need add import:
        <pre>@import '@transferwise/neptune-css/dist/less/neptune-tokens.less';</pre>
      </p>
      <div className="m-b-4">
        <Heading as="h2">Content Colour Tokens</Heading>
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
        <ColorToken token="--color-content-tertiary" className="m-b-2" />
      </div>
      <div className="m-b-4">
        <Heading as="h2">Interactive Colours Tokens</Heading>
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
      </div>
      <div className="m-b-4">
        <Heading as="h2">Border Colour Tokens</Heading>
        <p>
          We use border colours to provide subtle visual aid to separate different blocks of
          content.
        </p>
        <ColorToken token="--color-border-neutral" className="m-b-2" />
        <ColorToken token="--color-border-overlay" className="m-b-2" />
      </div>
      <div className="m-b-4">
        <Heading as="h2">Background Colour Tokens</Heading>
        <ColorToken token="--color-background-screen" className="m-b-2" />
        <ColorToken token="--color-background-elevated" className="m-b-2" />
        <ColorToken token="--color-background-neutral" className="m-b-2" />
        <ColorToken token="--color-background-accent" className="m-b-2" />
        <ColorToken token="--color-background-positive" className="m-b-2" />
        <ColorToken token="--color-background-negative" className="m-b-2" />
        <ColorToken token="--color-background-warning" className="m-b-2" />
        <ColorToken token="--color-background-overlay" className="m-b-2" />
      </div>
    </>
  );
}

export const meta = {
  name: 'Colours',
  badge: {
    expiryDate: '2022-01-31',
    type: 'new',
  },
};
