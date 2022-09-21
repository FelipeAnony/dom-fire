import { colorsPalette } from '@/utils/colors';

import Styles from './styles.scss';

type Props = {
  fireIntensity: number;
};

const FirePixel: React.FC<Props> = ({ fireIntensity }) => {
  const color = colorsPalette[fireIntensity];

  return (
    <div
      className={Styles.firePixel}
      style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
    ></div>
  );
};

export default FirePixel;
