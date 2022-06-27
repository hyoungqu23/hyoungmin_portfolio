import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { HighlightText } from '../styles/HighlightText';
import Container from '../styles/Container';

export const Introduction = () => {
  return (
    <Container id="introduction">
      <div className="flex center">
        <StyledList>
          <li>
            <FontAwesomeIcon icon={faHammer} className="icon" />
            실제로 무엇인가를 만들면서 즐거움을 느끼는 일을 업으로 하고자 찾아
            헤맸습니다. 다양한 시행착오를 거쳐 결국 프론트엔드 웹 개발을
            시작했습니다.팀 프로젝트와 여러 사이드 프로젝트를 진행하며{' '}
            <HighlightText>내 손으로 무엇인가를 만든다는 점</HighlightText> 그
            자체가 재밌고 즐기고 있습니다.
          </li>
          <li>
            <FontAwesomeIcon icon={faHammer} className="icon" />
            <HighlightText>UI/UX 개선</HighlightText>에 우선순위를 두고
            있습니다. 내가 스스로 즐기면서 완성한 서비스를 이용하는 다른
            사람들이 행복하고 즐겼으면 좋겠다고 생각합니다.
          </li>
          <li>
            <FontAwesomeIcon icon={faHammer} className="icon" />
            배움과 경험을 통해 단순한 기능 구현이 아닌{' '}
            <HighlightText>서비스 전체에 비즈니스 로직을 투영</HighlightText>
            하고자 노력하면서, 전체적인 구조에 대한 고민을 끊임없이 합니다.
          </li>
          <li>
            <FontAwesomeIcon icon={faHammer} className="icon" />
            상대방의 언어로 소통하는 것을 즐깁니다. 하나의 팀으로 일할 때
            상대방과의 원활한 소통으로 협업 능률을 높이고, 피드백을 받는 것을
            좋아합니다. 나아가{' '}
            <HighlightText>
              설명이 가능하고, 이해가 쉬운 코드를 작성
            </HighlightText>
            하는 것을 목표로 하고 있습니다.
          </li>
          <li>
            <FontAwesomeIcon icon={faHammer} className="icon" />
            <HighlightText>Figma, Notion</HighlightText> 등 다양한 Tool를
            활용하는 것을 즐겨 새로운 Tool 사용법을 빠르게 익힙니다.
          </li>
        </StyledList>
      </div>
    </Container>
  );
};

const StyledList = styled.ul`
  width: 60%;
  font-size: 1.25em;

  & .icon {
    margin-right: 1em;
  }

  & li {
    margin-bottom: 1em;
  }
`;
