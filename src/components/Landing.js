import React from 'react';
import styled from 'styled-components';
import logo from '../images/landing-img.svg';

const StyledLanding = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto 5rem auto;
`;

const StyledTitle = styled.h1`
  margin-bottom: 0.75rem;
  font-size: 3.052rem;
  line-height: 1.1;
  color: ${(props) => props.theme.colors.secondary};
`;

const StyledSubtitle = styled.p`
  margin-top: 0;
  font-size: 1.25rem;
  font-weight: 400;
`;

const StyledLandingImage = styled.img`
  display: none;
  width: 35%;

  @media (min-width: 852px) {
    display: block;
  }
`;

const Landing = () => {
  return (
    <StyledLanding>
      <div>
        <StyledTitle>Hi, I'm Raymond Lee</StyledTitle>
        <StyledSubtitle>
          A web developer building accessible experiences.
        </StyledSubtitle>
      </div>
      <StyledLandingImage src={logo} alt="" />
    </StyledLanding>
  );
};

export default Landing;
