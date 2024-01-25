import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './Shop.module.scss';

interface IShop {
  label: string;
  image: StaticImageData;
  link: string;
  description?: string;
}

const Shop: React.FC<IShop> = ({ label, image, link, description }) => {
  return (
    <li>
      <Link href={link} className={styles.wrapper} target="_blank">
        {!description && <label className={styles.labelWrapper}>{label}</label>}
        <figure className={styles.imageWrapper}>
          <Image
            className={`${styles['innerImage']} ${styles[`${link === 'https://ewor.pl/' ? 'backgroundBlack' : ''}`]}`}
            src={image}
            alt="shop"
          />
        </figure>
      </Link>
      {description && <p className={styles.description}>{description}</p>}
    </li>
  );
};

export default Shop;
