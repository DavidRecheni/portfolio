import picture from '../assets/profile-pic.jpg';
import AboutContainer from './components/AboutContainer';
import CertificatesContainer from './components/CertificatesContainer';
import ContactDataContainer from './components/ContactDataContainer';
import EducationContainer from './components/EducationContainer';
import LanguagesContainer from './components/LanguagesContainer';
import SkillsContainer from './components/SkillsContainer';
import WorkExperience from './components/WorkExperience';

export default function CVPage() {
  return (
    <div className="w-6/12 my-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-5xl font-bold">David Recheni</div>
          <div className="text-xl mt-2">
            Multimedia Designer /
            {' '}
            <strike>Full-stack</strike>
            {' '}
            Front-end Developer
          </div>
        </div>

        <ContactDataContainer />

      </div>

      <div className="border-b-4 border-black my-4" />

      {/* Body */}
      <div className="flex gap-14">
        <div className="flex w-4/12 flex-col gap-y-2">
          <img src={picture} alt="Me" className="w-full" />
          <SkillsContainer />
          <LanguagesContainer />
          <CertificatesContainer />
        </div>

        <div className="flex flex-col flex-grow">
          <AboutContainer />
          <WorkExperience />
          <EducationContainer />
        </div>

      </div>
    </div>
  );
}
