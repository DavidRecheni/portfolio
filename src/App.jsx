import { useEffect, useState } from 'react';
import CVPage from './CVPage/CVPage';

export default function App() {
  const [isDarkMode, setDarkMode] = useState();

  useEffect(() => {
    console.warn('It is rude to look under the hood!');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <div className="w-screen h-full dark:bg-slate-800">
      <div className="w-full h-full flex justify-center relative ">
        <button
          type="button"
          onClick={() => setDarkMode((current) => !current)}
          className="absolute top-0 right-0"
        >
          {isDarkMode ? 'Light' : 'Dark' }
        </button>
        <CVPage />
      </div>
    </div>
  );
}
