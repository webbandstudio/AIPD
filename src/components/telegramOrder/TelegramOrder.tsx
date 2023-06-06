import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './TelegramOrder.module.scss';
import telegramIcon from '@assets/images/png/telegramIcon.png';

interface ITelegramOrder {
  text: string,
}

const TelegramOrder: React.FC<ITelegramOrder> = ({ text }) => {
  return (
    <Link href="https://telegram.org/" target="_blank" className={styles.container}>
      <Image src={telegramIcon} alt='telegram icon' />
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default TelegramOrder;
