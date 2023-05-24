import React from "react";
import Image from "next/image";

import styles from './Shop.module.scss';
import mockedImage from '@assets/images/png/allegro.png';

interface IShop {
  label: string;
  image: string;
}

const Shop:React.FC<IShop> = ({ label, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>{label}</label>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={image || mockedImage} alt="shop" height={50} width={147} />
      </div>
    </div>
  );
};

export default Shop;
