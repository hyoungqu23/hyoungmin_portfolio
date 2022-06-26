import styled from 'styled-components';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          😎 Hyoungmin
        </a>
        <ul id="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  background-color: #8af;

  font-size: 1.25em;
  font-weight: bold;

  & .nav-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }

  & ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
`;
