import React, { useEffect, useState, ReactElement } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel, { Category } from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import BaseTemplate from '../../components/BaseTemplate';

const Home = (): ReactElement => {
  const [initialData, setInitialData] = useState([
    {
      id: 99999,
      name: '',
      color: '',
      link_extra: {
        text: '',
        url: '',
      },
      videos: [
        {
          id: 99999,
          title: '',
          url: '',
          categoriaId: 99999,
        },
      ],
    },
  ] as Category[]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos().then((categoriesWithVideos) => {
      setInitialData(categoriesWithVideos);
      console.log(categoriesWithVideos);
    });
  }, []);

  return (
    <BaseTemplate>
      <BannerMain
        videoTitle={initialData[0].videos[0].title}
        url={initialData[0].videos[0].url}
        videoDescription={'Afinal, o que é React? Descubra neste vídeo.'}
      />
      {initialData.map((category, index) => {
        const ignoreFirstVideo = index === 0;
        const hasVideos = category.videos.length > 0;
        if (hasVideos) return <Carousel key={category.id} ignoreFirstVideo={ignoreFirstVideo} category={category} />;
      })}
    </BaseTemplate>
  );
};

export default Home;
