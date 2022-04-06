import Header from '../../core/components/Header';
import TwoColsData from '../../core/components/TwoColsData';
import data from '../CVData';

const WorkExperience = () => (
  <div>
    <Header> Work experience </Header>
    <TwoColsData data={data.experience} />
  </div>
);

export default WorkExperience;
