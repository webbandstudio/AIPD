import React, { useState } from 'react';

import styles from './FaqElement.module.scss';

interface IFaqElement {
  title: string;
  text: string;
}

const FaqElement:React.FC<IFaqElement> = ({ title, text}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const handleOpenDropdown = () => setIsOpenDropdown(prevState => !prevState);

  return (
    <>
      <div className={styles.wrapper} onClick={handleOpenDropdown}>
        <p className={`p2 ${styles.title}`}>{title}</p>
      </div>
      {isOpenDropdown && <p className={`p2 ${styles.text}`}>
        {text}
      </p>}
    </>
  );
};

export default FaqElement;
