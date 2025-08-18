
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
    <div className="bg-[#0D0D0D] border border-gray-700/50 rounded-lg py-4 px-4 sm:px-6 max-w-3xl mx-auto shadow-md transform hover:scale-[1.01] transition-transform duration-300">
      <p className="text-white text-lg md:text-xl font-sans text-center">
        Mais de{' '}
        <span className="text-yellow-400 font-bold text-xl md:text-2xl tracking-wide mx-1">
          {new Intl.NumberFormat('pt-BR').format(count)}
        </span>{' '}
        professores já adquiriram o Gêniozinho em Ação!
      </p>
    </div>
  );
};

export default DynamicCounterBanner;

    