import { GOODS } from '@constants/mockData';
import styles from './Goods.module.scss';
import Product from '@components/product/Product';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';

import headPhones from '@assets/images/png/goodsImages/headPhones.png';
import table from '@assets/images/png/goodsImages/table.png';
import jacket from '@assets/images/png/goodsImages/jacket.png';
import laptop from '@assets/images/png/goodsImages/laptop.png';
import sneakerYeezy from '@assets/images/png/goodsImages/sneakerYeezy.png';
import sneakerZigKinetica from '@assets/images/png/goodsImages/sneakerZigKinetica.png';
import sneakerNewBalance from '@assets/images/png/goodsImages/sneakerNewBalance.png';
import sneakerAirJordanMid from '@assets/images/png/goodsImages/sneakerAirJordanMid.png';
import playStation from '@assets/images/png/goodsImages/playStation.png';
import sneakerAdidasForum from '@assets/images/png/goodsImages/sneakerAdidasForum.png';
import parfume from '@assets/images/png/goodsImages/parfume.png';
import washingMachine from '@assets/images/png/goodsImages/washingMachine.png';
import television from '@assets/images/png/goodsImages/television.png';
import sneakerAirJordan from '@assets/images/png/goodsImages/sneakerAirJordan.png';
import earPhones from '@assets/images/png/goodsImages/earPhones.png';
import wheel from '@assets/images/png/goodsImages/wheel.png';

const productImages = [
  headPhones,
  table,
  jacket,
  laptop,
  sneakerYeezy,
  sneakerZigKinetica,
  sneakerNewBalance,
  sneakerAirJordanMid,
  playStation,
  sneakerAdidasForum,
  parfume,
  washingMachine,
  television,
  sneakerAirJordan,
  earPhones,
  wheel,
];

const Goods = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>
        мы уже привезли<br /><span>более 5,000</span> товаров, выгоду смотри сам
      </h2>
      <ul className={styles.goods}>
        {GOODS.map((elem, index) =>
          <Product
            image={productImages[index]}
            title={elem.title}
            economy={elem.economy}
            key={elem.id}
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