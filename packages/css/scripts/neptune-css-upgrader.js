#!/usr/bin/env node
/* eslint-disable no-console, compat/compat */

const { exec } = require('child_process');
const path = require('path');

const inquirer = require('inquirer');
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

const IGNORE_PATTERN = '**/node_modules/*';
const EXTENSIONS = {
  LESS: 'less',
  CSS: 'css',
  BOTH: 'less,css',
};

const fetchSettings = () => {
  const questions = [
    {
      name: 'upgradeScript',
      type: 'file-tree-selection',
      root: path.join(__dirname, '../upgrades/scripts'),
      message: '✨ Which upgrade would you like to run?',
    },
    {
      type: 'list',
      name: 'extension',
      message: '✨ What file extensions should I look at?',
      choices: Object.values(EXTENSIONS),
    },
    {
      name: 'files',
      type: 'file-tree-selection',
      onlyShowDir: true,
      root: process.cwd(),
      message: '✨ And what directory would you like to transform?',
    },
  ];
  return inquirer.prompt(questions);
};

const fetchOptions = () => {
  const questions = [
    {
      name: 'dry',
      type: 'confirm',
      message: '✨ Dry run? (no changes are made to files)',
    },
    {
      name: 'verbose',
      type: 'confirm',
      message: '✨ Extra logging?',
      default: false,
    },
  ];
  return inquirer.prompt(questions);
};

const okToProceed = () => {
  const questions = [
    {
      name: 'confirm',
      type: 'confirm',
      message: 'Does everything look ok?',
    },
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  const { upgradeScript, extension, files } = await fetchSettings();
  const { dry, verbose } = await fetchOptions();

  console.log(`✨ Please review the following:`);
  console.log(`✨ Upgrade script: ${upgradeScript}`);
  console.log(`✨ File extension(s): ${extension}`);
  console.log(`✨ Directory: ${files}`);
  console.log(`✨ Dry run: ${dry}`);

  const { confirm } = await okToProceed();

  const config = `--files=${files} --extensions=${extension} --ignore=${IGNORE_PATTERN}`;
  const options = `${dry ? '--dry' : ''} ${verbose ? '--verbose' : ''}`;

  const handleOutput = (error, stdout, stderr) => {
    if (error) {
      console.log(stderr);
      return;
    }
    console.log(stdout);
  };

  const command = `node ${upgradeScript} ${config} ${options}`;

  if (confirm) {
    console.log('🚀 Running codemod, please wait a few seconds...');
    console.log(command);
    exec(command, handleOutput);
  } else {
    console.log('👋 Exiting');
  }
};

run();
