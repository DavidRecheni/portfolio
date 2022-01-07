import Header from '../../core/components/Header';

const skills = [
  'Agile methodologies',
  'GIT',
  'GraphQL',
  'Material UI',
  'Mongo / Mongoose',
  'NodeJS + Express',
  'ReactJS',
  'REST APIs',
  'SCSS',
  'Tailwind',
  'Typescript',
  'Styled components',
  'Team managment',
  'UX Design',
];

export default function SkillsContainer() {
  return (
    <>
      <Header>Skillset</Header>
      {skills.sort().map((skill) => <div key={skill}>{skill}</div>)}
    </>
  );
}
