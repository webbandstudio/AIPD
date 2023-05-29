import Image from 'next/image';

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

const mobileImages = [
  {
    style: styles.mobileImgWrapper1,
    image: littleHeadPhones,
    alt: 'headphones',
    id: 100,
  },
  {
    style: styles.mobileImgWrapper2,
    image: mobileSneakerImg1,
    alt: 'sneaker',
    id: 101,
  },
  {
    style: styles.mobileImgWrapper3,
    image: parfumeImg,
    alt: 'parfume',
    id: 102,
  },
  {
    style: styles.mobileImgWrapper4,
    image: mobileSneakerImg2,
    alt: 'mobileSneakerImg2',
    id: 103,
  },
  {
    style: styles.mobileImgWrapper5,
    image: playStationImg,
    alt: 'playstation 5',
    id: 104,
  },
];

const desktopImages = [
  {
    style: styles.headPhonesImg,
    image: headPhonesImg,
    alt: 'background headphones',
    id: 201,
  },
  {
    style: styles.sneakerImg,
    image: sneakerImg,
    alt: 'background sneaker',
    id: 202,
  },
];

const Delivery = () => {
  const tagsTextMobile = tagsText.filter(elem => elem.id !== 4);

  const drawStarIcon = (id: number) => {
    return (<Image className={styles.starIcon} src={starIcon} alt="divider" />);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.desktopImages}>
        {desktopImages.map(elem =>
          <Image
            key={elem.id}
            className={elem.style}
            src={elem.image}
            alt={elem.alt}
          />
        )}
      </div>
      <div className={styles.mobileImages}>
        {mobileImages.map(elem =>
          <div key={elem.id} className={elem.style}>
            <Image src={elem.image} alt={elem.alt} />
          </div>
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.routeImg}>
          <Image src={routeImg} alt="route" />
          <Image className={styles.couponImg} src={couponImg} alt="coupon" />
        </div>
        <h1 className={styles.mainText}>Dоставка товаров <br /> из <span>🇵🇱</span> польши</h1>
        <div className={styles.telegramWrapperDesktop}>
          <TelegramOrder text='Оформить заказ в Телеграм' />
        </div>
        <div className={styles.telegramWrapperMobile}>
          <TelegramOrder text='Оформить заказ' />
        </div>
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
        <div className={styles.tagsMobile}>
          {tagsTextMobile.map(elem => elem.id % 2 === 0
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
