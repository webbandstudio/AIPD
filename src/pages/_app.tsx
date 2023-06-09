import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import TagManager from 'react-gtm-module';

import '@styles/default.scss';
import Layout from '@layouts/Layout';
import GoogleAnalytics from '@analytics/googleAnalytics';
import { GTM_ID } from '@constants/constants';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
