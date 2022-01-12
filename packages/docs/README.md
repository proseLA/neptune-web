[![ci-cd](https://github.com/transferwise/neptune-web/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/transferwise/neptune-web/actions)

# Neptune Web Docs

Neptune is the Design System built by and used at TransferWise. Neptune Web is the Neptune framework for Web. Neptune Web provides a way to build high quality, consistent user experiences on the web with ease.

This is the Neptune Web Documentation website. See the [live site](https://transferwise.github.io/neptune-web)

## Global Search

Docs global search powered by [Algolia DocSearch](https://docsearch.algolia.com).

A little bit about how it works: they run a crawler on their own infrastructure every 24 hours. It follows every link in prod docs website and extract content from every page it traverses. It then pushes this content to an Algolia index which we hit everytime we type something in the search input.

Here is our config on Algolia side: https://github.com/algolia/docsearch-configs/blob/master/configs/transferwise.json feel free to edit it.

For support reach out to `documentationsearch@algolia.com`.

## CSS in JS

We are using [emotion](https://emotion.sh/docs/introduction) to write css styles with JavaScript in some of the components implemented for the documentation. The primary way to style elements with emotion is the [css prop](https://emotion.sh/docs/css-prop). As we are already using a React version that has [the new JSX runtimes](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) you have to set the [jsx pragma](https://emotion.sh/docs/css-prop#jsx-pragma) at the top of your source file that uses the `css` prop as the following.

```javascript
/** @jsxImportSource @emotion/react */
```

## Contributing

We love contribution! 🙏 Read [the guide](https://github.com/transferwise/neptune-web/blob/main/CONTRIBUTING.md) to get started.
