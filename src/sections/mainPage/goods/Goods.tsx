import { GOODS } from '@constants/mockData';
import styles from './Goods.module.scss';
import Product from '@components/product/Product';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';

const Goods = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        Мы уже реализовали<br /><span>более 5,000</span> товаров
      </h2>
      <ul className={styles.goods}>
        {GOODS.map(({ title, economy, id, image }) =>
          <Product
            image={image}
            title={title}
            economy={economy}
            key={id}
          />
        )}
      </ul>
      <div className={styles.telegramOrderDesktop}>
        <TelegramOrder text="Оформить свой заказ" />
      </div>
      <div className={styles.telegramOrderMobile}>
        <TelegramOrder text="Оформить заказ" />
      </div>
    </section>
  );
};

export default Goods;
