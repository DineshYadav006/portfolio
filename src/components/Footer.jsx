import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../data/constants";
import logo from "../images/personal-logo.png";
import { Link as LinkR } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgLight};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 10px;

  @media (max-width: 640px) {
    padding: 0 0px;
    margin-right: 130px;
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

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  cursor: pointer;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLogo to="/">
          <Img src={logo} alt="logo" />
          <Span>Dinesh Yadav</Span>
        </NavLogo>
        <Nav>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Skills">Skills</NavLink>
          <NavLink to="/Project">Projects</NavLink>
          <NavLink to="/Education">Education</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Dinesh Yadav. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
