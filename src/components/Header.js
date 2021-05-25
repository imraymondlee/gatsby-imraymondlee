import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';
import logo from '../images/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 1.75rem auto;
  padding: 0.5rem;
`;

const StyledLogo = styled.img`
  width: 3rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="Raymond Lee" />
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
