import styled from 'styled-components';

interface Props {
  url: string;
}

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${(props: Props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: all 0.3s ease-out;
  &:hover,
  &:focus {
    transform: scale(1.2);
    margin: 0 40px;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  & span {
    font-size: 10px;
    position: absolute;
    top: 0;
  }
`;
