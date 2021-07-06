/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider, getLangFromLocale, DEFAULT_LOCALE } from '@transferwise/components';
import Layout from '../components/Layout';
import { ThemeContext } from '../components/ThemeContext';

import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/neptune-css/dist/css/neptune-social-media.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';

import { addBasePath } from '../utils/pageUtils';

import '../static/assets/main.css';

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const ReactDOM = require('react-dom'); // eslint-disable-line global-require
  const axe = require('@axe-core/react'); // eslint-disable-line global-require
  axe(React, ReactDOM, 1000, {});
}

class MyApp extends App {
  static async getInitialProps() {
    const lang = getLangFromLocale(DEFAULT_LOCALE);
    const messages = await import(`@transferwise/components/build/i18n/${lang}`);
    return { locale: DEFAULT_LOCALE, messages };
  }

  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => {
        document.body.classList.remove(`np-theme-${state.theme}`);
        const theme = state.theme === 'dark' ? 'light' : 'dark';
        document.body.classList.add(`np-theme-${theme}`);
        return {
          theme,
        };
      });
    };

    this.state = {
      theme: 'light',
      toggleTheme: this.toggleTheme,
    };
  }

  componentDidMount() {
    const { pathname } = Router;
    if (pathname === '/' || pathname === '/_error') {
      Router.push(addBasePath('about/Home'));
    }
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    return (
      <ThemeContext.Provider value={this.state}>
        <Provider i18n={{ locale, messages }} theme={this.state.theme}>
          <Head>
            <title>Neptune Web - the Wise Design System on Web</title>
            <link rel="icon" href={`${process.env.ASSET_PREFIX}/static/assets/favicon.ico`} />
          </Head>

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeContext.Provider>
    );
  }
}

export default MyApp;
