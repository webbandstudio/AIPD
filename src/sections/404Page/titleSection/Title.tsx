import Link from 'next/link';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <section className={styles.errorPageWrapper}>
      <h2 className={styles.title}>
        404 | Страница не найдена
      </h2>
      <Link href="/" className={`p1 ${styles.link}`}>
        Перейти на главную
      </Link>
    </section>
  );
};

export default Title;
