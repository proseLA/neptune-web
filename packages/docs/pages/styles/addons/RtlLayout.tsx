/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-child-element-spacing */
import { Link } from '@transferwise/components';

import Heading from '../../../components/Heading';

export default function PageContent() {
  return (
    <>
      <p>
        neptune-css and components provide have support and tools for RTL (Right to Left) direction.
      </p>
      <Heading as="h2">The basics</Heading>
      <p>
        Set{' '}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir"
          target="_blank"
        >
          <code>dir</code>
        </Link>{' '}
        attribute in HTML element depending the language (components package provides util function{' '}
        <code>getDirectionFromLocale</code>)
      </p>
      LTR laguages:
      <pre>{'<html dir="ltr" >'}</pre>
      RTL laguages:
      <pre>{'<html dir="rtl" >'}</pre>
      <p>
        Using <code>dir</code> attribute is enough to make the layout switch, it has implicit the{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/direction" target="_blank">
          <code>direction</code> CSS property
        </Link>{' '}
        natively, so default alignment, tables, flex and grid elements work really nice with the{' '}
        <code>direction</code> property and the browser creates natively the expected layout, except
        when CSS code uses a <code>left</code> or a <code>right</code> value.
      </p>
      <p>
        W3C specification is working on{' '}
        <Link href="https://drafts.csswg.org/css-logical" target="_blank">
          logical properties and values
        </Link>{' '}
        to solve the horizontal physical direction but the support is being uneven yet. To solve the
        horizontal properties and values we provide LESS mixins. Neptune code is already uses those
        mixins, you may add it to your custom CSS in your project, to have the total experience.
      </p>
      <Heading as="h2">The RTL Less mixin</Heading>
      <p>
        There is Less a mixin to control the direction of the physical horizontal properties and
        values in Neptune. With this mixin we are going to be able to control and scale the support
        in browsers of logical properties. Right now it’s prepared to output the IE11 friendly
        version.
      </p>
      <Heading as="h3">Usage</Heading>
      Add the import reference at the top of the Less file:
      <pre>
        @import (reference) "@transferwise/neptune-css/src/less/mixins/_logical-properties.less";'
      </pre>
      <p>Update all the horizontal properties (left, right) with a mixin call in your Less file.</p>
      <p>
        <strong>Tip:</strong> If left and right values are equal in the same selector we can keep
        them as they are without having to update to the mixin syntax. Keep the code as it is when:
      </p>
      <pre>
        {`padding-left: var(--foo1);
padding-right: var(--foo1);`}
      </pre>
      <pre>padding: 0 var(--foo);</pre>
      <pre>padding: 0 var(--foo) 0;</pre>
      <Heading as="h3">New syntax (with Mixins):</Heading>
      <Heading as="h4" className="m-t-1">
        Spacing:
      </Heading>
      <pre>{`margin-left: var(--foo);

// change to
.margin(left, var(--foo));`}</pre>
      <p>The output of above code is:</p>
      <pre>
        {`// Default or LTR
margin-left: var(--foo);

// RTL
margin-right: var(--foo); margin-left: 0;`}
      </pre>
      <p>
        The original margin resets to the initial value. If that value is not 0 or initial, there is
        a second optional value (<code>value2</code> in the next example) for the mixin
        <code>.margin(direction, value1, value2)</code> which you can use if you need to specify a
        different value for the opposite direction.
      </p>
      <p>
        For instance, let's imagine that you have a <code>margin-left: 8px</code> in your code that
        you want to transform into a RTL friendly property. The mixin for it would be{' '}
        <code>.margin(left, 8px)</code>, and in RTL cases it would be transformed into
        <code>margin-right: 8px; margin-left: 0;</code>. You might want to change the <code>0</code>{' '}
        to a different value. If you do, you can provide the optional second value (the third
        parameter below):
      </p>
      <pre>.margin(left, var(--foo), var(--bar));</pre>
      <p>
        We use this logic because we want to keep the default direction property with not
        conditional selectors in the mixin which could add specificity to the property and create
        collateral cascade collisions in consumers code.
      </p>
      <pre>
        {`padding-left: var(--foo);

// change to
.padding(left, var(--foo));`}
      </pre>
      <p>
        Same as in margin cases, in padding you also have this second value to change the original
        direction value if needed <code>.padding(direction, value1, value2)</code>
      </p>
      <Heading as="h4">Shorthands</Heading>
      <p>(only when left != right or you need more specificity)</p>
      <pre>
        {`margin: 0 0 0 var(--foo);

// change to
.margin-shorthand(0, 0, 0, var(--foo));`}
      </pre>
      <pre>
        {`padding: 0 0 0 var(--foo);

// change to
.padding-shorthand(0, 0, 0, var(--foo));`}
      </pre>
      <Heading as="h4">Alignment</Heading>
      <pre>
        {`text-align: left;

// change to
.text-align(left);`}
      </pre>
      <Heading as="h4">Positions</Heading>
      <pre>{`left: var(foo);

// change to
.left(var(--foo));`}</pre>
      <Heading as="h4">Floats</Heading>
      <pre>{`float: left;

// change to
.float(left);`}</pre>
      <Heading as="h4">Clear</Heading>
      <pre>{`clear: left;

// change to
.clear(left);`}</pre>
      <Heading as="h4">Border</Heading>
      <pre>{`border-left: 1px solid pink;

// change to
.border(left, 1px, solid, pink);`}</pre>
      <pre>{`border-left-width: 1px;

// change to
.border-width(left, 1px);`}</pre>
      <pre>{`border-top-left-radius: 3px;

// change to
.border-top-dir-radius(left, 3px);`}</pre>
      <pre>{`border-top-left-radius: 3px;

// change to
.border-top-dir-radius(left, 3px);`}</pre>
      <pre>{`border-bottom-left-radius: 3px;

// change to
.border-bottom-dir-radius(left, 3px);`}</pre>
      <pre>{`border-bottom-left-radius: 3px;

// change to
.border-bottom-dir-radius(left, 3px);`}</pre>
      <pre>{`border-bottom-left-radius: 3px;
border-top-left-radius: 3px;

// both top and bottom change to
.border-radius(left, 3px);`}</pre>
      <Heading as="h4">Background position</Heading>
      <pre>
        {`background-position: left;

// change to
.background-position(left);`}
      </pre>
      <pre>
        {`background-position: left bottom;

// change to
.background-position(left, bottom);`}
      </pre>
      <Heading as="h4">Background linear gradient</Heading>
      <pre>{`background: linear-gradient(to left, var(--color1) var(--color2));

.background-linear-gradient(left, var(--color1), var(--color2));`}</pre>
      <Heading as="h4">Horizontal translations</Heading>
      <pre>{`transform: translateX(var(--foo));
      
// change to
.translateX(var(--foo));`}</pre>
      <Heading as="h2">The React Context</Heading>
      <p>
        Another or accompanied solution could be using and making decisions to markup (JSX) based on
        direction data that <code>Provider</code> component stores in React context, you can get
        access to it via React hook
      </p>
      <pre>{`import { useDirection } from '@transferwise/components';

function MyCustomComponent(props) {

  const { direction, isRTL } = useDirection();

  return <div style={ ... } className={ ... }></div>
}
`}</pre>
    </>
  );
}

export const meta = {
  name: 'RTL layout',
  badge: {
    type: 'new',
    expiryDate: '2022-01-31',
  },
};
