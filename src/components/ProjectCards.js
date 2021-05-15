import React from 'react';
import styled from 'styled-components';
import thumbnail from '../images/thumbnail.png';

const StyledSection = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  max-width: 400px;
  margin: auto;

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: none;
  }
`;

const StyledDetails = styled.div`
  flex-basis: 60%;
  margin-top: 1rem;
  padding: 0 1.25rem 1.25rem;
  order: 1;
`;

const StyledTitle = styled.div`
  margin-top: 0.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.headingText};
`;

const StyledCategory = styled.div`
  font-weight: 700;
  color: #737373;
`;

const StyledDescription = styled.p`
  margin-top: 0;
`;

const StyledViewProject = styled.span`
  display: block;
  text-align: right;
  font-size: 0.9rem;
  font-weight: 700;
  color: #007d99;
`;

const StyledViewProjectArrow = styled.svg`
  position: relative;
  top: 6px;
  width: 1.25rem;
  transform: translateX(-2px);
  transition: transform 0.2s ease-in-out;
`;

const StyledGraphics = styled.div`
  position: relative;
  overflow: hidden;
  flex-basis: 40%;
  text-align: center;
`;

const StyledSVGBlob = styled.svg`
  position: absolute;
  top: -15rem;
  right: -13rem;
  width: 46rem;
  fill: ${(props) => props.fillColor};

  @media (min-width: 460px) {
    top: -26rem;
  }

  @media (min-width: 852px) {
    right: -9rem;
  }
`;

const StyledImage = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
  margin-top: 1rem;
`;

const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  text-decoration: none;
  font-weight: 700;
  color: ${(props) => props.theme.colors.bodyText};
  transition: box-shadow 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 10px 20px rgb(0 0 0 / 15%), 0 6px 6px rgb(0 0 0 / 20%);
    text-decoration: none;

    ${StyledViewProject} {
      text-decoration: underline;
    }

    ${StyledViewProjectArrow} {
      transform: translateX(1px);
    }
  }
`;

const ProjectCards = ({ projects }) => {
  return (
    <StyledSection>
      {projects.map((project, index) => (
        <StyledCard key={index} href={project.link}>
          <StyledDetails>
            <StyledCategory>{project.category}</StyledCategory>
            <StyledTitle>{project.title}</StyledTitle>
            <StyledDescription>{project.description}</StyledDescription>
            <StyledViewProject>
              View Project
              <StyledViewProjectArrow
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 24 24"
              >
                <path
                  d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"
                  fill="#007d99"
                ></path>
              </StyledViewProjectArrow>
            </StyledViewProject>
          </StyledDetails>
          <StyledGraphics>
            <StyledImage width="400" src={thumbnail} alt="" />
            <StyledSVGBlob
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              fillColor={project.cardColor}
            >
              <g transform="translate(300,300)">
                <path d="M118.5,-181.9C155.2,-160.8,187.7,-130.7,203,-93.7C218.4,-56.7,216.6,-12.9,217.2,36.1C217.8,85.2,220.7,139.5,196.7,174.4C172.6,209.2,121.5,224.5,72.2,233.2C22.9,241.8,-24.6,243.7,-70.7,233.5C-116.9,223.3,-161.6,201.1,-192,166.2C-222.3,131.4,-238.4,84,-241.7,36.9C-245.1,-10.1,-235.8,-56.8,-217.2,-99.9C-198.6,-143,-170.7,-182.5,-132.9,-203.1C-95.2,-223.7,-47.6,-225.4,-3.3,-220.2C40.9,-215,81.8,-203,118.5,-181.9Z"></path>
              </g>
            </StyledSVGBlob>
          </StyledGraphics>
        </StyledCard>
      ))}
    </StyledSection>
  );
};

export default ProjectCards;
