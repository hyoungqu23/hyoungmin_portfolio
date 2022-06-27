import styled from 'styled-components';

import Container from '../styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
  const skilllists = [
    {
      title: 'HTML5',
      level: 5,
      descriptions: [
        'Semantic Web을 다룹니다.',
        'HTML Form을 JavaScript와 함께 활용할 수 있습니다.',
      ],
      icon: faHtml5,
    },
    {
      title: 'CSS3',
      level: 7,
      descriptions: [
        '반응형 웹 디자인을 만들 수 있습니다.',
        '자연스러운 애니메이션을 구현할 수 있습니다.',
      ],
      icon: faCss3,
    },
    {
      title: 'JavaScript',
      level: 4,
      descriptions: [
        'ES6 문법을 이해하고, 활용할 수 있습니다.',
        '함수형 프로그래밍 방식을 통해 개발할 수 있습니다.',
        '배열과 객체의 다양한 메서드를 활용할 수 있습니다.',
        'Promise 패턴과 async/await 패턴을 활용할 수 있습니다.',
        'REST api를 이해하고 있습니다.',
      ],
      icon: faJs,
    },
    {
      title: 'React.js',
      level: 4,
      descriptions: [
        '기본적인 Components와 Props를 구현할 수 있습니다.',
        'Hooks에 대해 이해하고 있습니다.',
        'useState, Context API를 통해 상태를 관리할 수 있습니다.',
      ],
      icon: faReact,
    },
  ];

  return (
    <section id="skill">
      <Container className="flex center">
        <StyledSkillContainer>
          {skilllists.map(({ title, level, descriptions, icon }) => {
            return (
              <div className="skill">
                <h3>{title}</h3>
                <FontAwesomeIcon icon={icon} className="icon" />
                <div className="descriptions">
                  {descriptions.map((description, index) => {
                    return <div key={index}>{description}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </StyledSkillContainer>
      </Container>
    </section>
  );
};

const StyledSkillContainer = styled.div`
  display: grid;

  padding-top: 2em;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1em;

  & .skill {
    height: 40vh;
  }

  & .icon {
    font-size: 4em;
  }

  & h3 {
    font-size: 2em;
  }
`;
