import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  const advs = [
    '긍정적인 영향력을 확장시키는 서비스를 만드는',
    '사용자의 편의성을 향상시키는 UI를 만들어 UX를 개선하는',
    '문제에 직면했을 때 회피하지 않는',
    '배움과 경험을 통해 단순한 기능 구현이 아닌 서비스 전체에 비즈니스 로직을 투영하는',
  ];

  return (
    <section id="about">
      <div className="flex center">
        <div>
          {advs.map((adv, index) => {
            return (
              <StyledListWrapper>
                <FontAwesomeIcon icon={faHammer} className="icon" />
                <li key={index}>{adv}</li>
              </StyledListWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const StyledListWrapper = styled.ul`
  display: flex;
  margin-bottom: 1em;

  font-size: 1.5em;

  & .icon {
    margin-right: 1em;
  }
`;
