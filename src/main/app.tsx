import { useEffect, useState } from 'react';

import {
  calculateFirePropagation,
  createFirePixelArray,
} from '@/controllers/fireController';

import FirePixel from '@/components/firepixel';

import Styles from '../styles/app.scss';

const App: React.FC = () => {
  const [fireTable, setfireTable] = useState(createFirePixelArray());

  useEffect(() => {
    setInterval(() => {
      setfireTable((state) => calculateFirePropagation(state));
    }, 80);
  }, []);

  return (
    <div className={Styles.firePixelContainer}>
      {fireTable.map((e, i) => (
        <FirePixel key={i} fireIntensity={e} />
      ))}
    </div>
  );
};

export default App;
