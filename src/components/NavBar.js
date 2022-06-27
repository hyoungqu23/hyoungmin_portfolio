import styled from 'styled-components';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="nav-wrapper">
        <ul id="nav-list">
          <li>Home</li>
          <li>Introduction</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
        </ul>
        <div className="nav-date">2022-06-27 07:30AM</div>
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 24px;
  opacity: 0.75;
  z-index: 10000;
  color: #000;

  & .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
  }

  & #nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 1em;

    height: 24px;
  }

  & .nav-date {
    display: flex;
    align-items: center;
    height: 24px;
  }
`;
