import Link from 'next/link';
import Image from "next/image";

import styles from './Header.module.scss';
import { HEADER_LINKS } from '@constants/links';
import logo from '@assets/images/png/logo.png';

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <Link className={styles.title} href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <nav className={styles.navWrapper}>
          {HEADER_LINKS.map(({ title, link}) =>
            <Link key={title} href={link} className={styles.link}>{title}</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
