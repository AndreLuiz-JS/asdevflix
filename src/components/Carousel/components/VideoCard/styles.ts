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
  display: inline-flex;
  align-items: flex-end;
  padding: 16px;
  margin: 0 5%;

  &:not(:first-child) {
    margin-left: 20px;
  }

  & span {
    font-size: 10px;
    position: absolute;
    top: 0;
  }
`;
