#!/usr/bin/env node
/* eslint-disable no-console, compat/compat */

const replace = require('replace-in-file');
const { argv } = require('yargs');

const mappings = {
  'color-text-primary': 'color-content-primary',
  'color-text-secondary': 'color-content-secondary',
  'color-text-link': 'color-content-accent',
  'color-text-link-hover': 'color-content-accent-hover',
  'color-text-link-active': 'color-content-accent-active',
  'color-text-positive': 'color-content-positive',
  'color-text-negative': 'color-content-negative',
  'color-text-warning': 'color-content-warning',
  'color-text-inactive': 'color-content-disabled',
  'color-text-important': 'color-content-primary',
  'color-control-accent': 'color-interactive-accent',
  'color-control-accent-hover': 'color-interactive-accent-hover',
  'color-control-accent-active': 'color-interactive-accent-active',
  'color-control-positive': 'color-interactive-positive',
  'color-control-positive-hover': 'color-interactive-positive-hover',
  'color-control-positive-active': 'color-interactive-positive-active',
  'color-control-negative': 'color-interactive-negative',
  'color-control-negative-hover': 'color-interactive-negative-hover',
  'color-control-negative-active': 'color-interactive-negative-active',
  'color-control-warning': 'color-interactive-warning',
  'color-control-warning-hover': 'color-interactive-warning-hover',
  'color-control-warning-active': 'color-interactive-warning-active',
  'color-border-focus': 'color-accent',
  'color-border-positive': 'color-positive',
  'color-border-warning': 'color-warning',
  'color-border-negative': 'color-negative',
};

// Special case mappings that are not exchanging variable for variable
const from = [new RegExp('@color-text-control', 'g'), new RegExp('--color-text-control', 'g')];
const to = ['#fff', '#fff'];

Object.keys(mappings).forEach((value) => {
  from.push(new RegExp(`@${value}`, 'g'));
  from.push(new RegExp(`--${value}`, 'g'));
});

Object.values(mappings).forEach((value) => {
  to.push(`@${value}`);
  to.push(`--${value}`);
});

const { files, dry, verbose, extensions, ignore } = argv;

const options = {
  files: `${files}/**/*.{${extensions}}`,
  from,
  to,
  dry: !!dry,
  verbose: !!verbose,
  ignore,
};

replace(options);
