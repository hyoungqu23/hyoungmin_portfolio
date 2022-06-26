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
  const advs = [
    '긍정적인 영향력을 확장시키는 서비스를 만드는',
    '사용자의 편의성을 향상시키는 UI를 만들어 UX를 개선하는',
    '문제에 직면했을 때 회피하지 않는',
  ];

  return (
    <section>
      <div>
        {advs.map((adv) => {
          return <h3>{adv}</h3>;
        })}
        <TypeAnimation
          cursor={false}
          sequence={['프론트엔드 개발자 이형민입니다.', 3000]}
          wrapper="h1"
          repeat={Infinity}
        />
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
