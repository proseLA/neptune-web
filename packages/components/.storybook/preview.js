import React, { StrictMode, useEffect } from 'react';
import { select } from '@storybook/addon-knobs';
import { DirectionProvider, Provider } from '../src';
import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/neptune-css/dist/css/neptune-social-media.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DEFAULT_LOCALE, getLangFromLocale } from '../src/common/locale';
import supportedLangs from '../src/i18n';

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
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  /**
   * For more info https://docs.percy.io/docs/storybook#configuration
   */
  percy: {
    // tell percy to take an additional set of snapshots
    additionalSnapshots: [
      // for RTL mode
      {
        suffix: ' [RTL]',
        queryParams: { direction: 'rtl' },
      },
    ],
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
  'uk',
  'es',
  'fr',
  'ru',
  'de',
  'tr',
];

const DirectionDecorator = (storyFn) => {
  const urlParams = new URLSearchParams(document.location.search);
  const direction = select('direction', ['ltr', 'rtl'], urlParams.get('direction') || 'ltr');

  useEffect(() => {
    document.documentElement.setAttribute('dir', direction);
  }, [direction]);

  document.documentElement.setAttribute('dir', direction);

  return <DirectionProvider direction={direction}>{storyFn()}</DirectionProvider>;
};

const ProviderDecorator = (storyFn) => {
  const locale = select('locale', severalExamplesOfSupportedLocales, DEFAULT_LOCALE);
  const lang = getLangFromLocale(locale);
  const messages = supportedLangs[lang];

  return <Provider i18n={{ locale, messages }}>{storyFn()}</Provider>;
};

export const decorators = [
  StrictModeDecorator,
  CenterDecorator,
  DirectionDecorator,
  ProviderDecorator,
];
