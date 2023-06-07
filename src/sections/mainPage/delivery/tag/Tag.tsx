import React from 'react';

import styles from './Tag.module.scss';

interface ITag {
  upText: string,
  downText: string,
}

const Tag: React.FC<ITag> = ({ upText, downText }) => {
  return (
    <li>
      <p className={styles.upText}>{upText}</p>
      <p className={styles.downText}>{downText}</p>
    </li>
  );
};

export default Tag;
