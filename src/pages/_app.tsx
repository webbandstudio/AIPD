import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

import '@styles/default.scss';
import Layout from '@layouts/Layout';
import GoogleAnalytics from '@analytics/googleAnalytics';
import Gtm from '@analytics/gtm';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Gtm />
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
