import React, { useState } from 'react';

import styles from './Category.module.scss';

interface ICategory {
  name: string,
}

const Category: React.FC<ICategory> = ({ name }) => {
  const [activeCategory, setActiveCategory] = useState(false);

  const handleActiveCategory = () => {
    setActiveCategory(prevState => !prevState);
  };

  return (
    <div
      className={activeCategory ? styles.activeContainer : styles.container}
      onClick={handleActiveCategory}
    >
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Category;
