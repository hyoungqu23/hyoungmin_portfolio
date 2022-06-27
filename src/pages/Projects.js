import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Container from '../styles/Container';

export const Projects = () => {
  const projects = [
    {
      title: 'Collector’s',
      date: '2022-05-23 ~ 2022-06-05',
      summary:
        '사람들은 가끔씩 강력한 힘을 가지거나 천재적인 두뇌를 보유하여 자신의 이름을 세상에 남길만한 업적을 이루는 것을 상상하곤 합니다. 수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰, Collector’s에 방문해보세요!',
      stacks: ['HTML/CSS', 'JavaScript', 'Express.js', 'MongoDB', 'Amazon S3'],
      link: 'URL1',
      description: [
        '쇼핑몰 서비스의 프론트엔드 파트를 담당했습니다.',
        '홈 화면과 유저 정보 페이지, 상품 목록 페이지를 구현하고, 반응형 웹 디자인을 추가했습니다.',
        'UX 개선을 위한 최근 본 상품 목록 기능, 매진 임박 상품 알림 기능을 추가했습니다.',
        '비즈니스 측면에서 소비자 구매 유도를 위한 유저 Stat UI를 구현했습니다.',
        'ES6 문법에 익숙해지기 위해 활용했습니다.',
        'Figma를 활용해 와이어프레임과 프로토타입을 제작했습니다.',
        'fetch API를 활용해 비동기적으로 서버와 통신하여 데이터를 가져와 UI를 구현했습니다.',
        '백엔드 개발자와 api 등 필요한 명세에 관한 문서화를 기반으로 원활히 소통하면서 협업에서의 문서화와 소통의 중요성을 깨달았습니다.',
      ],
      posts: ['블로그 1', '블로그 2'],
    },
    {
      title: 'Hyoungmin Portfolio',
      date: '2022-06-25 ~ 2022-06-27',
      summary: 'React.js로 만든 이력서 겸 포트폴리오 사이트입니다.',
      stacks: ['React.js', 'styled-component'],
      link: 'URL2',
      description: [
        'React.js를 활용해 포트폴리오 사이트를 구현했습니다.',
        'Components에 대해 이해했습니다.',
        'React.js 개발 디렉토리 구조, 경로 문제, Components 등을 이해하고 구현할 수 있습니다.',
        'CSS-in-JS를 이해하고 Styled-Component를 활용해 스타일링할 수 있습니다.',
      ],
      posts: ['블로그 1', '블로그 2'],
    },
    {
      title: 'Knowledgetory',
      date: '2022-06-20 ~ 미완',
      summary:
        '좋은 아이디어를 생산하는 첫 번째 단계는 문제와 관련된 자료뿐만 아니라 수많은 일반적인 지식 모두를 풍부하게 수집해야 한다는 것이다.',
      stacks: ['React.js', 'styled-component'],
      link: 'URL2',
      description: [
        'React.js를 활용해 구현했습니다.',
        'Components에 대해 이해했습니다.',
        'React.js 개발 디렉토리 구조, 경로 문제, Components 등을 이해하고 구현할 수 있습니다.',
        'CSS-in-JS를 이해하고 Styled-Component를 활용해 스타일링할 수 있습니다.',
      ],
      posts: ['블로그 1', '블로그 2'],
    },
    {
      title: 'Mini-Log',
      date: '2022-04-04 ~ 미완',
      summary: '배움과 경험을 기록하기 위한 블로그입니다.',
      stacks: ['React.js', 'Gastby.js', 'styled-component'],
      link: 'URL2',
      description: ['React.js 기반 Gatsby.js를 활용했습니다.'],
      posts: ['블로그 1', '블로그 2'],
    },
  ];

  return (
    <Container id="projects">
      <div>
        {projects.map(
          ({ title, date, stacks, summary, link, description, posts }) => {
            return (
              <StyledWrapper className="center">
                <h1>{title}</h1>
                <div className="date">{date}</div>
                <div className="link">
                  <FontAwesomeIcon icon={faLink} className="icon" />
                  {link}
                </div>
                <div className="summary">{summary}</div>
                <div className="flex center skills">
                  {stacks.map((item) => (
                    <div>{item}</div>
                  ))}
                </div>
                <div className="flex center descriptions">
                  {description.map((item) => (
                    <div>{item}</div>
                  ))}
                </div>
                <div className="flex center posts">
                  {posts.map((item) => (
                    <div>{item}</div>
                  ))}
                </div>
              </StyledWrapper>
            );
          },
        )}
      </div>
    </Container>
  );
};

const StyledWrapper = styled.div`
  padding-top: 2em;

  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15))
    drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
`;
