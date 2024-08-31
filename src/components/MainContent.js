import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-top: 60px;
  margin-left: 240px;
  padding: 20px;
  background-color: #181818;
  min-height: calc(100vh - 120px);
  color: #ffffff;

  @media (max-width: 768px) {
    margin-left: 60px;
  }
`;

const MainContent = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainContent;