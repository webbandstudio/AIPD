import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './Shop.module.scss';

interface IShop {
  label: string;
  image: StaticImageData;
  link: string;
}

const Shop:React.FC<IShop> = ({ label, image, link }) => {
  return (
    <Link href={link} className={styles.wrapper} target="_blank">
      <div className={styles.labelWrapper}>
        <label className={styles.label}>{label}</label>
      </div>
      <div className={styles.imageWrapper}>
        <Image className={styles.innerImage} src={image} alt="shop" />
      </div>
    </Link>
  );
};

export default Shop;
