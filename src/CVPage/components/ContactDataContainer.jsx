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
    <div className="flex gap-2">
      {socialMedia.map((s) => (
        <div className="flex justify-start items-center">
          <a className="hover:text-blue-600" href={s.url} target="_blank" rel="noreferrer">
            <div className="font-medium flex items-center text-5xl">
              {s.icon}
            </div>
          </a>
        </div>
      ))}

    </div>
  );
}
