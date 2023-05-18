import type { AppProps } from 'next/app';

import '../public/styles/reset.scss';
import styles from './_app.module.scss';
import Header from "../layout/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className={styles.section}>
      <Header />
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
