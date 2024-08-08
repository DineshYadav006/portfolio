import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import MenuRounded from "@mui/icons-material/MenuRounded";
import logo from "../images/personal-logo.png";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  max-width: 1200px;
  padding: 0 24px;
  z-index: 1;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  width: 62%;
  gap: 10px;

  @media (max-width: 640px) {
    padding: 0 0px;
    margin-right: 130px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 0 6px;
  list-style: none;
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px 40px 25px 40px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  gap: 20px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 35px;
  max-height: 35px;
  @media (max-width: 640px) {
    max-width: 45px;
    max-height: 45px;
  }
`;

const Span = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 640px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Img src={logo} alt="logo" />
          <Span>Dinesh Yadav</Span>
        </NavLogo>
        <NavItems>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Skills">Skills</NavLink>
          <NavLink to="/Project">Projects</NavLink>
          <NavLink to="/Education">Education</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </NavItems>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <MobileMenu isOpen={isOpen}>
          <MobileLink to="/About">About</MobileLink>
          <MobileLink to="/Skills">Skills</MobileLink>
          <MobileLink to="/Education">Education</MobileLink>
          <MobileLink to="/Project">Projects</MobileLink>
          <MobileLink to="/Contact">Contact</MobileLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};
