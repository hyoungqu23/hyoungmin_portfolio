import TypeAnimation from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
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
