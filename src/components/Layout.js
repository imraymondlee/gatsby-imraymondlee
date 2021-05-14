import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007d99',
    secondary: '#d62e00',
    headingText: '#181a1b',
    bodyText: '#4a4a4a',
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  body {
    background-color: #f8f9fc;
    color: ${(props) => props.theme.colors.bodyText};
    line-height: 1.8;
  }
`;

const StyledMain = styled.main`
  max-width: 1000px;
  margin: auto;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
    </ThemeProvider>
  );
};

export default Layout;
