import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './Shop.module.scss';

interface IShop {
  label: string;
  image: StaticImageData;
  link: string;
}

const Shop: React.FC<IShop> = ({ label, image, link }) => {
  return (
    <li>
      <Link href={link} className={styles.wrapper} target="_blank">
        <label className={styles.labelWrapper}>{label}</label>
        <figure className={styles.imageWrapper}>
          <Image className={styles.innerImage} src={image} alt="shop" />
        </figure>
      </Link>
    </li>
  );
};

export default Shop;
