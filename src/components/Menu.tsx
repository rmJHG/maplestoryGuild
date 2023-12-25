import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { menuState } from "../store/Menu";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(menuState);
  const menuChangeStateFn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <>
          <Container>
            <button onClick={menuChangeStateFn}>X</button>
            <ul>
              <Link to="/recommend">추천길드</Link>
              <li>비매너 유저</li>
              <li>길드 홍보</li>
            </ul>
          </Container>

          <MenuBackground onClick={menuChangeStateFn} />
        </>
      )}
    </>
  );
};

export default Menu;

const Container = styled.div`
  min-width: 200px;
  width: 50%;
  height: 100%;
  text-align: center;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #004080;

  color: white;
  z-index: 99;
  animation: fadeInRight 0.5s;
  @keyframes fadeInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const MenuBackground = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: gray;
  z-index: 97;
`;
