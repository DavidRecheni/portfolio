import Header from '../../core/components/Header';
import TwoColsData from '../../core/components/TwoColsData';

const studies = [
  {
    date: { start: '', end: '' },
    place: 'La Plata, ARG',
    institution: { name: 'Universidad Nacional de La Plata', link: 'https://unlp.edu.ar/' },
    title: 'Lic. Multimedia Design',
    stack: '5 years',
    description:
      'Five-year studies where I learned about Aesthetics, UX / UI and front-end development. It also enabled me to develop my knowledge in IoT and electronics through Processing and Arduino.'
    ,
  },
  {
    date: { start: '', end: '' },
    place: 'Trelew, ARG',
    institution: { name: 'Universidad Nacional de la Patagonia', link: 'http://www.unp.edu.ar/' },
    title: 'Lic. Computer Science',
    stack: '5 years (incomplete)',
    description: 'While studying here I learn the computer science lower levels, like to code Assembler and how a microprocessor works internally. After studying for two years I dropped out because I had to move to a different city, La Plata',
  },
  {
    date: { start: '', end: '' },
    place: 'Trelew, ARG',
    institution: { name: 'Colegio 724', link: 'https://www.facebook.com/esetp724/' },
    title: 'IT Technician',
    stack: '3 years',
    description: 'Three-year studies where I learned about basic electronics and how to code HTML/CSS, PHP, C and VB.',
  },
];

const EducationContainer = () => (
  <div>
    <Header>Education</Header>
    <TwoColsData data={studies} />
  </div>
);

export default EducationContainer;
