import React, { useState } from 'react';
import Image from 'next/image';

import styles from './FaqElement.module.scss';
import arrow from '@assets/images/png/arrow.png';

interface IFaqElement {
  title: string;
  text: string;
  id: number;
}

const FaqElement: React.FC<IFaqElement> = ({ title, text, id }) => {
  const isOpenByDefault = id === 100;
  const [isOpenDropdown, setIsOpenDropdown] = useState(isOpenByDefault);
  const handleOpenDropdown = () => setIsOpenDropdown(prevState => !prevState);

  return (
    <li className={styles.container}>
      <div className={styles.wrapper} onClick={handleOpenDropdown}>
        <p className={`p2 ${styles.title}`}>{title}</p>
        <Image className={`${styles.arrow} ${isOpenDropdown && styles.arrowOpen}`} src={arrow} alt="arrow" />
      </div>
      <aside className={`p2 ${styles[isOpenDropdown ? 'textOpen' : 'textClose']}`} dangerouslySetInnerHTML={{ __html: text }} />
    </li>
  );
};

export default FaqElement;
