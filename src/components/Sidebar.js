import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Dashboard, BugReport, Business, Settings } from '@mui/icons-material';

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #121212;
  position: fixed;
  top: 60px;
  left: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const SidebarLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: 15px 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #1976d2;
  }

  &.active {
    background-color: #1976d2;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 15px 10px;
  }

  svg {
    margin-right: 10px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">
        <Dashboard /> <span>Overview</span>
      </SidebarLink>
      <SidebarLink to="/grievances">
        <BugReport /> <span>Grievances</span>
      </SidebarLink>
      <SidebarLink to="/departments">
        <Business /> <span>Departments</span>
      </SidebarLink>
      <SidebarLink to="/settings">
        <Settings /> <span>Settings</span>
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;