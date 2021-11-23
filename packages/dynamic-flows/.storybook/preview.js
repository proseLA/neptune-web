import React, { StrictMode } from 'react';
import { select } from '@storybook/addon-knobs';
import {
  DEFAULT_LANG,
  DEFAULT_LOCALE,
  getLangFromLocale,
  Provider,
  translations as componentTranslations,
} from '@transferwise/components';
import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';
import '@transferwise/components/build/main.css';

import translations from '../i18n';

import '../src/main.css';
import './storybook.css';

// Set up Axe to run in the console
if (process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  const context = {
    include: [['#root']],
  };
  axe(React, ReactDOM, 1000, {}, context);
}

export const parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
  options: {
    panelPosition: 'right',
  },
};

const StrictModeDecorator = (storyFn) => <StrictMode>{storyFn()}</StrictMode>;

const CenterDecorator = (storyFn) => <div style={{ width: '100%' }}>{storyFn()}</div>;

// list is not exhaustive but should enough for testing diff edge cases
// feel free to add more during development
const severalExamplesOfSupportedLocales = [
  DEFAULT_LOCALE,
  'en-US',
  'ja-JP',
  'zh-HK',
  'es',
  'fr',
  'ru',
  'de',
  'tr',
];

const ProviderDecorator = (storyFn) => {
  const locale = select('locale (global)', severalExamplesOfSupportedLocales, DEFAULT_LOCALE);
  const lang = getLangFromLocale(locale) || DEFAULT_LANG;
  // eslint-disable-next-line fp/no-mutating-assign
  const messages = {
    ...translations[lang],
    ...componentTranslations[lang],
  };
  const props = {
    i18n: { locale, messages },
    children: storyFn(),
  };
  return <Provider {...props} />;
};

export const decorators = [StrictModeDecorator, CenterDecorator, ProviderDecorator];
