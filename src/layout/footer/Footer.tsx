import Image from "next/image";
import Link from "next/link";

import styles from './Footer.module.scss';
import barcode from '../../public/assets/images/png/stickers/barcodeSticker.png';
import date from '../../public/assets/images/png/stickers/dateSticker.png';
import price from '../../public/assets/images/png/stickers/priceSticker.png';
import house from '../../public/assets/images/svg/icons/house.svg';
import account from '../../public/assets/images/svg/icons/account.svg';
import address from '../../public/assets/images/svg/icons/address.svg';
import instagram from '../../public/assets/images/svg/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <Image src={price} alt="price sticker" className={styles.priceSticker} />
      <Image src={date} alt="date sticker" className={styles.dateSticker} />
      <div className={styles.infoWrapper}>
        <div className={styles.shopInfo}>
          <div className={styles.group}>
            <p className={styles.title}>
              Контакты
            </p>
            <div className={styles.firstGroup}>
              <div className={styles.groupContent}>
                <Image src={house} alt="house" />
                <div className={styles.contentText}>
                  <p>Склад в польше:</p>
                  <Link href="tel:48571352966">+48 571 352 966</Link>
                </div>
              </div>
              <div className={styles.specialGroupContent}>
                <Image src={account} alt="account" />
                <div className={styles.contentText}>
                  <p>Менеджер в Беларуси:</p>
                  <Link href="tel:375339933473">+375 (33) 99 33 473</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.specialGroup}>
            <div className={styles.groupContent}>
              <Image src={account} alt="account" />
              <div className={styles.contentText}>
                <p>Менеджер в Беларуси:</p>
                <Link href="tel:375339933473">+375 (33) 99 33 473</Link>
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <p className={styles.title}>
              Адрес
            </p>
            <div className={styles.groupContent}>
              <Image src={address} alt="address" />
              <div className={styles.contentText}>
                <p>Sokólska 22/1, 16-123,</p>
                <p>Kuźnica, Polska</p>
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <p className={styles.title}>
              Социалки
            </p>
            <div className={styles.groupContent}>
              <Image src={instagram} alt="instagram" />
              <div className={styles.contentText}>
                <Link href="" target="_blank">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.otherInfo}>
          <p>
            AIPD © 2023 Условия использования
          </p>
          <Link href="https://zametniy.com/" target="_blank">
            Дизайн – Zametniy.com
          </Link>
        </div>
      </div>
      <Image src={barcode} alt="barcode sticker" className={styles.barcodeSticker} />
    </footer>
  );
}

export default Footer;
