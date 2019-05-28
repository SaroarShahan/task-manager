import React from "react";
import styled from "styled-components";

const Header: React.FC = ({ children }) => {
  return (
    <>
      <HeaderWrap>
        <Logo>Task Manager</Logo>
      </HeaderWrap>
      <MainWrap>{children}</MainWrap>
    </>
  );
};

export default Header;

const HeaderWrap = styled.div`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #4a3fb3;
  margin-bottom: 0;
  cursor: pointer;
`;

const MainWrap = styled.main`
  padding: 2rem;
  min-height: calc(100vh - 11.6rem);
`;
