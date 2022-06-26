import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>Copyright 2022. Hyoungmin. All rights reserved.</div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  padding-top: 15px;

  text-align: center;
  background-color: #8af;

  & > div {
    width: 100%;
  }
`;
