import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function ContactDataContainer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center">
        <a className="hover:border-b border-gray-500" href="https://github.com/DavidRecheni" target="_blank" rel="noreferrer">
          <div className="font-medium flex items-center gap-2">
            <BsGithub />
            {' '}
            Github
          </div>
        </a>
      </div>
      <div className="flex justify-start items-center">
        <a className="hover:border-b border-gray-500" href="http://linkedin.com/in/david-recheni/" target="_blank" rel="noreferrer">
          <div className="font-medium flex items-center gap-2">
            <BsLinkedin />
            {' '}
            Linkedin
          </div>
        </a>
      </div>
    </div>
  );
}
