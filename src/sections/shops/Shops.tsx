import Image from "next/image";

import styles from './Shops.module.scss';
import { SHOPS } from "@/constants/mockData";
import Shop from "@/components/shop/Shop";
import arrow from '../../public/assets/images/svg/shopsArrow.svg';

const Shops = () => {
  return (
    <section className={styles.shopsSection}>
      <h2 className={styles.title}>Доставляем ото всюду</h2>
      <div className={styles.shopsWrapper}>
        {SHOPS.map((shop) =>
          <Shop key={shop.image} label={shop.category} image={shop.image} />
        )}
        <div>
          <div className={styles.allShops}>
            <div className={styles.otherShops}>
              <label className={styles.label}>20+ магазинов</label>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>Смотреть все магазины</p>
              <Image className={styles.arrow} src={arrow} alt="arrow" />
            </div>
          </div>
          <div className={styles.allShops1} />
          <div className={styles.allShops2} />
        </div>
      </div>
    </section>
  );
};

export default Shops;
