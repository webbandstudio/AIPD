import Image from 'next/image';
import Link from 'next/link';

import { FAQ } from '@constants/faqData';
import styles from './Faq.module.scss';
import FaqElement from '@components/faqElement/FaqElement';
import managerImage from '@assets/images/png/manager.png';
import telegramIcon from '@assets/images/png/telegramIconBig.png';

const Faq = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Частые вопросы</h2>
      <ul className={styles.questions}>
        {FAQ.map(elem =>
          <FaqElement
            key={elem.id}
            title={elem.title}
            text={elem.text}
          />
        )}
      </ul>
      <div className={styles.managerInfo}>
        <div className={styles.subHeaderWrapper}>
          <h2 className={styles.header}>остались <br /> вопросы?</h2>
          <p className={styles.description}>
            Напиши нам и ваш личный менеджер ответит в любое разумное время.
          </p>
        </div>
        <div className={styles.managerContacts}>
          <div className={styles.managerWrapper}>
            <Image className={styles.managerImage} src={managerImage} alt="manager" />
            <p className={styles.managerName}>Менеджер Вика</p>
          </div>
          <Link href={''} className={styles.telegramWrapper}>
            <Image className={styles.telegramIcon} src={telegramIcon} alt="telegram icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;