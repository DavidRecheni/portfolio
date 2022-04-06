import Header from '../../core/components/Header';
import TwoColsData from '../../core/components/TwoColsData';

import data from '../CVData';

const EducationContainer = () => (
  <div>
    <Header>Education</Header>
    <TwoColsData data={data.studies} />
  </div>
);

export default EducationContainer;
