/* eslint-disable react/function-component-definition */
import { Link } from '@transferwise/components';

import { DocumentLink } from '../../../utils/pageUtils';

export function ColorToken(props: { token: string }) {
  return (
    <div className="d-flex align-items-center m-b-2">
      <div
        // eslint-disable-next-line react/forbid-dom-props
        style={{
          backgroundColor: `var(${props.token})`,
          border: 'solid 1px var(--color-border-neutral)',
          borderRadius: '100%',
          width: '48px',
          height: '48px',
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
        Neptune provides semantic colors as{' '}
        <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">
          CSS custom properties
        </Link>
        . Read more about colors at{' '}
        <Link target="_blank" href="https://neptune.wise.com/design/colour">
          Neptune design website
        </Link>
        .
      </p>
      <p>
        <b>Note:</b> If this is your first time using CSS custom properties in your repository, read{' '}
        <DocumentLink href="/about/Styles#tokens-css-custom-properties">our guide</DocumentLink>{' '}
        first to get set up.
      </p>
      <div className="m-b-4">
        <h3>Content Color Tokens</h3>
        <ColorToken token="--color-content-primary" />
        <ColorToken token="--color-content-secondary" />
        <ColorToken token="--color-content-accent" />
        <ColorToken token="--color-content-accent-hover" />
        <ColorToken token="--color-content-accent-active" />
        <ColorToken token="--color-content-positive" />
        <ColorToken token="--color-content-positive-hover" />
        <ColorToken token="--color-content-positive-active" />
        <ColorToken token="--color-content-negative" />
        <ColorToken token="--color-content-negative-hover" />
        <ColorToken token="--color-content-negative-active" />
        <ColorToken token="--color-content-warning" />
        <ColorToken token="--color-content-warning-hover" />
        <ColorToken token="--color-content-warning-active" />
        <ColorToken token="--color-content-disabled" />
      </div>
      <div className="m-b-4">
        <h3>Interactive Colors Tokens</h3>
        <p>
          Used to convey interactivity in any property that does not involve content, such as the
          colour of a button or the border of an input.
        </p>
        <ColorToken token="--color-interactive-accent" />
        <ColorToken token="--color-interactive-accent-hover" />
        <ColorToken token="--color-interactive-accent-active" />
        <ColorToken token="--color-interactive-positive" />
        <ColorToken token="--color-interactive-positive-hover" />
        <ColorToken token="--color-interactive-positive-active" />
        <ColorToken token="--color-interactive-negative" />
        <ColorToken token="--color-interactive-negative-hover" />
        <ColorToken token="--color-interactive-negative-active" />
        <ColorToken token="--color-interactive-warning" />
        <ColorToken token="--color-interactive-warning-hover" />
        <ColorToken token="--color-interactive-warning-active" />
        <ColorToken token="--color-interactive-secondary" />
        <ColorToken token="--color-interactive-secondary-hover" />
        <ColorToken token="--color-interactive-secondary-active" />
        <ColorToken token="--color-interactive-disabled" />
      </div>
      <div className="m-b-4">
        <h3>Border Color Tokens</h3>
        <p>
          We use border colours to provide subtle visual aid to separate different blocks of
          content.
        </p>
        <ColorToken token="--color-border-neutral" />
        <ColorToken token="--color-border-overlay" />
      </div>
      <div className="m-b-4">
        <h3>Background Color Tokens</h3>
        <ColorToken token="--color-background-screen" />
        <ColorToken token="--color-background-elevated" />
        <ColorToken token="--color-background-neutral" />
        <ColorToken token="--color-background-accent" />
        <ColorToken token="--color-background-positive" />
        <ColorToken token="--color-background-negative" />
        <ColorToken token="--color-background-warning" />
        <ColorToken token="--color-background-overlay" />
      </div>
    </>
  );
}

export const meta = {
  name: 'Colors',
  badge: {
    expiryDate: '2021-11-15',
    type: 'new',
  },
};
