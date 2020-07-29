import React from 'react';
import BaseTemplate from '../../components/BaseTemplate';
import SnakeGame from '../../components/SnakeGame';

import Button from '../../components/Button';

import { Title, Paragraph } from './style';

const Page404 = () => {
  return (
    <BaseTemplate>
      <Title>
        Não encontrei a página <span>{window.location.href}</span>, mas achei esse game em fase beta, bem legal, não?
      </Title>
      <Paragraph>Pra testar só segurar o click do mouse na aréa abaixo e arrastar para qualquer direção.</Paragraph>
      <SnakeGame />
      <Paragraph>
        Projeto original no github:{' '}
        <Button as="a" href="https://github.com/bibhuticoder/snake.io" target="_blank" rel="noopener noreferrer">
          bibhuticoder
        </Button>
      </Paragraph>
      <Paragraph>
        Esta versão no github:{' '}
        <Button as="a" href="https://github.com/AndreLuiz-JS/snake.io" target="_blank" rel="noopener noreferrer">
          AndreLuiz-JS
        </Button>
      </Paragraph>
    </BaseTemplate>
  );
};

export default Page404;
