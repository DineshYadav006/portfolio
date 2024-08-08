import React, { useState } from "react";
import styled from "styled-components";
import { project } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 32px;
    font-size: 32px;
  }
  @media (max-width: 640px) {
    margin-top: 32px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 12px;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectCard = styled.div`
  width: 330px;
  height: 500px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 60px 20px;
  margin: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 10px;
  font-size: 16px;
  width: 100%;
  max-width: 150px;
  margin: auto;
  font-weight: 500;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  text-decoration: none;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? project
      : project.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Container id="Project">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </Desc>

          <ToggleButtonGroup>
            <ToggleButton
              active={selectedCategory === "all"}
              onClick={() => handleCategoryChange("all")}
            >
              All
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={selectedCategory === "Development"}
              onClick={() => handleCategoryChange("Development")}
            >
              Development
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={selectedCategory === "UI/UX Designs"}
              onClick={() => handleCategoryChange("UI/UX Designs")}
            >
              UI/UX Designs
            </ToggleButton>
          </ToggleButtonGroup>

          <CardContainer>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id}>
                <Image src={project.image} alt={project.title} />
                <Tags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <Details>
                  <Name>{project.title}</Name>
                  <Description>{project.description}</Description>
                </Details>
                <LinkButton href={project.link} target="_blank">
                  View Live App
                </LinkButton>
              </ProjectCard>
            ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Project;
