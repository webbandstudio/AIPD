import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';
import barcode from '@assets/images/png/stickers/barcodeSticker.png';
import date from '@assets/images/png/stickers/dateSticker.png';
import price from '@assets/images/png/stickers/priceSticker.png';
import house from '@assets/images/svg/icons/house.svg';
import account from '@assets/images/svg/icons/account.svg';
import address from '@assets/images/svg/icons/address.svg';
import instagram from '@assets/images/svg/icons/instagram.svg';
import { blTelephoneNumber, googleMapsLink, instagramLink, plTelephoneNumber } from '@constants/links';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <Image src={price} alt="price sticker" className={styles.priceSticker} />
      <Image src={date} alt="date sticker" className={styles.dateSticker} />
      <section className={styles.infoWrapper}>
        <ul className={styles.shopInfo}>
          <li className={styles.group}>
            <p className={styles.title}>
              Контакты
            </p>
            <div className={styles.firstGroup}>
              <figure className={styles.groupContent}>
                <Image className={styles.houseImage} src={house} alt="house" />
                <figcaption className={styles.contentText}>
                  <p>Склад в польше:</p>
                  <Link href={plTelephoneNumber}>+48 571 352 966</Link>
                </figcaption>
              </figure>
              <figure className={styles.specialGroupContent}>
                <Image className={styles.accountImage} src={account} alt="account" />
                <figcaption className={styles.contentText}>
                  <p>Менеджер в Беларуси:</p>
                  <Link href={blTelephoneNumber}>+375 (33) 99 33 473</Link>
                </figcaption>
              </figure>
            </div>
          </li>
          <li className={styles.specialGroup}>
            <figure className={styles.groupContent}>
              <Image className={styles.accountImage} src={account} alt="account" />
              <figcaption className={styles.contentText}>
                <p>Менеджер в Беларуси:</p>
                <Link href={blTelephoneNumber}>+375 (33) 99 33 473</Link>
              </figcaption>
            </figure>
          </li>
          <li className={styles.group}>
            <p className={styles.title}>
              Адрес
            </p>
            <figure className={styles.groupContent}>
              <Image className={styles.addressImage} src={address} alt="address" />
              <figcaption>
                <Link
                  href={googleMapsLink}
                  target="_blank"
                  className={styles.contentText}
                >
                  <p>Sokólska 22/1, 16-123,</p>
                  <p>Kuźnica, Polska</p>
                </Link>
              </figcaption>
            </figure>
          </li>
          <li className={styles.group}>
            <p className={styles.title}>
              Социалки
            </p>
            <figure className={styles.groupContent}>
              <Image className={styles.instagramImage} src={instagram} alt="instagram" />
              <figcaption className={styles.contentText}>
                <Link href={instagramLink} target="_blank">
                  Instagram
                </Link>
              </figcaption>
            </figure>
          </li>
        </ul>
        <aside className={styles.otherInfo}>
          <p>
            AIPD © 2023 Условия использования
          </p>
          <Link href="https://zametniy.com/" target="_blank">
            Дизайн – Zametniy.com
          </Link>
        </aside>
      </section>
      <Image src={barcode} alt="barcode sticker" className={styles.barcodeSticker} />
    </footer>
  );
}

export default Footer;
