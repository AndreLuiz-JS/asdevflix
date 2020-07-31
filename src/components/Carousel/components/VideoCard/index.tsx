import React from 'react';
import { VideoCardContainer } from './styles';

interface Props {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

function VideoCard(props: Props) {
  const { videoTitle, videoURL, categoryColor } = props || '';
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <span>{videoTitle}</span>
    </VideoCardContainer>
  );
}

export default VideoCard;
