import React, { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";

interface OwnProps {
  children: ReactNode;
}
const Layout: React.FC<OwnProps> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
z-index:1;
`;
