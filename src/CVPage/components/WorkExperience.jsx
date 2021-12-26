import Header from '../../core/components/Header';
import TwoColsData from '../../core/components/TwoColsData';

const experience = [
  {
    time: '08/2021',
    place: 'Berlin, DE',
    institution: { name: 'Lhotse Technologies GmbH', link: 'https://www.lhotse.de/en/' },
    title: 'Lead Front-end Developer',
    description:
      '• Design and implement a new version of their MVP from scratch. • Hire a front-end team. • Perform code reviews and enforce high quality coding standards. • Improve user experience through UX Design.  • Stack: React, Tailwind, Eslint, React-query.'
    ,
  },
  {
    time: '08/2021',
    place: 'Berlin, DE',
    institution: { name: 'Lhotse Technologies GmbH', link: 'https://www.lhotse.de/en/' },
    title: 'Lead Front-end Developer',
    description: '• Design and implement a new version of their MVP from scratch. • Hire a front-end team. • Perform code reviews and enforce high quality coding standards. • Improve user experience through UX Design.  • Stack: React, Tailwind, Eslint, React-query.',
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
