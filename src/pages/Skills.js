import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  const skilllists = [
    {
      title: 'HTML5',
      level: 5,
      description: 'Semantic Web을 다룹니다. 등등 설명',
      icon: faLink,
    },
    {
      title: 'CSS3',
      level: 7,
      description: 'Semantic Web을 다룹니다. 등등 설명',
      icon: faLink,
    },
    {
      title: 'JavaScript',
      level: 4,
      description: 'Semantic Web을 다룹니다. 등등 설명',
      icon: faLink,
    },
    {
      title: 'React.js',
      level: 4,
      description: 'Semantic Web을 다룹니다. 등등 설명',
      icon: faLink,
    },
  ];

  return (
    <section>
      {skilllists.map(({ title, level, description, icon }) => {
        return (
          <div>
            <FontAwesomeIcon icon={icon} className="icon" />
            <h3>{title}</h3>
            <p>level: {level}</p>
            <p>description: {description}</p>
          </div>
        );
      })}
    </section>
  );
};
