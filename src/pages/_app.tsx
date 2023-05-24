import type { AppProps } from 'next/app';

import '@styles/default.scss';
import Layout from '@layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
