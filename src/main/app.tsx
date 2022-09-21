import FirePixel from '@/components/firepixel';

const App: React.FC = () => {
  return (
    <>
      <FirePixel fireIntensity={23} />
      <FirePixel fireIntensity={15} />
      <FirePixel fireIntensity={8} />
      <FirePixel fireIntensity={11} />
    </>
  );
};

export default App;
