import { BsLinkedin, BsGithub } from 'react-icons/bs';

const socialMedia = [
  {
    icon: <BsGithub />,
    url: 'https://github.com/DavidRecheni',
  },
  {
    icon: <BsLinkedin />,
    url: 'http://linkedin.com/in/david-recheni/',
  },
];

const ContactDataContainer = () => (
  <div className="flex gap-2 flex-row mt-1 sm:mt-0">
    {socialMedia.map((s) => (
      <a className="hover:text-blue-600" href={s.url} target="_blank" rel="noreferrer">
        <div className="font-medium flex items-center text-2xl sm:text-4xl">
          {s.icon}
        </div>
      </a>
    ))}

  </div>
);

export default ContactDataContainer;