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
    <article className={Styles.chimney}>
      <div className={Styles.chimneyTop}></div>
      <div className={Styles.chimneyTopRow}></div>
      <div className={Styles.chimneyTopRowDown}></div>

      <div className={Styles.chimneyDown}>
        <div className={Styles.chimneyRow1}></div>
        <div className={Styles.chimneyRow2}></div>

        <div className={Styles.chimneyDownWall}>
          <div className={Styles.firePixelContainer}>
            {fireTable.map((e, i) => (
              <FirePixel key={i} fireIntensity={e} />
            ))}
          </div>
        </div>

        <div className={Styles.chimneyRowDown}></div>
      </div>
    </article>
  );
};

export default App;
