import React, { FC, ReactNode } from 'react';

import Header from '@layouts/header/Header';
import styles from './Layout.module.scss';
import Footer from '@layouts/footer/Footer';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
