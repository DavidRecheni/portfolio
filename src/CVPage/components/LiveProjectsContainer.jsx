import { Gi3DMeeple, GiCardJoker, GiDeathStar } from 'react-icons/gi';
import Header from '../../core/components/Header';

const Projects = [
  {
    icon: <GiCardJoker />,
    name: 'DavidRecheni.dev',
    url: 'https://davidrecheni.dev/',
  },
  {
    icon: <GiDeathStar />,
    name: 'Star wars force graph',
    url: 'https://sw-forcegraph.netlify.app/',
  },
  {
    icon: <Gi3DMeeple />,
    name: '3d viewer',
    url: 'http://simple-react-three-viewer.netlify.app/',
  },
];

export default function LiveProjectsContainer() {
  return (
    <>
      <Header>Live projects</Header>
      {Projects.map((proj) => (
        <a
          href={proj.url}
          target="_blank"
          key={proj.name}
          rel="noreferrer"
          className="font-medium underline flex items-center gap-2 underline-offset-1 hover:text-blue-600"
        >
          {proj.icon}
          {proj.name}
        </a>
      ))}
    </>
  );
}
