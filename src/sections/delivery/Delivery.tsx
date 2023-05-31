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
import { TAGS_TEXT } from '@constants/constants';
import Tag from '@sections/delivery/tag/Tag';

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
  const tagsTextMobile = TAGS_TEXT.filter(elem => elem.id !== 4);

  return (
    <section className={styles.wrapper}>
      <figure className={styles.desktopImages}>
        {desktopImages.map(({ id, style, image, alt}) =>
          <Image
            key={id}
            className={style}
            src={image}
            alt={alt}
          />
        )}
      </figure>
      <div className={styles.mobileImages}>
        {mobileImages.map(({ id, style, image, alt}) =>
          <figure key={id} className={style}>
            <Image src={image} alt={alt} />
          </figure>
        )}
      </div>
      <div className={styles.container}>
        <figure className={styles.routeImg}>
          <Image src={routeImg} alt="route" />
          <Image className={styles.couponImg} src={couponImg} alt="coupon" />
        </figure>
        <h1 className={styles.mainText}>Dоставка товаров <br /> из <span>🇵🇱</span> польши</h1>
        <div className={styles.telegramWrapperDesktop}>
          <TelegramOrder text="Оформить заказ в Телеграм" />
        </div>
        <div className={styles.telegramWrapperMobile}>
          <TelegramOrder text="Оформить заказ" />
        </div>
        <ul className={styles.tags}>
          {TAGS_TEXT.map(({ id, upText, downText }) => id % 2 === 0
            ? <Image
              key={id}
              className={styles.starIcon}
              src={starIcon}
              alt="divider"
            />
            : <Tag
              upText={upText || ''}
              downText={downText || ''}
              key={id}
            />
          )}
        </ul>
        <ul className={styles.tagsMobile}>
          {tagsTextMobile.map(({ id, upText, downText }) => id % 2 === 0
            ? <Image
              key={id}
              className={styles.starIcon}
              src={starIcon}
              alt="divider"
            />
            : <Tag
              upText={upText || ''}
              downText={downText || ''}
              key={id}
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Delivery;
