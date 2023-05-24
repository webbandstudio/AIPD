import React from 'react';
import Image from 'next/image';

import styles from './TelegramOrder.module.scss';
import telegramIcon from '@assets/images/png/telegramIcon.png';

interface ITelegramOrder {
  text: string,
}

const TelegramOrder: React.FC<ITelegramOrder> = ({ text }) => {
  return (
    <button className={styles.container}>
      <Image src={telegramIcon} alt='telegram icon' />
      <p className={styles.text}>{text}</p>
    </button>
  );
};

export default TelegramOrder;
