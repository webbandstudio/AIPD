import Link from "next/link";

import styles from './Header.module.scss';
import { HEADER_LINKS } from "@/constants/links";

const Header = () => {
  return (
    <>
      <div className={styles.gradient} />
      <div className={styles.gradient1} />
      <header className={styles.header}>
        <p className={styles.title}>All in poland delivery</p>
        <nav className={styles.navWrapper}>
          {HEADER_LINKS.map((link) =>
            <Link key={link.title} href={link.link} className={styles.link}>{link.title}</Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
