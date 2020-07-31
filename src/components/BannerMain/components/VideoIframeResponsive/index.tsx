import React, { ReactElement } from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

interface Props {
  youtubeID: string;
}

function YouTubeIframeResponsive(props: Props): ReactElement {
  const { youtubeID } = props || '';
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
