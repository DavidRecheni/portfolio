import { useEffect } from 'react';
import CVPage from './CVPage/CVPage';

const App = () => {
  useEffect(() => {
    console.warn('It is rude to look under the hood!');
  }, []);

  return (
    <div className="w-[99vw] h-full dark:bg-[#0d1117]">
      <div className="w-full h-full flex justify-center relative ">
        <CVPage />
      </div>
    </div>
  );
};

export default App;
