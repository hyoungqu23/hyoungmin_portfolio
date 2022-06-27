import styled from 'styled-components';

import Container from '../styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  const skilllists = [
    {
      title: 'HTML5',
      level: 5,
      description:
        'Semantic Web을 다룹니다. HTML Form을 JavaScript와 함께 활용할 수 있습니다.',
      icon: faLink,
    },
    {
      title: 'CSS3',
      level: 7,
      description:
        '반응형 웹 디자인을 만들 수 있습니다. 자연스러운 애니메이션을 구현할 수 있습니다.',
      icon: faLink,
    },
    {
      title: 'JavaScript',
      level: 4,
      description: '설명',
      icon: faLink,
    },
    {
      title: 'React.js',
      level: 4,
      description: '설명',
      icon: faLink,
    },
  ];

  return (
    <Container>
      <div className="flex center">
        {skilllists.map(({ title, level, description, icon }) => {
          return (
            <div key={title} className="flex center">
              <FontAwesomeIcon icon={icon} className="icon" />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
