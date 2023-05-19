import React, { FC, ReactNode } from 'react';

import Header from "../layout/header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />
      <main>{children}</main>
      {/*<Footer />*/}
    </section>
  );
};

export default Layout;
