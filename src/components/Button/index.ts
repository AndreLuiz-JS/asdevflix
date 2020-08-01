import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  background: transparent;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const ButtonChangePage = styled(Button)`
  border: none;
`;

const ButtonDelete = styled(Button)`
  color: var(--color-warning);
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
`;

export { Button, ButtonChangePage, ButtonDelete };
