/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider, getLangFromLocale, DEFAULT_LOCALE } from '@transferwise/components';
import Layout from '../components/Layout';
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

  componentDidMount() {
    const { pathname } = Router;
    if (pathname === '/' || pathname === '/_error') {
      Router.push(addBasePath('about/Home'));
    }

    // @TODO
    // We need to show the user a cookie banner before we do this. Because it's used solely for the purposes
    // of making the site run well, we don't need to ask for consent, but we do need to inform them.
    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem(
    //     'sidebar-scroll',
    //     document.querySelector('.Sidebar__Inner .Nav').scrollTop,
    //   );
    // });
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    /**
     * NextJS provides polyfills out of the box (https://nextjs.org/docs/basic-features/supported-browsers-features) using core-js,
     * which doesn't provide polyfills for a couple things (https://github.com/zloirock/core-js#missing-polyfills)
     * so we have to do that ourselves
     */
    const polyfills = ['Element.prototype.closest', 'Intl.Locale', 'IntersectionObserver'].join(
      '%2C',
    );
    return (
      <>
        <Head>
          <title>Neptune Web - the Wise Design System on Web</title>
          <link rel="icon" href={`${process.env.ASSET_PREFIX}/static/assets/favicon.ico`} />
          <script src={`https://polyfill.io/v3/polyfill.min.js?features=${polyfills}`} />
        </Head>
        <Provider i18n={{ locale, messages }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    );
  }
}

export default MyApp;
