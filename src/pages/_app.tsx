import type { AppProps } from 'next/app';

import '../public/styles/default.scss';
import styles from './_app.module.scss';
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className={styles.section}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </section>
  );
}

export default MyApp;
