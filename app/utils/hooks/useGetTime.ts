import { useState, useEffect } from 'react';

export const useGetTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('sv-SE'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('sv-SE'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { time } as const;
};
