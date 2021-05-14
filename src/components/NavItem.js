import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.bodyText};
`;

const StyledAnchor = styled.a`
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.bodyText};
`;

const NavItem = ({ type, path, text }) => {
  return (
    <StyledNavItem>
      {type === 'link' ? (
        <StyledLink to={path}>{text}</StyledLink>
      ) : (
        <StyledAnchor href={path}>{text}</StyledAnchor>
      )}
    </StyledNavItem>
  );
};

export default NavItem;
