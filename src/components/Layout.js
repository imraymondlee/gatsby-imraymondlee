import React from 'react';
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

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
