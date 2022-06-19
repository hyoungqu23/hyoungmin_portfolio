import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          😎 Hyoungmin
        </a>
        <ul id="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Introduction</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Education</a>
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;

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
