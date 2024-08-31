import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #1976d2;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;

    &:hover {
      color: #1976d2;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Dashboard</Logo>
      <NavLinks>
        <a href="#profile">Profile</a>
        <a href="#logout">Logout</a>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;