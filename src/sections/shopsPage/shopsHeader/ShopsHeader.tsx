import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './ShopsHeader.module.scss';
import telegramIcon from '@assets/images/svg/icons/telegramIcon.svg';
import telegramArrow from '@assets/images/svg/telegramArrow.svg';
import { CATEGORIES } from '@constants/mockData';
import Category from '@components/category/Category';

const ShopsHeader = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const handleCategory = (id: number) => setActiveCategory(id);

  return (
    <section>
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>магазины в польше</h2>
        <figure className={styles.orderWrapper}>
          <Image src={telegramIcon} alt="telegram icon" />
          <figcaption className={styles.textWrapper}>
            <p className={`p2`}>Заказывай через удобный</p>
            <Link href="" className={`p2`}>
              телеграм бот
              <Image className={styles.arrowImage} src={telegramArrow} alt="arrow" />
            </Link>
          </figcaption>
        </figure>
      </div>
      <ul className={styles.categoriesWrapper}>
        {CATEGORIES.map(({ id, category }) =>
          <Category
            id={id}
            category={category}
            activeCategory={activeCategory}
            handleCategory={handleCategory}
          />
        )}
      </ul>
      <figure className={styles.orderWrapperMobile}>
        <Image src={telegramIcon} alt="telegram icon" />
        <figcaption className={styles.textWrapper}>
          <p className={`p2`}>Заказывай через удобный</p>
          <Link href="" className={`p2`}>
            телеграм бот
            <Image className={styles.arrowImage} src={telegramArrow} alt="arrow" />
          </Link>
        </figcaption>
      </figure>
    </section>
  );
};

export default ShopsHeader;
