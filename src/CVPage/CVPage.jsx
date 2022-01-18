import picture from '../assets/profile-pic.jpg';
import AboutContainer from './components/AboutContainer';
import CertificatesContainer from './components/CertificatesContainer';
import ContactDataContainer from './components/ContactDataContainer';
import EducationContainer from './components/EducationContainer';
import LanguagesContainer from './components/LanguagesContainer';
import LiveProjectsContainer from './components/LiveProjectsContainer';
import SkillsContainer from './components/SkillsContainer';
import WorkExperience from './components/WorkExperience';

export default function CVPage() {
  return (
    <div className="max-w-4xl my-2 sm:my-8 px-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-3xl sm:text-5xl font-bold">David Recheni</div>
          <div className="text-sm sm:text-xl mt-2">
            <p>
              Multimedia Designer /
              <strike className="mr-1">Full-stack</strike>
              Front-end Developer
            </p>
          </div>
        </div>

        <ContactDataContainer />

      </div>

      <div className="border-b-4 border-black my-4" />

      {/* Body */}
      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="flex w-fit sm:w-4/12 flex-col gap-y-2">
          <div className="flex sm:flex-col w-full">
            <img src={picture} alt="Me" className="max-w-[30%] sm:max-w-none" />
            <LiveProjectsContainer />
          </div>
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
