import styled from 'styled-components';
import { Parallax } from 'react-parallax';

const NavBar = () => {
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

// const Container = () => (
//   <Parallax
//     blur={10}
//     bgImage="path/to/image.jpg"
//     bgImageAlt="the cat"
//     strength={200}
//     style={{
//       height: '50vh',
//       backgroundColor: '#ddd222',
//       border: '1px solid black',
//     }}
//   >
//     Content goes here. Parallax height grows with content height.
//   </Parallax>
// );

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
