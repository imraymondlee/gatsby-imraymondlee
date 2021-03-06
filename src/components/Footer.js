import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`

`;

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 3rem 1rem 1rem;
  border-top: 2px solid #d4d4d4;
  padding-top: 2rem;
  text-align: center;

  @media (min-width: 852px) {
    flex-direction: row;
    max-width: 1000px;
    margin: 3rem auto 0 auto;
    text-align: left;
  }
`;

const StyledFooterSource = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.7rem;

  a {
    color: ${(props) => props.theme.colors.lightText};
  }
`;

const StyledItem = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
`;

const StyledLinkWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  @media (min-width: 852px) {
    margin-right: 1.25rem;
    margin-left: 0;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.lightText};
  fill: ${(props) => props.theme.colors.lightText};

  span {
    vertical-align: middle;
    margin-left: 0.125rem;
    font-size: 0.9rem;
  }

  svg {
    vertical-align: middle;
    width: 1.25rem;
  }
`;

const Header = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledItem>
          <StyledLabel>Contact</StyledLabel>
          <StyledLinkWrapper>
            <StyledLink href="mailto:imleeraymond@gmail.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
              </svg>
              <span>imleeraymond@gmail.com</span>
            </StyledLink>
          </StyledLinkWrapper>
        </StyledItem>
        <StyledItem>
          <StyledLabel>Find Me</StyledLabel>
          <StyledLinkWrapper>
            <StyledLink href="https://github.com/imraymondlee" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
              <span>GitHub</span>
            </StyledLink>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <StyledLink
              href="https://www.linkedin.com/in/imraymondlee/"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
              </svg>
              <span>LinkedIn</span>
            </StyledLink>
          </StyledLinkWrapper>
        </StyledItem>
      </StyledFooterContainer>
      <StyledFooterSource>
        <a href="https://github.com/imraymondlee/gatsby-imraymondlee" target="_blank" rel="noreferrer"><span role="img" aria-label="Hammer and wrench">???????</span> Handcrafted with Gatsby</a>
      </StyledFooterSource>
    </StyledFooter>
  );
};

export default Header;
