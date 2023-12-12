import { hourglass } from 'ldrs';
import { useEffect } from 'react';

export const Loader = () => {
  useEffect(() => {
    hourglass.register(); // Default values
  }, []);
  return (
    // Default values shown
    <div
      style={{ background: 'rgba(0, 0, 0, .1)' }}
      className="w-full fixed top-0 bottom-0 left-0 right-0 gap-1 flex flex-col items-center justify-center "
    >
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-hourglass>
      Cargando
    </div>
  );
};
