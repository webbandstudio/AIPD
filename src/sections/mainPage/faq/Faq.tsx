import Image from 'next/image';
import Link from 'next/link';

import { FAQ } from '@constants/constants';
import styles from './Faq.module.scss';
import FaqElement from '@components/faqElement/FaqElement';
import managerImage from '@assets/images/png/animatedManager.png';
import telegramIcon from '@assets/images/png/telegramIconBig.png';
import { telegramAccount } from '@constants/links';

const Faq = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Частые вопросы</h2>
      <ul className={styles.questions}>
        {FAQ.map(({ id, title, text }) =>
          <FaqElement
            key={id}
            title={title}
            text={text}
            id={id}
          />
        )}
      </ul>
      <div className={styles.managerInfo}>
        <div className={styles.subHeaderWrapper}>
          <h2 className={styles.header}>остались <br /> вопросы?</h2>
          <p className={styles.description}>
            Напишите нам и ваш личный менеджер ответит в рабочее время.
          </p>
        </div>
        <div className={styles.managerContacts}>
          <div className={styles.managerWrapper}>
            <Image className={styles.managerImage} src={managerImage} alt="manager" />
            {/*<p className={styles.managerName}>Менеджер Вика</p>*/}
          </div>
          <Link href={telegramAccount} target="_blank" className={styles.telegramWrapper}>
            <Image className={styles.telegramIcon} src={telegramIcon} alt="telegram icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
