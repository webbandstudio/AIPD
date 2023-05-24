import Image from 'next/image';
import React from "react";

import styles from './Product.module.scss';

interface IProduct {
  image: string,
  title: string,
  economy: number,
}

const Product: React.FC<IProduct> = ({ image, title, economy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <p className={styles.title}>Экономия ${economy}</p>
      </div>
      <Image
        className={styles.productImage}
        src={image}
        alt='product'
      />
    </div>
  );
};

export default Product;
