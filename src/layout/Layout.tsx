import React, { FC, ReactNode } from 'react';

import Header from '@layouts/header/Header';
import styles from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
