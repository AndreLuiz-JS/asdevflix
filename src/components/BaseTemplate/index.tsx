import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode;
}

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0;
`;

const BaseTemplate = ({ children }: Props): ReactElement => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
