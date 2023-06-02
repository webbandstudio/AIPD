import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from './Product.module.scss';

interface IProduct {
  image: StaticImageData,
  title: string,
  economy: number,
}

const Product: React.FC<IProduct> = ({ image, title, economy }) => {
  return (
    <li className={styles.container}>
      <div className={styles.description}>
        <p className={`${styles.title} p2`}>{title}</p>
        <p className={`${styles.economy} p1`}>Экономия ${economy}</p>
      </div>
      <figure className={styles.imageWrapper}>
        <Image
          className={styles.productImage}
          src={image}
          alt="product"
        />
      </figure>
    </li>
  );
};

export default Product;
