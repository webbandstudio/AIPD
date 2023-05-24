import React from 'react';

import styles from './Tag.module.scss';

interface ITag {
  upText: string,
  downText: string,
}

const Tag: React.FC<ITag> = ({ upText, downText }) => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.upText}>{upText}</p>
      <p className={styles.downText}>{downText}</p>
    </div>
  );
};

export default Tag;
