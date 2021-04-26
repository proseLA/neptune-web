/**
 * https://docsearch.algolia.com/docs/behavior
 */
// eslint-disable-next-line no-undef
docsearch({
  apiKey: 'a7106c2ce36353c2046f1d48a42be7bc',
  indexName: 'transferwise',
  inputSelector: '#the-search',
  debug: true,
  transformData(args) {
    console.log('in transformData', args);
    return args;
  },
});
