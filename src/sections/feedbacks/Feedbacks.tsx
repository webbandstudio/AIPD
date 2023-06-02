import Image from 'next/image';
import React, { useState } from 'react';

import styles from './Feedbacks.module.scss';
import TelegramOrder from '@components/telegramOrder/TelegramOrder';
import FeedbackVideo, { IFeedbackVideo } from '@components/feedbackVideo/FeedbackVideo';
import refreshIcon from '@assets/images/png/refresh.png';
import { FEEDBACKS_DATA } from '@constants/mockData';

const feedbackElement = (
  item: IFeedbackVideo,
  index: number,
  activeVideo: number,
  handleActiveVideo: (id: number) => void
) => {
  switch (index) {
    case 1:
      return <React.Fragment key={item.id}>
      <li className={styles.emptyDiv} />
        <FeedbackVideo
          video={item.video}
          title={item.title}
          id={item.id}
          activeVideo={activeVideo}
          handleActiveVideo={handleActiveVideo}
        />
      </React.Fragment>;
    case 3:
      return <React.Fragment key={item.id}>
        <FeedbackVideo
          video={item.video}
          title={item.title}
          id={item.id}
          activeVideo={activeVideo}
          handleActiveVideo={handleActiveVideo}
        />
        <li className={styles.moreFeedbacks}>
          <Image src={refreshIcon} alt="refreshIcon" />
          <p className={`p2 ${styles.moreFeedbacksText}`}>еще отзывы</p>
        </li>
      </React.Fragment>;
    default:
      return <FeedbackVideo
        video={item.video}
        title={item.title}
        key={item.id}
        id={item.id}
        activeVideo={activeVideo}
        handleActiveVideo={handleActiveVideo}
      />;
  }
}

const Feedbacks = () => {
  const [activeVideo, setActiveVideo] = useState(FEEDBACKS_DATA[0].id);
  const handleActiveVideo = (id: number) => setActiveVideo(id);

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
        {FEEDBACKS_DATA.map((item, index) => feedbackElement(item, index, activeVideo, handleActiveVideo))}
      </ul>
    </section>
  );
};

export default Feedbacks;
