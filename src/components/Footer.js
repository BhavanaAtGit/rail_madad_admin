import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Your Company Name</p>
    </FooterContainer>
  );
};

export default Footer;