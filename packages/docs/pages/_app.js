/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider, getLangFromLocale, DEFAULT_LOCALE } from '@transferwise/components';
import Layout from '../components/Layout';
import { LocaleContext } from '../components/LocaleContext';

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

    this.toggleLocale = () =>
      this.setState(({ locale }) => ({
        locale: locale === this.props.locale ? 'he-IL' : this.props.locale,
      }));

    this.state = {
      locale: this.props.locale,
    };
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
    const { Component, pageProps, messages } = this.props;
    const { locale } = this.state;

    return (
      <LocaleContext.Provider value={{ locale, toggleLocale: this.toggleLocale }}>
        <Provider i18n={{ locale, messages }}>
          <Head>
            <title>Neptune Web - the Wise Design System on Web</title>
            <link rel="icon" href={`${process.env.ASSET_PREFIX}/static/assets/favicon.ico`} />
          </Head>
          <div dir={this.state.locale === 'he-IL' ? 'rtl' : 'ltr'}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </Provider>
      </LocaleContext.Provider>
    );
  }
}

export default MyApp;
