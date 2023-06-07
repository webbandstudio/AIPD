import React from 'react';

import styles from './Category.module.scss';

interface ICategory {
  id: number;
  category: string;
  activeCategory: number;
  handleCategory: (id: number) => void;
}

const Category: React.FC<ICategory> = ({ id, category, activeCategory, handleCategory }) => {
  const isActive = activeCategory === id;

  return (
    <li
      className={isActive ? styles.activeContainer : styles.container}
      onClick={() => handleCategory(id)}
    >
      <p className={styles.name}>{category}</p>
    </li>
  );
};

export default Category;
