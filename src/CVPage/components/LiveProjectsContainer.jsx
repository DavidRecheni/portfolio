import { BsGithub } from 'react-icons/bs';
import { Gi3DMeeple, GiCardJoker, GiDeathStar } from 'react-icons/gi';
import Header from '../../core/components/Header';

const Projects = [
  {
    icon: <GiCardJoker />,
    name: 'DavidRecheni.dev',
    url: 'https://davidrecheni.dev/',
    gitUrl: 'https://github.com/DavidRecheni/portfolio',
  },
  {
    icon: <GiDeathStar />,
    name: 'Star wars force graph',
    url: 'https://sw-forcegraph.netlify.app/',
    gitUrl: 'https://github.com/DavidRecheni/SW-Force-Graph',
  },
  {
    icon: <Gi3DMeeple />,
    name: '3d viewer',
    url: 'http://simple-react-three-viewer.netlify.app/',
    gitUrl: 'https://github.com/DavidRecheni/react-3d-viewr',
  },
];

export default function LiveProjectsContainer() {
  return (
    <div className="flex flex-col w-full ml-4 sm:ml-0 gap-y-1">
      <Header>Live projects</Header>
      {Projects.map((proj) => (
        <div
          className="flex justify-between"
          key={proj.name}
        >
          <a
            href={proj.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline flex items-center gap-2 underline-offset-1  hover:text-blue-600"
          >
            <p className="sm:text-2xl">{proj.icon}</p>
            <p className="sm:text-lg">{proj.name}</p>
          </a>
          <a
            href={proj.gitUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline flex items-center gap-2 underline-offset-1 sm:text-lg hover:text-blue-600"
          >
            <BsGithub />
          </a>

        </div>
      ))}
    </div>
  );
}
