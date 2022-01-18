import { BsDot } from 'react-icons/bs';
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
    <div className="flex flex-col w-full ">
      <Header>Skillset</Header>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 my-2">
        {skills.sort().map((skill) => (
          <div key={skill} className="cursor-default text-sm sm:text-base flex items-center">
            <BsDot />
            <p className="text-xs sm:text-base">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
