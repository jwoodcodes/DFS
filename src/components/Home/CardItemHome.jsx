import React, { useState } from 'react';
import styled from 'styled-components';

const CardItemHome = props => {
  return (
    <NavItemHome>
      <HomeLink href="/"> {props.text}</HomeLink>
    </NavItemHome>
  );
};

const HomeLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const NavItemHome = styled.li`
  color: #fff;
  font-size: 1.75rem;
  padding: 0.3rem;

  cursor: default;
  list-style-type: none;

  :hover {
    transform: scale(1.125);
    box-shadow: 3.5px 5.5px 5.5px rgba(#000, 0.6);
    font-weight: 500;
  }
`;

export default CardItemHome;
