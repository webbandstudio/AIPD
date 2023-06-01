import Image from 'next/image';

import styles from './Feedbacks.module.scss';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';
import FeedbackVideo, { IFeedbackVideo } from '@components/feedbackVideo/FeedbackVideo';
import refreshIcon from '@assets/images/png/refresh.png';
import { FEEDBACKS_DATA } from '@constants/mockData';

const feedbackElement = (item: IFeedbackVideo, index: number) => {
  switch (index) {
    case 1:
      return <>
        <li className={styles.emptyDiv} key={item.id} />
        <FeedbackVideo video={item.video} title={item.title} key={item.id} id={item.id} />
      </>;
    case 3:
      return <>
        <FeedbackVideo video={item.video} title={item.title} key={item.id} id={item.id} />
        <li className={styles.moreFeedbacks} key={item.id}>
          <Image src={refreshIcon} alt="refreshIcon" />
          <p className={`p2 ${styles.moreFeedbacksText}`}>еще отзывы</p>
        </li>
      </>;
    default:
      return <FeedbackVideo video={item.video} title={item.title} key={item.id} id={item.id} />;
  }
}

const Feedbacks = () => {
  return (
    <section id="feedbacks" className={styles.feedbackWrapper}>
      <aside className={styles.feedbacksText}>
        <h2 className={styles.title}> реальные отзывы клиентов</h2>
        <p className={`p2 ${styles.description}`}>
          За 5 лет работы, нам уже доверилось более 1,000 клиентов.
        </p>
        <TelegramOrder text="Присоединиться" />
      </aside>
      <ul className={styles.feedbacksVideos}>
        {FEEDBACKS_DATA.map((item, index) => feedbackElement(item, index))}
      </ul>
    </section>
  );
};

export default Feedbacks;
