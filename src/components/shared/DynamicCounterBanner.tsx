'use client';

import { useState, useEffect } from 'react';

const DynamicCounterBanner = () => {
  const [count, setCount] = useState(10247);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment by a small random number to look more natural
      setCount(prevCount => prevCount + Math.floor(Math.random() * 3) + 1);
    }, 2500); // Update every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D0D0D] border border-gray-700 rounded-xl py-6 px-4 sm:px-8 max-w-3xl mx-auto mb-16 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <p className="text-white text-xl md:text-2xl font-sans text-center">
        Mais de{' '}
        <span className="text-yellow-400 font-bold text-2xl md:text-3xl tracking-wide mx-1">
          {new Intl.NumberFormat('pt-BR').format(count)}
        </span>{' '}
        professores já adquiriram o Gêniozinho em Ação!
      </p>
    </div>
  );
};

export default DynamicCounterBanner;
