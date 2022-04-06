import Header from '../../core/components/Header';

import data from '../CVData';

const AboutContainer = () => (
  <div className="flex flex-col">
    <Header>About me</Header>
    <div className="flex justify-start">
      <p className="max-w-prose text-justify text-sm sm:text-base">
        {data.about}
      </p>
    </div>
  </div>
);

export default AboutContainer;
