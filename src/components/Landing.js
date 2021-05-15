import React from 'react';
import styled from 'styled-components';
import logo from '../images/landing-img.svg';

const StyledLanding = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
`;

const StyledTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 3.052rem;
  color: #d62e00;
`;

const StyledSubtitle = styled.p`
  margin-top: 0;
  font-size: 1.25rem;
  font-weight: 400;
`;

const StyledLandingImage = styled.img`
  width: 35%;
`;

const Landing = () => {
  return (
    <StyledLanding>
      <div>
        <StyledTitle>Title Here</StyledTitle>
        <StyledSubtitle>Subtitle Here</StyledSubtitle>
      </div>
      <StyledLandingImage src={logo} alt="" />
    </StyledLanding>
  );
};

export default Landing;
