# Contributing

Follow the instructions below to get started. Branch from `main`, and submit a pull request when you're ready.

## Things to know

- All commit messages must follow the conventional commit format. [Read below](#versioning-and-commit-lint) if you are unfamiliar with the standard or the available types.
- You must restrict your commits to one package at a time: e.g. don't make one commit that changes files inside `components` and `css` - it impacts how versions are bumped.
- We use `yarn`: these instructions presume you have this installed.

## Get started

1. Clone the repository and run `yarn setup` to install dependencies and build all packages:

```
git clone git@github.com:transferwise/neptune-web.git && cd neptune-web && yarn setup
```

2. Familiarise yourself with our [code conventions](CODESTYLE.md) and [accessibility guidelines](ACCESSIBILITY.md).

3. Refer to `CONTRIBUTING.md` inside each package for more information on working within that package.

## Where should I run commands from?

Almost always from within the package you're working in. For example, if you're making changes to `components`, run your yarn commands from that package:

```
cd packages/components
yarn dev
```

The two exceptions to this rule are the initial setup, and running the docs (which require all packages to be built). These should be done here, at the root of the monorepo.

```
yarn setup
yarn docs
```

### Top level commands

The full list of commands available to run from the root directory are:

- `setup` - installs dependencies and runs build in all packages
- `build` - builds all packages
- `clean` - removes `node_modules` and cached builds from all packages
- `docs` - builds all packages and starts the Neptune Web docs
- `lint` - lints all packages (JS, TS and style files)
- `test` - runs tests in all packages
- `create-component` - creates all the necessary files needed when a react component gets added to the library

As said above, we recommend running most commands from within the package you're working in.

## Testing

### Beta Releases

If you wish to test your changes in some consumer codebase and `yarn link` is not so sufficient or/and convenient approach, then you can easily publish beta version(s) on NPM registry and use it in any NPM repository.

Steps:

1. Push changes into your feature/fix branch
2. Find your workflow run in [GitHub Actions](https://github.com/transferwise/neptune-web/actions)
3. Approve `beta` deployment
4. Lerna will [publish](https://github.com/lerna/lerna/blob/main/commands/publish/README.md#--canary) affected packages [tagged as beta](https://docs.npmjs.com/adding-dist-tags-to-packages)

> Set the exact beta version without any [update types or version ranges](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#dependencies) (e.g `^`, `~`) as usually NPM clients tend to opt-out installing beta (unstable) versions, correct example:

```js
// package.json
"@transferwise/neptune-css": "10.0.6-beta-2ffb6cde65.61",
```

### Visual Testing

We have visual tests running on [percy.io & Storybook](https://docs.percy.io/docs/storybook). It compares screenshots of your changes against the `main` branch.

To run the visual tests, go to [GitHub Actions](https://github.com/transferwise/neptune-web/actions), find your workflow run and approve `visual-test` deployment. Find the link for the results in the job output.

> The job will be marked as passed/green even if the visual tests are failed.

## Versioning and commit lint

We follow [Semantic Versioning](https://semver.org). We require that commit messages follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard. In this way, we can automatically bump the version of our packages when necessary.

**These rules apply to both normal commit messages and PR titles** (if you are using squash and merge).

The rules are simple:

- All your commit messages must follow the format `<type>(scope?): subject`
- The type must be one of the following: [`fix`, `feat`, `refactor`, `build`, `chore`, `docs`, `perf`, `test`]
- If you are fixing something, use `fix`. This will bump the patch version.
- If you are adding a new feature, use `feat`. This will bump the minor version.
- Breaking changes must have the words `BREAKING CHANGE:` as the first two words in the commit description. We also add a `!` after the type to make it obvious in the commit log.<sup>\*</sup>
  For example:

```
feat!: Some feature

BREAKING CHANGE: Description of breaking changes
```

Using anything other than `fix` or `feat` without a `!` will not trigger a version bump. This is useful for changes to CI config, documentation or tests. Feel free to choose the type that best reflects the work you're doing.

You can optionally use a scope to describe where in the code you're working: e.g. `feat(components): adding new functionality to Accordion`.

Some examples:

```
fix: fix a bug
feat: add a new feature or component
feat!: modify the API of an existing component
docs: update the docs
refactor(components): refactor the implementation of an existing component
chore: update
```

> Generally the core design system team will handle breaking change releases. If you are planning a breaking change, please talk to us.

## Releasing

The [documentation](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to `main`. Our use of conventional commits means we can bump package versions automatically based on the changes made. It also allows us to generate Changelogs.
