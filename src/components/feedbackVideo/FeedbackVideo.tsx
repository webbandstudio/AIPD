import React, { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './FeedbackVideo.module.scss';
import playIcon from '@assets//images/png/playIcon.png';

export interface IFeedbackVideo {
  video: string;
  title: string;
  id?: number;
}

const FeedbackVideo: React.FC<IFeedbackVideo> = ({ video, title}) => {
  const videoControl = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);

  const playVideo = () => {
    if (videoControl.current) {
      isPlay ? videoControl.current.pause() : videoControl.current.play();
      setIsPlay(prevState => !prevState);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <video loop ref={videoControl} onClick={playVideo}>
          <source src={video || '/testVideo.mp4'} type="video/mp4" />
        </video>
        <Image
          onClick={playVideo}
          src={playIcon}
          alt="play icon"
          className={isPlay ? styles.playIconNone : styles.playIcon}
        />
      </div>
      <p className={`p2 ${styles.title}`}>
        {title}
      </p>
    </section>
  );
};

export default FeedbackVideo;
