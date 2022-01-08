import Header from '../../core/components/Header';

const skills = [
  'Agile methodologies',
  'GIT',
  'GraphQL',
  'Material UI',
  'Mongo / Mongoose',
  'NodeJS + Express',
  'React@17',
  'React-query',
  'REST APIs',
  'SCSS',
  'Tailwind',
  'ThreeJs',
  'Typescript',
  'Styled components',
  'Team managment',
  'UX Design',
];

export default function SkillsContainer() {
  return (
    <>
      <Header>Skillset</Header>
      {skills.sort().map((skill) => <div key={skill} className="cursor-default">{skill}</div>)}
    </>
  );
}
