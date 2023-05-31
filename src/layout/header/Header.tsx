import Link from 'next/link';

import styles from './Header.module.scss';
import { HEADER_LINKS } from '@constants/links';

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <Link className={styles.title} href="/">All in poland delivery</Link>
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
