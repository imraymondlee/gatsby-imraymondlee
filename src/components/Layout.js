import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007d99',
    secondary: '#d62e00',
    headingText: '#181a1b',
    bodyText: '#4a4a4a',
    lightText: '#737373',
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  body {
    background-color: #f8f9fc;
    color: ${(props) => props.theme.colors.bodyText};
    font-family: "Lato", sans-serif;
    line-height: 1.8;
  }

  a {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:active, :focus, :hover {
      text-decoration: underline;
    }
  }
`;

const StyledMain = styled.main`
  max-width: ${(props) => (props.projectPage ? '690px' : '1000px')};
  margin: auto;
  padding: 0.5rem;
`;

const Layout = ({ children, projectPage }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledMain projectPage={projectPage}>{children}</StyledMain>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
