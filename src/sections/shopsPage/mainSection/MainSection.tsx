import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import styles from './MainSection.module.scss';
import telegramIcon from '@assets/images/svg/icons/telegramIcon.svg';
import telegramArrow from '@assets/images/svg/telegramArrow.svg';
import { CATEGORIES, SHOPS } from '@constants/mockData';
import Category from '@components/category/Category';
import Shop from '@components/shop/Shop';
import backImage from '@assets/images/svg/arrowBack.svg';
import Dropdown from '@components/dropdown/Dropdown';
import { telegramLink } from '@constants/links';

const MainSection = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const handleCategory = (id: number) => setActiveCategory(id);

  const filteredShops = useMemo(() => {
    if (activeCategory !== 1) {
      const currentCategory = CATEGORIES.find(({ id }) => id === activeCategory);

      return SHOPS.filter(({ category }) => category === currentCategory?.category);
    }

    return SHOPS;
  }, [activeCategory]);

  return (
    <section>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.backWrapper}>
          <Image src={backImage} alt="back image" />
          <p>На главную</p>
        </Link>
        <h2 className={styles.title}>магазины в польше</h2>
        <figure className={styles.orderWrapper}>
          <Image src={telegramIcon} alt="telegram icon" />
          <figcaption className={styles.textWrapper}>
            <p className="p2">Заказывай через удобный</p>
            <Link href={telegramLink} target="_blank" className="p2">
              телеграм бот
              <Image className={styles.arrowImage} src={telegramArrow} alt="arrow" />
            </Link>
          </figcaption>
        </figure>
      </div>
      <ul className={styles.categoriesWrapper}>
        {CATEGORIES.map(({ id, category }) =>
          <Category
            key={id}
            id={id}
            category={category}
            activeCategory={activeCategory}
            handleCategory={handleCategory}
          />
        )}
      </ul>
      {<div className={styles.dropdownWrapper}>
        <Dropdown
          items={CATEGORIES}
          activeItem={activeCategory}
          handleItem={handleCategory}
        />
      </div>}
      <ul className={styles.shopsWrapper}>
        {filteredShops.map(({ id, category, image, description, link }) =>
          <Shop
            key={id}
            label={category}
            image={image}
            link={link}
            description={description}
          />
        )}
        {filteredShops.length === 0 && <li className={`p1 ${styles.noShops}`}>В данной категории нет магазинов</li>}
      </ul>
      <figure className={styles.orderWrapperMobile}>
        <Image src={telegramIcon} alt="telegram icon" />
        <figcaption className={styles.textWrapper}>
          <p className="p2">Заказывай через удобный</p>
          <Link href={telegramLink} target="_blank" className="p2">
            телеграм бот
            <Image className={styles.arrowImage} src={telegramArrow} alt="arrow" />
          </Link>
        </figcaption>
      </figure>
    </section>
  );
};

export default MainSection;
