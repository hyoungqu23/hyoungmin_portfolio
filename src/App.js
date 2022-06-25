import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const About = () => {
  return (
    <section>
      <div>
        <img src="./profile.png" alt="ProfileImage" />
        <TypeAnimation
          cursor={false}
          sequence={['Frontend Developer Hyoungmin', 2000]}
          wrapper="h1"
          repeat={Infinity}
        />
        <p>UX 개선과 비즈니스 로직에 관심이 많은 개발자 이형민입니다.</p>
        <FontAwesomeIcon icon="fa-brands fa-google" />
        {/* <a href="mailto:hyoungqu23@gmail.com"></a> */}
        <FontAwesomeIcon icon="fa-regular fa-clipboard" />
        {/* <a href="https://hyoungqu23.github.io/"></a> */}
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
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
