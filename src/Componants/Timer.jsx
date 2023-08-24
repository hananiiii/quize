import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(null); // State variable for the timer

  const start = () => {
    setSeconds(0);
    setMinutes(0);

    setTimer(
      setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000)
    );
  };

  const stop = () => {
    clearInterval(timer); // Clear the interval using the timer state variable
    setTimer(null); // Reset the timer state variable
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <div className='flex justify-center'>
      <div className='border border-Orange rounded-lg  px-24 py-8'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className=' font-bold text-4xl text-gray-800'>Timer</h1>
          <p className='text-lg font-medium text-gray-400'>Before you start the quize turn on the timer</p>
          <h1 className='font-bold text-2xl text-gray-400'>
            {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </h1>
          <div className='flex flex-row gap-6'>
          <button className='rounded-sm px-8 py-3 text-white bg-Orange hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300 ' onClick={start}>Start</button>
          <button className='rounded-sm px-8 py-3 text-white bg-Orange hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300' onClick={stop}>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
