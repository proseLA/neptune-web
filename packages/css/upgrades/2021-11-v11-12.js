#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable compat/compat */

const replace = require('replace-in-file');
const { argv } = require('yargs');

const mappings = {
  'color-text': 'color-content',
  'color-control': 'color-interactive',
};

const from = [];
const to = [];

Object.keys(mappings).forEach((value) => {
  from.push(new RegExp(`@${value}`, 'g'));
  from.push(new RegExp(`--${value}`, 'g'));
});

Object.values(mappings).forEach((value) => {
  from.push(`@${value}`);
  from.push(`--${value}`);
});

const options = {
  files: 'path/to/file',
  from,
  to,
  dry: true, // TODO pass through
};

const { files, dry, verbose, extensions, ignore } = argv;

console.log(argv);
