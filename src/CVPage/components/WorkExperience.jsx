import Header from '../../core/components/Header';
import TwoColsData from '../../core/components/TwoColsData';

const experience = [
  {
    date: { start: '08/2021', end: 'Current' },
    place: 'Berlin, DE',
    institution: { name: 'Lhotse Technologies GmbH', link: 'https://www.lhotse.de/en/' },
    title: 'Lead Front-end Developer',
    stack: 'React, Tailwind, Eslint, React-query, Storybooks',
    description:
      '• Design and implement a new version of their MVP from scratch . • Delegate tasks and control progress • Perform code reviews and enforce high quality coding standards. • Built a front-end team. • Mentor Front-end devs • Validate UX Design decisions and propose solutions. '
    ,
  },
  {
    date: { start: '03/2020', end: '08/2021' },
    place: 'Berlin, DE',
    institution: { name: 'Facturee CWMK GmbH', link: 'https://www.facturee.de/' },
    title: 'Senior Full-Stack Developer',
    stack: 'ReactJS, Styled-components, Storybooks /  Angular, Bootstrap, Parse Server',
    description: '• Develop micro-frontend tools for company suppliers (ReactJS) • Expand and maintain employee app (Angular). • Company Hardware maintainance. • Mentor dev intern. • Help ideate and create creative solutions to company problems. • UX / UI Designer',
  },
  {
    date: { start: '12/2018', end: '03/2020' },
    place: 'La Plata, ARG',
    institution: { name: 'Avanade', link: 'https://www.avanade.com/' },
    title: 'Lead Full-Stack Developer',
    stack: 'AngularJS, NodeJS, Bootstrap, .NET',
    description: '• Develop web-apps in a very fast moving enviroment • Perform code reviews and enforce high quality coding standards. • Delegate tasks and control progress • Mentor new joiners  • Help the team implement SCRUM     ',
  },
  {
    date: { start: '06/2018', end: '12/2018' },
    place: 'La Plata, ARG',
    institution: { name: 'Avanade', link: 'https://www.avanade.com/' },
    title: 'Sr Full-Stack Developer',
    stack: 'AngularJS, NodeJS, Bootstrap, .NET',
    description: '• Develop web-apps in a very fast moving enviroment • Mentor new joiners',
  },
];

export default function WorkExperience() {
  return (
    <div>
      <Header> Work experience </Header>
      <TwoColsData data={experience} />
    </div>
  );
}
