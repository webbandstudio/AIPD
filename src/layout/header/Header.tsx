import Link from "next/link";
import Image from "next/image";

import styles from './Header.module.scss';
import { HEADER_LINKS } from "@constants/links";
import gradient from '@assets/images/png/gradient.png';

const Header = () => {
  return (
    <>
      <Image src={gradient} alt="gradient" className={styles.gradient} />
      <header className={styles.header}>
        <Link className={styles.title} href="/">All in poland delivery</Link>
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
