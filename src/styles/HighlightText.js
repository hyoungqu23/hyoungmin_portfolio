import React from 'react';
import styled from 'styled-components';

export const HighlightText = styled.span`
  font-weight: bold;
  overflow: hidden;

  &:hover {
    border-bottom: 5px solid #8af;
    transition: all linear 0.2s;
  }
`;
