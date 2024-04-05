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
import {
  email,
  googleMapsLink,
  instagramLink,
  pleTelNumber,
  plTelephoneNumber,
} from '@constants/links';

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
              <div className={styles.groupContent}>
                <Image className={styles.houseImage} src={house} alt="house" />
                <div className={styles.contentText}>
                  <p>Склад в Польше:</p>
                  <Link href={plTelephoneNumber}>Тел: +48573923356</Link>
                  <p>Время работы:</p>
                  <p>Пн-Пт 09:00-18:00</p>
                </div>
              </div>
              <div className={styles.specialGroupContent}>
                <Image className={styles.accountImage} src={account} alt="account" />
                <div className={styles.contentText}>
                  <p>Инфолиния заказов:</p>
                  <Link href={pleTelNumber} target="_blank">Тел: +48572117937</Link>
                  <Link href={email} target="_blank">E-mail: sale@aipd.pl</Link>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.specialGroup}>
            <div className={styles.groupContent}>
              <Image className={styles.accountImage} src={account} alt="account" />
              <div className={styles.contentText}>
                <p>Инфолиния заказов:</p>
                <Link href={pleTelNumber} target="_blank">Тел: +48572117937</Link>
                <Link href={email} target="_blank">E-mail: sale@aipd.pl</Link>
              </div>
            </div>
          </li>
          <li className={styles.group}>
            <p className={styles.title}>
              Адрес
            </p>
            <div className={styles.groupContent}>
              <Image className={styles.addressImage} src={address} alt="address" />
              <div>
                <Link
                  href={googleMapsLink}
                  target="_blank"
                  className={styles.contentText}
                >
                  <p>Sokólska 22/1, 16-123,</p>
                  <p>Kuźnica, Polska</p>
                </Link>
              </div>
            </div>
          </li>
          <li className={styles.group}>
            <p className={styles.title}>
              Социалки
            </p>
            <div className={styles.groupContent}>
              <Image className={styles.instagramImage} src={instagram} alt="instagram" />
              <div className={styles.contentText}>
                <Link href={instagramLink} target="_blank">
                  Instagram
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <aside className={styles.otherInfo}>
          <aside className={styles.documentsLinksWrapper}>
            <Link href="" target="_blank">
              Регламент компании
            </Link>
            <Link href="" target="_blank">
              Политика конфиденциальности
            </Link>
          </aside>
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
