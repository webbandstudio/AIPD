import Image from 'next/image';

import styles from './ShopsHeader.module.scss';
import telegramIcon from '@assets/images/svg/icons/telegramIcon.svg';

const ShopsHeader = () => {
  return (
    <section className={styles.headerWrapper}>
      <h2 className={styles.title}>магазины в польше</h2>
      <div className={styles.orderWrapper}>
        <Image src={telegramIcon} alt="telegram icon" />
        <div className={styles.textWrapper}>
          <p>Заказывай через удобный</p>
          <p>телеграм бот</p>
        </div>
      </div>
    </section>
  );
};

export default ShopsHeader;
