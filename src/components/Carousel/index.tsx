import React, { ReactElement } from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

export interface Video {
  id: number;
  categoriaId: number;
  title: string;
  url: string;
}

interface LinkExtra {
  url: string;
  text: string;
}

export interface Category {
  id: number;
  name: string;
  color: string;
  link_extra?: LinkExtra;
  videos: Video[];
}

interface Props {
  ignoreFirstVideo?: boolean;
  category: Category;
}

function VideoCardGroup(props: Props): ReactElement {
  const { ignoreFirstVideo, category } = props || false;

  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider arrowColor={categoryColor || 'white'}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard videoTitle={video.title} videoURL={video.url} categoryColor={categoryColor} />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
