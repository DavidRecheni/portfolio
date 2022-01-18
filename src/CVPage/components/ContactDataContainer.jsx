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

export default function ContactDataContainer() {
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      {socialMedia.map((s) => (
        <a className="hover:text-blue-600" href={s.url} target="_blank" rel="noreferrer">
          <div className="font-medium flex items-center text-4xl sm:text-5xl">
            {s.icon}
          </div>
        </a>
      ))}

    </div>
  );
}
