import Image from 'next/image';

import { useQuery } from '../../hooks/use-query';
import styles from './Delivery.module.scss';
import routeImg from '@assets/images/png/route.png';
import couponImg from '@assets/images/png/routeCoupon.png';
import starIcon from '@assets/images/png/starIcon.png';
import headPhonesImg from '@assets/images/png/headPhonesBackground.png';
import sneakerImg from '@assets/images/png/sneakerBackground.png';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';
import littleHeadPhones from '@assets/images/png/littleHeadPhones.png';
import mobileSneakerImg1 from '@assets/images/png/mobileSneaker1.png';
import parfumeImg from '@assets/images/png/parfume.png';
import mobileSneakerImg2 from '@assets/images/png/mobileSneaker2.png';
import playStationImg from '@assets/images/png/playStation.png';
import Tag from './tag/Tag';

const tagsText = [
  {
    id: 1,
    upText: '5 лет',
    downText: 'привозим товары',
  },
  {
    id: 2,
  },
  {
    id: 3,
    upText: 'всего 9%',
    downText: 'коммисия сервиса',
  },
  {
    id: 4,
  },
  {
    id: 5,
    upText: 'телеграм бот',
    downText: 'для удобных и быстрых заказов',
  },
  {
    id: 6,
  },
  {
    id: 7,
    upText: 'опт и розница',
    downText: 'работаем со всеми',
  },
];

const Delivery = () => {
  const { isLgTablet, isTablet } = useQuery();

  const drawStarIcon = (id: number) => {
    if (isLgTablet && id === 4) return null;
    return (<Image className={styles.starIcon} src={starIcon} alt='' />);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.desktopImages}>
        <Image className={styles.headPhonesImg} src={headPhonesImg} alt='' />
        <Image className={styles.sneakerImg} src={sneakerImg} alt='' />
      </div>
      <div className={styles.mobileImages}>
        <div className={styles.mobileImgWrapper1}>
          <Image src={littleHeadPhones} alt='' />
        </div>
        <div className={styles.mobileImgWrapper2}>
          <Image src={mobileSneakerImg1} alt='' />
        </div>
        <div className={styles.mobileImgWrapper3}>
          <Image src={parfumeImg} alt='' />
        </div>
        <div className={styles.mobileImgWrapper4}>
          <Image src={mobileSneakerImg2} alt='' />
        </div>
        <div className={styles.mobileImgWrapper5}>
          <Image src={playStationImg} alt='' />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.routeImg}>
          <Image src={routeImg} alt='' />
          <Image className={styles.couponImg} src={couponImg} alt='' />
        </div>
        <h1 className={styles.mainText}>Dоставка товаров <br /> из <span>🇵🇱</span> польши</h1>
        <TelegramOrder text={isTablet ? 'Оформить заказ' : 'Оформить заказ в Телеграм'} />
        <div className={styles.tags}>
          {tagsText.map(elem => elem.id % 2 === 0
            ? drawStarIcon(elem.id)
            : <Tag
              upText={elem.upText || ''}
              downText={elem.downText || ''}
              key={elem.id}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
