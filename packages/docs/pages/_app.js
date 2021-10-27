/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

import { MDXProvider } from '@mdx-js/react';
import { Provider, getLangFromLocale, DEFAULT_LOCALE } from '@transferwise/components';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect } from 'react';

import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/neptune-css/dist/css/neptune-social-media.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';
import '@transferwise/components/build/main.css';

import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { DirectionProvider } from '../providers';
import { addBasePath } from '../utils/pageUtils';

import '../public/static/assets/main.css';

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

const MyApp = ({ Component, pageProps, locale, messages }) => {
  useEffect(() => {
    const { pathname } = Router;

    if (pathname === '/' || pathname === '/_error') {
      Router.push(addBasePath('about/Home'));
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem(
        'sidebar-scroll',
        document.querySelector('.Sidebar__Inner .Nav').scrollTop,
      );
    });
  }, []);

  const customComponents = {
    h1: (props) => <Heading as="h1" {...props} />,
    h2: (props) => <Heading as="h2" {...props} />,
    h3: (props) => <Heading as="h3" {...props} />,
    h4: (props) => <Heading as="h4" {...props} />,
    h5: (props) => <Heading as="h5" {...props} />,
    h6: (props) => <Heading as="h6" {...props} />,
  };

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
      <MDXProvider components={customComponents}>
        <Provider i18n={{ locale, messages }}>
          <DirectionProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DirectionProvider>
        </Provider>
      </MDXProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const lang = getLangFromLocale(DEFAULT_LOCALE);
  const messages = await import(`@transferwise/components/build/i18n/${lang}`);
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, locale: DEFAULT_LOCALE, messages };
};

export default MyApp;
