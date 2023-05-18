import Image from 'next/image';

import styles from './TelegramOrder.module.scss';
import telegramIcon from '../../public/assets/images/telegramIcon.png';

const TelegramOrder = ({ text }: { text: string }) => {
  return (
    <button className={styles.container}>
      <Image src={telegramIcon} alt='telegram icon' />
      <p className={styles.text}>{text}</p>
    </button>
  );
};

export default TelegramOrder;