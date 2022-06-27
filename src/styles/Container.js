import styled from 'styled-components';

import React from 'react';

const Container = ({ children }) => {
  return (
    <StyledContainer>
      <div className="title-bar">
        <div className="title-color">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>
      </div>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  width: 95%;

  margin: 3em auto;

  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15))
    drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));

  & .title-color {
    position: absolute;
    width: 52px;
    height: 12px;
    left: 8px;
    top: 8px;
  }

  & .circle {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0px;
    border-radius: 50%;

    border: 0.5px solid rgba(0, 0, 0, 0.12);
  }

  & .red {
    left: 0px;

    background: #ec6a5e;
  }

  & .yellow {
    left: 20px;
    background: #f5bf4f;
  }

  & .green {
    left: 40px;
    background: #61c554;
  }
`;
