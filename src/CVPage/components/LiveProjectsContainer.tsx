import { BsGithub } from 'react-icons/bs';
import Header from '../../core/components/Header';
import data from '../../config/CVData';

const LiveProjectsContainer = () => (
  <div className="flex flex-col w-full ml-4 sm:ml-0 gap-y-1">
    <Header>Live projects</Header>
    {data.projects.map((proj) => (
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
          <p className="sm:text-2xl">{proj.icon({})}</p>
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

export default LiveProjectsContainer;
