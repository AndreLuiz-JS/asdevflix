import React, { ReactElement } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  ContentAreaContainerItem,
  ContentAreaContainerTitle,
  ContentAreaContainerDescription,
  WatchButton,
} from './styles';

interface Props {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

function getYouTubeId(youtubeURL: string): string {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

export default function BannerMain(props: Props): ReactElement {
  const { videoTitle, videoDescription, url } = props || '';
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainerItem>
          <ContentAreaContainerTitle>{videoTitle}</ContentAreaContainerTitle>

          <ContentAreaContainerDescription>{videoDescription}</ContentAreaContainerDescription>
        </ContentAreaContainerItem>

        <ContentAreaContainerItem>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainerItem>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
