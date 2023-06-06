import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './FeedbackVideo.module.scss';
import playIcon from '@assets/images/png/playIcon.png';

export interface IFeedbackVideo {
  video: string;
  title: string;
  id: number;
  activeVideo?: number;
  handleActiveVideo?: (id: number) => void;
}

const FeedbackVideo: React.FC<IFeedbackVideo> = ({ video, title, id, activeVideo, handleActiveVideo }) => {
  const videoControl = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoControl.current) {
      isPlaying ? videoControl.current.pause() : videoControl.current.play();
      setIsPlaying(prevState => !prevState);
      if (handleActiveVideo && !isPlaying) {
        handleActiveVideo(id);
      }
    }
  };

  useEffect(() => {
    if (activeVideo !== id) {
      if (videoControl.current) {
        videoControl.current.pause();
        setIsPlaying(false);
      }
    }
  },[activeVideo]);

  return (
    <li className={styles.wrapper}>
      <figure className={styles.videoContainer}>
        <video loop ref={videoControl} onClick={playVideo}>
          <source src={video || '/defaultVideo.mp4'} type="video/mp4" />
        </video>
        <Image
          onClick={playVideo}
          src={playIcon}
          alt="play icon"
          className={isPlaying ? styles.playIconNone : styles.playIcon}
        />
      </figure>
      <p className={`p2 ${styles.title}`}>
        {title}
      </p>
    </li>
  );
};

export default FeedbackVideo;
