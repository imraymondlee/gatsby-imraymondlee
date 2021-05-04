import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Nav = () => {
  return (
    <nav>
      <StyledNavList>
        <NavItem type="anchor" path="/#projects" text="Projects" />
        <NavItem type="link" path="/about/" text="About" />
        <NavItem type="anchor" path="/LeeRaymondResume.pdf" text="Resume" />
      </StyledNavList>
    </nav>
  );
};

export default Nav;
