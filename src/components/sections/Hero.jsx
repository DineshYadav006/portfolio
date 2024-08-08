import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import img from "../../images/portfolio.webp";
import { Tilt } from "react-tilt";

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 60px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 10px;
  }
`;
const Textloop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const Subtitle = styled.div`
  color: ${({ theme }) => theme.text_secondary + 95};
  line-height: 32px;
  font-size: 20px;
  margin-bottom: 42px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const Resume = styled.a`
  padding: 16px 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  max-width: 300px;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  background-image: linear-gradient(
    109.6deg,
    rgba(228, 107, 232, 1) 11.2%,
    rgba(87, 27, 226, 1) 96.7%
  );
  cursor: pointer;

  @media (max-width: 640px) {
    padding: 12px 0px;
    font-size: 18px;
  }
  &:hover {
    transform: scale(1.05);
    translate: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }
`;

const HeroRightContainer = styled.div`
  order: 2;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 960px) {
    width: 300px;
    order: 1;
    padding: 0 0 40px 0;
  }
  @media (max-width: 640px) {
    order: 1;
    width: 260px;
    order: 1;
    padding: 0 0 40px 0;
  }
`;
const Img = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 50px rgba(133, 76, 230, 1);

  &:hover {
    border: 2px solid rgba(228, 107, 232, 1);
    box-shadow: 0px 0px 50px rgba(228, 107, 232, 1);
  }

  @media (max-width: 960px) {
    order: 1;
  }
  @media (max-width: 640px) {
    order: 1;
  }
`;

function Hero() {
  return (
    <>
      <HeroContainer id="About">
        <HeroInnerContainer>
          <HeroLeftContainer id="left">
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <Textloop>
              I am a
              <Span>
                <Typewriter
                  options={{ strings: Bio.roles, autoStart: true, loop: true }}
                />
              </Span>
            </Textloop>
            <Subtitle>{Bio.description}</Subtitle>
            <Resume href={Bio.resume} target="display">
              Check Resume
            </Resume>
          </HeroLeftContainer>

          <HeroRightContainer>
            <Tilt>
              <Img src={img} alt="img" />
            </Tilt>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </>
  );
}

export default Hero;
