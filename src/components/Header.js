import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="" alt="Raymond Lee" class="nav__logo" />
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
