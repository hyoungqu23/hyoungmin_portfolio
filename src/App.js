import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLink, faHammer } from '@fortawesome/free-solid-svg-icons';

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
          return (
            <div>
              <FontAwesomeIcon icon={faHammer} className="icon" />
              <h3>{adv}</h3>
            </div>
          );
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

const Introduction = () => {
  return (
    <section>
      <div className="introduction-img" style={{ width: '50%', height: '50%' }}>
        <img src="img/img.svg" alt="" />
      </div>
      <div className="introduction-desc">
        <ul>
          <li>
            실제로 무엇인가를 만들면서 즐거움을 느끼는 일을 업으로 하고자 찾아
            헤맸습니다. 다양한 시행착오를 거쳐 결국 웹 개발을 시작했습니다. 팀
            프로젝트와 여러 사이드 프로젝트를 진행하며 내 손으로 무엇인가를
            만든다는 점 그 자체가 행복했습니다.
          </li>
          <li>
            UI/UX 개선에 우선순위를 두고 있습니다. 내가 스스로 행복하고 즐기며
            만든 서비스가 다른 사람을 행복하게 해주고 즐기며 활용할 수 있도록
            노력하고 있습니다.
          </li>
          <li>
            상대방의 언어로 소통하는 것을 즐깁니다. 하나의 팀으로 일할 때
            상대방과의 소통으로 협업 능률을 높입니다.
          </li>
          <li>
            다양한 Tool를 활용하는 것을 즐겨 새로운 Tool 사용법을 빠르게
            익힙니다.
          </li>
        </ul>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Introduction />
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
