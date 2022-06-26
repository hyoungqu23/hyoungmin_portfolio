export const Projects = () => {
  const projects = [
    {
      title: '플젝 이름1',
      date: '플젝 기간1',
      summary: '짧은 설명1',
      type: 'team',
      link: 'URL1',
      description: [
        '한 일에 대한 설명',
        '한 일에 대한 설명',
        '한 일에 대한 설명',
      ],
      posts: ['블로그 연동', '블로그 연동'],
    },
    {
      title: '플젝 이름2',
      date: '플젝 기간2',
      summary: '짧은 설명2',
      type: 'team',
      link: 'URL2',
      description: [
        '한 일에 대한 설명',
        '한 일에 대한 설명',
        '한 일에 대한 설명',
      ],
      posts: ['블로그 연동', '블로그 연동'],
    },
  ];

  return (
    <section>
      <div>
        {projects.map(({ title, date, summary, link, description, posts }) => {
          return (
            <div>
              {title}
              {date}
              {summary}
              {link}
              {description.map((item) => (
                <div>{item}</div>
              ))}
              {posts.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
