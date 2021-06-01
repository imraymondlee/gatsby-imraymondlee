import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 3.052rem;
`;

const StyledDescription = styled.p`
  margin: 0;
`;

const StyledLinkArrow = styled.svg`
  position: relative;
  top: 6px;
  width: 1.25rem;
  transform: translateX(-2px);
  transition: transform 0.2s ease-in-out;
`;

const StyledLink = styled(Link)`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;

    ${StyledLinkArrow} {
      transform: translateX(1px);
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <StyledSection>
        <StyledTitle>Oops!</StyledTitle>
        <StyledDescription>
          We can't seem to find the page you're looking for.
        </StyledDescription>
        <StyledLink to="/">
          Return Home
          <StyledLinkArrow
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 24 24"
          >
            <path
              d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"
              fill="#007d99"
            ></path>
          </StyledLinkArrow>
        </StyledLink>
      </StyledSection>
    </Layout>
  );
};

export default NotFoundPage;
