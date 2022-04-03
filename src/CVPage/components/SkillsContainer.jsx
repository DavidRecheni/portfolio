import { BsDot } from 'react-icons/bs';
import Header from '../../core/components/Header';

const skills = [
  'Scrum Alliance',
  'Ethers.js',
  'Express',
  'GIT',
  'GraphQL',
  'Mongodb',
  'Mongoose',
  'Node.js',
  'React',
  'React query',
  'REST',
  'SASS',
  'Solidity',
  'Tailwindcss',
  'Three.js',
  'Truffle',
  'Typescript',
  'Styled components',
  'Team management',
  'UX Design',
  'Web3.js',
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
