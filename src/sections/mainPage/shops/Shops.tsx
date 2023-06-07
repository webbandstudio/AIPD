import Image from 'next/image';
import Link from 'next/link';

import styles from './Shops.module.scss';
import { SHOPS } from '@constants/mockData';
import Shop from '@components/shop/Shop';
import arrow from '@assets/images/svg/shopsArrow.svg';

const Shops = () => {
  const shopsPart = SHOPS.slice(0, 7);

  return (
    <section className={styles.shopsSection}>
      <h2 className={styles.title}>Доставляем ото всюду</h2>
      <ul className={styles.shopsWrapper}>
        {shopsPart.map(({ id, category, image, link }) =>
          <Shop key={id} label={category} image={image} link={link} />
        )}
        <li>
          <Link href="/shops" className={styles.allShops}>
            <div className={styles.otherShops}>
              <label className={styles.label}>20+ магазинов</label>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>Смотреть все магазины</p>
              <Image className={styles.arrow} src={arrow} alt="arrow" />
            </div>
          </Link>
          <div className={styles.allShops1} />
          <div className={styles.allShops2} />
        </li>
      </ul>
    </section>
  );
};

export default Shops;
