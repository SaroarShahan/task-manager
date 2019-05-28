import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      Copyright &copy; {new Date().getFullYear()}. Designed & Developed by{" "}
      <a href="https://github.com/SaroarShahan">Saroar Shahan</a>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;
