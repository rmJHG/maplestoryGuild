import React from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../store/Menu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "../assets/images/icons8-menu-20.svg";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(menuState);

  const menuControlFn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">
          <p>길드모아</p>
        </Link>
      </HeaderWrapper>
      <MenuBtn onClick={menuControlFn}>
        <img src={MenuIcon} />
      </MenuBtn>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004080;
`;

const HeaderWrapper = styled.div`
  a > P {
    font-family: SunflowerMedium;
  }
`;
const MenuBtn = styled.div``;
