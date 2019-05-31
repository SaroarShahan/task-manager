import React, { useState, useRef } from "react";
import { MdMoreVert } from "react-icons/md";
import styled from "styled-components";

interface IProps {
  isMenuHide?: boolean;
  setIsMenuHide?: React.ReactNode;
  children?: React.ReactNode;
}

const Menu: React.FC<IProps> = ({ children }) => {
  const [isMenu, setIsMenu] = useState(false);
  let dropdownMenu = useRef<HTMLDivElement>(null);

  const showMenu = (): void => {
    setIsMenu(!isMenu);
    document.addEventListener("click", closeMenu);
  };

  const closeMenu = (e: any): void => {
    if (dropdownMenu.current && !dropdownMenu.current.contains(e.target)) {
      setIsMenu(false);
      document.removeEventListener("click", closeMenu);
    }
  };

  return (
    <Wrapper ref={dropdownMenu}>
      <Button onClick={showMenu}>
        <MdMoreVert />
      </Button>

      {isMenu && <MenuWrapper>{children}</MenuWrapper>}
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 100%;
  width: 10.8rem;
  background-color: #fff;
  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);
  z-index: 11;
`;
