import { useEffect } from 'react';
import CVPage from './CVPage/CVPage';

export default function App() {
  useEffect(() => {
    console.warn('It is rude to look under the hood!');
  }, []);
  return (
    <div className="w-full h-full flex justify-center">
      <CVPage />
    </div>
  );
}
