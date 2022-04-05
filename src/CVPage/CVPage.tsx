import { motion } from 'framer-motion';
import picture from '../assets/profile-pic.jpg';
import ToggleDarkMode from '../core/components/ToggleDarkMode';
import AboutContainer from './components/AboutContainer';
import CertificatesContainer from './components/CertificatesContainer';
import ContactDataContainer from './components/ContactDataContainer';
import EducationContainer from './components/EducationContainer';
import GithubStats from './components/GithubStats';
import LanguagesContainer from './components/LanguagesContainer';
import LiveProjectsContainer from './components/LiveProjectsContainer';
import SkillsContainer from './components/SkillsContainer';
import WorkExperience from './components/WorkExperience';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const CVPage = () => (
  <div className="max-w-4xl my-2 sm:my-8 px-4 dark:text-gray-200">

    {/* Header */}
    <div className="flex justify-between items-center">
      <div>
        <div className="text-3xl sm:text-5xl font-bold dark:text-white">David Recheni</div>
        <div className="text-sm sm:text-xl mt-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="dark:font-handwritten sm:dark:-mb-2 dark:-mb-1 sm:dark:text-2xl dark:text-yellow-300">
              Multimedia Designer
            </p>
            /
            <p className="flex">
              <del className="mr-1 hidden sm:block">Full-stack</del>
              Front-end Developer
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 items-end">
        <ToggleDarkMode />
        <ContactDataContainer />
      </div>

    </div>

    <div className="border-b-4 border-black dark:border-white my-4" />

    {/* Body */}
    <div className="flex gap-6 flex-col sm:flex-row">
      <div className="flex w-fit sm:w-4/12 flex-col gap-y-2">
        <div className="flex sm:flex-col w-full">
          <motion.div className="max-w-[30%] h-auto sm:max-w-none flex items-center " layout transition={spring}>
            <img src={picture} alt="Me" />
          </motion.div>
          <LiveProjectsContainer />
        </div>
        <SkillsContainer />
        <LanguagesContainer />
        <CertificatesContainer />
      </div>

      <div className="flex flex-col flex-grow">
        <AboutContainer />
        <GithubStats />
        <WorkExperience />
        <EducationContainer />
      </div>

    </div>
  </div>
);

export default CVPage;
