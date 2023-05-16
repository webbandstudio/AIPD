import type { AppProps } from 'next/app';

import '../public/styles/reset.scss';
import Header from "../layout/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
