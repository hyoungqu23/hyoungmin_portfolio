import React from 'react';
import styled from 'styled-components';
import myProfile from '../assets/img/profile.png';
import StyledCardWrapper from '../styles/CardWrapper';

export const Home = () => {
  return (
    <section id="home">
      <div className="flex center">
        <StyledCardWrapper className="flex center">
          <StyledImgWrapper>
            <img src={myProfile} alt="profile" />
          </StyledImgWrapper>
          <h1>안녕하세요. 프론트엔드 개발자 이형민입니다.</h1>
        </StyledCardWrapper>
      </div>
    </section>
  );
};

const StyledImgWrapper = styled.div`
  width: 30%;
  height: 50%;

  & img {
    width: 75%;
  }
`;
