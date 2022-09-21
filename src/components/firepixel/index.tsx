import Styles from './styles.scss';

type Props = {
  fireIntensity: number;
};

const FirePixel: React.FC<Props> = ({ fireIntensity }) => {
  return <div className={`${Styles.firePixel} ${Styles[fireIntensity]}`}></div>;
};

export default FirePixel;
