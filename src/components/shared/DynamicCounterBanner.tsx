
'use client';

import { useState, useEffect } from 'react';

const DynamicCounterBanner = () => {
  const [count, setCount] = useState(10563);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment by a small random number to look more natural
      setCount(prevCount => prevCount + Math.floor(Math.random() * 3) + 1);
    }, 2500); // Update every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D0D0D] border border-gray-700/50 rounded-md py-0.5 px-3 max-w-max mx-auto shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
      <p className="text-white text-xs font-sans text-center">
        <span className="sm:inline">Mais de{' '}</span>
        <span className="text-yellow-400 font-bold text-sm tracking-wide mx-0.5">
          {new Intl.NumberFormat('pt-BR').format(count)}
        </span>{' '}
        <span className="sm:inline">professores já adquiriram</span>
        <br className="sm:hidden" />
        <span className="sm:inline"> o Gêniozinho em Ação!</span>
      </p>
    </div>
  );
};

export default DynamicCounterBanner;
