import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  margin: 0 0.75rem;
  padding-bottom: 0.125rem;
  text-decoration: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.bodyText};

  &.pageActive {
    color: ${(props) => props.theme.colors.bodyText};
    border-bottom: 3px solid #007d99;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    border-bottom: 3px solid #007d99;
  }
`;

const StyledAnchor = styled.a`
  margin: 0 0.75rem;
  padding-bottom: 0.125rem;
  text-decoration: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.bodyText};

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    border-bottom: 3px solid #007d99;
  }
`;

const NavItem = ({ type, path, text }) => {
  return (
    <StyledNavItem>
      {type === 'link' ? (
        <StyledLink to={path} activeClassName="pageActive">
          {text}
        </StyledLink>
      ) : (
        <StyledAnchor href={path} target="_blank" rel="noreferrer">
          {text}
        </StyledAnchor>
      )}
    </StyledNavItem>
  );
};

export default NavItem;
