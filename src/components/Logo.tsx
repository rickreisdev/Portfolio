import { useEffect, useState } from 'react';

const frameModules = import.meta.glob('../assets/SVGs/LogoFrames/frame*.svg', {
  eager: true,
  import: 'default',
});

const sortedFrames = Object.entries(frameModules)
  .sort(([a], [b]) => {
    const getNumber = (filename: string) =>
      Number(filename.match(/frame(\d+)\.svg$/)?.[1] || 0);
    return getNumber(a) - getNumber(b);
  })
  .map(([, path]) => path as string);

const LogoAnimated = () => {
  const [index, setIndex] = useState(sortedFrames.length - 1); // Começa no último frame
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let i = 0;
    const interval = setInterval(() => {
      setIndex(i);
      i++;
      if (i >= sortedFrames.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 60); // ajuste de velocidade

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleHover = () => {
    if (!isAnimating) {
      setIsAnimating(true);
    }
  };

  return (
    <img
      src={sortedFrames[index]}
      alt="Logo animado"
      style={{ objectFit: 'contain', cursor: 'pointer' }}
      onMouseEnter={handleHover}
      className='portfolio-logo'
    />
  );
};

export default LogoAnimated;
