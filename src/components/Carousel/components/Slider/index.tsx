/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

interface SliderProps {
  children: React.ReactNode;
  arrowColor: string;
}

interface ContainerProps {
  arrowColor: string;
}

const Container = styled.ul`
  padding: 0;
  margin: 0 -5vw 0;
  overflow: visible;
  .slick-prev,
  .slick-next {
    z-index: 1;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 100%;
    transform: initial;
    &:before {
      transition: all 0.3s;
      font-size: 30px;
      color: ${(props: ContainerProps) => props.arrowColor};
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 250%;
      height: 120%;
      border-radius: 50%;
      pointer-events: none;
      background-repeat: no-repeat;
      background-image: radial-gradient(#000000ff, #000000bb, #00000000, #00000000, #00000000);
    }
  }

  .slick-prev:hover:not(.slick-disabled),
  .slick-next:hover:not(.slick-disabled) {
    &:before {
      font-size: 45px;
    }
  }
  .slick-prev {
    left: 0;

    &:before {
      margin-right: 10px;
    }
    &:after {
      transform: scale(2) translate(-45px, 13px);
    }
  }
  .slick-next {
    right: 0;
    &:before {
      margin-left: 10px;
    }
    &:after {
      transform: scale(2) translateY(13px);
    }
  }
  .slick-track {
    display: inline-flex;
    overflow: hidden;
    height: 242px;
    min-width: 100vw;

    .slick-slide:last-child {
      transition: all 0.3s ease-out;
      &:hover {
        transform: scale(1.2) translate(-60px, 20px);
        opacity: 1 !important;
      }
    }
    .slick-slide:first-child {
      transition: all 0.3s ease-out;
      &:hover {
        transform: scale(1.2) translate(60px, 20px);
        opacity: 1 !important;
        z-index:1;
      }
    }

    .slick-slide:not(:last-child):not(:first-child) {
      transition: all 0.3s ease-out;
      &:hover {
        transform: scale(1.2) translateY(20px);
        opacity: 1 !important;
        z-index: 1;
      }
    }

`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, arrowColor }: SliderProps): ReactElement => (
  <Container arrowColor={arrowColor}>
    <SlickSlider
      {...{
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
