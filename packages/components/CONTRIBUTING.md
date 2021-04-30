# Contributing

Please start by reading the [general contribution guide](https://github.com/transferwise/neptune-web/blob/main/CONTRIBUTING.md) to get set up and familiarise yourself with our process. Then read on for specific information about working with the Components.

# Get started

## TL;DR

- Run `yarn setup` from **the root of the monorepo**.
- Run `yarn dev` from **here** to start your dev environment and watch for changes.
- Run `yarn test:watch` in a separate terminal to test and watch for changes.

## In more detail

Before you start, ensure you've run `yarn setup` from the root of the monorepo. This will ensure that all packages are built (e.g. the CSS that some components use from the `css` package).

Once this is done, when working inside a package, we recommend running all commands from inside this package (`packages/components`). The one exception to this rule is if you'd like to run the `docs`. Because this depends on other packages, you should run `docs` from the root of the monorepo.

To get started, run `dev`. This will launch the development tool we use ([Storybook](https://storybook.js.org/)). You'll likely also want to run `test:watch` in a separate terminal to run your tests and re-run on change.

```
yarn dev
// And in a separate terminal..
yarn test:watch
```

## All available commands

- `dev` - starts Storybook, and watches for changes
- `build` - builds the components
- `test` - runs component tests, and lints components
- `test:watch` - runs component tests, watching for changes
- `lint` - lints components
- `lint:fix` - lints components and fixes any errors that can be automatically fixed

As a reminder: to load the docs, run `docs` **from the root of the monorepo**, not from here.

# Accessibility

Please familiarise yourself with our [accessibility guidelines](https://github.com/transferwise/neptune-web/blob/main/ACCESSIBILITY.md) and ensure your changes meet accessibility standards.

# TypeScript Support

We strongly encourage new components to be written in TypeScript, please also consider to rewrite components in TypeScript during major refactoring.

While migrating a component to TypeScript please remove it, if necessary, from [list of component for custom type generation process](https://github.com/transferwise/neptune-web/blob/main/packages/components/scripts/generate-type-declarations.js#L10).

### JS Component Rules

For JS new features or bug fixes please always keep in mind how they would behave in a Typescript environment as this would help us to migrate them to TS.

Please follow these rules to ensure that type declarations for JS components gets generated correctly by [`react-to-typescript-definitions`](https://www.npmjs.com/package/react-to-typescript-definitions).

Note: Please try to follow these rules for both exposed and internal components to improve codebase consistency and to reduce the effort in case we decide expose an internal component.

- Please avoid wrapping components in HoC functions and have a clear `export default` as otherwise this will lead to fully skipping generating `.d.ts` file or types with TS error `JSX element type 'SomeComponent' does not have any construct or call signatures.`

```javascript
// don't
export default injectIntl(SomeComponent);
export default withSomeHoC(SomeComponent);

// do 
export default SomeComponent;
```
- pass raw values into `PropTypes.oneOf` at `propTypes`
```javascript
// don't
SomeComponent.propTypes = {
  status: PropTypes.oneOf([Size.EXTRA_SMALL, Size.SMALL, Size.MEDIUM]),
  position: PropTypes.oneOf(Object.values(Position)),
}
SomeComponent.defaultProps = {
  size: Size.SMALL,
}

// do
SomeComponent.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
}
SomeComponent.defaultProps = {
  size: Size.SMALL,
}
```
- there is no need to create static properties as they won't work in TypeScript consumer apps
```javascript
// inside Component.js

// don't
Component.Size = Size;
Component.Position = Position;
```
- define `prop-types` as `PropTypes`
```javascript
// don't
import Types from 'prop-types';

// do
import PropTypes from 'prop-types';
```
- avoid using custom validator in prop-types, this will lead to type `any` for those props
```javascript
// don't
onClick: requiredIf(PropTypes.func, ...),
content: deprecated(PropTypes.node, ...),
```
- Ultimately, always check the generated types:
   - run `yarn build` inside `packages/components` folder
   - head to `/build/types/index.d.ts` file,
   - from there, navigate to your component's `.d.ts` file
   - if types aren't the expected ones please tweak the prop-types in the component and repeat these steps again.

- Avoid using `PropTypes.elementType`, use `PropTypes.string` instead

# Testing

Please use [react-testing-library](https://github.com/testing-library/react-testing-library) for testing components.

Historically we've used Enzyme so most of tests built using it's API but we encourage you to use react-testing-library when creating a new component
also, feel free to update tests of existing components (e.g when you do some changes) and flag about this during code review.

# Internationalisation

This package has support for internationalisation, and all messages inside components should be translated if they are not required to be provided by the consumer.

Define messages using the [`defineMessages`](https://formatjs.io/docs/react-intl/api/#definemessagesdefinemessage) function in a file named `[ComponentName].message.js` next to the component file. You can then import and use them in the component.

Once you have defined the messages and agreed on copy, they must be sent to the translations vendor (Crowdin). To do this:
 
1. Run `yarn build` (it will regenerate a main source file (`en.json`) out of all `*.message.js` files)
2. Push changes (or only `en.json`) to your remote branch (this will make Crowdin notice new messages)
3. Right after that Crowdin will create a PR (where the base branch is your feature branch) with placeholders (English messages) in other translation files. It will commit into same PR (or a new PR in case you have merged the first one) with translated messages, as soon as translators translate them.

If you merge your feature PR without all the translations (which is okay-ish), Crowdin should do the same, just on the `main` branch.

## How should I test my changes?

Before submitting a PR you should ensure:

1. All tests pass
2. Changes meet accessibility standards
3. Changes work across all supported browsers

If you've added a new component, it's a good idea to try using it in a fresh create react app / nextjs environment. To do this you'll need to make use of `yarn link`, to ensure the app depends on your local code and not the last published package.

# Documentation

We document our components in the `docs` package. This documentation will be published to [our public docs site](https://transferwise.github.io/neptune-web/) when your changes are merged.

To run the docs environment locally, run `docs` **from the root of the monorepo**. Please read [the guide](https://github.com/transferwise/neptune-web/blob/main/packages/docs/CONTRIBUTING.md) for further instructions on writing docs.

# How is it built?

Our UMD bundle is generated using Rollup, our ES just uses Babel.

When `yarn build` runs, a file named `stats.html` is generated in the root of the component folder. This can be inspected to gather more info about the bundle.

The bundled files are stored inside the _build_ folder.

The polyfills are injected automatically by babel-plugin-transform-runtime based on our [list of supported browsers](https://github.com/transferwise/neptune-web/blob/main/.browserlistrc).

As per [Babel docs](https://babeljs.io/docs/en/babel-preset-env) - "We take advantage of the fact that a bundler will load the same polyfill only once.".

<details>
  <summary>An example of what an ES file will look like with and without polyfills</summary>

**Original file:**

```
class Checkbox {
  a = new Promise();
}

export default Checkbox;
```

**Without Polyfill:**

```
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var Checkbox = function Checkbox() {
  _classCallCheck(this, Checkbox);

  _defineProperty(this, "a", new Promise());
};

export default Checkbox;
```

**With Polyfill:**

```
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var Checkbox = function Checkbox() {
  _classCallCheck(this, Checkbox);

  _defineProperty(this, "a", new Promise());
};

export default Checkbox;
```

</details>
